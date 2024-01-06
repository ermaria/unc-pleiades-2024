"use client"
import styles from "@/app/styles.module.css";
import Link from 'next/link';
import Image from 'next/image'
import React, { Component } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
//import ReactPlayer from 'react-player'
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
  

export default function rosterPage(){
return(
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
            <Link class= {styles.link} href="/history">HISTORY</Link>
            <Link class={styles.link} href="/media">MEDIA</Link>
            <Link class={styles.link} style={{marginTop: '16px', marginBottom: '16px'}} href="/contact">CONTACT</Link>
        </nav>
    </header>
        <main>
            <div class = {styles.parent}>
            <Image
            src="/images/team-photos/2024.jpg"
            alt="team photo"
            width = {919}
            height={620}
            style={{
            maxWidth: '60%',
            height: 'auto',
            objectFit: 'contain',
            //marginBottom: '30px'
            //position: 'relative'
        }}/> 
        <p class={styles.txt} style={{marginTop: '3px', fontSize: '12px', marginBottom: '30px'}}>Photo credit: Aayas Joshi</p>

            <p /*style = {{fontFamily: 'Times New Roman', fontSize: '20px', margin: '0px'}}*/ class = {styles.section_head}>
              2023 - 2024 ROSTER
            </p>
            <div style ={{display: 'flex', flexDirection: 'row'}}>
            <div>
              <p class = {styles.txt} style={{textAlign: 'center', lineHeight: '1.75em', margin: '0px', marginTop: '20px', marginRight: '15px'}}>
                Abby Stevens <br></br>
                Alex Hecht <br></br>
                Alli Reilly<br></br>
                Bella Russell<br></br>
                Caroline Spencer<br></br>
                Claudia Dare<br></br>
                Dawn Culton<br></br>
                Dhara Buebel<br></br>
                Emily Benson-Tyler<br></br>
                Emily Przykucki<br></br>
                Erica Birdsong<br></br>
                Eugenia Chow<br></br>
                Izi Myers-Miller<br></br>
                Jessica Wu<br></br></p> </div>

                <p class={styles.txt} style={{textAlign: 'center', lineHeight: '1.75em', margin: '0px', marginTop: '20px', marginLeft: '15px'}}> Kailyn Lowder<br></br>
                Katie Fradenburg<br></br>
                Kika Larrick<br></br>
                Kiryn Paine-Heise<br></br>
                Lisa Wei<br></br>
                Macy Hudson<br></br>
                Martha Plaehn<br></br>
                Megan Buchsbaum<br></br>
                Rachel Gordon<br></br>
                Rachel Yao<br></br>
                Ria Mandal<br></br>
                Sarah Combs<br></br>
                Selena Kleber<br></br>
                Sonia Rao<br></br> </p>
            </div>
            <p class={styles.txt}style={{marginTop: '10px'}}>Theresa Yu</p>

            <p class={styles.txt}style={{marginTop: '10px', marginBottom: '30px'}}>Coaches: Jessi Jones, Mary Rippe, Walker Matthews, Liam Searles-Bohs</p>
            <Link href="/rosters">
                <button class={styles.button} style={{marginBottom: '0px'}}> click here to view historic rosters</button>
            </Link>

            <p style = {{margin: '60px'}}> ━━━━━━━━━━━━━━ </p>


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
        </div>
    </main>
</body>
)
            }