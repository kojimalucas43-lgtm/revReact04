import { useState } from 'react'
import s from './Charts.module.css'
import  { Menu } from './components/menu'

function Charts(){

const [show, setShow] = useState("")

    return(
        <>
            <Menu/>

            <div className={s.wrapCharts}>
                <div className={s.wrapBtns}>
                    <button onClick={() => setShow("BAR")}>BAR</button>
                    <button onClick={() => setShow("PIZZA")}>PIZZA</button>
                    <button onClick={() => setShow("LINE")}>LINE</button>
                </div>

                
                {show === "BAR" && <h1>Gráf BAR</h1>}
                {show === "PIZZA" && <h1>Gráf PIZZA</h1>}
                {show === "LINE" && <h1>Gráf LINE</h1>}

            </div>
        </>
        
    )
}

export default Charts