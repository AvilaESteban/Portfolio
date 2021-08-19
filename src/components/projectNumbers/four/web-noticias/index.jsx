import React, { useState, useEffect } from "react";
import {categorias, paises, getApiUrl} from './config';
import ListaNoticia from "./ListaNoticia";
import Footer from './Footer';
import Nav from './Nav';
import './noticia.css';
import  Form from 'react-bootstrap/Form';
import {useParams} from 'react-router-dom';
import { NavLink } from "react-router-dom";

const NoticiasHook = () =>{
    const {category} = useParams();
    const [categoria, setCategoria] = useState( category || 'general');
    const [pais, setPais] = useState('ar');
    const [listaNoticias, setListaNoticias] = useState([]);


useEffect(() => {
   fetchNoticia();
}, [categoria,pais])

  const fetchNoticia = async () => {
   const response = await fetch(getApiUrl(categoria, pais));
   const result = await response.json();
   setListaNoticias( result.articles);
   }

    return( 
         <>
           <Nav/>
             <Form onSubmit={evt => evt.preventDefault()} className='form '>
               <Form.Group className='bg-dark text-white w-50' controlId="exampleForm.SelectCustom">
                 <Form.Label className='label p-2' >Seleccione una Categoria</Form.Label>
                 <Form.Control className=' bg-white text-white w-50' name='categoria'  as="select" custom onChange={evt => setCategoria(evt.target.value)}>
                    {
                        categorias.map(option => (
                        <option value={option}  className='bg-dark text-white' selected={categoria === option}>{option}</option>
                        ))
                    }
                 </Form.Control>
                </Form.Group>
                 <Form.Group className='bg-dark text-white w-50' controlId="exampleForm.SelectCustom2">
                  <Form.Label className='label p-2' >Seleccione una Pais</Form.Label>
                   <Form.Control className=' bg-white text-white w-50' name='pais'  as="select" custom onChange={evt => setPais(evt.target.value)}>
                    {
                        paises.map(option => (
                        <option value={option}  className='bg-dark text-white' selected={pais === option}>{option}</option>
                        ))
                    }
                 </Form.Control>
               </Form.Group>
             </Form>
            <ListaNoticia
                noticias={listaNoticias}
            />
             <NavLink
              exact={true}
              className='text-light'
              to="/project"
            >
              Atras?
            </NavLink>
           <Footer/>
        </>
      )
  }


export default NoticiasHook;