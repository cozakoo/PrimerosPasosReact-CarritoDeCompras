import React from 'react';
import './App.css';
import Producto from './Componentes/Producto';
import { Container, Row } from 'reactstrap';
import { render } from 'react-dom';
import Navegacion from './Componentes/Navegacion';
import {listaProductos} from './Componentes/listaProductos.json'


class App extends React.Component{

  constructor(){
    super();
    this.state={
      listaProductos
    };
  }

  render(){
    const arregloComponentes = this.state.listaProductos.map(
      (listaProductos,i) =>
      {
        console.log(i);
        return(
          <Producto
            key={i}
            titulo={listaProductos.titulo}
            imagen={listaProductos.imagen}
            descipcion= {listaProductos.descripcion}
            precio= {listaProductos.precio}
            stock={listaProductos.stock}

          />
        )
      }
    );

    return (
    <Container>
      <Navegacion titulo= "Mi primer sitio de compras online"/>
      <Row> 
        {arregloComponentes}
      </Row>
    </Container>
    );
  }
}

export default App;
