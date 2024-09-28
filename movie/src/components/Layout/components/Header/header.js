import './header.module.scss';
import img from './header.module.scss'

function Header() {
    return (
        <header className={img.wrapper}>
            <div className={img.inner}>
                <div class= {img.logo}>
                    <img src="https://i.imghippo.com/files/grryP1727434394.png"></img>
                </div>
                
                    <nav>
                        <ul>
                            <li><a href="#" class={img.active}>HOME</a></li>
                            <li><a href="#">MOVIE</a></li>
                            <li><a href="#">SINGLE MOVIE</a></li>
                            <li><a href="#">SHOWTIME</a></li>
                            <li><a href="#">TOP RATED</a></li>
                        </ul>
                    </nav>
                
            </div>
        </header>
    );
}

export default Header;
