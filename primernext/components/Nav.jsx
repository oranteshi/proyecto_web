import React from 'react'
import styles from '../styles/components.module.css';
export default function Nav({links}) {
  return (
    <>
        {links.map((link) => (
        <nav key={link.id} className={styles.nav}>
            <a href={link.url} className={styles.linkNav}>{link.text}</a>
        </nav>
      ))}
    </>
  )
}
