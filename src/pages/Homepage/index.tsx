import menu from 'data/bill-of-fare.json';
import styles from './Homepage.module.scss';
import tema from 'styles/Tema.module.scss';

const Homepage = () => {
    const recommendations = [...menu].sort(() => 0.5 - Math.random()).splice(0,3);
    //recommendations = recommendations.sort(() => 0.5 - Math.random()).splice(0,3);

    return (
        <section>
            <h3 className={tema.title}>Recomendações da cozinha</h3>
            <div className={styles.recommendations}>
                {recommendations.map(item => (
                    <div key={item.id} className={styles.recommendation}>
                        <div className={styles.recommendation__image}>
                            <img src={item.photo} alt={item.title}/>
                        </div>
                        <button className={styles.recommendation__button}>Ver mais</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Homepage;