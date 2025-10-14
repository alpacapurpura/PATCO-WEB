import React, { useState } from 'react';
import Swal from 'sweetalert2';

import { Constantes } from '../common/Constantes';
import { api } from '../api/api';

import '../css/Contacto.css';

const Contacto = () => {
  const [checked, setChecked] = React.useState(false);
  const [process, setProcces] = useState(false);
  const [user, setUser] = useState({
    name: '',
    last: '',
    email: '',
    phone: '',
    message: '',
    errors: {
      name: '',
      last: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const sendEmail = () => {
    if (!checked) {
      Swal.fire({
        title: 'Mensaje',
        text: 'Debe aceptar las políticas',
        icon: 'warning',
        confirmButtonColor: '#00B181',
        confirmButtonText: 'Ok',
      });
    } else {
      const formula = document.getElementById('idformulario');
      const datos = formula.querySelectorAll('input');
      let correcto = true;
      datos.forEach((item) => {
        let valor = validate(item.name, item.value);
        if (item.type === 'text' && item.value === '' && valor !== '') {
          correcto = false;
        } else if (item.type !== 'checkbox' && valor !== '') {
          correcto = false;
        }
      });
      const message = formula.querySelector('textarea');
      let valor = validate(message.name, message.value);

      if (message.value === '' && valor !== '') {
        correcto = false;
      }
      if (!correcto) {
        Swal.fire({
          title: 'Mensaje',
          text: 'Debe llenar todos los datos del formulario',
          icon: 'warning',
          confirmButtonColor: '#00B181',
          confirmButtonText: 'Ok',
        });
      } else if (validateForm(user.errors)) {
        setProcces(true);
        let request = {
          ie: Constantes.TOKEN,
          no: `${user.name} ${user.last}`,
          uc: user.email,
          nt: user.phone,
          ms: user.message,
        };
        api
          .post(`${Constantes.BASE}/v1/webs/informar`, request)
          .then(() => {
            handleClean();
            Swal.fire({
              icon: 'success',
              title: 'Correo enviado',
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch(() => {
            Swal.fire({
              title: 'Mensaje',
              text: 'Error al enviar el correo',
              icon: 'error',
              confirmButtonColor: 'red',
              confirmButtonText: 'Ok',
            });
          })
          .finally(() => setProcces(false));
      }
    }
  };

  const handleClean = () => {
    setProcces(false);
    setChecked(false);
    setUser({
      name: '',
      last: '',
      email: '',
      phone: '',
      message: '',
      errors: {
        name: '',
        last: '',
        email: '',
        phone: '',
        message: '',
      },
    });
  };

  const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      // if we have an error string set valid to false
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let errores = {
      name: '',
      last: '',
      email: '',
      phone: '',
      message: '',
    };

    switch (name) {
      case 'name':
        errores.name = validate(name, value);
        break;
      case 'last':
        errores.last = validate(name, value);
        break;
      case 'email':
        errores.email = validate(name, value);
        break;
      case 'phone':
        errores.phone = validate(name, value);
        break;
      case 'message':
        errores.message = validate(name, value);
        break;
      default:
        break;
    }

    setUser((prev) => ({
      ...prev,
      [name]: value,
      errors: errores,
    }));
  };

  const validate = (name, value) => {
    switch (name) {
      case 'name':
        const validNameRegex = new RegExp(
          /^[a-zA-Z0-9\s\u00e1\u00e9\u00ed\u00f3\u00fa\u00c1\u00c9\u00cd\u00d3\u00da\u00f1\u00d1]{3,30}$/
        );
        return value.length < 3
          ? 'Ingrese su nombre'
          : !validNameRegex.test(value)
          ? 'No debe ingresar caracteres extraños'
          : '';
      case 'last':
        const validLastRegex = new RegExp(
          /^[a-zA-Z0-9\s\u00e1\u00e9\u00ed\u00f3\u00fa\u00c1\u00c9\u00cd\u00d3\u00da\u00f1\u00d1]{3,30}$/
        );
        return value.length < 3
          ? 'Ingrese sus apellidos'
          : !validLastRegex.test(value)
          ? 'No debe ingresar caracteres extraños'
          : '';
      case 'email':
        const validEmailRegex = RegExp(
          /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|("."))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        );
        return !validEmailRegex.test(value) ? 'Email inválido' : '';
      case 'phone':
        const validPhoneRegex = new RegExp(/^[0-9\b]{8,9}$/);
        return !validPhoneRegex.test(value) ? 'Teléfono inválido' : '';
      case 'message':
        const validTextRegex = new RegExp(
          /^[a-zA-Z0-9-/.:+,\s\u00e1\u00e9\u00ed\u00f3\u00fa\u00c1\u00c9\u00cd\u00d3\u00da\u00f1\u00d1]{3,500}$/
        );
        return value.length < 3
          ? 'Ingrese su mensaje'
          : !validTextRegex.test(value)
          ? 'No debe ingresar caracteres extraños'
          : '';
      default:
        return '';
    }
  };

  return (
    <>
      <div className="op-body">
        <div className="op-contenedor">
          <h2 className="title">Cont&aacute;ctenos</h2>
          <div className="datos">
            <div className="formulario">
              <span className="subtitle">Formulario de contacto</span>
              <form id="idformulario">
                <div className="texto">
                  <label>Nombre</label>
                  {user.errors.name.length > 0 && (
                    <span>{user.errors.name}</span>
                  )}
                  <input
                    name="name"
                    value={user.name}
                    type="text"
                    placeholder="Nombre"
                    maxLength="30"
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="texto">
                  <label>Apellidos</label>
                  {user.errors.last.length > 0 && (
                    <span>{user.errors.last}</span>
                  )}
                  <input
                    name="last"
                    value={user.last}
                    type="text"
                    placeholder="Apellidos"
                    maxLength="30"
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="texto">
                  <label>Email</label>
                  {user.errors.email.length > 0 && (
                    <span>{user.errors.email}</span>
                  )}
                  <input
                    name="email"
                    value={user.email}
                    type="email"
                    placeholder="Email"
                    maxLength="80"
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="texto">
                  <label>Tel&eacute;fono / Celular</label>
                  {user.errors.phone.length > 0 && (
                    <span>{user.errors.phone}</span>
                  )}
                  <input
                    name="phone"
                    value={user.phone}
                    type="tel"
                    placeholder="Teléfono"
                    pattern="[0-9]{9}"
                    required="required"
                    maxLength="9"
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="texto col-1">
                  <label>Mensaje</label>
                  {user.errors.message.length > 0 && (
                    <span>{user.errors.message}</span>
                  )}
                  <textarea
                    name="message"
                    value={user.message}
                    rows="5"
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="check col-1">
                  <input
                    id="txtCheck"
                    type="checkbox"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                  ></input>
                  <label htmlFor="txtCheck">
                    Acepto las pol&iacute;ticas de seguridad
                  </label>
                </div>
                <div className="accion col-1">
                  <button
                    type="button"
                    disabled={process}
                    onClick={() => sendEmail()}
                  >
                    {process && (
                      <i className="fa fa-spinner fa-pulse fa-fw"></i>
                    )}
                    Enviar ahora
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacto;
