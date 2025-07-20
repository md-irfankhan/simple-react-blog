
import { useEffect, useState } from 'react'
import './App.css'
import Nav from './components/Nav/Nav'
import Cards from './components/Cards/Cards';

function App() {
  const [blogs,setBlogs]=useState([]);
  useEffect(()=>{
    fetch('api/api.json').then(res=>res.json()).
    then(data=>setBlogs(data.posts))
  },[])
  console.log(blogs)
  
  return (
    <>
     <Nav></Nav>
     <div className='flex max-w-[1280px] mx-auto'>
      <div className='w-2/3 flex flex-col gap-6 mt-8'>
           {
            blogs.map(blog=><Cards key={blog.id} blog={blog}></Cards>)
           }
      </div>
      <div className='w-1/3'>
        
      </div>
     </div>
    </>
  )
}

export default App
