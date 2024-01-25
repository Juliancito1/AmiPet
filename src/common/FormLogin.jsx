import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Login } from "../helpers/Login";

const FormLogin = ({setShow}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = () => {
      console.log('Submit')
      Login()
        setShow(false)
      }
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Ingrese su email" {
            ...register('email',{
                required: 'El email es obligatorio',
                pattern:{
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'El email debe contener @ y terminar . com/es/com.ar u otra terminacion'
                }
            })
        } />
        <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Ingrese su contraseña" {
                ...register('password',{
                  required: 'La contraseña es obligatoria',
                  pattern:{
                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                    message: 'El password debe contener 8 caracteres (al menos 1 letra mayúscula, 1 letra minúscula y 1 numero) también puede incluir carácteres especiales'
                  }
                })
              } />
              <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
        <Form.Text className="text-muted d-block">
          Nunca comparta su email y contrasea con nadie.
        </Form.Text>
      </Form.Group>
      <section className="d-flex flex-column">
        <Form.Text className="fs-6">
            Has olvidado tu contraseña? <Button variant="outline-primary" className="border-0" size="sm">Haz Click Aqui</Button>
        </Form.Text>
        <Form.Text className="fs-6">
            No tienes una cuenta? <Link className="btn btn-sm btn-outline-primary border-0 text-decoration-none" size="sm" to={'/Registrarse'} onClick={() => setShow(false)}>Registrarse</Link>
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