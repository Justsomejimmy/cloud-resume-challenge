import { useEffect, useState } from 'react'
import Header from 'components/Header'
import { Outlet, NavLink, useLocation } from 'react-router'
import 'css/default.css' 

export default function Layout() {
  const location = useLocation();
  
  let pageName = ''
  useEffect(() => {
    if (location.pathname === "/") {
      pageName = 'home'
    }
    else if (location.pathname === "/resume") {
      pageName = 'resume'
    }
    else if (location.pathname === "/projects") {
      pageName = 'projects'
    }
    else if (location.pathname === "/aboutme") {
      pageName = 'aboutme'
    }

    document.body.setAttribute("location", pageName);
    return () => {
      document.body.removeAttribute("location");
    };
 }, [location]);

  return (
    <>
      <Header></Header>
      <div className="content_wrap">
          <div className="content">
            <article>
              <Outlet />
            </article>
          </div>
      </div>
    </>
  )
}