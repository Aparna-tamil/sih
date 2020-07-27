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







export class St extends Component {
    render() {
        return (
            <div>
                <AppBar position="relative">
        <Toolbar>
          
          <Typography variant="h6" color="inherit" noWrap>
            Stock trading 
          </Typography>
        </Toolbar>
      </AppBar>
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
       A Beginner's Guide
            </Typography>
           
 
        <Grid>  
        <Container>
            <Row>
            <Col sm={9} md={8}>
            <h1>01.Choosing a Broker for Your Online Trading</h1>
            <p>If you haven't already opened a brokerage account with a respected online stock broker, do it now. Read our guide to choosing a low-cost stockbroker and open an account so you can begin trading stocks.  Also, note that there is a difference between a prime brokerage and other brokers. 

</p>
            <h1>02.The 13 Types of Trades You Can Place with a Stock Broker</h1>
            <p>Thirteen types of trades are available when you begin online stock trading. They include the market trade, limit trade, stop loss, day orders, good-till-canceled trades, trailing stops, and bracket trades. Walk through this step-by-step guide to stock trading and find a definition and example for each of these terms</p>
            <h1>03.Avoid Expenses That Can Destroy Your Stock Trading Profits</h1>
            <p>The biggest enemy of successful stock trading is expenses. They represent money you're shredding without any benefit to you. Commissions and fees are good examples of these. Learn how to avoid them</p>
            <img src={require('./assets/a.webp')}></img>
            </Col>
            <Col sm={3}>
            <h1> Referal links</h1>
            <img src={require('./assets/download.jpg')}></img>
            
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


            
        <AppBar position="static" color="primary">
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

export default St
