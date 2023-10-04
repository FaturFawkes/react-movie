import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
    <div className="navbar sticky top-0 z-50 min-h-[10px] pl-5 p-0 bg-Eerie-black text-white border-b border-slate-500">
        <div className="flex-initial">
            <a className="btn btn-ghost normal-case text-xl px-6 hover:text-red-500">Noxflix</a>
        </div>
        <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="btn rounded-none normal-case text-xs bg-Eerie-black text-white hover:bg-Eerie-black border-none">Movies</label>
            <ul tabIndex={0} className="dropdown-content menu bg-Eerie-black w-52 z-[1]">
                <li><a className='text-white hover:text-red-400'>Most Watched</a></li>
                <li><a className='text-white hover:text-red-400'>Ratings</a></li>
                <li><a className='text-white hover:text-red-400'>Quality</a></li>
            </ul>
        </div>
        <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="btn rounded-none normal-case text-xs bg-Eerie-black text-white hover:bg-Eerie-black border-none">Tv Series</label>
            <ul tabIndex={0} className="dropdown-content menu bg-Eerie-black w-52 z-[1]">
                <li><a className='text-white hover:text-red-400'>Most Watched</a></li>
                <li><a className='text-white hover:text-red-400'>Marvel Studio Series</a></li>
                <li><a className='text-white hover:text-red-400'>Amazon Prime</a></li>
                <li><a className='text-white hover:text-red-400'>HBO</a></li>
            </ul>
        </div>
    </div>
    )
  }
}

export default Navbar