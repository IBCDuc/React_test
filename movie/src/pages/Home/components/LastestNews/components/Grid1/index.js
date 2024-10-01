import styles from './Grid1.module.scss';
function Grid1() {
    return (
        <div className={styles.row1}>
            <div className={styles.grid1}>
                <div className={styles.blog1}>
                    <img src="http://demo.amytheme.com/movie/demo/elementor-single-cinema/wp-content/uploads/sites/2/2022/05/img_59.jpg" />
                    <div className={styles.blogTitle}>
                        <a className={styles.aTitle}>
                            <span>Six book-to-film adaptations to get excited about this autumn</span>
                        </a>
                        <a className={styles.Readmore}>
                            <span>Read more</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.grid1}>
                <div className={styles.blog1}>
                    <img src="http://demo.amytheme.com/movie/demo/elementor-single-cinema/wp-content/uploads/sites/2/2022/05/img_59.jpg" />
                    <div className={styles.blogTitle}>
                        <a className={styles.aTitle}>
                            <span>Six book-to-film adaptations to get excited about this autumn</span>
                        </a>
                        <a className={styles.Readmore}>
                            <span>Read more</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Grid1;
