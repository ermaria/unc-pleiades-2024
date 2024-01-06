'use client'
import React from 'react';
import Image from 'next/image'
import styles from "@/app/styles.module.css";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'




export default function Home() {
  return (
    <body style={{backgroundColor: '#e4ebf0'}}> 
    <header class = {styles.head}>
      <div class = {styles.box}>
            <Link style={{
              color: '#7BAFD4', 
              fontFamily: 'Times New Roman', 
              fontSize: '3.5em', 
              margin: '0px',
              marginTop: '10px',
              justifySelf: 'center',
              textDecoration: 'none',
              letterSpacing: '12px'
              }} href = '/'>PLEIADES 
            </Link>
          </div>

          <nav class = {styles.hbox}>
            <Link class={styles.link} href="/#about">ABOUT</Link>
            <Link class={styles.link} href="/roster">ROSTER</Link>
            <Link class={styles.link} href="/history">HISTORY</Link>
            <Link class={styles.link} href="/media">MEDIA</Link>
            <Link class={styles.link} style={{marginTop: '16px', marginBottom: '16px'}} href="/contact">CONTACT</Link>
        </nav>
    </header>
    <main> 
    <div class = {styles.parent}>
        
        <Image
            src="/images/2021semi.jpg"
            alt="team photo"
            width = {1424}
            height={393}
            style={{
              maxWidth: '50%',
              height: 'auto',
              objectFit: 'contain',
              //position: 'relative'
            }}
          /> 

        <p class={styles.section_head} style={{marginTop: '20px'}}>CONTACT US</p>
        <p class={styles.txt}> For general questions or if you are a prospective student interested in UNC or Pleiades, please email</p> <p class={styles.txt} style={{color: '#7BAFD4', margin: '0px', fontWeight: 'bold', fontSize: '17px'}}>uncpleiades@gmail.com</p>
        <p class={styles.txt}>If you are an alumni interested in becoming involved with the UNC ultimate alumni network, email </p><p class={styles.txt} style={{color: '#7BAFD4', margin: '0px', fontWeight: 'bold', fontSize: '17px'}}>uncultimate@gmail.com</p>
        <p class={styles.txt} style={{marginBottom: '0px'}}>We can't wait to hear from you!</p>
        <p style = {{margin: '60px'}}> ━━━━━━━━━━━━━━ </p>
        </div>

    </main>
              

    <footer /*style={{position: 'sticky', bottom: '0', zIndex: '999'}}*/>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: '30px'}}>
          <Link href="https://www.youtube.com/@uncpleiades9016" class={styles.link} style={{marginRight: '18px'}}>
            <FontAwesomeIcon icon={faYoutube} style={{/*color: '#06193d',*/ width: '30px', height: '30px'}} />
            </Link>

            <Link href="https://www.instagram.com/uncpleiades" class={styles.link} style={{marginRight: '18px'}}>
            <FontAwesomeIcon icon={faInstagram} style={{/*color: '#06193d',*/ width: '30px', height: '30px'}} />
            </Link>

            <Link href="https://twitter.com/unc_pleiades" class={styles.link} style={{marginRight: '18px'}}>
            <FontAwesomeIcon icon={faTwitter} style={{/*color: '#06193d',*/ width: '30px', height: '30px'}} />
            </Link>

            <Link href="https://www.facebook.com/unc.pleiades/" class={styles.link} style={{marginRight: '18px'}}>
            <FontAwesomeIcon icon={faFacebook} style={{/*color: '#06193d',*/ width: '30px', height: '30px'}} />
            </Link>

    </div>
    </footer>

</body>
)}