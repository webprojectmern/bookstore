import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Bookdetails = () => {
    const [input,setinput] =useState({
       
    });
    const history=useNavigate();
    const id=useParams().id;
    useEffect(()=>{
     const fetchHandler=async()=>{
   await axios.get(`http://localhost:5000/books/${id}`).then((res)=>res.data).then((data)=>setinput(data.book));
     };
     fetchHandler();
    },[id])
    const sendrequest=async()=>{
        axios.put(`http://localhost:5000/books/${id}`,{
            name:String(input.name),
            author:String(input.author),
            description:String(input.description),
           
            price:Number(input.price),
            image:String(input.image),
            available:Boolean(checked)
        }).then(res=>res.data)
    }
    const handlesubmit=(e)=>{
        e.preventDefault();
        sendrequest().then(()=>history('/books'));
    }
    
    const [checked,setchecked]=useState(false)
    const handlechange=(e)=>{
        setinput((prestate)=>({
            ...prestate,[e.target.name]:e.target.value,
        }))
    }
  return (
    <div>
      {input &&(
        <form onSubmit={handlesubmit}>
        <Box display="flex" flexDirection="column" justifyContent={"center"} maxWidth={500} 
          marginLeft={"auto"} marginRight={'auto'} marginTop={2}
        >
        <FormLabel>Name</FormLabel>
        <TextField value={input.name} onChange={handlechange} margin="dense" fullWidth variant='outlined' name="name"></TextField>
        <FormLabel>Author</FormLabel>
        <TextField value={input.author} onChange={handlechange} margin="dense" fullWidth variant='outlined' name="author"></TextField>
        <FormLabel>Description</FormLabel>
        <TextField value={input.description} onChange={handlechange} margin='dense' fullWidth variant='outlined' name="description"></TextField>
        
        <FormLabel>Price</FormLabel>
        <TextField value={input.price} onChange={handlechange} type='number' margin='dense' fullWidth variant='outlined' name="price"></TextField>
        <FormLabel>Image</FormLabel>
        <TextField value={input.image} onChange={handlechange} margin="dense" fullWidth variant="outlined" name="image"></TextField>
        <FormControlLabel  control={<Checkbox checked={checked} onChange={()=>setchecked(!checked)} />} label="available" />
        <Button variant='contained' type='submit'>Update Book</Button>
        </Box>
    </form>
      )}
    </div>
  )
}

export default Bookdetails