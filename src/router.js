import Homepage from 'pages/Homepage';
import FoodList from 'pages/FoodList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from 'components/Menu';
import DefaultPage from 'components/DefaultPage';

const AppRouter = () => {
    return (
        <main>
            <Router>
                <Menu/>
                <Routes>
                    <Route path='/' element={<DefaultPage></DefaultPage>}>
                        <Route index element={<Homepage/>}/>
                        <Route path='cardapio' element={<FoodList/>}/>
                    </Route>
                </Routes>
            </Router>
        </main>
    );
};

export default AppRouter;