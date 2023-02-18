import React, { useState } from 'react'
import './Hero.css'
import { Button } from './Button'
import { Link } from 'react-router-dom'

export default function Hero() {
    const [click, setclick] = useState(false)
    const handleclick = () => {
        setclick(!click)
    }
    return (
        <div className="wrapper">
            <div className="content-closed">
                <div className="hero-container">
                    <nav className="nav-bar">
                        <i class="fab fa-instagram fa-lg" />
                        <i class="fab fa-facebook-square fa-lg" />
                        <i class="fab fa-pinterest-square fa-lg" />
                        <i class={click ? "fas fa-bars fa-lg" : ""} onClick={handleclick} />
                    </nav>
                    <h1 className="name-text">Malik Ali<span className="bold">Nawaz</span></h1>
                    <div className="button-container">
                        {<Button>All</Button>}
                        {<Button>Blender</Button>}
                        {<Button>Sketch</Button>}
                        {<Button>Oil</Button>}
                        {<Button>Games</Button>}
                        {<Button>Portraits</Button>}
                    </div>
                </div>
            </div>
            <div className={click ? "drawer" : "drawer-open"}>
                <i class={click ? "" : "fas fa-times fa-lg"} onClick={handleclick} />
                <nav className="drawer-nav">
                    <div className="drawer-container">
                        <ul className="nav-list">
                            <li className="nav-items">
                                <Link to='/' className='nav-link'>Home</Link>
                            </li>
                            <li><hr class="solid" /></li>
                            <li className="nav-items">
                                <Link to='/' className='nav-link'>About Me</Link>
                            </li>
                            <li><hr class="solid" /></li>
                            <li className="nav-items">
                                <Link to='/' className='nav-link'>Artstation</Link>
                            </li>
                            <li><hr class="solid" /></li>
                            <li className="nav-items">
                                <Link to='/' className='nav-link'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>


    )
}
