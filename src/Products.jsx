import s from './Products.module.css'
import test from '/bannerImg.jpg'
import Tilt from 'react-parallax-tilt';

function Products(){
    return(
       <section className={s.wrapProducts}>
       <Tilt tiltReverse perspective={200} >

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
       </section>
    )
}

export default Products

