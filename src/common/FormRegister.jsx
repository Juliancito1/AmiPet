import { useForm } from "react-hook-form";
import { Form, Button, Container } from "react-bootstrap";
const FormRegister = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = () => {
        console.log("registrado")
      }
 
    return (
      <Container className="mainSection my-5">
        <h2 className="display-1 text-center">Registrarse</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Nombre de Usuario</Form.Label>
              <Form.Control
                type="text"
                name="nombreUsuario"
                placeholder="Ingrese su nombre de usuario"
                maxLength={50}
                {...register('nombreUsuario', {
                  required: 'El nombre de usuario es obligatorio',
                  maxLength: {
                    value: 50,
                    message: 'El nombre de usuario no puede tener más de 50 caracteres',
                  },
                })}
                />
              <Form.Text className="text-danger">{errors.nombreUsuario?.message}</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Ingrese un email"
                {...register('email', {
                  required: 'El email es obligatorio',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'El email debe contener @ y terminar en .com, .es, .com.ar u otra terminación',
                  },
                })}
                />
              <Form.Text className="text-danger">{errors.email?.message}</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="password"
                minLength={8}
                placeholder="Ingrese una contraseña"
                {...register('password', {
                  required: 'La contraseña es obligatoria',
                  pattern: {
                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                    message: 'La contraseña debe contener 8 caracteres (al menos 1 letra mayúscula, 1 letra minúscula y 1 número) y puede incluir caracteres especiales',
                  },
                })}
                />
              <Form.Text className="text-danger">{errors.password?.message}</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPais">
              <Form.Label>Pais</Form.Label>
              <Form.Control
              type="text"
              value="Argentina"
              disabled
              />
              <Form.Text className="text-danger">{errors.pais?.message}</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicProvincia">
              <Form.Label>Provincia</Form.Label>
              <Form.Select
              {...register("provincia",{required: "Seleccione una provincia"})}>
                <option value="">Seleccione una provincia</option>
                <option value="Buenos Aires">Buenos Aires</option>
                <option value="CABA">Ciudad Autónoma de Buenos Aires</option>
                <option value="Catamarca">Catamarca</option>
                <option value="Chaco">Chaco</option>
                <option value="Chubut">Chubut</option>
                <option value="Cordoba">Córdoba</option>
                <option value="Corrientes">Corrientes</option>
                <option value="Entre Rios">Entre Ríos</option>
                <option value="Formosa">Formosa</option>
                <option value="Jujuy">Jujuy</option>
                <option value="La Pampa">La Pampa</option>
                <option value="La Rioja">La Rioja</option>
                <option value="Mendoza">Mendoza</option>
                <option value="Misiones">Misiones</option>
                <option value="Neuquen">Neuquén</option>
                <option value="Rio Negro">Río Negro</option>
                <option value="Salta">Salta</option>
                <option value="San Juan">San Juan</option>
                <option value="San Luis">San Luis</option>
                <option value="Santa Cruz">Santa Cruz</option>
                <option value="Santa Fe">Santa Fe</option>
                <option value="Santiago del Estero">Santiago del Estero</option>
                <option value="Tierra del Fuego">Tierra del Fuego</option>
                <option value="Tucuman">Tucumán</option>
              </Form.Select>
              <Form.Text className="text-danger">{errors.provincia?.message}</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Localidad</Form.Label>
              <Form.Control
              type="text"
              minLength={5}
              maxLength={40}
              placeholder="Ingrese la localidad"
              {...register('localidad',{
                required: "Ingrese una localidad válida",
                pattern: {
                  value: /^[A-Z][a-zA-Z\sÁÉÍÓÚáéíóú]{4,39}$/,
                  message: "La localidad debe empezar con mayúscula y ser solo letras"
                },
              })}></Form.Control>
              <Form.Text className="text-danger">{errors.localidad?.message}</Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Registrar
            </Button>
          </Form>
        </Container>
    );
};

export default FormRegister;