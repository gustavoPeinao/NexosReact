import * as React from 'react';
// import '../../App.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import logoFooter from './logoFooter.png';

// interface Props {


// }

// interface State {

// }



class Footer extends React.Component {


    // const CardExample = () => {
    // }


    render() {
        return (
           <MDBFooter color="default-color-dark" className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="6">
                        <h3 className="title">Programa Nexos</h3>
                        <p>
                        Secretaría de Extensión Universitaria - Universidad Nacional de Jujuy
                        </p>
                    </MDBCol>
                    <MDBCol md="6">
                    <img
                        src={logoFooter}
                        width="500"
                        alt="logo"
                        
                      />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3" style={{marginTop: '20px',}}>
                <MDBContainer fluid>
                &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> ABM - Seguridad Informática </a>
                </MDBContainer>
            </div>
    </MDBFooter>





                )
            }
        }
        
export default Footer;