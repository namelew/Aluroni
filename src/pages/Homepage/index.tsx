import menu from 'data/bill-of-fare.json';
import styles from './Homepage.module.scss';
import theme from 'styles/Theme.module.scss';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
    const recommendations = [...menu].sort(() => 0.5 - Math.random()).splice(0,3);
    //recommendations = recommendations.sort(() => 0.5 - Math.random()).splice(0,3);
    const navigate = useNavigate();

    return (
        <section>
            <h3 className={theme.title}>Recomendações da cozinha</h3>
            <div className={styles.recommendations}>
                {recommendations.map(dish => (
                    <div key={dish.id} className={styles.recommendation}>
                        <div className={styles.recommendation__image}>
                            <img src={dish.photo} alt={dish.title}/>
                        </div>
                        <button 
                            className={styles.recommendation__button}
                            onClick={() => navigate(`/prato/${dish.id}`, { state: { dish }})}
                        >Ver mais</button>
                    </div>
                ))}
            </div>
            <h3 className={theme.title}>Nossa casa</h3>
            <div className={styles.ourHome}>
                <img src="assets/nossa_casa.png" alt="casa do aluroni" />
                <div className={styles.ourHome__adress}>
                    Rua Verdeiro, 3185 <br/> <br/> Vila Mariana - SP
                </div>
            </div>
        </section>
    );
};

export default Homepage;