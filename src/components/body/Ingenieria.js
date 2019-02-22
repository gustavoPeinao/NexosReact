import * as React from 'react';
import { MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';
import { MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler,
     MDBMask, MDBRow, MDBCol, MDBBtn, MDBView, MDBContainer, MDBCard, MDBCardBody,
     MDBInput, MDBFormInline, MDBBadge, MDBIcon } from "mdbreact";
import './ingenieria.css'
import fotoing from './fotoing.jpg'


class Ingenieria extends React.Component {

    constructor(props) {
        super(props);

        //states de Tabs
        this.state = {
            activeItemOuterTabs: "1",
            activeItemInnerPills: "1"
          }
        this.alPresionarBoton = this.alPresionarBoton.bind(this)
    }

    alPresionarBoton() {
        this.props.propAlPresionarBoton2();
        this.props.propVolverIng();
    }

    //Metodos de Tabs
    toggleOuterTabs = tab => () => {
        if (this.state.activeItemOuterTabs2 !== tab) {
        this.setState({
          activeItemOuterTabs: tab
        });
        }
      }
      
      toggleInnerPills = tab => () => {
        if (this.state.activeItemInnerPills !== tab) {
        this.setState({
          activeItemInnerPills: tab
        });
        }
      }
      

    
    
   
  render() {
    //estylos para cards
    const newsStyle = {
        borderBottom: "1px solid #e0e0e0",
        marginBottom: "1.5rem"
      };
      
    return (
        <div>
            <div className="apppage">
                
                <MDBView>
                    <MDBMask className="d-flex justify-content-center align-items-center gradient">
                    <MDBContainer>
                        <MDBRow>
                            <div className="white-text text-center text-md-left col-md-12">
                                <h1 className="h1-responsive font-weight-bold">FACULTAD DE INGENIERÍA{" "}</h1>
                                <hr className="hr-light" />
                                <h6 className="mb-1">
                                Lorem ipsum principal dolor sit amet, consectetur adipisicing elit.
                                Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                                veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                                molestiae iste.
                                </h6>
                                
                            </div>
                        </MDBRow>
                    </MDBContainer>
                    </MDBMask>
                </MDBView>
            </div>

            <div>

                <MDBCard className="my-5 px-5 mx-auto" style={{ fontWeight: 300, maxWidth: "90%" }}>
                    <MDBCardBody style={{ paddingTop: 0 }}>

                        

                                        <h2 className="h1-responsive font-weight-bold my-5 text-center">
                                            Carreras de Grado
                                        </h2>
                                        <p className="dark-grey-text mx-auto mb-5 w-75 text-center">
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                            cupidatat non proident, sunt in culpa qui officia deserunt mollit id
                                            laborum.
                                        </p>
                                        <MDBRow>
                                            <MDBCol md="12" lg="4" className="mb-lg-0 mb-5">
                                            <MDBView hover rounded className="z-depth-1-half mb-4">
                                                <img
                                                className="img-fluid"
                                                src="https://mdbootstrap.com/img/Photos/Others/images/86.jpg"
                                                alt=""
                                                />
                                                <a href="#!">
                                                <MDBMask overlay="white-slight" className="waves-light" />
                                                </a>
                                            </MDBView>
                                            <MDBRow className="mb-3">
                                                <MDBCol size="12">
                                                <a href="#!">
                                                    <MDBBadge color="pink">
                                                    <MDBIcon icon="camera" className="pr-2" aria-hidden="true" />
                                                    Adventure
                                                    </MDBBadge>
                                                </a>
                                                </MDBCol>
                                            </MDBRow>
                                            <div className="d-flex justify-content-between" style={newsStyle}>
                                                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                                                <a href="#!" className="font-weight-bold">
                                                    Ingenieria Informática
                                                </a>
                                                </MDBCol>
                                            </div>
                                            </MDBCol>

                                            <MDBCol md="12" lg="4" className="mb-lg-0 mb-5">
                                            <MDBView hover rounded className="z-depth-1-half mb-4">
                                                <img
                                                className="img-fluid"
                                                src="https://mdbootstrap.com/img/Photos/Others/images/86.jpg"
                                                alt=""
                                                />
                                                <a href="#!">
                                                <MDBMask overlay="white-slight" className="waves-light" />
                                                </a>
                                            </MDBView>
                                            <MDBRow className="mb-3">
                                                <MDBCol size="12">
                                                <a href="#!">
                                                    <MDBBadge color="pink">
                                                    <MDBIcon icon="camera" className="pr-2" aria-hidden="true" />
                                                    Adventure
                                                    </MDBBadge>
                                                </a>
                                                </MDBCol>
                                            </MDBRow>
                                            <div className="d-flex justify-content-between" style={newsStyle}>
                                                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                                                <a href="#!" className="font-weight-bold">
                                                    Ingenieria Industrial
                                                </a>
                                                </MDBCol>
                                            </div>
                                            </MDBCol>

                                            <MDBCol md="12" lg="4" className="mb-lg-0 mb-5">
                                            <MDBView hover rounded className="z-depth-1-half mb-4">
                                                <img
                                                className="img-fluid"
                                                src="https://mdbootstrap.com/img/Photos/Others/images/86.jpg"
                                                alt=""
                                                />
                                                <a href="#!">
                                                <MDBMask overlay="white-slight" className="waves-light" />
                                                </a>
                                            </MDBView>
                                            <MDBRow className="mb-3">
                                                <MDBCol size="12">
                                                <a href="#!">
                                                    <MDBBadge color="pink">
                                                    <MDBIcon icon="camera" className="pr-2" aria-hidden="true" />
                                                    Adventure
                                                    </MDBBadge>
                                                </a>
                                                </MDBCol>
                                            </MDBRow>
                                            <div className="d-flex justify-content-between" style={newsStyle}>
                                                <MDBCol size="11" className="text-truncate pl-0 mb-3">
                                                <a href="#!" className="font-weight-bold">
                                                    Ingenieria Quimica
                                                </a>
                                                </MDBCol>
                                            </div>
                                            </MDBCol>

                            
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>

            </div>


            <MDBBtn onClick={this.alPresionarBoton}>Volver</MDBBtn>
        </div>
                


            
       

    );
  }
}

export default Ingenieria;