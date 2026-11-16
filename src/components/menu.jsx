import s from'./menu.module.css'

export const Menu = () => {
    return(
        <nav className={s.menu}>
            <a href='/'>Home</a>
            <a href=''>Instituição</a>
            <a href=''>produtos</a>
            <a href=''>contatos</a>
        </nav>
    )
}