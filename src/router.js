import Homepage from 'pages/Homepage';
import FoodList from 'pages/FoodList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from 'components/Menu';
import Header from 'components/Header';

const AppRouter = () => {
    return (
        <main>
            <Router>
                <Menu/>
                <Header>A casa do código e da massa</Header>
                <Routes>
                    <Route path='/' element={<Homepage/>}/>
                    <Route path='/cardapio' element={<FoodList/>}/>
                </Routes>
            </Router>
        </main>
    );
};

export default AppRouter;