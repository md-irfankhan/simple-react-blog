
import { useEffect, useState } from 'react'
import './App.css'
import Nav from './components/Nav/Nav'
import Cards from './components/Cards/Cards';
import Bookmark from './components/Bookmark/Bookmark';

function App() {
  const [blogs,setBlogs]=useState([]);
  const [bookmark,setBookmark]=useState([])
  const [spent,setSpent]=useState(0);
  useEffect(()=>{
    fetch('api/api.json').then(res=>res.json()).
    then(data=>setBlogs(data.posts))
  },[])
  // console.log(blogs)
  const handleBookmark=(blog)=>{
      //  setBookmark([blog,...bookmark]);
       const filtered=bookmark.find(idx=>idx.id===blog.id);
       if(!filtered){
          setBookmark([blog,...bookmark]);
       }
      //  console.log(bookmark)
  }
  const handleMark=(time,id)=>{
         let tim=spent+time;
         setSpent(tim)
        const filtered= bookmark.filter(idx=>idx.id!==id);
        setBookmark(filtered)
  }
  return (
    <>
     <Nav></Nav>
     <div className='flex md:flex-row flex-col max-w-[1280px] mx-auto gap-2'>
      <div className='md:w-2/3 flex flex-col gap-6 mt-8'>
           {
            blogs.map(blog=><Cards key={blog.id} handleBookmark={handleBookmark} handleMark={handleMark} blog={blog}></Cards>)
           }
      </div>
      <div className='md:w-1/3 mt-8 '>
        <Bookmark bookmark={bookmark} spent={spent}></Bookmark>
      </div>
     </div>
    </>
  )
}

export default App
