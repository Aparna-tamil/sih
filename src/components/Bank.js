import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import DehazeRoundedIcon from '@material-ui/icons/DehazeRounded';
import Button from '@material-ui/core/Button';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import download from './assets/download.jpg';
import Row from 'react-bootstrap/Row';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Link from '@material-ui/core/Link';







export class Bank extends Component {
    render() {
        return (
            <div>
                <AppBar position="relative">
        <Toolbar>
          
          <Typography variant="h6" color="inherit" noWrap>
          Banking

          </Typography>
        </Toolbar>
      </AppBar>
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
       Start Banking!
            </Typography>
           
 
        <Grid>  
        <Container>
            <Row>
            <Col sm={9} md={8}>
            <h1>How to Banking</h1>
            <p>From setting up online banking to voiding checks, this beginner's guide will give you the basics of consumer banking.
 </p>
            <h1>Best Banks of 2020
</h1>
            <p><b>Ally:</b> Best Bank Overall
</p>
<p><b>Chase:</b> Best Bank for Customer Service
</p>
<p><b>Wells Fargo:</b> Best Bank for Teenagers</p>
<p><b>Simple:</b> Best Bank for College Students</p>
<p><b>Capital One:</b> Best Bank for Millennials
</p>
<p><b>USAA:</b> Best Bank for Military Members
</p>
<p><b>Capital One Spark Business:</b> Best Bank for Small Businesses</p>
            
            <img src={require('./assets/bb.jpg')}></img>
            </Col>
            <Col sm={3}>
            <h1> Referal links</h1>
            <img src={require('./assets/bank.jpg')}></img>
            
             <div>
             <DehazeRoundedIcon color="primary"/>
             <Link
  component="button"
  variant="body2"
  onClick={() => {
    console.info("I'm a button.");
  }}
>
https://www.thebalance.com/stock-trading-101-

https://www.thebalance.com/stock-trading-101-358115
https://www.thebalance.com/stock-trading-101-358115


</Link></div>

            
            </Col>
            </Row>
            </Container></Grid>  


            
        <AppBar position="static" color="secondary">
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit">
                &copy; Footer
                abc@gmail.com
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
            </div>
            
        )
    }
}

export default Bank
