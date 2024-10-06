import Movies from "./components/Movies"
import styles from "./Movie.module.scss"
function Movie() {
    return (
        <div>
            <div className={styles.fontImage}>
                <img src="https://i.imghippo.com/files/rcKRS1727877489.jpg" />
                <h2>Now Playing</h2>
            </div>
            <Movies/>
        </div>
    )
}

export default Movie;