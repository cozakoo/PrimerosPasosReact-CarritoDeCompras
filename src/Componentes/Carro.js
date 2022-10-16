import React from 'react';
import {Popover, PopoverHeader, PopoverBody, Table, Button, Badge} from 'reactstrap';
import {listaCarrito} from './listaCarrito.json';


class Carro extends React.Component{
    constructor(){
        super();
        this.state={
            popoverOpen: false,
            listaCarrito,
    };
    this.toggle= this.toggle.bind(this);
    }

    toggle(){
        this.setState(prevSate =>({
            popoverOpen: !prevSate.popoverOpen
        }));
    }

    mostrarTotal(){
        var precioTotal=0;
        const arregloCarrito= this.state.listaCarrito.map(
            (listaCarrito,i) =>{
                precioTotal+=parseInt(listaCarrito.precio,10)
            })
        return precioTotal
    }

    render(){
        const arregloCarrito= this.state.listaCarrito.map(
            (listaCarrito,i) =>{
                return(
                    <tr>
                        <td>{(i+=1)}</td>
                        <td>{listaCarrito.titulo}</td>
                        <td>{listaCarrito.precio}</td>
                    </tr>
                );
            })
        return(
            <div> 
                <Button id="Popover1" color="info">
                    <span class="material-icons">shopping_cart</span>
                    <Badge color= "secondary">  {arregloCarrito.length} </Badge>
                </Button>

                <Popover target= "Popover1" placement= "bottom" isOpen= {this.state.popoverOpen} toggle= {this.toggle}>
                    <PopoverHeader>Mi carrito</PopoverHeader>
                    <PopoverBody>
                        <Table>
                            <tbody>
                                <th> <b>#</b> </th>
                                <th> <b>Producto</b> </th>
                                <th> <b>Precio</b> </th>
                                {arregloCarrito}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td> Total: </td>
                                    <td></td>
                                    <td>${this.mostrarTotal()} CLP</td>
                                </tr>
                            </tfoot>

                        </Table>
                    </PopoverBody>
                </Popover>
            </div>
        )
    }
}
export default Carro; 
