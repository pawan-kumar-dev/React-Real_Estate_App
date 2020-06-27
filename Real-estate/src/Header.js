import React from 'react';
import logo from './logo.svg';
import './App.css';
import { throwStatement } from '@babel/types';
import classes from './Header.module.css';
class Header extends React.Component{
  constructor(props){
      super(props);
      this.state={
      }
    }
    render(){
      return(
      <header>
          <div className={classes.logo}>
              <h3>Real Estate</h3>
          </div>
<nav>
    <a href="#">Create Ads</a>
    <a href="#">About</a>
    <a href="#">Login</a>
    <a href="#" className={classes.register}>Register</a>
</nav>
      </header>
        );
    }
  }
export default Header;
