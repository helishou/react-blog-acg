/*
 * @Author       : helishou
 * @Date         : 2021-05-24 09:00:06
 * @LastEditTime : 2021-08-13 00:22:45
 * @LastEditors  : helishou
 * @Description  : store
 * @FilePath     : \src\store\reducer.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
import {combineReducers} from 'redux-immutable';
import {reducer as headerReducer} from "../components/Header/store";
import {reducer as homeReducer} from '../pages/home/store';
import {reducer as articalReducer} from '../pages/article/store';
const image = () => {
    return {
        //列表页随机封面图
        ListImg: [
            {img: 'https://api.2heng.xin/cover/'},
        ],
        //首页banner图和内页顶部头图
        bannerList: [
            // {img: 'https://image.bygit.cn/banner-1.png'},
            // {img: 'https://image.bygit.cn/banner-2.png'},
            // {img: 'https://image.bygit.cn/banner-3.png'},
            // {img: 'https://image.bygit.cn/banner-4.png'},
            {img: '/assets/362e3fc0bb57fcc0cef6e4d73f0856f1.jpg.webp'},
            {img: '/assets/d8c29cad010447a75b0eaae4513f3780.jpg.webp'},
            // {img: '/assets/[speed of light] COVER_77987370_p1.png.webp'},
            {img: '/assets/78b1d42bf01a216ea8cea9569fe68da5.jpg.webp'},
            {img: '/assets/AK-01.jpg.webp'},
            {img: 'https://api.2heng.xin/cover/'}
        ],
    }
};
//传入一个对象
const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    image: image,
    artical:articalReducer
});

export default reducer
