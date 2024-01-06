"use client"
import styles from "@/app/styles.module.css";
import Link from 'next/link';
import Image from 'next/image'
import React, { Component } from 'react'; 
import "react-responsive-carousel/lib/styles/carousel.css"; 
import { Carousel } from 'react-responsive-carousel'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
//import ReactPlayer from 'react-player'
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
  

export default function historyPage(){
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
    <div class = {styles.parent} style={{width: '100%', height: '200px', overflow: 'clip', alignContent: 'center'}}>
    <Image
        src="/images/header-photo.jpg"
        alt="team photo"
        width = {1424}
        height={393}
        style={{
        maxWidth: '90%',
        height: 'auto',
        objectFit: 'contain',

        //position: 'relative'
        }}
    /> 
    </div>

    <div style={{display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'center'}}>
    <div style={{maxWidth: '45%',}}>
        <p style = {{
            color: 'black',
            fontFamily: 'Times New Roman',
            fontSize: '3em',
            /*marginLeft: '1.45em',*/
            marginTop: '20px',
            letterSpacing:'4px',
            marginBottom: '0px',
            width: 'fit-content'
        }}>
           HISTORY 
        </p>
        <p class = {styles.txt} style = {{
            letterSpacing: '1px',
            /*marginLeft: '4.3em',*/
            marginTop: '10px',
            lineHeight: '1.5em'

        }}> Pleiades was first founded in 1995 and made nationals for the first time in 2002. since then, the team has 
        gone on to have a total of thirteen nationals appearances. Throughout the 2000's and 2010's, a huge effort was put in by players and 
        coaches alike to build a consistent and sustainable program. With a special focus on building and grouwing youth ultimate in the Triangle, these efforts 
        have led to a six season streak of nationals appearances culminating in three consectutive national championships in 2021, 2022, and 2023. Pleiades has also seen numerous players 
        be named to national team rosters for the WFDF under 20 World Championships, under 24 World Championships, and World Ultimate Championships, as well as produced multiple Callahan Award winners. <br></br> </p>


   

    </div>


    <div style={{width: '45%', marginTop: '2em', alignContent: 'center', justifyContent: 'center'}}>
    <div style = {{maxWidth:'90%', marginLeft: '4em'}}>
    <Carousel autoPlay={true} autoPlayInterval="3000" showStatus={false} showThumbs={false} infiniteLoop={true} showIndicators={true} showArrows={false} dynamicHeight={true}> 
                  <div> 
                      <img src="/images/jess_martha.jpeg" alt="image1"/> 
  
                  </div> 
                  <div> 
                      <img src="/images/slider/2002SanDiegoTeam.jpg" alt="image2" /> 
  
                  </div> 
                  <div> 
                      <img src="/images/slider/2008CaliforniaTourney.JPG" alt="image3"/> 
  
                  </div> 
                  <div> 
                      <img src="/images/slider/teamSat.jpg" alt="image3"/> 
  
                  </div> 
                  <div> 
                      <img src="/images/slider/tyu_2019.jpg" alt="image3"/> 
  
                  </div> 
                  <div> 
                      <img src="/images/slider/slider_3.jpg" alt="image3"/> 
  
                  </div> 
                  <div> 
                      <img src="/images/slider/slider_4JPG.JPG" alt="image3"/> 
  
                  </div> 
                  <div> 
                      <img src="/images/slider/slider_5.JPG" alt="image3"/> 
  
                  </div> 
                  <div> 
                      <img src="/images/slider/slider_6.JPG" alt="image3"/> 
  
                  </div> 
              </Carousel> 
    </div>
    </div>
    </div>
    
    </main>

    <div class={styles.parent}><p style = {{margin: '60px'}}> ━━━━━━━━━━━━━━ </p></div>
              

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
