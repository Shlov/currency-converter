import { exChange } from 'service/service';

import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
// import InputBase from '@mui/material/InputBase';

// import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import { Button, Container, Grid,  Typography } from '@mui/material';
import { useState } from 'react';
// import FormControl from '@mui/material/FormControl';

const RedditTextField = styled(props => (
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


export const Form = ({ theme }) => {
  const initialValue = {
    info: {
      rate: '',
    },
    result: '',
  };

  console.log(theme);

  const [result, setResult] = useState(initialValue);

  const handleSubmit = e => {
    e.preventDefault();
    const data = e.target.elements.currency.value;
    const arrDara = data.split(' ');
    const to = arrDara[3];
    const from = arrDara[1];
    const amount = arrDara[0];

    exChange(to, from, amount).then(data => setResult(data));
    // e.target.reset();
  };

  const resetInput = e => {
    e.target.form.reset();
    setResult(initialValue);
    console.log(e.target.form);
  };

  return (
    <>
      <Container maxWidth="md" sx={{ backgroundColor: '#1A2027'}}>
        <form onSubmit={handleSubmit}>
          <Grid
            container
            // spacing={2}
            p='12px'
            color='#fff'
            // justifyContent="center"
            // alignItems="flex-start"
            // rowSpacing={1}
            // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6} display='flex' flexDirection='column' alignItems='flex-end' height='72px' p='8px'>
              <RedditTextField
                name="currency"
                label="currency"
                defaultValue=""
                id="currency"
                variant="filled"

              />
            </Grid>
            <Grid item xs={6} height='72px' display='flex' alignItems='center' p='8px' > 
              <Typography variant="body1" gutterBottom style={{ margin: 0 }}>
                {`Result: ${result.result}`}
              </Typography>
            </Grid>
            <Grid item xs={6} display='flex' flexDirection='column' alignItems='flex-end' p='8px'>
              <Typography variant="body2" gutterBottom>
                Exemple: 15 USD in UAH
              </Typography>
            </Grid>
            <Grid item xs={6} p='8px'>
              <Typography variant="body2" gutterBottom>
                {`Course : ${result.info.rate}`}
              </Typography>
            </Grid>
            <Grid item xs={6} display='flex' flexDirection='column' alignItems='flex-end' p='8px'>
              <Button variant="contained" type="submit">
                Convert
              </Button>
            </Grid>
            <Grid item xs={6} p='8px'>
              <Button variant="outlined" type="button" onClick={resetInput}>
                Reset
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
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
    </>
  );
};
