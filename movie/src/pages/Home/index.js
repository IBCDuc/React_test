import Bigimg from './components/Bigimg';
import Content from '~/components/Layout/DefaultLayout/Content';
import Articlemovie from './components/Articlemovie';
import MovieCarousel from './components/Test';
import Vid from './components/Vid-Photo';
import LastestNews from './components/LastestNews';
import layoutmodule from './Movie.module.scss'
function Home() {
    return (
        <div className="homeWrapper">
            <Bigimg />
            <div className={layoutmodule.container}>
                <Content />
                <Articlemovie />
            </div>
            <div className={layoutmodule.Carousel}>
                <MovieCarousel />
            </div>
            <div className={layoutmodule.vidContainer}>
                <Vid />
            </div>
            <div className={layoutmodule.LastestNews}>
                <LastestNews />
            </div>
        </div>
    );
}

export default Home;
