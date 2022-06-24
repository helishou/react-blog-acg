/*
 * @Author       : helishou
 * @Date         : 2021-08-14 16:04:21
 * @LastEditTime : 2021-08-14 16:51:16
 * @LastEditors  : helishou
 * @Description  :
 * @FilePath     : \src\utils\router.config.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
// import Home from '@/pages/home';
// import Links from "@/pages/links"
// import Archives from "@/pages/archives";
// import AboutMe from "@/pages/aboutme";
// import Tags from "@/pages/tags";
// import Article from "@/pages/article";
// import Category from "@/pages/category";
// import TagList from "@/pages/tags/list";
// import Search from "@/pages/search";
// import Error from "@/pages/error";
import { lazy } from 'react';
const Home = lazy(() => import("@/pages/home"));
const Links = lazy(() => import('@/pages/links'));
const Archives = lazy(() => import('@/pages/archives'));
const AboutMe = lazy(() => import('../pages/aboutme'));
const Tags = lazy(() => import('../pages/tags'));
const Article = lazy(() => import('../pages/article'));
const Category = lazy(() => import('../pages/category'));
const TagList = lazy(() => import('../pages/tags/list'));
const Search = lazy(() => import('../pages/search'));

export const menulist = [
  // {
  //   url: "/",
  //   icon: "iconfont icon-fort-awesome",
  //   title: "首页",
  // },
  // {
  //   child: [],
  //   icon: "iconfont icon-list-ul",
  //   title: "分类",
  // },
  {
    url: '/archives',
    icon: 'iconfont icon-archive',
    title: '归档',
    component: Archives,
  },
  {
    url: '/links',
    icon: 'iconfont icon-link',
    title: '友人帐',
    component: Links,
  },
  {
    url: '/tags',
    icon: 'iconfont icon-tag',
    title: '标签墙',
    component: Tags,
  },
  {
    url: '/aboutme',
    type: 'message',
    title: '关于我',
    component: AboutMe,
  },
];
export const routerList = [
  ...menulist,
  {
    url: '/',
    component: Home,
  },
  {
    url: '/article/:id',
    component: Article,
  },
  {
    url: '/category/:id',
    component: Category,
  },
  {
    url: '/tags/:id',
    component: TagList,
  },
  {
    url: '/search/:key',
    component: Search,
  },
];
