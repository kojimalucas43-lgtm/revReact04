import { useState } from 'react'
import s from './Contact.module.css'
import { use } from 'react'



function Contact(){

    const[nome, setNome] = useState("")
    const[assunto, setAssunto] = useState("")

    const enviar = () => {
        const mensagem = `Gostaria de entrar em contato\n\nNome${nome} \nAssunto:${assunto}`
        const msg = encodeURIComponent(mensagem)
        window.open(`https://wa.me/5541999999999?text=${msg}`)
    }

    return(
        <div className={s.formulario}>
            <div className={s.wrapInputs}>
                <label htmlFor='nome'>Nome</label>
                <input type="text" placeholder='INsira seu nome' value={nome} onChange={(e) => setNome(e.target.value)}/>
            </div>

            <div className={s.wrapInputs}>
                <label htmlFor='assunto'>Assunto</label>
                <input type="text" placeholder='INsira o assunto' value={nome} onChange={(e) => setNome(e.target.value)}/>
            </div>
        </div>
    )
}

export default Contact