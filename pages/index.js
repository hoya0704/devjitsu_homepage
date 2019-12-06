import React from 'react';
import Layout from '../layout/Layout';
import Sections from '../components/sections';
import './index.scss';

const menus = [
  //{ href: '#intro', label: 'intro', class: 'wrapper style1 fullscreen fade-up' },
  { href: '#about', label: 'about', class: 'wrapper style2 spotlights' }, //
  { href: '#skills', label: 'skills', class: 'wrapper style3 spotlights' },
  { href: '#process', label: 'process', class: 'wrapper style2 spotlights' },
  { href: '#portfolio', label: 'portfolio', class: 'wrapper style1 fade-up' },
  { href: '#contact', label: 'contact', class: 'wrapper style2 fade-up'}
];

const Home = () => {
  
  return (
    <>            
      <Layout menus={menus}>
        <Sections menus={menus}/>
      </Layout>
    </>
  )
}

export default Home
