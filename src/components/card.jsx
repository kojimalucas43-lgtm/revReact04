import s from './card.module.css'
import Tilt from 'react-parallax-tilt';
import test from '/bannerImg.jpg'

export const Card = () => {
    return(
        <Tilt tiltReverse perspective={600} >
            <div className={s.card}>
                <div className={s.wrapImg}>
                    <img className={s.imagem} src={test} alt='img prod'/>
                </div>
                <div className={s.wrpaCardTexts}>
                    <h2 className={s.cardTitle}>TITLE</h2>
                    <p className={s.cardText}>IYYFTUFCUCUCUTUY</p>
                </div>
            </div>
        </Tilt>
    )
}