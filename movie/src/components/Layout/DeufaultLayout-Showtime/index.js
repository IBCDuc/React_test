import Header from '~/components/Layout/components/Header/header';
import layoutmodule from  './DefaultLayout.module.scss'
import Footer from '../components/Footer';
import Showtime from '~/pages/Showtime';
import SingleMovie from '~/pages/SingleMovie';

function DefaultLayoutShowtime() {
    return (
        <div className= {layoutmodule.wrapper}>
            <Header />
            <div className={layoutmodule.Content}>
                <Showtime />
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayoutShowtime;