import Header from 'components/Header';
import { Outlet } from 'react-router-dom';

const DefaultPage = () => {
    return (
        <>
            <Header>A casa do código e da massa</Header>
            <div>
                <Outlet />
            </div>
        </>
    );
};

export default DefaultPage;