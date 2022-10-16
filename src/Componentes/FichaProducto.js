import React from 'react';
import {ModalHeader, ModalBody, ModalFooter, Modal, Button, Container, CardImg} from 'reactstrap';
import './FichaProducto.css';
import {Popover, PopoverHeader, PopoverBody, Table} from 'reactstrap';
import {listaCarrito} from './listaCarrito.json';


class FichaProducto extends React.Component{
    constructor(props){
        super();
        this.state={
            modal: false,
            listaCarrito,
            stock:props.props.stock
        };
        this.toggle= this.toggle.bind(this);
        this.agregarCarrito= this.agregarCarrito.bind(this);
    }

    toggle(){
        this.setState(prevState=> ({
            modal: !prevState.modal
        }));
    }

    agregarCarrito(){
        listaCarrito.push({
            "titulo": this.props.props.titulo,
            "precio": this.props.props.precio
        }
        );
        this.setState(prevState=>({
            modal: !prevState.modal,
            stock: parseInt(prevState.stock) - 1
        }))
    }

    render(){
        return(
            <Container>
                <Button onClick= {this.toggle}> ver ficha </Button>
                <Modal isOpen= {this.state.modal}>
                    <ModalHeader> {this.props.props.titulo} </ModalHeader>
                    <ModalBody>
                        <CardImg src={this.props.props.imagen}/>
                        <p>El detalle del producto seleccionado es el siguiente: </p>
                        {this.props.props.descripcion}
                        <p>Este producto tiene un valor de <b>{this.props.props.precio}</b> pesos.</p>
                        <p>hay <b>{this.state.stock}</b> unidades de este producto disponibles</p>    
                    </ModalBody>
                    <ModalFooter className= "modalFooter">
                        <Button color="primary" onClick={this.agregarCarrito}>Agregar al carrito</Button>
                        <Button color= "secondary" onClick={this.toggle}>Volver atrás</Button>
                    </ModalFooter>
                </Modal>
            </Container>
            
        );
    }
}

export default FichaProducto;