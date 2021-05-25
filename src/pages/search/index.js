import React, {PureComponent} from "react";
import {connect} from "react-redux";
import axios from "axios";
import {SearchWrapper, MainWrapper} from './style';
import CatList from "../../components/List";
import PagInation from '../../components/PagInation';

class Search extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            key: props.match.params.key,
            finished: false,
            loading: true,
            page: 1,
            list: []
        };
        this.getList = this.getList.bind(this);
    }

    render() {
        const {list, page, finished, loading, key} = this.state;
        return (
            <SearchWrapper>
                <div className='pattern-center-blank'/>
                <MainWrapper>
                    <header className="page-header">
                        <h1 className="page-title">{`搜索结果：${key}`}</h1>
                    </header>
                    <CatList list={list}/>
                    <PagInation page={page} id={key} finished={finished} loading={loading} getList={this.getList}/>
                </MainWrapper>
            </SearchWrapper>
        )
    }

    componentDidMount() {
        this.getList(1, this.state.key, true);
    }

    getList(page, key, override) {
        this.setState({loading: true});
        axios.get('/getArticleList', {
            params: {
                pageNum: page,
                pageSize: 10,
                keyword: key
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
                        list: override ? arr : [...prevState.list, ...arr],
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

    getrand(m, n) {
        return Math.floor(Math.random() * (n - m + 1)) + m;
    };
}

const mapState = (state) => {
    return {
        ListImg: state.getIn(['image', 'ListImg'])
    }
};

export default connect(mapState)(Search)
