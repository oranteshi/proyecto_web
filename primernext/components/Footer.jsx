import React from 'react'
import Titulo from './Titulo'
import ContFooter from './ContFooter';
import styles from '../styles/components.module.css'
export default function Footer({infoFoo,fooCont}) {
    const titulo = infoFoo;
  return (
    <article className={styles.footer}>
        <section>
        <Titulo titulo={titulo} />
        </section>
        <section>
        <ContFooter fooCont={fooCont} />
        </section>
        
    </article>
  )
}
