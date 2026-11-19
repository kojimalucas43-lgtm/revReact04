import s from'./App.module.css'
import  { Menu } from './components/menu'
import bannerImg from '/bannerImg.jpg'

function App() {

  return (
    <>
      <Menu/>
        <div className={s.wraphome}>
          <div className={s.section1}>
              <div className={s.wrapImage}>
                <img className={s.imgSection} src={bannerImg} alt=''/>
              </div>
              <div className={s.wrapTexts}>
                <h1 className={s.tituloSection1}>Title</h1>
                <p className={s.textSection1}>lorem fds</p>
                <button className={s.btnSection1}>CLIQUE</button>
              </div>
          </div>

          <div className={s.setion2}>
            <iframe className={s.vid} src="https://www.youtube.com/embed/Ti2vjkcGiOo?si=nB8LIN0WvByUppzj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>

        </div>
    </>
    
  )
}

export default App
