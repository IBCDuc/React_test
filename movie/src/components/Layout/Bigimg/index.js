import styles from './bigimg.module.scss';
import { useState } from 'react';
function Bigimg() {
    const [Color, setColor] = useState(true);
    const liArray = [1, 2, 3, 4, 5];
    const handlerButton = () => {};

    return (
        <div className={styles.wrapper}>
            <div className={styles.MultiDisplay}>
                <div className={styles.slide}>
                    <a>
                        <img src="https://i.imghippo.com/files/WBb071727452694.jpg"></img>
                    </a>
                </div>
                <div className={styles.TextOnImg}>
                    <h1>Img main</h1>
                    <div className={styles.OnImgDate}>
                        <span>April 8th</span>
                    </div>
                    <h2>Content</h2>
                    <div className={styles.OnImgButton}>
                        <span>Button 1</span>
                        <span>Button 2</span>
                    </div>
                </div>
            </div>
            <ul className={styles.pagination}>
                {liArray.map((item) => {
                    return (
                        <li key={item}>
                            <button key = {item} onClick={(item) => {

                            }} >
                                {item}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Bigimg;
