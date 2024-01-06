'use client'
import React from 'react';
import Image from 'next/image'
import styles from "@/app/styles.module.css";
import Link from 'next/link';
import "react-responsive-carousel/lib/styles/carousel.css"; 
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });



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
            <Link class={styles.link} href="#about">ABOUT</Link>
            <Link class={styles.link} href="/roster">ROSTER</Link>
            <Link class={styles.link} href="/history">HISTORY</Link>
            <Link class={styles.link} href="/media">MEDIA</Link>
            <Link class={styles.link} style={{marginTop: '16px', marginBottom: '16px'}} href="/contact">CONTACT</Link>
        </nav>
    </header>
    <main> 
        <div class = {styles.parent}>
        <div style={{width: '70%'}}>
        <Carousel autoPlay={true} autoPlayInterval="5000" showStatus={false} showThumbs={false} infiniteLoop={true} showIndicators={true} showArrows={false} dynamicHeight={true}> 
            <div> 
              <img src="/images/team_photo_23.jpg" alt="image3"/> 
            </div> 

            <div> 
              <img src="/images/slider/slider_6.JPG" alt="image3"/> 
            </div> 
            <div> 
              <img src="/images/slider/2023hug.jpg" alt="image3"/> 
            </div> 
            <div> 
              <img src="/images/slider/slider_7.jpg" alt="image3"/> 
            </div> 
            <div> 
              <img src="/images/slider/slider_8.jpeg" alt="image3"/> 
            </div> 
          </Carousel>
          </div>
            <div>
            <Image
              src = "/images/pleiades-constellation-2.png"
              alt="constellation"
              width = {280}
              height={200}
              style={{marginTop: '20px'}}

            />
            </div>
            <div style={{marginBottom: '20px'}} id="about" class = {styles.section_head}>
              <p /*style = {{fontFamily: 'Times New Roman', fontSize: '20px', margin: '0px'}}*/>WHO ARE WE?</p>
            </div>
            <p class = {styles.txt} style={{maxWidth: '40%', margin: '0px', lineHeight: '30px'}}>Competing at the division 1 level in the USA Ultimate women's division, Pleiades brings together fun, 
                  driven, committed, and relentlessly supportive athletes at UNC Chapel Hill–whether you've played ultimate for years or have never touched a disc before college. We pride ourselves on being a nationally competitive and high acheiving team while maintaining a focus on fostering leadership, 
                  growth, development and friendship. Pleiades first qualified for Nationals in 2002 
                  and has since won the 2021, 2022, and 2023 USA Ultimate National Championships. We are 30 athletes,
                  seven stars, one team. 
            </p>

            <ReactPlayer url='https://youtu.be/roLMeKxdX8M?si=iKipGEira3LUH3GV' controls={true} style={{marginTop: '40px', width: '100%'}}/>

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
  )
}
