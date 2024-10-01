import styles from "./LastestNews.module.scss"
import Grid1 from "./components/Grid1";
import Grid2 from "./components/Grid2";
import Grid3 from "./components/Grid3";


function LastestNews() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.fontWrapper}>
                <div className={styles.image}>
                    <img src="http://demo.amytheme.com/movie/demo/elementor-single-cinema/wp-content/uploads/sites/2/2022/05/bg_latestnew.png"    />
                </div>
                <div className={styles.title}>
                    <h2>Latest News</h2>
                </div>
            </div>
            <div className={styles.content}>
                <Grid1 />
                <Grid2 />
                <Grid3 />
            </div>
        </div>
    )
}

export default LastestNews;