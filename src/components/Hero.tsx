import React, { Component } from 'react'

interface HeroProps {
  name: string
}

export class Hero extends Component<HeroProps> {
  render() {
    const {name} = this.props
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ytimg.com/vi/uYPbbksJxIg/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAwhX9nMUFLztvQWSOHFBJ787sFUA)'}}>
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center flex content-start text-neutral-content">
            <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{name? name : 'Oppenheimer'}</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn bg-opacity-30 hover:bg-white-100">Watch This</button>
            </div>
        </div>
        </div>
    )
  }
}

export default Hero