import styles from "./Movies.module.scss"
import { articleitem } from "../Pagnigation/Api"
import PaginatedItems from "../Pagnigation"
function Movies() {
    return (
        <div className={styles.wrapper}>
            <PaginatedItems itemsPerPage={4}/>
            <div className={styles.topMovie}>
                <h2>Top Movie</h2>
                {articleitem.map((item) => {
                    return (
                        <div className={styles.sideEachMovie}>
                            <div className={styles.imgSideContent}>
                                <img src={item.img} />
                            </div>
                            <div className={styles.sideContent}>
                                <h3>{item.name}</h3>
                                <span>Duration: {item.Duration}</span>
                                <span>{item.genre}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={styles.pagenigation}>
                1 2 3 4
            </div>
        </div>
    )
}

export default Movies