import React,{useState} from 'react'
import {Form, Row, Button} from 'react-bootstrap'
import { useGlobalContext } from '../context'
import "./UserForm.css"

const UserForm = () => {

    const { setDataForm} = useGlobalContext();

    const [text, setText] = useState("")
    const [amount, setAmount] = useState("")
    
  
    const handleFormInput = (e)=>{
        e.preventDefault();
        setDataForm( {
            id: new Date().getTime().toString(),
            text: text,
            amount: parseFloat(amount)
        }) 
        
        setAmount("")
        setText("")
     }
 
     const handleInputText = (e)=>{
         const newText = e.target.value
         setText(newText)
     }
 
     const handleInputAmount = (e)=>{
         const newAmount = e.target.value ;
         setAmount(newAmount)
     
     }


    return (
        <section className = "section-form">
        <h2>Add new transaction</h2>
        <hr />
            <Form onSubmit = {handleFormInput}>
                <Form.Group className="form-group-text" size="lg" >
                    <Form.Label htmlFor = "text"><h4>Text</h4></Form.Label>
                    <Form.Control value = {text} className = "form-input" type= "text" placeholder="enter text..." onChange = { handleInputText} />
                </Form.Group>

                <Form.Group className="form-group-amount" >
                    <Form.Label htmlFor = "amount" className = "form-label-amount"><h4>Amount</h4></Form.Label>
                        <Row>
                        <Form.Text muted className = "form-text-muted">
                            (negative - Expence, positive - Income)
                        </Form.Text>
                        </Row>
                    <Form.Control value = {amount} className = "form-input" type="text" placeholder="enter amount..." onChange = {handleInputAmount} />
                </Form.Group>
                <Button type="submit" className = "btn-submit" variant="dark" size="lg">
                   Add transaction
                </Button>
            </Form>
        </section>
    )
}

export default UserForm;
