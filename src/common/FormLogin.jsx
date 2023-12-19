import { Form, Button, NavLink } from "react-bootstrap";


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
      <section className="d-flex flex-column">
        <Form.Text className="fs-6">
            Has olvidado tu contraseña? <Button variant="outline-primary" className="border-0" size="sm">Haz Click Aqui</Button>
        </Form.Text>
        <Form.Text className="fs-6">
            No tienes una cuenta? <Button variant="outline-primary" className="border-0" size="sm">Registrarse</Button>
        </Form.Text>
      </section>
      <div className="text-end">
      <Button variant="success" type="submit">
        Acceder
      </Button>
      </div>
    </Form>
    );
};

export default FormLogin;