import Header from '~/components/Layout/components/Header/header';
import Content from './Content/index';
import layoutmodule from  './DefaultLayout.module.scss'
import Bigimg from '../Bigimg';
import Articlemovie from '../Articlemovie';
import MovieCarousel from '../Test';
import Vid from '../Vid-Photo';
import LastestNews from '../LastestNews';
import Footer from '../components/Footer';
import Home from '~/pages/Home';

function DefaultLayouts() {
    return (
        <div className= {layoutmodule.wrapper}>
            <Header />
            <Home/>
            <Footer />
        </div>
    );
}

export default DefaultLayouts;
