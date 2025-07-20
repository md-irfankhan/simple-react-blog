
import { useEffect, useState } from 'react'
import './App.css'
import Nav from './components/Nav/Nav'
import Cards from './components/Cards/Cards';
import Bookmark from './components/Bookmark/Bookmark';

function App() {
  const [blogs,setBlogs]=useState([]);
  const [bookmark,setBookmark]=useState([])
  useEffect(()=>{
    fetch('api/api.json').then(res=>res.json()).
    then(data=>setBlogs(data.posts))
  },[])
  // console.log(blogs)
  const handleBookmark=(blog)=>{
       setBookmark([blog,...bookmark]);
      //  console.log(bookmark)
  }
  return (
    <>
     <Nav></Nav>
     <div className='flex max-w-[1280px] mx-auto gap-2'>
      <div className='w-2/3 flex flex-col gap-6 mt-8'>
           {
            blogs.map(blog=><Cards key={blog.id} handleBookmark={handleBookmark} blog={blog}></Cards>)
           }
      </div>
      <div className='w-1/3 mt-8 '>
        <Bookmark bookmark={bookmark}></Bookmark>
      </div>
     </div>
    </>
  )
}

export default App
