import React from "react";
import { Form, Button, Col } from "react-bootstrap";
const AddProject = () => {
  return (
    <Form className="d-flex flex-column p-2">
      <Form.Group
        as={Col}
        md="7"
        controlId="formBasicText"
        className="align-self-center z-index"
      >
        <Form.Label className="font-weight-bold text-uppercase">
          Nazwa Zadania
        </Form.Label>
        <Form.Control
          id="formsView"
          type="text"
          placeholder="Wpisz Nazwę Zadania"
        />
      </Form.Group>

      <Form.Group
        className="z-index"
        x1="16"
        controlId="exampleForm.ControlTextarea1"
      >
        <Form.Label className="font-weight-bold text-uppercase">
          Opisz zadanie
        </Form.Label>
        <Form.Control id="formsView" as="textarea" rows="4" />
      </Form.Group>
      <Form.Group className="z-index">
        <Form.Label className="font-weight-bold text-uppercase">
          Opisz zadanie
        </Form.Label>
        <Form.Control type="data" as="data" />
      </Form.Group>

      <Button
        className
        id="formsButton"
        as={Col}
        xs
        md="3"
        variant="primary"
        type="submit"
      >
        Zapisz
      </Button>
    </Form>
  );
};

export default AddProject;
