import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
  borderRadius:'10px',
});

export default function ComplexGrid(props) {
  return (
    <Paper 
      sx={{
        p: 2,
        margin: 'auto',
        flexGrow: 1,
        textAlign:'left',
        marginRight: '10px',
        marginTop:'20px',
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container>      
        <Grid item lg={12} xs={12} >
          <ButtonBase>
            <Img alt="complex" src={props.image} />
          </ButtonBase>
        </Grid>
        </Grid>
    </Paper>
  );
}
