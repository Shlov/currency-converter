import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/home/home';
import { Rates } from '../pages/rates/rates';
import { Layout } from './layout/layout';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { fatchBaseCurrency } from 'Redux/operations';

export const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      const crd = pos.coords;
      dispatch(fatchBaseCurrency(crd))
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/rates" element={<Rates />} />
        </Route>
      </Routes>
    </>
  );
};
