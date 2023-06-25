import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Book.css'
import Book from './Book';
const URL="http://localhost:5000/books";

const fetchHandler=async()=>{
    return await axios.get(URL).then((res)=> res.data)
}
const getfilter=(query,item)=>{
if(!query)
return item
return item.filter(book=>book.name.includes(query));
}
function Books() {
  const [books,setbooks]=useState([]);
  const [query,setquery]=useState("");
    useEffect(()=>{
     fetchHandler().then((data)=>setbooks(data.books));
    },[])
    const filteritem=getfilter(query,books);
  
  return (
    <>
    <div className='searchbar'>
     <label>Search-Book </label><span class="tab"></span>
      <input type='search' onChange={e=>setquery(e.target.value)}/>
      </div>
   {(filteritem.length)?
   <div>
   <ul>
          { filteritem.map((book,i)=>(
           <li className="book" key={i}>
                <Book book={book}/>
           </li>
          ))}
   </ul>
</div>:
<div>
     <div className="Empty"> There is No Book</div>
       </div>
   
  }
    
    </>
  )
               
  
}

export default Books