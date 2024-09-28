import './header.module.css';
import img from './header.module.css'

function Header() {
    return (
        <header className={img.wrapper}>
            <div class= {img.logo}>
                <img src="https://i.imghippo.com/files/401Ki1727426888.png"></img>
            </div>
            <div>
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
