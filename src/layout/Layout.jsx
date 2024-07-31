import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import Header from '../components2/Header';

function Layout() {
  
  
  return (
    
    <div className='bg-gray-950 text-white min-h-screen'>
      <div className='container px-6 py-4'>
      {/* header */}
      <Header/>
        <main>
          <Outlet/>
        </main>
      </div>
    </div>
  );
}

export default Layout;
