/*
 * @Author       : helishou
 * @Date         : 2021-05-30 14:44:09
 * @LastEditTime : 2021-08-18 19:11:03
 * @LastEditors  : helishou
 * @Description  : 
 * @FilePath     : \src\components\Header\store\reducer.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
import * as constants from './constants';
import {fromJS} from 'immutable';

const defaultState = fromJS({
    category: [],
    userInfo: {},
    confing: {}
});

//immutable对象的set方法，会结合之前的immutable对象的值和设置的值，返回一个全新的对象
const headReducer= (state = defaultState, action) => {
    switch (action.type) {
        case constants.GET_CATEGORY:
            return state.merge({
                category: action.data
            });
        case constants.GET_USER:
            return state.merge({
                userInfo: action.data
            });
        case constants.GET_CONFING:
            return state.merge({
                confing: action.data
            });
        default:
            return state;
    }
}
export default headReducer
