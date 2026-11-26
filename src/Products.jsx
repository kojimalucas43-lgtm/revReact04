import s from './Products.module.css'
import  { Menu } from './components/menu'
import  {Card } from './components/card'

function Products(){
    return(
        <>
        <Menu/>

        <section className={s.wrapProducts}>
            <Card/>
        </section>
       </>
    )
}

export default Products

