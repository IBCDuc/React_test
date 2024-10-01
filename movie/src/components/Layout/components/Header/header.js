import './header.module.scss';
import img from './header.module.scss'
import { Link } from 'react-router-dom';
function Header() {
    return (
        <header className={img.wrapper}>
            <div className={img.inner}>
                <div class= {img.logo}>
                    <img src="https://i.imghippo.com/files/grryP1727434394.png"></img>
                </div>
                
                    <nav>
                        <ul>
                            <li><Link to="/" class={img.active}>HOME</Link></li>
                            <li><Link to="/movie">MOVIE</Link></li>
                            <li><Link to="/single-movie">SINGLE MOVIE</Link></li>
                            <li><Link to="/show-time">SHOWTIME</Link></li>
                            <li><Link to="top-rate">TOP RATED</Link></li>
                        </ul>
                    </nav>
                
            </div>
        </header>
    );
}

export default Header;
