import { createGlobalStyle } from "styled-components";
import {MOUSEPOINTCUR,TEXTOCUR,HORSERACELAMP}  from "@/lib/constans/vite.js";
export const GlobalStyle = createGlobalStyle`
    :root{
        --color-primary: #FE9600;
        /* --color-primary: #A0DAD0; */
    }
    ::selection {
        background: #A0DAD0;
        color: #fff;
    }
    ::-webkit-scrollbar-track {
        background-color: #ffffff;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: var(--color-primary);
    }
    ::-webkit-scrollbar {
        width: 5px;
        height: 8px;
        background-color: #B9B9B9;
    }
    *{
        box-sizing: border-box;
    }
    body{
        font-family: 'Noto Serif SC','Source Han Serif SC','Source Han Serif','source-han-serif-sc','PT Serif','SongTi SC','MicroSoft Yahei',Georgia,serif;
        cursor: url(${MOUSEPOINTCUR}),auto
    }
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, 
	a, abbr, acronym, address, big, cite, 
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		vertical-align: baseline;
	}
    /* @media screen and (min-width:321px) and (max-width:375px){html{font-size:11px}}
    @media screen and (min-width:376px) and (max-width:414px){html{font-size:12px}}
    @media screen and (min-width:415px) and (max-width:639px){html{font-size:15px}}
    @media screen and (min-width:640px) and (max-width:719px){html{font-size:20px}}
    @media screen and (min-width:720px) and (max-width:749px){html{font-size:22.5px}}
    @media screen and (min-width:750px) and (max-width:799px){html{font-size:23.5px}}
    @media screen and (min-width:800px){html{font-size:25px}} */
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	.transition-color{
	    transition: color .2s ease-out,border .2s ease-out,opacity .2s ease-out;
	}
	a{
        transition: color .2s ease-out,border .2s ease-out,opacity .2s ease-out;
        cursor: url(${MOUSEPOINTCUR}),auto;
	}
	a:hover{
	    text-decoration: none;
	}
	ol, ul {
		list-style: none;
	}
	ul,li{
	    margin:0;
	}
	.lazyload {
        filter: blur(0px);
        /* transition: .3s filter linear,.3s -webkit-filter linear; */
    }
    .loadimg {
        filter: blur(3px)!important;
        background-color: white;
    }
    .doneimg{
        filter: blur(0px)!important;
        transition: .1s filter linear,.1s -webkit-filter linear!important;
        /* transform: translateY(0) */
    }
    p{
        cursor: url(${TEXTOCUR}),auto;
    }
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	
	.flex-items {
        display: -webkit-flex; /* Safari */
        -webkit-align-items: center; /* Safari 7.0+ */
        display: flex;
        align-items: center;
    }
    
    .flex-start {
        display: -webkit-flex; /* Safari */
        -webkit-align-items: center; /* Safari 7.0+ */
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }
    
    .cell {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        width: 0;
    }
    
    .align-center {
        -webkit-align-self: center;
        align-self: center;
    }
    
    .ellipsis {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    
    .ellipsis-two {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }
    #player .aplayer-lrc-current {
        color: var(--color-primary);
        font-size: 15px;
        font-weight: bold;
    }
    #fireworks{
        position: fixed; 
        left: 0px; 
        top: 0px; 
        pointer-events: none; 
        z-index: 999;
    }

    /* Make clicks pass-through */
    #nprogress {
        pointer-events: none;
    }

    #nprogress .bar {
        background-image: url(${HORSERACELAMP});
        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;

        width: 100%;
        height: 4px;
    }

`;
