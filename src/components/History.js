import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useGlobalContext } from '../context'
import "./History.css"

const History = () => {
    const {history} = useGlobalContext();
    return (
        <section className = "section">
        <h2>History</h2>
        <hr/>
            <Container className = "row-wrapper">
           
                   {history.map((transaction)=>{
                       const {id, name, money} = transaction;
                       return (                       
                        <Row key = {id}  className= "distance">
                            <Col lg = {8}><h4  className = "name-neut">{name}</h4></Col>
                            <Col sm={4} className = {money<0?"money-neut danger":"money-neut safe"}><h4>{money}</h4></Col>
                            <hr />
                        </Row>
                       )
                       
                   })}
               
            </Container>
        </section>
    )
}

export default History
