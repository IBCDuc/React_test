import React, { useState } from 'react';
import './MovieCarousel.css'; // Import your CSS file
import { movies } from './Api';

const MovieCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const moviesToShow = 9; // Số lượng movie card muốn hiển thị

    const nextMovie = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    };

    const prevMovie = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + movies.length) % movies.length);
    };

    const getMoviesToDisplay = () => {
        return movies
            .slice(currentIndex, currentIndex + moviesToShow)
            .concat(movies.slice(0, Math.max(0, currentIndex + moviesToShow - movies.length)));
    }; 

    
    return (
        <div className="carousel">
            <div className="img-carousel" >    
                <img  src="http://demo.amytheme.com/movie/demo/elementor-single-cinema/wp-content/uploads/sites/2/2022/05/bg_topmovie.png"/>
            </div>
            <button onClick={prevMovie} className="prev-carousel-button">
                {'<'}
            </button>
            <button onClick={nextMovie} className="next-carousel-button">
                {'>'}
            </button>
            
            <div className="carousel-container">
                <h2>Top Movies in Theatres</h2>
                <div className="movie-cards">
                    {getMoviesToDisplay().map((movie, index) => (
                        <div key={index} className={`movie-card ${index === 4 ? 'active' : ''}`}>
                            <img src={movie.poster} alt={movie.title} />
                            <div className={`content-slider ${index === 4 ? 'active' : ''}`}>
                                <p style={{fontSize: '20px'}}>{movie.title}</p>
                                <p style={{fontSize: '12px'}}>Release: {movie.releaseDate}</p>
                                <div className='a-content'>
                                    <a href="/">
                                            <span style={{fontSize: '12px'}}>
                                                <i
                                                    class="fa-solid fa-circle-check fa-lg"
                                                    style={{ color: '#fff', marginRight: '6px' }}
                                                ></i>
                                                Reserve
                                            </span>
                                        </a>
                                        <a href="/">
                                            <span style={{fontSize: '12px'}}>
                                                <i
                                                    class="fa-solid fa-circle-info fa-lg"
                                                    style={{ color: '#fff', marginRight: '6px' }}
                                                ></i>
                                                Detail
                                            </span>
                                        </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieCarousel;
