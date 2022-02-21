import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import { Form, Button } from "react-bootstrap";
import { submitScheduleInterface } from '../services/api';

import "react-datepicker/dist/react-datepicker.css";

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const emailRef = useRef();
  const nameRef = useRef();
  const surnameRef = useRef();
  const messageRef = useRef();

  const handleSubmitForm = (e) => {
    e.preventDefault()
    const obj = {}
    if(emailRef.current.value && nameRef.current.value && surnameRef.current.value){
      obj.date = selectedDate || Date().toLocaleString()
      obj.name = nameRef.current.value;
      obj.surname = surnameRef.current.value;
      obj.email = emailRef.current.value;
    }
    else alert("Va rugam completati toate campurile.")
    submitScheduleInterface('localhost', obj)
  }

  return (
    <div className="m-5">
      <h4>Fa o programare pentru evenimentul tau.</h4>
      <Form style={{ width: '20rem' }} onSubmit={handleSubmitForm}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Selecteaza data</Form.Label>
          <DatePicker
            placeholderText="Selecteaza data"
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy"
            className="w-100"
            customInput={<Form.Control type="text" />}
            monthsShown={1}
            inline
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nume</Form.Label>
          <Form.Control type="text" placeholder="Nume" ref={nameRef}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Prenume</Form.Label>
          <Form.Control type="text" placeholder="Prenume" ref={surnameRef}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" ref={emailRef}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Mesaj</Form.Label>
          <Form.Control as="textarea" rows={3} ref={messageRef} draggable={false}/>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

    </div >
  )
}

export default Booking;
