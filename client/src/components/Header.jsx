import React, { useState } from 'react'
import {AppBar, Tab, Tabs, Toolbar, Typography} from '@mui/material';
import {Link, NavLink} from 'react-router-dom';
import { Icon } from 'react-icons-kit'
import {book} from 'react-icons-kit/iconic/book'


function Header() {
    const [value,setvalue]=useState('Books');

  return (
    <div>
    <AppBar sx={{background:"#232F3D"}} position='sticky'>
        <Toolbar>
            <NavLink to="/" style={{color:'white'}}>
    <Typography><Icon icon={book} size={25} /></Typography></NavLink>
    <Tabs sx={{ml:"auto"}} textColor='inherit' indicatorColor='secondary' value={value} onChange={(e,val)=>{
        setvalue(val);
    }}>
        <Tab LinkComponent={Link} to='/add' label='Add product'/>
        <Tab LinkComponent={Link} to='/books' label='Books'/>
        <Tab LinkComponent={Link} to='/about' label='About Us'/>
        
    </Tabs>
    </Toolbar>
    </AppBar>
    </div>
  )
}

export default Header