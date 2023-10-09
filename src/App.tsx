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
          <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto max-w-7x1">
            <div className="flex flex-wrap w-full mb-4 p-4">
              <div className="w-full mb-6 lg:mb-0">
                <h1 className="sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-white">Box Office</h1>
                <div className="h-1 w-90 bg-indigo-500 rounded"></div>
              </div>
            </div>
            <div className="flex flex-wrap -m-4">
          {
            Movie.map((item: any) => {
              return (
                <Card  id={item.id} image={item.image}/>
              )
            })
          }
                      </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
