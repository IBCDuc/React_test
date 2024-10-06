import styles from './Articlemovie.module.scss';
import { articleitem } from './Api';
function Articlemovie() {
    return (
        <div className={styles.wrapper}>
            {articleitem.map((item) => {
                return (
                    <div className={styles.articleitem}>
                        <article>
                            <div className={styles.thumb}>
                                <img src={item.img} />
                            </div>
                            <div className={styles.content}>
                                <h4>{item.name}</h4>
                                <span>{item.date}</span>
                                <div className={styles.OnImgButton}>
                                    <a href="/">
                                        <span>
                                            <i
                                                class="fa-solid fa-circle-check fa-lg"
                                                style={{ color: '#969d34', marginRight: '8px' }}
                                            ></i>
                                            Reserve
                                        </span>
                                    </a>
                                    <a href="/">
                                        <span>
                                            <i
                                                class="fa-solid fa-circle-info fa-lg"
                                                style={{ color: '#7b8b2d', marginRight: '8px' }}
                                            ></i>
                                            Detail
                                        </span>
                                    </a>
                                </div>
                                <div className={styles.openclick}>
                                    <h2 className={styles.titleOpen}>{item.name}</h2>
                                    <div className={styles.descOpen}>
                                        <p><span>Release: </span>{item.date}</p>
                                        <p><span>Genre: </span>{item.genre}</p>
                                        <p><span>Duration: </span>{item.Duration}</p>
                                        <p><span>Language: </span>{item.Language}</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </article>
                    </div>
                );
            })}
        </div>
    );
}

export default Articlemovie;
