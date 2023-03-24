import { Container } from "@mui/material";
// import { useSelector } from 'react-redux';
// import { getbaseCurrency } from 'Redux/selectors';


import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getExchangeRates } from "service/service";
import { useState, useEffect } from "react";


export const TableRates = () => {

  // const baseCurrency = useSelector(getbaseCurrency);
  const [exchangeRates, setExchangeRates] = useState(null);
  console.log('exchangeRates', exchangeRates)

  useEffect(()=> {

    getExchangeRates()
    .then(data => {
      setExchangeRates(Object.entries(data.rates))
      console.log(data)})
      .catch(error => console.error(error));
  }, [])


  return (
    <>
      <Container maxWidth="md" sx={{ backgroundColor: '#1A2027' }}>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Currency</TableCell>
            <TableCell align="right">cost</TableCell>
          </TableRow>
        </TableHead>
        {exchangeRates 
          ?
          <TableBody>
          {exchangeRates.map((exchangeRate) => (
            <TableRow
              key={exchangeRate[0]}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {exchangeRate[0]}
              </TableCell>
              <TableCell align="right">
                {exchangeRate[1]}
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
          : <TableBody>
            <TableRow
              key='1'
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                load
              </TableCell>
              <TableCell align="right">
                load
                </TableCell>
            </TableRow>
        </TableBody>
        }
        
      </Table>
    </TableContainer>
      </Container>
    </>
  );
};