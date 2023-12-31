import styles from './Dish.module.scss';
import menu from 'data/bill-of-fare.json';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import TagsDish from 'components/TagsDish';
import NotFound from 'pages/NotFound';
import DefaultPage from 'components/DefaultPage';

const Dish = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dish = menu.find(item => item.id === Number(id));

    if (!dish) {
        return <NotFound />;
    }

    return (
        <Routes>
            <Route path='*' element={<DefaultPage></DefaultPage>}>
                <Route index element={
                    <>
                        <button className={styles.back} onClick={() => navigate(-1)}>
                            {'< Voltar'}
                        </button>
                        <section className={styles.container}>
                            <h1 className={styles.title}>
                                {dish.title}
                            </h1>
                            <div className={styles.image}>
                                <img src={dish.photo} alt={dish.title} />
                            </div>
                            <div className={styles.content}>
                                <p className={styles.content__description}>
                                    {dish.description}
                                </p>
                                <TagsDish {...dish} />
                            </div>
                        </section>
                    </>
                } />
            </Route >
        </Routes >
    );
};

export default Dish;