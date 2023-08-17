import Homepage from 'pages/Homepage';
import FoodList from 'pages/FoodList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from 'components/Menu';
import DefaultPage from 'components/DefaultPage';
import About from 'pages/About';
import Footer from 'components/Footer';
import NotFound from 'pages/NotFound';

const AppRouter = () => {
    return (
        <main className='container'>
            <Router>
                <Menu/>
                <Routes>
                    <Route path='/' element={<DefaultPage></DefaultPage>}>
                        <Route index element={<Homepage/>}/>
                        <Route path='cardapio' element={<FoodList/>}/>
                        <Route path='sobre' element={<About/>}/>
                    </Route>
                    <Route path='*' element={<NotFound />}/>
                </Routes>
                <Footer/>
            </Router>
        </main>
    );
};

export default AppRouter;