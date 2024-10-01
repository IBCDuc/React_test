import DefaultLayout from '~/components/Layout/DefaultLayout/index';
import Header from '~/components/Layout/components/Header/header';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
function App() {
    return (
        <div>
            <Routes>
                <Route path ="/" element= {<DefaultLayout/>} />
            </Routes>
        </div>
    );
}

export default App; 
