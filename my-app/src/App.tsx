import React, { useEffect } from 'react';
import './App.scss';
import { Container, Paper, Grid } from '@material-ui/core';
import TableComponent from './components/table/table';
import CryptoInput from './components/cryptoInput/cryptoInput';
import MoneyInput from './components/moneyInput/moneyInput';

import { observer } from 'mobx-react';
import appState from './models/app.model';


const App = observer(() => {
  useEffect(() => {
    appState.getData();
  }, []);

  return (
    <Container maxWidth='lg' className='root'>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          {appState.loaded && (
            <TableComponent />
          )}
        </Grid>
        <Grid item xs={4}>
          <Paper className='paper'>
            <CryptoInput />
            <MoneyInput />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
})

export default App;
