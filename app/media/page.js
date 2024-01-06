'use client'
import React from 'react';
import Image from 'next/image'
import styles from "@/app/styles.module.css";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
//import ReactPlayer from 'react-player'
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });



export default function Media(){
   
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
            <Link class={styles.link} href="/history">HISTORY</Link>
            <Link class={styles.link} href="/media">MEDIA</Link>
            <Link class={styles.link} style={{marginTop: '16px', marginBottom: '16px'}} href="/contact">CONTACT</Link>
        </nav>
    </header>
       <main>
            <div class={styles.parent}>
            <p style = {{
            color: 'black',
            fontFamily: 'Roboto',
            fontSize: '2.75em',
            /*marginLeft: '1.45em',*/
            marginTop: '20px',
            letterSpacing:'4px',
            marginBottom: '20px',
            width: 'fit-content'
        }}>
           MEDIA
        </p>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', /*alignItems: 'center',*/ width: '100%'}}>
                    <div class={styles.player_wrapper} style={{marginRight:'20px', justifyContent: 'left',}}>
                        <p class={styles.txt} style={{fontSize: '25px', textAlign: 'center'}}>Videos</p>
                        <ReactPlayer url='https://youtu.be/1uUqXX5QhBQ?si=5JvM_EBfaPb0FFwH' controls={true} style={{marginBottom: '25px', width: '100%'}}/>
                        <ReactPlayer url='https://youtu.be/m-0uwBSCg_o?si=24JaMJiJZnqiEoz6' controls={true} style={{marginBottom: '25px', width: '100%'}}/>
                        <ReactPlayer url='https://youtu.be/QnzkRjcjlWI?si=Kil5YNy_EyRCzuNG' controls={true} style={{marginBottom: '25px', width: '100%'}}/>
                        <ReactPlayer url='https://youtu.be/lPucgR3LdWY?si=RXne2_n0mKHrb4wm' controls={true} style={{marginBottom: '25px', width: '100%'}}/>
                        <ReactPlayer url='https://youtu.be/ZzLuvLM0UHg?si=IKU_awDFkCZmj_gw' controls={true} style={{marginBottom: '25px', width: '100%'}}/>
                        <ReactPlayer url='https://youtu.be/C4tdTLrx-To?si=Rex-iNgBj4xrcSxT' controls={true} style={{marginBottom: '25px', width: '100%'}}/>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', marginBottom: '20px', verticalAlign: 'top', marginLeft: '30px',}}>
                    <p class={styles.txt} style={{fontSize: '25px', textAlign: 'center', letterSpacing: '1px'}}>Photos</p>
                    <Link href='https://www.flickr.com/photos/dcjuengst/albums/72177720309106946' style={{position: 'relative'}}>
                    <Image
                        src = "/images/media_teamphoto.jpg"
                        alt="constellation"
                        width = {641}
                        height={450}
                        class={styles.photo_link}
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                            objectFit: 'contain',
                            /*marginBottom: '40px',*/
                            position: 'relative',
                            borderRadius: '13px'
                        }}

                    /> 
                    </Link>
                    <p class={styles.txt} style={{marginTop: '0px', fontSize: '12px', marginBottom: '30px'}}>Photo credits: Dan Juengst</p>

                    <Link href='https://www.flickr.com/photos/dcjuengst/albums/72177720309106946'>
                    <Image
                        src = "/images/regionals_2023.jpg"
                        alt="constellation"
                        width = {641}
                        height={450}
                        class={styles.photo_link}
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                            objectFit: 'contain',
                            borderRadius: '13px'
                            //marginBottom: '40px'
                            //position: 'relative'
                        }}

                    />
                    </Link> 
                    <p class={styles.txt} style={{marginTop: '0px', fontSize: '12px', marginBottom: '30px'}}>Photo credits: Dan Juengst</p>

                    <Link href='https://www.flickr.com/photos/dcjuengst/albums/72177720306155403'>
                    <Image
                        src = "/images/qctu.jpg"
                        alt="constellation"
                        width = {641}
                        height={450}
                        class={styles.photo_link}
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                            objectFit: 'contain',
                            borderRadius: '13px'
                            //marginBottom: '40px'
                            //position: 'relative'
                        }}

                    /> 
                    </Link>
                    <p class={styles.txt} style={{marginTop: '0px', fontSize: '12px', marginBottom: '30px'}}>Photo credits: Dan Juengst</p>

                    <Link href='https://www.flickr.com/photos/dcjuengst/albums/72177720299557248'>
                    <Image
                        src = "/images/natties2022.jpg"
                        alt="constellation"
                        width = {641}
                        height={450}
                        class={styles.photo_link}
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                            objectFit: 'contain',
                            borderRadius: '13px'
                            //marginBottom: '40px'
                            //position: 'relative'
                        }}

                    />
                    </Link>
                    <p class={styles.txt} style={{marginTop: '0px', fontSize: '12px', marginBottom: '30px'}}>Photo credits: Dan Juengst</p>

                    <Link href='https://www.flickr.com/photos/dcjuengst/albums/72177720295508936'>
                    <Image
                        src = "/images/nationals2021.jpg"
                        alt="constellation"
                        width = {641}
                        height={450}
                        class={styles.photo_link}
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                            objectFit: 'contain',
                            borderRadius: '13px'
                            //marginBottom: '40px'
                            //position: 'relative'
                        }}

                    />
                    </Link>
                    <p class={styles.txt} style={{marginTop: '0px', fontSize: '12px', marginBottom: '30px'}}>Photo credits: Dan Juengst</p>

                    <Link href='https://www.flickr.com/photos/dcjuengst/albums/72157720163636479'>
                    <Image
                        src = "/images/regionals2021.jpg"
                        alt="constellation"
                        width = {641}
                        height={450}
                        class={styles.photo_link}
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                            objectFit: 'contain',
                            borderRadius: '13px'
                            //marginBottom: '40px'
                            //position: 'relative'
                        }}

                    />
                    </Link>
                    <p class={styles.txt} style={{marginTop: '0px', fontSize: '12px', marginBottom: '0px'}}>Photo credits: Dan Juengst</p>
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
// Render a YouTube video player

