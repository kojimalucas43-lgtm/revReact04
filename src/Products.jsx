import s from './Products.module.css'
import  { Menu } from './components/menu'
import  {Card } from './components/card'

function Products(){
    return(
        <>
        <Menu/>

        <section className={s.wrapProducts}>
            <Card imagem={teste} titulo="" texto="" />
        </section>
       </>
    )
}

export default Products

