"use client"

import Link from "next/link";
import styles from "./home.module.css"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home({scrollPosition}) {

  return (
    <>
      <div className={styles.initial}>
        <div>
          <p>
            <span className={styles.red}>Olá! </span>
            Eu sou
          </p>
          <p>
            <span className={styles.red}>Kayky Almeida de Souza</span>
          </p>
          <p>Desenvolvedor Front-end</p>
        </div>
        {
          scrollPosition > 100 ? (
            <div className={styles.logo}>
              <Image
              src="/Logo.png"
              width={300}
              height={300}
              alt="Logo"
              />
            </div>
          ) : (
            <div className={styles.bigLogo}>
              <Image
              src="/Logo.png"
              width={300}
              height={300}
              alt="Logo"
              />
            </div>
          )
        }
        
      </div>
      <div className={styles.conteinerAbout}>
        <h2>Sobre</h2>
        <div className={styles.about}>
          <div>
            <p>
              Eu sou estudante de Engenharia da Computação no 5º semestre, com experiência acadêmica em projetos com JavaScript e React. Também tenho conhecimento em Git e Arduino.
            </p>
            <p>
              Além disso, aprimoro constantemente minha capacidade de resolver problemas complexos e trabalhar em equipe. Estou sempre aberto a aprender, compartilhar ideias e me conectar com profissionais que valorizem a tecnologia como ferramenta de transformação.
            </p>
          </div>
          <div className={styles.sociais}>
            <p>Linkedin.com/in/kaykyalmeida</p>
            <p>github.com/Deskkks</p>
            <p>kaykyalmeida@hotmail.com.br</p>
            <p>(11) 91091-0167</p>
          </div>
        </div>
      </div>
      <div className={styles.cdp}>
        <div className={`${styles.project} ${styles.left}`}>
          <div>
            <h2>Calendario de Pensamentos</h2>
          </div>
          <div className={styles.image}>
            <Link href="/cdp">
              <Image
                src="/cdp.png"
                width={1920}
                height={1080}
                alt="Aplicativo Calendario de Pensamentos"
              />
            </Link>  
          </div>
        </div>
        <div>
          <p>
            {/* Explicação calendario de pensamentos */}
          </p>
        </div>
      </div>
      <div className={styles.draining}>
        <div className={`${styles.project} ${styles.rigth}`}>
          <div>
            <h2>Draining</h2>
          </div>
          <div className={styles.image}>  
            <Link href="/draining">
              <Image
                src="/draining.png"
                width={1920}
                height={1080}
                alt="Aplicativo Calendario de Pensamentos"
              />
            </Link>
          </div>
        </div>
        <div>
          <p>
            {/* Explicação draining */}
          </p>
        </div>
      </div>
    </>
  );
}
