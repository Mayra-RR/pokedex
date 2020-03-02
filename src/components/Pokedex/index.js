import React, {Component} from 'react';
import {Row, Col, Container, Button} from 'reactstrap';

class Pokedex extends Component {

    triggerDelete(pokemon){
        if(window.confirm("Are you sure you want to delete this pokemon?")){

           this.setState(prevState => ({
               onClick: [prevState.pokemons.splice(0, pokemon)]
           }))
           return ;

        }
    }


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
                    onClick = {(e)=> {
                        e.stopPropagation();
                        e.preventDefault();
                        this.triggerDelete(pokemons);
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