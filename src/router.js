import Homepage from 'pages/Homepage';
import Menu from 'pages/Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Homepage/>}/>
                <Route path='/cardapio' element={<Menu/>}/>
            </Routes>
        </Router>
    );
};

export default AppRouter;