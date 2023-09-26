import React from 'react'
import Titulo from './Titulo'
import Subtitulo from './Subtitulo'
import styles from '../styles/components.module.css'
export default function Informacion({infor,titInfo}) {
  return (
    <div className={styles.infoCont}>
        <h1>{titInfo}</h1>
    {infor.map((inf) =>(
   <article key={inf} className={styles.infoArt}>
    <section>
        <Titulo titulo={inf.titulo}/>
    </section>
    <section>
    <Subtitulo subtitulo={inf.subtitulo}/>
    </section>
   </article>
     ))}
   </div>
  )
}
