/*
 * @Author       : helishou
 * @Date         : 2021-05-24 09:00:06
 * @LastEditTime : 2021-09-13 18:40:28
 * @LastEditors  : helishou
 * @Description  : 
 * @FilePath     : \src\index.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './config/axios.config';

const rootNode=document.getElementById('root')
ReactDOM.render(<App/>, rootNode);
