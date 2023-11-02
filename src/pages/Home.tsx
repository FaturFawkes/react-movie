import React, { Component } from 'react'
import { withRouter } from '../withRouter'
import axios from "axios"
import Card from "../components/Card"
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Cookies from 'js-cookie'
import Input from '../components/Input'
import Button from '../components/Button'

interface HomeProps {
  navigate: any
  location: any
}

interface HomeState {
  myCookie: string
  data: any[]
}

export class Home extends Component<HomeProps, HomeState> {
  
  state = {
    myCookie: Cookies.get("Fatur") || "",
    data: []
  }

  handleSetCookie = () => {
    const {myCookie} = this.state
    Cookies.set('myCookie', myCookie, {path: '/'})
  }

  handleRemoveCookie() {
    Cookies.remove("myCookie")
  }
  
  baseUrl = import.meta.env.VITE_BASE_URL 
  apiKey = import.meta.env.VITE_API_KEY

  async handleMovie () {
    axios.get(`${this.baseUrl}/movie/upcoming?api_key=${this.apiKey}`)
    .then((response) => {
      console.log(response.data.results)
      this.setState({data: response.data.results})
    })
    .catch((err) => {
      console.log(err)
    })  
  }

  componentDidMount(): void {
    this.handleMovie()
  }

  render() {   
    const { data, myCookie } = this.state
    const { location } = this.props
    return (
      <>
        <div className='w-full h-full bg-black'>
          <Navbar/>
          <div className='w-[400px]'>
            <Input label='Cookie' name='input-cookies' type='text' value={myCookie} onChange={(e) => this.setState({myCookie: e.target.value})} />
            <Button label='Setr Cookie' name='button-cookies' onClick={() => this.handleSetCookie()} />
            <Button label='Remove Cookie' name='button-cookies' onClick={() => this.handleRemoveCookie()} />
          </div>
          <Hero name={location?.state?.username}/>
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
                  data.map((item: any, index) => {
                    return (
                      <Card key={index} image={item.backdrop_path} desc={item.overview} title={item.title} category={item.genre_ids}/>
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
}

export default withRouter(Home)