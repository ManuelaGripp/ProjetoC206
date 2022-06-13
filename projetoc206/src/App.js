import * as React from 'react';
import ReactDOM from 'react-dom';
import Repertorio from './components/Repertorio'


import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({

  palette:{
    primary:{
      main:'#3B3C2F',
      light: '#7C7044'
    },

    secundary:{
      main:'#FCE8A7',
      light: 'F9EECC',
      dark: 'EBE1AB',
    }

  }
}
)



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Repertorio/>
      </ThemeProvider>
  );
}

export default App;
