import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
// import '../../App.css';
import logoNav from './logoNav.png';
 

// interface Props {
    

// }

// interface State {

// }

class Header extends React.Component{
    
    state = {
        isOpen: false
      };
      
      toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
      }
   
    render() {
        return (
            <Router>
            <MDBNavbar color="default-color" dark expand="md" scrolling fixed="top">
                <MDBNavbarBrand>
                    <img
                            src={logoNav}
                            width="30" 
                            alt="logo"
                            className="App-logo"
                    />
                </MDBNavbarBrand>
                <MDBNavbarBrand>
                    <strong className="white-text text-center">Nexos</strong>
                </MDBNavbarBrand>
                
                <MDBNavbarToggler onClick={this.toggleCollapse} />

                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    
                    
                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <MDBNavLink className="waves-effect waves-light" to="#!">
                            <MDBIcon fab icon="facebook" />
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink className="waves-effect waves-light" to="#!">
                            <MDBIcon fab icon="twitter" />
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink className="waves-effect waves-light" to="#!">
                            <MDBIcon fab icon="google-plus-g" />
                            </MDBNavLink>
                        </MDBNavItem>
                        
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
            </Router>
          

               


            
        )
    }
}

export default Header;