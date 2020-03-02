import React, {Component} from 'react';
import {Row, Col, Container, Button} from 'reactstrap';

class Pokedex extends Component {
    render(){
        const {pokemons} = this.props
        console.log(this.props.pokemons.length);
        
        return <Container>
    <h1> Pokedex</h1>

{
    pokemons.map(p => (
        <Row>
            <Col md='6'>
            <img alt={p.name} src = {p.sprites.front_default} />
            </Col>
            <Col md='6'>
                <ul>
                    <li>Id: {p.id}</li>
                    <li>Name: {p.name}</li>
                   
                    <li><Button 
                    color = 'danger'
                    onClick = {()=> {
                       
                    }}>Free</Button> 
                    </li>
                </ul>
            </Col>

        </Row>
    ))
}
        </Container>
        
    }
}

export default Pokedex