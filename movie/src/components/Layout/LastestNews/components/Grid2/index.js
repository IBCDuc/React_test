import styles from './Grid2.module.scss';
function Grid2() {
    return (
        <div className={styles.row2}>
            <div className={styles.grid2}>
                <div className={styles.blog2}>
                    <img src="http://demo.amytheme.com/movie/demo/elementor-single-cinema/wp-content/uploads/sites/2/2022/05/img_57.jpg" />
                    <div className={styles.blogTitle}>
                        <a className={styles.aTitle}>
                            <span class = {styles.contentSpan}>Six book-to-film adaptations to get excited about this autumn</span>
                        </a>
                        <span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</span>
                        <a className={styles.Readmore}>
                            <span>Read more</span>
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Grid2;
