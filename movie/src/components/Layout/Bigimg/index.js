import styles from './bigimg.module.scss';
import { useState } from 'react';
function Bigimg() {
    const [buttonStatus, setStatus] = useState(1);
    const liArray = [1, 2, 3, 4, 5];
    const [slideShow, setSlideShow] = useState(1)
    const multidisplay = [
    {
        id: 1,
        name: "Ice Age: Collision Course",
        img: "https://i.imghippo.com/files/WBb071727452694.jpg",
        date: "Feb 16",
        content: "Peaches is engaged to marry a good-natured mammoth named Julian, to Manny's disapproval, as he finds Julian annoying and incapable of protecting Peaches."
    }, 
    {
        id: 2,
        name: "DEATH WISH",
        img: "https://i.imghippo.com/files/tiCEo1727506257.jpg",
        date: "Feb 20",
        content: "Peaches is engaged to marry a good-natured mammoth named Julian, to Manny's disapproval, as he finds Julian annoying and incapable of protecting Peaches."

    }]
    const prevArrow = () => {
        if (buttonStatus < 1) {
            return setStatus(multidisplay.length)
        }
        setStatus(buttonStatus -1)
    }
    const nextArrow = () => {
        if (buttonStatus > multidisplay.length) {
            return setStatus(1)
        }
        setStatus(buttonStatus + 1)
    }



    return (
        <div className={styles.wrapper} >
            <button class={styles.slickPrev} onClick = {prevArrow}>&lt;</button>

            {multidisplay.map((item) => {
                return (
                <div className={styles.MultiDisplay} key = {item.id} style={buttonStatus === item.id ? {
                    display: 'block'
                    
                } : {}
            }>
                    <div className={styles.slide}>
                        <a>
                            <img src={item.img}></img>
                        </a>
                    </div>
                    <div className={styles.TextOnImg}>
                        <h1>{item.name}</h1>
                        <div className={styles.OnImgDate}>
                            <h3>From</h3>
                            <h3 style = {{fontWeight: "750"}}>{item.date}</h3>
                        </div>
                        <p>{item.content}</p>
                        <br/>
                        
                        <div className={styles.OnImgButton}>
                            <a href='/'><span><i class="fa-solid fa-circle-check fa-lg" style={{  color: "#969d34", marginRight: "8px"}}></i>Reserve</span></a>
                            <a href='/'><span><i class="fa-solid fa-circle-info fa-lg" style= {{ color: "#7b8b2d", marginRight: "8px"}}></i>Detail</span></a>
                        </div>
                    </div>
                </div>
                )
            })}




            <button class={styles.slickNext} onClick = {nextArrow}>&gt;</button>

            <ul className={styles.pagination}>
                {liArray.map((item) => {
                    return (
                        <li key={item}>
                            <button key = {item} style = {item === buttonStatus ? {background : '#884c4c'} : {}} 
                            onClick={() => {
                                setStatus(item)
                            }}>
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
