import React, { Component } from 'react'

interface Movie{
    id: number
    image: string
} 
export class Card extends Component<Movie> {
  render() {
    const {image} =  this.props
    return (    
        <div className="card w-[245px] h-[140px] mx-4 my-2 bg-Night p-0 rounded-none shadow-xl hover:scale-125 transition">
            <figure><img src={`${image}`} alt="Shoes" /></figure>
        </div>
    )
  }
}

export default Card