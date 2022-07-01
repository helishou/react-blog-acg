/*
 * @Author       : helishou
 * @Date         : 2021-05-24 09:00:06
 * @LastEditTime : 2021-06-15 16:00:59
 * @LastEditors  : helishou
 * @Description  : 文章目录
 * @FilePath     : d:\desk\sakura\react-blog-acg\src\pages\article\tocify.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
import React from 'react';
import {Anchor} from 'antd';
import {last} from 'lodash-es';

const {Link} = Anchor;

const handleClick = (e, link) => {
    e.preventDefault();
    // console.log(link);
};

export default class Tocify {
    constructor() {
        this.anchors = [];
        this.tocItems = [];
        this.index = 0;
    }

    add(text, level) {
        const anchor = `toc${level}${++this.index}`;
        this.anchors.push(anchor);
        //正则匹配,去掉标签名
        // console.log(text)
        const newText= text.replace(/(.*?)>/,'').replace(/<\/(.*)/,'')
        const item = {anchor, level, text:newText};
        const items = this.tocItems;

        if (items.length === 0) { // 第一个 item 直接 push
            items.push(item);
        } else {
            let lastItem = last(items); // 最后一个 item

            if (item.level > lastItem.level) { // item 是 lastItem 的 children
                for (let i = lastItem.level + 1; i <= 6; i++) {
                    const {children} = lastItem;
                    if (!children) { // 如果 children 不存在
                        lastItem.children = [item];
                        break;
                    }

                    lastItem = last(children); // 重置 lastItem 为 children 的最后一个 item

                    if (item.level <= lastItem.level) { // item level 小于或等于 lastItem level 都视为与 children 同级
                        children.push(item);
                        break;
                    }
                }
            } else { // 置于最顶级
                items.push(item);
            }
        }

        return anchor;
    }

    reset = () => {
        this.tocItems = [];
        this.anchors = [];
        this.index = 0;
    };

    renderToc(items) { // 递归 render
        // console.log(items)
        return items.map(item => (
            <Link key={item.anchor} href={`#${item.anchor}`}
             title={item.text}>
                {item.children && this.renderToc(item.children)}
            </Link>
        ));
    }

    render() {
        if (this.tocItems.length > 0) {
            return (
                //使用antd 的anchor实现
                <Anchor className='toc' affix showInkInFixed onClick={handleClick} offsetTop={100}>
                    <h3>文章目录</h3>
                    {this.renderToc(this.tocItems)}
                </Anchor>
            );
        } else {
            return null
        }
    }
}
