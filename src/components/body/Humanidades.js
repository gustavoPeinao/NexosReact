import * as React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';



class Humanidades extends React.Component {

    constructor(props) {
        super(props);
        this.alPresionarBoton = this.alPresionarBoton.bind(this)
    }

    alPresionarBoton() {
        this.props.propAlPresionarBoton4();
        this.props.propVolverHum();
    }


   
  render() {
    return (
        
        <MDBCol>
            <MDBCard style={{ width: "22rem" }}>
                <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                <MDBCardBody>
                    <MDBCardTitle>Carreras de Humanidades</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make
                        up the bulk of the card&apos;s content.
                    </MDBCardText>
                    <MDBBtn onClick={this.alPresionarBoton}>Volver</MDBBtn>
                </MDBCardBody>
            </MDBCard>
            
        </MDBCol>
        

    );
  }
}

export default Humanidades;