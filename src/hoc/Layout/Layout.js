import React, { Component } from 'react';
import classes from './Layout.module.css';
import Quiz from '../../containers/Quiz/Quiz';
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle';
import Drawer from '../../components/Navigation/Drawer/Drawer';

class Layout extends Component {
  state = {
    isMenuOpen: false,
  }

  toggleMenuHandler = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    })
  }

  menuCloseHandler = () => {
    this.setState({
      isMenuOpen: false
    })
  }

  render() {
    return (
      <div className={classes.Layout}>
        <Drawer 
          isOpen={this.state.isMenuOpen}
          onClose={this.menuCloseHandler}
        />
        <MenuToggle 
          isOpen={this.state.isMenuOpen}
          onToggle={this.toggleMenuHandler}
        />
        <main>
          <Quiz />
        </main>
      </div>
    );
  }
}

export default Layout;