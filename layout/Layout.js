import React from 'react';
import Head from 'next/head';
import Sidebar from './Sidebar';
import Footer from './Footer';
import './Layout.scss';

const Layout = props => {
    return (
        <>
            <Head>
                <title>Devjitsu Homepage</title>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                <link rel="icon" href="/favicon.ico" />
                {/* <script type="text/javascript" src="/js/jquery.min.js"></script>
                <script type="text/javascript" src="/js/jquery.scrollex.min.js"></script>
                <script type="text/javascript" src="/js/jquery.scrolly.min.js"></script>
                <script type="text/javascript" src="/js/browser.min.js"></script>
                <script type="text/javascript" src="/js/breakpoints.min.js"></script>
                <script type="text/javascript" src="/js/util.js"></script>
                <script type="text/javascript" src="/js/main.js"></script> */}
            </Head>
            <Sidebar menus={props.menus}/>
            <div id="wrapper">
                {props.children}
            </div>
            <Footer/>
        </>
    );
};

export default Layout;