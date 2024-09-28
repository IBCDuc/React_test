import Header from '~/components/Layout/components/Header/header';
import Content from './Content/index';
import layoutmodule from  './DefaultLayout.module.scss'
import Bigimg from '../Bigimg';

function DefaultLayouts() {
    return (
        <div className= {layoutmodule.wrapper}>
            <Header />
            <Bigimg />
            <div className={layoutmodule.container}>
                <Content />
            </div>
        </div>
    );
}

export default DefaultLayouts;
