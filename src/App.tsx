import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import Movie from './assets/dummy.json'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='w-full h-[2000px] bg-Eerie-black'>
      <Navbar/>
      <Hero/>
      <div className='text-left text-[10px] text-white font-mono m-10'>
        <h1>Trending Now</h1>
        <div className='flex flex-wrap mt-5 ml-[-10px]'>
          {
            Movie.map((item: any) => {
              return (
                <Card  id={item.id} image={item.image}/>
              )
            } )
          }
        </div>
      </div>
     </div>
    </>
  )
}

export default App
