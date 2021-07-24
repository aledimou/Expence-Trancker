import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./Balance.css"
import { useGlobalContext } from '../context'
const Balance = () => {
    const {totalIncome, balance, totalExpence} = useGlobalContext();
    return (
        <section className = "balance-container">
            <h2>Your Balance</h2>
            <Row><h1>${balance}</h1></Row>
                <Container >
                    <Row className = "col-wrapper">
                        <Col><div className = "left-div">
                        <h3>Income</h3>
                        <h3 className = "income-green">$ {totalIncome}</h3>
                        </div></Col>
                        <Col><div className = "right-div">
                        <h3>Expense</h3>
                        <h3 className = "negative-red">$ -{totalExpence}</h3>
                        </div></Col>
                    </Row>
                </Container>
        </section>
    )
}

export default Balance
