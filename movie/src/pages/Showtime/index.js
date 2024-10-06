import MovieSeatSelection from "./components/MovieSeatSelection"
import './Showtime.css'
function Showtime() {
    return (
        <div className="wrapper">
            <div className="fontImage">
                <img src="https://i.imghippo.com/files/rcKRS1727877489.jpg" />
                <h2>Now Playing</h2>
            </div>
            <MovieSeatSelection />
        </div>
    )
}

export default Showtime;