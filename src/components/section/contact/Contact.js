import React, {useState, useRef, useEffect} from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPhone,faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons'
 import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Swal from "sweetalert2";

const Contact = () => {
  const [values, setValues] = useState([]);
  const [value, setValue] = useState('');
  const [errors, setErrors] = useState([]);
  const [isFormValid, setIsFormValid] = useState(false);
  const myForm = useRef(null);
  const [inicio, setInicio] = useState(true);
    
  useEffect(() => {
      if(inicio){
        let datos = JSON.parse(localStorage.getItem("listaMessage"));
        if(datos){
          setValues(datos)
        }
        setInicio(false)
      }
      localStorage.setItem('listaMessage',JSON.stringify(values))
 },[ value, values ])

  const handleSubmit = async (evt) => {
    evt.preventDefault();
     setValues({ 
       ...values,
       value
     } );
     const data = {
      values
     };
     try {
       const cabecera = {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(data),
       };
       const resultPost = await fetch('http://localhost:5000/message', cabecera);
       console.log(resultPost);
       if(resultPost.status === 201){
         Swal.fire(
           'Mensaje enviado ', 
           'corectamente',
           'success'
         )
       }
     } catch (error) {
       console.log(error)
     }
  }


  const handleChange = (evt) => {
    const input = evt.target;
     
    setValue( {...value,[input.name]: input.value})
    handleErrors(input);
  }

   const handleErrors = (input) => {
     const isValid = input.checkValidity();
     const inputName = input.name;

     if(!isValid && !errors.includes(inputName)) setErrors([...errors, inputName])
     if(isValid && errors.includes(inputName)) setErrors(errors.filter((error)=> error !== inputName))

     setIsFormValid(myForm.current.checkValidity());
   }
   const hasError = (inputName) => errors.includes(inputName);

   const getBorderStyle = (inputName) => {
     if(Object.keys(values).includes(inputName) && !hasError(inputName))
     return 'valid'
     if(Object.keys(values).includes(inputName) && hasError(inputName))
     return 'invalid'

     return '';
   }

  
    return(
        <>
 <body className='body-contact p-5'>
<div className="container  my-2">
  <div className='row'>
   <h1 className="text-light text-center p-2 my-2">GET IN TOUCH</h1>
  <div className=" col-xl-6 col-md-6 col-sm-12 contact-info p-2 ">
    <ul className='ul-contact text-light'>
      <li className='li-contact'><div className="circle-contact">
      <FontAwesomeIcon  icon={faHome} ></FontAwesomeIcon>
      </div > Tucuman, Argentina</li>
      <li className='li-contact'><div className="circle-contact">
       <FontAwesomeIcon  icon={faPhone} ></FontAwesomeIcon>
      </div> 381 3-19-73-63</li>
      <li className='li-contact'><div className="circle-contact">
       <FontAwesomeIcon  icon={faEnvelope} ></FontAwesomeIcon>
      </div> estebanvan9@gmail.com</li>
      <li className='li-contact'><div className="circle-contact">
       <FontAwesomeIcon  icon={faClock} ></FontAwesomeIcon>
      </div> Mon - Fri 9:00 AM to 4:00 PM</li>
    </ul>
    </div>
    <div className="col-xl-6 col-md-6 col-sm-12  ">
    <section className='container text-center'>
            <Form 
               onSubmit={handleSubmit}
               className='formValid'
               autocomplete='off'
               ref={myForm}
               id='myForm'
               >
        <section>
          <Form.Group >
            <Form.Label className='my-2' htmlFor='userName'>Name</Form.Label><br></br>
            <input 
               type="text"
               placeholder="Add name"
               onChange={handleChange}
               id='userName'
               name='userName'
               maxLenght='20'
               className={getBorderStyle('userName')}
               required
               />  
          </Form.Group>
             {
                 hasError('userName') && (
                   <span className='error'>
                    Este campo es requerido. Ingrese su nombre.
                   </span>
                 )
               }
          </section>
           <section>
            <Form.Group >
            <Form.Label className='my-2' htmlFor='userEmail'>Email</Form.Label><br></br>
            <input 
                type="email" 
                placeholder= "Add your Email Ej: usuario@gmail.com"
                onChange={handleChange}
                id='userEmail'
                name='userEmail'
                minLength='3'
                maxLength='25'
                className={getBorderStyle('userEmail')}
                required
               />
          </Form.Group>
              {
                 hasError('userEmail') && (
                  <span className='error'>
                    Este campo es requerido. Ingrese su email.
                  </span>
                )
               }
          </section>
          <section>
          <Form.Group >
            <Form.Label className='my-2' htmlFor='userMessage'>Message</Form.Label><br></br>
            <textarea 
               type="text"
               placeholder="write your message here"
               onChange={handleChange}
               id='userMessage'
               name='userMessage'
               maxLenght='70'
               className={getBorderStyle('userMessage')}
               required
               />  
          </Form.Group>
             {
                 hasError('userMessage') && (
                   <span className='error'>
                     Campo requerido.
                   </span>
                 )
               }
          </section>
          <Button variant="outline-primary text-light text-center" className='w-50 my-4' type="submit" disabled={!isFormValid}  >
            Enviar mensaje
          </Button>
            </Form>
      </section>
     
    </div>
  
</div>
</div>
</body>
      
        </>
    )
}

export default Contact;