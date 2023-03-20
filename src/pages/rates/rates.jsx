import { useSelector } from "react-redux";
import { getbaseCurrency } from "Redux/selectors";

export const Rates = () => {
  /*
    /**|======================================
    /**| 
    /**|======================================
    */

  const baseCurrency = useSelector(getbaseCurrency)

  return (
    <>
      <p>RATES</p>
      <p>Your base currency: {baseCurrency}</p>
    </>
  );
};
