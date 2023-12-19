import { Form, Button } from "react-bootstrap";


const FormLogin = () => {
    return (
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Ingrese su email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Ingrese su contraseña" />
        <Form.Text className="text-muted">
          Nunca comparta su email y contrasea con nadie.
        </Form.Text>
      </Form.Group>
      <div className="text-end">
      <Button variant="success" type="submit">
        Acceder
      </Button>
      </div>
    </Form>
    );
};

export default FormLogin;