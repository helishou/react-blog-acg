import {combineReducers} from 'redux-immutable';
import {reducer as headerReducer} from "../components/Header/store";
import {reducer as homeReducer} from '../pages/home/store';

const image = () => {
    return {
        //列表页随机封面图
        ListImg: [
            {img: 'https://image.bygit.cn/list_01.png'},
            {img: 'https://image.bygit.cn/list_02.png'},
            {img: 'https://image.bygit.cn/list_03.png'},
            {img: 'https://image.bygit.cn/list_04.png'},
            {img: 'https://image.bygit.cn/list_05.png'},
            {img: 'https://image.bygit.cn/list_06.png'},
            {img: 'https://image.bygit.cn/list_07.png'},
            {img: 'https://image.bygit.cn/list_08.png'},
            {img: 'https://image.bygit.cn/list_09.png'},
            {img: 'https://image.bygit.cn/list_10.png'},
            {img: 'https://image.bygit.cn/list_11.png'},
            {img: 'https://image.bygit.cn/list_12.png'},
            {img: 'https://image.bygit.cn/list_13.png'},
            {img: 'https://image.bygit.cn/list_14.png'}
        ],
        //首页banner图和内页顶部头图
        bannerList: [
            // {img: 'https://image.bygit.cn/banner-1.png'},
            // {img: 'https://image.bygit.cn/banner-2.png'},
            {img: 'https://image.bygit.cn/banner-3.png'},
            {img: 'https://image.bygit.cn/banner-4.png'},
            {img: 'https://i.postimg.cc/08CXj9N1/362e3fc0bb57fcc0cef6e4d73f0856f1-jpg.webp'},
            {img: 'https://i.postimg.cc/dQcFFqNP/speed-of-light-COVER-77987370-p1-png.webp'},
            {img: 'https://i.postimg.cc/59rwyRvV/78b1d42bf01a216ea8cea9569fe68da5-jpg.webp'},
            // {img: 'https://api.2heng.xin/cover/'}
        ],
    }
};

const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    image: image
});

export default reducer
