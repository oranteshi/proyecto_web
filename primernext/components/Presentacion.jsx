import React from "react";
import Titulo from "@/components/Titulo";
import Image from "next/image";
import styles from '../styles/components.module.css'
export default function Presentacion({ compoIm, titulo }) {
  return (
    <article className={styles.presentacion}>
      <section>
        <Titulo titulo={titulo} />
      </section>
      <section>
        {compoIm.map((cont) => (
          <Image
          className={styles.imgPre}
            key={cont}
            src={cont.url}
            alt={cont.alt}
            width={cont.width}
            height={cont.height}
          />
        ))}
      </section>
    </article>
  );
}
