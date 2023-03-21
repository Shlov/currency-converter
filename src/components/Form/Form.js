import { exChange } from 'service/service';

import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
// import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import { Button, Grid, Paper, Typography } from '@mui/material';
import { useState } from 'react';
// import FormControl from '@mui/material/FormControl';

const RedditTextField = styled((props) => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  '& .MuiFilledInput-root': {
    border: '1px solid #e2e2e1',
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&.Mui-focused': {
      backgroundColor: 'transparent',
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
}));


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export const Form = () => {

  const initialValue = {
    "info": {
      "rate": ''
    },
    "result": ''
  };

  const [result, setResult] = useState(initialValue)

  const handleSubmit = e => {
    e.preventDefault();
    const data = e.target.elements.currency.value;
    const arrDara = data.split(' ');
    const to = arrDara[3];
    const from = arrDara[1];
    const amount = arrDara[0];

    exChange(to, from, amount).then(data => setResult(data) );
    // e.target.reset();
  };

  const resetInput = e => {
    e.target.form.reset();
    setResult(initialValue);
    console.log(e.target.form)
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>
          <RedditTextField
            name="currency"
            label="currency"
            defaultValue=""
            id="currency"
            variant="filled"
            style={{ marginTop: 11 }}
          />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Typography variant="body1" gutterBottom>
              {`Result: ${result.result}`}
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item> 
            <Typography variant="body2" gutterBottom>
              Exemple: 15 USD in UAH
            </Typography></Item>
        </Grid>
        <Grid item xs={6}>
          <Item>      
            <Typography variant="body2" gutterBottom>
                {`Course : ${result.info.rate}`}
            </Typography></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><Button variant="contained" type="submit">Convert</Button></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><Button variant="outlined" type="button" onClick={resetInput}>Reset</Button></Item>
        </Grid>
      </Grid>
    </Box>
    {/* <Box
      sx={{
        display: 'flex',
        padding: '42px',
        '& > :not(style)': {
          m: 1,
          width: 300,
          height: 300,
        },
      }} */}
    >

      {/* <Paper variant="outlined" sx={{
        display: 'flex',
        padding: '42px',
        '& > :not(style)': {
          m: 1,
          width: 300,
          height: 300,
        },
      }}> */}

        

      


      

        {/* <button type="submit">Submit</button> */}
        
        
      {/* </Box> */}
      </form>
      {/* </Paper> */}
    </>
  );
};
