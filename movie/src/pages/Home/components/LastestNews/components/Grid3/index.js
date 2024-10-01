import styles from './Grid3.module.scss';

function Grid3() {
    return (
        <div className={styles.row3}>
            <div className={styles.grid3}>
                <div className={styles.blog3}>
                    <img src="http://demo.amytheme.com/movie/demo/elementor-single-cinema/wp-content/uploads/sites/2/2022/05/img_54.jpg" />
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
            <div className={styles.grid3}>
                <div className={styles.blog3}>
                    <img src="http://demo.amytheme.com/movie/demo/elementor-single-cinema/wp-content/uploads/sites/2/2022/05/img_54.jpg" />
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

export default Grid3;
