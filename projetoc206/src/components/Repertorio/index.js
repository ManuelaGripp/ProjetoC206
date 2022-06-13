import * as React from 'react';

import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BotaoRepertorio from '../BotaoRepertorio'

function Repertorio(){
    
    return(

        <Container sx={{
            display:'flex',
            fontSize: 20
        }} >
            <Typography>Repertório</Typography>
            <ExpandMoreIcon/>
            <BotaoRepertorio/>           
            
        </Container>


    )


}

export default Repertorio;