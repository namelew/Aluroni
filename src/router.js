import Homepage from 'pages/Homepage';
import FoodList from 'pages/FoodList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from 'components/Menu';

const AppRouter = () => {
    return (
        <Router>
            <Menu/>
            <Routes>
                <Route path='/' element={<Homepage/>}/>
                <Route path='/cardapio' element={<FoodList/>}/>
            </Routes>
        </Router>
    );
};

export default AppRouter;