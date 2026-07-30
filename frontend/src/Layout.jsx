import { useEffect, useState } from 'react'
import Header from 'components/Header'
import { Outlet, NavLink, useLocation } from 'react-router'

export default function Layout() {
  const location = useLocation();
  useEffect(() => {
  
  let pageName = ''
  if (location.pathname === "/") {
    pageName = 'home'
  }
  else if (location.pathname === "/resume") {
    pageName = 'resume'
  }
  else if (location.pathname === "/projects") {
    pageName = 'projcects'
  }
  else if (location.pathname === "/aboutme") {
    pageName = 'aboutme'
  }

  document.body.setAttribute("location", pageName);
  document.body.classname = `${pageName}`;

  return () => {
    document.body.removeAttribute("location");
    document.body.className = "";
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