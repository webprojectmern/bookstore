import { Button } from '@mui/material';
import React from 'react'
import './Book.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Book=(props)=>{
    const history=useNavigate();
   const { _id,name,author,description,price,image}=props.book;
   const deletehandler=async()=>{
   await axios.delete(`http://localhost:5000/books/${_id}`)
   .then((res)=>res.data)
   
  
   
   
 
   }
   return (
   <div className='card'>
    <img src={image} alt={name}/>
    <article style={{fontSize:'13px'}}>By {author}</article>
    <h3 style={{padding:'5px',fontSize:'25px'}}>{name}</h3>
    <p style={{fontSize:'13px'}}>{description}</p>
    
    <h3 style={{color:'red',fontWeight:'bolder',fontSize:'25px'}}>Rs {price}</h3>
    <Button style={{color:"blue"}} LinkComponent={Link} to={`/books/${_id}`} sx={{mt:"auto"}} >Update</Button>
    <Button style={{color:"red" ,margin:"auto"}} onClick={deletehandler} >Delete</Button>
    
   </div>
   )

};
export default Book