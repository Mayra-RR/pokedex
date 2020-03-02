import React, {Component} from 'react'
import {Row, Col, Container} from 'reactstrap';

class Profile extends Component {
    render(){

    const {pokemons} = this.props
    
    return <Container>
    <h1> Profile</h1>

{
pokemons.map(p => (
    <Row>
        <Col md='6'>
            <h2>Pokemon</h2>
            <ul>
                <li><h4>id: {p.id}, Name: {p.name}</h4></li>
                <img alt={""} src={p.sprites.front_default} />
                <img alt={""} src={p.sprites.back_default} />
                
                <img alt={""} src={p.sprites.front_shiny} />
                <img alt={""} src={p.sprites.back_shiny} />
            </ul>
            </Col>
            <Col md='6'>
            <h2>Gender(Male/Female)</h2>
            
            <div class='gender'>
                <img alt={p.name} src = {p.sprites.front_default} />
                             
                <img alt={""} src={p.sprites.front_shiny_female} />
            </div>
        
        
       
        </Col>

    </Row>
))
}
    </Container>
    
}
}

export default Profile

