import React from 'react'
import './Gallery.css'

export default function Gallery() {

    return (

        <div className="portfolio-container">
            <div className="gallery-container w-1 h-2">
                <div className="gallery-item">
                    <div className="image">
                        <img src="https://source.unsplash.com/1600x900/?motorcycle" alt="motorcycle" />
                    </div>
                    <div className="text">Motorcycle</div>    
                </div>
                <div className="gradient-container"></div>   
            </div>

            <div className="gallery-container w-1 h-3">
                <div className="gallery-item">
                    <div className="image">
                        <img src="https://source.unsplash.com/1600x900/?cars" alt="cars" />
                    </div>
                    <div className="text">Cars</div>
                </div>
                <div className="gradient-container"></div>   
            </div>

            <div className="gallery-container w-1 h-2">
                <div className="gallery-item">
                    <div className="image">
                        <img src="https://source.unsplash.com/1600x900/?animals" alt="animals" />
                    </div>
                    <div className="text">Animals</div>
                </div>
                <div className="gradient-container"></div>
            </div>

            <div className="gallery-container w-1 h-3">
                <div className="gallery-item">
                    <div className="image">
                        <img src="https://source.unsplash.com/1600x900/?sport" alt="sport" />
                    </div>
                    <div className="text">Sports</div>
                </div>
                <div className="gradient-container"></div>
            </div>

            <div className="gallery-container w-1 h-2">
                <div className="gallery-item">
                    <div className="image">
                        <img src="https://source.unsplash.com/1600x900/?education" alt="education" />
                    </div>
                    <div className="text">Education</div>
                </div>
                <div className="gradient-container"></div>
            </div>

            <div className="gallery-container w-1 h-3">
                <div className="gallery-item">
                    <div className="image">
                        <img src="https://source.unsplash.com/1600x900/?food" alt="food" />
                    </div>
                    <div className="text">Food</div>
                </div>
                <div className="gradient-container"></div>
            </div>

            <div className="gallery-container h-3">
                <div className="gallery-item">
                    <div className="image">
                        <img src="https://source.unsplash.com/1600x900/?adventure" alt="adventure" />
                    </div>
                    <div className="text">Adventure</div>
                </div>
                <div className="gradient-container"></div>
            </div>

            <div className="gallery-container h-2">
                <div className="gallery-item">
                    <div className="image">
                        <img src="https://source.unsplash.com/1600x900/?art" alt="art" />
                    </div>
                    <div className="text">Art</div>
                </div>
                <div className="gradient-container"></div>
            </div>
            
        </div>
    )
}
