import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Addbook() {
    const [input,setinput]=useState({
        name:'',
        description:'',
        price:'',
        author:'',
        link:'',
        image:'',

    });
    const [checked,setchecked]=useState(false);
    const history=useNavigate();
const handlechange=(e)=>{
    setinput((prestate)=>({
        ...prestate,[e.target.name]:e.target.value,
    }))
    
}
const sendrequest=async()=>{
axios.post("http://localhost:5000/books",{
    name:String(input.name),
    author:String(input.author),
    description:String(input.description),
    price:Number(input.price),
    
    image:String(input.image),
    available:Boolean(checked)
    
}).then(res=>res.data);
}
const handlesubmit=(e)=>{
    e.preventDefault();
    if(input.name.length<1){
        alert("please enter the name")
    }
    else if(input.author.length<1){
        alert("please enter author name");
    }
    else if(input.description.length<1){
        alert("please enter description");
    }
    else if(input.author.length<1){
        alert("please enter a valid Book Detail");
    }
    else if(input.price<1){
        alert("please enter a valid price");
    }
    
    else{
    sendrequest().then(()=>history('/books'))
    }
}
  return (
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
        <Button variant='contained' type='submit'>Add Book</Button>
        </Box>
    </form>
  )
}

export default Addbook