import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
      <div>

        <Button color="inherit">
          <NavLink to="/" className="link">
            Home
          </NavLink>
        </Button>

        <Button color="inherit">
          <NavLink to="/login" className="link">
            Sign in
          </NavLink>
        </Button>

        <Button color="inherit">
          <NavLink to="/register" className="link">
            Sign up
          </NavLink>
        </Button>
      </div>
    );
  }
  return null;
};


const LoggedInView = props => {
  if (props.currentUser) {
    return (
      <div>

        <Button color="inherit">
          <NavLink to="/" className="link" >
            Home
          </NavLink>
        </Button>

        <Button color="inherit">
          <NavLink to="/editor" className="link" >
            <i className="ion-compose"></i>&nbsp;New Post
          </NavLink>
        </Button>


        <NavLink to="/settings" className="link">
          <Button color="inherit">
            <i className="ion-gear-a"></i>&nbsp;Settings
          </Button>
        </NavLink>

        {props.currentUser.username ?
          <Button color="inherit" >
            <NavLink to={`/@${props.currentUser.username}`} className="link">
              <img src={props.currentUser.image} className="user-pic" alt={props.currentUser.username} />
              {props.currentUser.username}
            </NavLink>
          </Button> : null}


      </div>
    );
  }

  return null;
};

export default class Header extends React.Component {
  render() {

    return (
      <div className='header'>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className="title">
              <NavLink to="/" className="link">
                {this.props.appName}
              </NavLink>
            </Typography>
            <LoggedOutView currentUser={this.props.currentUser} />
            <LoggedInView currentUser={this.props.currentUser} />
          </Toolbar>
        </AppBar>
      </div>

    );
  }
}

