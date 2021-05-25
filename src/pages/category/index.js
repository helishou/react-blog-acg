import React, {PureComponent} from "react";
import {CategoryArticleWrapper, ArticleTop, MainWrapper} from './style';
import {connect} from 'react-redux';
import axios from "axios";
import CatList from "../../components/List";
import PagInation from '../../components/PagInation';

class Category extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            timg: '',
            id: props.match.params.id,
            finished: false,
            loading: true,
            page: 1,
            CategoryList: []
        };
        this.getList = this.getList.bind(this);
    }

    render() {
        const {category} = this.props;
        const {CategoryList, page, finished, loading, id} = this.state;
        return (
            <CategoryArticleWrapper>
                <div className='pattern-center-blank'/>
                <ArticleTop>
                    <div className='pattern-attachment-img'>
                        <img className='lazyload' src={this.state.timg} alt=""/>
                    </div>
                    <div className='pattern-header '>
                        <h1>{this.setCategory(category)}</h1>
                    </div>
                </ArticleTop>
                <MainWrapper>
                    <header className="page-header">
                        <h1 className="page-title">{`分类 “${this.setCategory(category)}” 下的文章`}</h1>
                    </header>
                    <CatList list={CategoryList}/>
                    <PagInation page={page} id={id} finished={finished} loading={loading} getList={this.getList}/>
                </MainWrapper>
            </CategoryArticleWrapper>
        )
    }

    componentDidMount() {
        this.getList(1, this.state.id, true);
        this.getTimg();
    }

    getList(page, id, override) {
        this.setState({loading: true});
        axios.get('/getArticleList?state=1', {
            params: {
                pageNum: page,
                pageSize: 10,
                category_id: id
            }
        }).then((res) => {
            if (res.code === 0) {
                let current = page * 10;
                let total = res.data.count;
                const data = res.data.list;
                const Img = this.props.ListImg;
                let arr = [];
                for (let i = 0; i < data.length; i++) {
                    arr.push({
                        id: data[i]._id,
                        title: data[i].title,
                        thumbnail: data[i].img_url || Img[this.getrand(0, Img.length - 1)].img,
                        comments: data[i].meta.comments,
                        status: data[i].status||2,
                        summary: data[i].desc,
                        views: data[i].meta.views,
                        createTime: data[i].create_time,
                        syncStatus: data[i].syncStatus||1,
                        author: data[i].author||'helishou',
                        categoryName: data[i].category[0]
                    })
                }
                this.setState((prevState) => {
                    return {
                        CategoryList: override ? arr : [...prevState.CategoryList, ...arr],
                        page: page + 1,
                        loading: false
                    }
                });
                if (current > total) {
                    this.setState({
                        finished: true
                    })
                }
            }
        });
    }

    getTimg() {
        const list = this.props.topImg;
        const num = this.getrand(0, list.length - 1);
        this.setState({timg: list[num].img})
    }

    getrand(m, n) {
        return Math.floor(Math.random() * (n - m + 1)) + m;
    }

    setCategory(category) {
        const id = this.props.match.params.id;
        let Text = '';
        const list = category.toJS();
        list.forEach((item) => {
            if (!Text && item.id === id) {
                Text = item.name;
            }
        });
        return Text;
    }
}

const mapState = (state) => {
    return {
        category: state.getIn(['header', 'category']),
        topImg: state.getIn(['image', 'bannerList']),
        ListImg: state.getIn(['image', 'ListImg']),
    }
};

export default connect(mapState)(Category)
