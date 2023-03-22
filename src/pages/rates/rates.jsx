import { TableRates } from "components/Table/Table";
import { useSelector } from "react-redux";
import { getbaseCurrency } from "Redux/selectors";

export const Rates = () => {

  

  const baseCurrency = useSelector(getbaseCurrency)

  return (
    <>
      <TableRates/>
      <p>RATES</p>
      <p>Your base currency: {baseCurrency}</p>
    </>
  );
};
