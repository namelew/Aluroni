import Homepage from 'pages/Homepage';
import FoodList from 'pages/FoodList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Homepage/>}/>
                <Route path='/cardapio' element={<FoodList/>}/>
            </Routes>
        </Router>
    );
};

export default AppRouter;