import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const Layout = () => {
  /*
    /**|======================================
    /**| 
    /**|======================================
    */

  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/rates">Rates</NavLink>
        </nav>
      </header>
      <Suspense fallback={<p>......</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};
