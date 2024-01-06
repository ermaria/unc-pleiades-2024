import styles from "@/app/styles.module.css";
import Link from 'next/link';
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
//import ReactPlayer from 'react-player'
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function Rosters(){
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
        <div class={styles.parent} style={{alignContent: 'top', alignItems: 'top', marginTop: '30px'}}>
            <div style={{display: 'flex', flexDirection: 'row', alignContent: 'top', alignItems: 'top'}}>
            
            <div style={{ display: 'flex', width: '33%', flexDirection: 'column', justifyItems: 'ceter'}}>
            <div class={styles.parent} >
            <Image
            src="/images/team-photos/pleiades.spr96.large.jpeg"
            alt="team photo"
            width = {919}
            height={620}
            style={{
            maxWidth: '70%',
            height: 'auto',
            objectFit: 'contain',
            
            //position: 'relative'
            }}/> 
            </div>

            <p class={styles.section_head} style={{marginTop: '20px', marginBottom: '0px', textAlign: 'center'}} id="1996"> 1996 </p>
            <p class={styles.txt} style={{lineHeight: '1.75em', textAlign: 'center'}}>Allison Pratt Kavanaugh <br></br>
                Amanda "Bones" Hollebone<br></br>
                Amanda Worthington<br></br>
                Courtney Griffiths<br></br>
                Emily Larson Luebke <br></br>
                Jen Reed Sullivan<br></br>
                Katie Lavoie<br></br>
                Margo Hasselman Greenough<br></br>
                Sarah Danninger <br></br>
                Stephanie Moravec<br></br>
                Torie Hilton</p>

            </div>
            <div class={styles.parent} style={{maxWidth: '33%'}}>
            <Image
            src="/images/team-photos/000000130001.jpg"
            alt="team photo"
            width = {919}
            height={620}
            id="1997"
            style={{
            maxWidth: '70%',
            height: 'auto',
            objectFit: 'contain',
            //position: 'relative'
            }}/> 
            
            <p class={styles.section_head} style={{marginTop: '20px', marginBottom: '0px'}} > 1997 </p>
            <p class={styles.txt} style={{lineHeight: '1.75em', textAlign: 'center'}}>Allison Pratt Kavanaugh<br></br>
            Amanda "Bones" Hollobone<br></br>
            Amanda Worthington<br></br>
            Amelia (Smith) Mascioli<br></br>
            Andrea Main<br></br>
            Christine Vitron<br></br>
            Courtney Griffiths<br></br>
            Emily Larson Luebke<br></br>
            Heidi Scott<br></br>
            Jaime (Hicks) Long<br></br>
            Jaime Hicks<br></br>
            Jane Volkman<br></br>
            Jen Reed Sullivan<br></br>
            Jenny McMillan<br></br>
            Katie Lavoie<br></br>
            Kerry Ossi-Lupo<br></br>
            Lindsay James<br></br>
            Marcie Wiley<br></br>
            Margo Hasselman Greenough<br></br>
            Miller Pearsall<br></br>
            Sarah Danninger<br></br>
            Stephanie Moravec<br></br>
            Torie Hilton<br></br></p>
            </div>
            
            <div class={styles.parent} style={{width: '33%'}}>
            <p class={styles.section_head} style={{marginTop: '20px', marginBottom: '0px'}} > 1998 </p>
            <p class={styles.txt} style={{lineHeight: '1.75em', textAlign: 'center'}}>
            Allison Pratt Kavanaugh<br></br>
            Amelia (Smith) Mascioli<br></br>
            Andrea Main<br></br>
            Christine Vitron<br></br>
            Courtney Griffiths<br></br>
            Emily Larson Luebke<br></br>
            Erin Peck<br></br>
            Erin Snyder<br></br>
            Fritze-Leigh Hollingsworth<br></br>
            Heidi Scott<br></br>
            Jaime Hicks<br></br>
            Jane Volkman<br></br>
            Jen Reed Sullivan<br></br>
            Jenny McMillan<br></br>
            Jessie Hicks<br></br>
            Katy Harris<br></br>
            Kerry Ossi-Lupo<br></br>
            Margo Hasselman Greenough<br></br>
            Nora Wilson<br></br>
            Sarah Danninger<br></br>
            </p>
            </div>
            </div>

        <div style={{display: 'flex', flexDirection: 'row', alignContent: 'top', alignItems: 'top', width: '100%'}}>
        <div style={{ display: 'flex', width: '33%', flexDirection: 'column', justifyItems: 'ceter', textAlign: 'center'}}>
            <p class={styles.section_head} style={{marginTop: '20px', marginBottom: '0px'}} > 1999 </p>
            <p class={styles.txt} style={{lineHeight: '1.75em', textAlign: 'center'}}>
            Alison Greene<br></br>
            Allison (Pratt) Kavanaugh<br></br>
            Amelia (Smith) Mascioli<br></br>
            Blair Holloway Cuneo<br></br>
            Courtney Griffiths<br></br>
            Erin Peck<br></br>
            Heidi Scott<br></br>
            Jaime (Hicks) Long <br></br>
            Jane Volkman<br></br>
            Jen Reed<br></br>
            Jenny MacMillan<br></br>
            Katy Harris<br></br>
            Laura Dilly<br></br>
            Meredith (Bullard) Dayton<br></br>
            Norah Wilson<br></br>
            </p>
        </div>
        <div style={{ display: 'flex', width: '33%', flexDirection: 'column', justifyItems: 'ceter'}}>
            <p class={styles.section_head} style={{marginTop: '20px', marginBottom: '0px', textAlign: 'center'}} > 2000 </p>
            <p class={styles.txt} style={{lineHeight: '1.75em', textAlign: 'center'}}>
            Alison Greene<br></br>
            Amelia (Smith) Mascioli<br></br>
            Anita Schmizzi<br></br>
            Ashley Craver<br></br>
            Blair Holloway Cuneo<br></br>
            Coby (Jansen) Austin<br></br>
            Erin (Gubitz) Chang<br></br>
            Erin Peck <br></br>
            Heidi Scott<br></br>
            Jane Volkman<br></br>
            Jenny Macmillan<br></br>
            Jessie Askew (Peed)<br></br>
            Katie  (Krankin ) Rankin<br></br>
            Katy Harris<br></br>
            Laura Dilly<br></br>
            Lauren Rothwell<br></br>
            Lela Urquhart<br></br>
            Liz (Ward) Rougeau<br></br>
            Megan Cornog<br></br>
            Meredith (Bullard) Dayton<br></br>
            </p>
            </div>

            <div style={{ display: 'flex', width: '33%', flexDirection: 'column', justifyItems: 'ceter'}}>
            <div class={styles.parent} >
            <Image
            src="/images/team-photos/2001PleiadesRegionalssilly.jpg"
            alt="team photo"
            width = {919}
            height={620}
            style={{
            maxWidth: '70%',
            height: 'auto',
            objectFit: 'contain',
            
            //position: 'relative'
            }}/> 
            </div>
            
            <p class={styles.section_head} style={{marginTop: '20px', marginBottom: '0px', textAlign: 'center'}} > 2001 </p>
            <p class={styles.txt} style={{lineHeight: '1.75em', textAlign: 'center'}}>
            Alison Greene <br></br>
            Ashley Craver<br></br>
            Blair Holloway Cuneo<br></br>
            Cameron Smith<br></br>
            Coby (Jansen) Austin<br></br>
            Erin (Gubitz) Chang<br></br>
            Erin Peck<br></br>
            Ginger (Denison) Rothrock<br></br>
            Jessie Askew (Peed)<br></br>
            John (Tiger) Pearson<br></br>
            Katie  (Krankin ) Rankin<br></br>
            Katy Harris<br></br>
            Laura Dilly<br></br>
            Lauren Rothwell<br></br>
            Lela Urquhart<br></br>
            Liz (Ward) Rougeau<br></br>
            Meredith (Bullard) Dayton<br></br>
            Sara (Stanley) Dieter<br></br>
            </p>
            </div>
            </div>

        <div style={{display: 'flex', flexDirection: 'row', alignContent: 'top', alignItems: 'top', width: '100%'}}>
        <div style={{ display: 'flex', width: '33%', flexDirection: 'column', justifyItems: 'ceter', textAlign: 'center'}}>
        <div class={styles.parent} >
            <Image
            src="/images/team-photos/2002PleiadesRegionals.jpg"
            alt="team photo"
            width = {919}
            height={620}
            style={{
            maxWidth: '70%',
            height: 'auto',
            objectFit: 'contain',
            
            //position: 'relative'
            }}/> </div>
            <p class={styles.section_head} style={{marginTop: '20px', marginBottom: '0px'}} > 2002 </p>
            <p class={styles.txt} style={{lineHeight: '1.75em', textAlign: 'center'}}>
            Anita Schmizzi<br></br>
            Ashley Craver<br></br>
            Ashley Rosen<br></br>
            Blair Holloway Cuneo<br></br>
            Cameron Hunt<br></br>
            Coby Austin<br></br>
            Erin Buchanan<br></br>
            Erin Peck<br></br>
            Ginger Rothrock<br></br>
            Holly Czuba<br></br>
            Jennifer Jones<br></br>
            Jessie Askew<br></br>
            Katie (Krankin ) Rankin<br></br>
            Katy Harris<br></br>
            Laura Dilly<br></br>
            Lauren Rothwell<br></br>
            Lela Urquhart<br></br>
            Liz Rougeau<br></br>
            Megan Cornog<br></br>
            Meredith Dayton<br></br>
            Pam Lundin<br></br>
            Sara Dieter<br></br>
            </p>
            </div>

            <div style={{ display: 'flex', width: '33%', flexDirection: 'column', justifyItems: 'ceter', textAlign: 'center'}}>
            <div class={styles.parent} >
            <Image
            src="/images/team-photos/pleiades-ultimate-03.jpg"
            alt="team photo"
            width = {919}
            height={620}
            style={{
            maxWidth: '70%',
            height: 'auto',
            objectFit: 'contain',
            
            //position: 'relative'
            }}/> </div>
            <p class={styles.section_head} style={{marginTop: '20px', marginBottom: '0px'}} > 2003</p>
            <p class={styles.txt} style={{lineHeight: '1.75em', textAlign: 'center'}}>
            Amber Nalley<br></br>
            Ashley Craver<br></br>
            Ashley Rosen<br></br>
            Blair Holloway Cuneo<br></br>
            Cameron Hunt<br></br>
            Coby Austin<br></br>
            Ellie Bolas<br></br>
            Erin Buchanan<br></br>
            Ginger Rothrock <br></br>
            Holly Czuba<br></br>
            Jennifer Jones<br></br>
            Jessie Askew <br></br>
            John Pearson <br></br>
            Kate Morrison<br></br>
            Katie Rankin<br></br>
            Kelsey Clark<br></br>
            Laura Dilly<br></br>
            Lauren Rothwell<br></br>
            Liz Rougeau<br></br>
            Mary "Potter" Werden<br></br>
            Megan Cornog<br></br>
            Meredith Dayton<br></br>
            Pam Lundin<br></br>
            Sara Dieter </p>
        </div>
        <div style={{ display: 'flex', width: '33%', flexDirection: 'column', justifyItems: 'ceter', textAlign: 'center'}}>
        <div class={styles.parent} >
            <Image
            src="/images/team-photos/group-pic-czuba-04.jpg"
            alt="team photo"
            width = {919}
            height={620}
            style={{
            maxWidth: '70%',
            height: 'auto',
            objectFit: 'contain',
            
            //position: 'relative'
            }}/> </div>
            <p class={styles.section_head} style={{marginTop: '20px', marginBottom: '0px'}} > 2004</p>
            <p class={styles.txt} style={{lineHeight: '1.75em', textAlign: 'center'}}>
            Amber Nalley<br></br>
Ashley Rosen<br></br>
Blair Holloway Cuneo <br></br>
Cameron Smith<br></br>
Ellie Bolas<br></br>
Erica Zuhr<br></br>
Erin Peiffer<br></br>
Emily Lawrence<br></br>
Ginger Denison<br></br>
Hannah Giles<br></br>
Holly Czuba<br></br>
Mary Werden<br></br>
Jenna Wooten<br></br>
Jennifer Waldrup <br></br>
Kate Morrison<br></br>
Kate Scott<br></br>
Kelsey Clark<br></br>
Liz Ward<br></br>
Pam Lundin<br></br>
Sara Stanley<br></br>
            </p>
        </div>
        </div>
    <div style={{display: 'flex', flexDirection: 'row', alignContent: 'top', alignItems: 'top', width: '100%'}}>
        <div style={{ display: 'flex', width: '33%', flexDirection: 'column', justifyItems: 'ceter', textAlign: 'center'}}>
            <p class={styles.section_head} style={{marginTop: '20px', marginBottom: '0px'}} > 2005 </p>
            <p class={styles.txt} style={{lineHeight: '1.75em', textAlign: 'center'}}>
            Amber Nalley<br></br>
            Ashley Rosen<br></br>
            Cameron Smith<br></br>
            Erica Zuhr<br></br>
            Holly Czuba<br></br>
            Jennifer Jones <br></br>
            Kate Scott Ettefagh<br></br>
            Kelly Carini<br></br>
            Kelsey Clark<br></br>
            Lindsey Hack<br></br>
            Pam Lundin<br></br>
            Sara Dieter<br></br>
            </p>
        </div>
        
        <div style={{ display: 'flex', width: '33%', flexDirection: 'column', justifyItems: 'ceter', textAlign: 'center'}}>
        <div class={styles.parent} >
            <Image
            src="/images/team-photos/group-pic-czuba-06-2.jpg"
            alt="team photo"
            width = {919}
            height={620}
            style={{
            maxWidth: '70%',
            height: 'auto',
            objectFit: 'contain',
            
            //position: 'relative'
            }}/> </div>
            <p class={styles.section_head} style={{marginTop: '20px', marginBottom: '0px'}} > 2006 </p>
            <p class={styles.txt} style={{lineHeight: '1.75em', textAlign: 'center'}}>
            Allison Nichols<br></br>
            Amber Reed<br></br>
            Angelia Rinehold<br></br>
            Charliss Fenton<br></br>
            Ellie Bolas<br></br>
            Ginny Clayton<br></br>
            Hannah Giles<br></br>
            Holly Czuba <br></br>
            January Clifton<br></br>
            Jared Inselmann<br></br>
            Jennifer Jones<br></br>
            Julie Ellison<br></br>
            Kate Morrison<br></br>
            Kate Scott Ettefagh<br></br>
            Katie Ort<br></br>
            Kelly Carini<br></br>
            Kristen Post<br></br>
            Kristen Stroupe<br></br>
            Lauren Frank<br></br>
            Lindsey Hack<br></br>
            Lisa Kirkley<br></br>
            Sarah Wechsberg<br></br>
            Stephanie Urban<br></br>
            Virginia Wooten<br></br>
            </p>

        </div>
    
        <div style={{ display: 'flex', width: '33%', flexDirection: 'column', justifyItems: 'ceter', textAlign: 'center'}}>
            <p class={styles.section_head} style={{marginTop: '20px', marginBottom: '0px'}} > 2007 </p>
            <p class={styles.txt} style={{lineHeight: '1.75em', textAlign: 'center'}}>
            Brian Dobyns<br></br>
            Charliss Fenton<br></br>
            Claire Thomson<br></br>
            Dorothy Scott<br></br>
            Erin Wiltgen Weeks<br></br>
            Hannah Giles<br></br>
            Heather Zimmerman<br></br>
            Holly Czuba<br></br>
            Jennifer Waldrup<br></br>
            Jill Simmerman Lawrence<br></br>
            Julie Ellison<br></br>
            Kaitlin Baden<br></br>
            Karen Kimel<br></br>
            Kate Scott Ettefagh<br></br>
            Kelly Carini<br></br>
            Lauren Edwards<br></br>
            Leslie Peck Rose<br></br>
            Lindsay Hack<br></br>
            Lisa Kirkley<br></br>
            Lynn Pudlo<br></br>
            Rachel Steber<br></br>
            Sandy Pham<br></br>
            Suzanne Fauvre-Willis<br></br>
            </p>

        </div>
        </div>

        <div style={{display: 'flex', flexDirection: 'row', alignContent: 'top', alignItems: 'top', width: '100%'}}>
        <div style={{ display: 'flex', width: '33%', flexDirection: 'column', justifyItems: 'ceter', textAlign: 'center'}}>
        <div class={styles.parent} >
            <Image
            src="/images/team-photos/2008CaliforniaTourney.JPG"
            alt="team photo"
            width = {919}
            height={620}
            style={{
            maxWidth: '70%',
            height: 'auto',
            objectFit: 'contain',
            
            //position: 'relative'
            }}/> </div>
            <p class={styles.section_head} style={{marginTop: '20px', marginBottom: '0px'}} > 2008 </p>
            <p class={styles.txt} style={{lineHeight: '1.75em', textAlign: 'center'}}>
            Ashley Barfield<br></br>
            Brian Dobyns<br></br>
            Charliss Fenton<br></br>
            Claire Thompson<br></br>
            Dorothy Scott<br></br>
            Erin Wiltgen Weeks<br></br>
            Heather Zimmerman<br></br>
            Holly Czuba<br></br>
            Janna Coulter<br></br>
            Jennifer Waldrup<br></br>
            Jill Simmerman Lawrence<br></br>
            Julie Ellison<br></br>
            Julie Neisler<br></br>
            Kaitlin Baden<br></br>
            Karen Kimel<br></br>
            Kate Scott Ettefagh <br></br>
            Kelly Carini <br></br>
            Lauren Edwards<br></br>
            Lauren McGuire<br></br>
            Leslie Peck Rose<br></br>
            Lindsey Hack <br></br>
            Lisa Anne Kirkley<br></br>
            Michaela Dudley<br></br>
            Rachel Steber<br></br>
            Sarah Heneghan<br></br>
            Suzanne Fauvre-Willis<br></br>
            </p>
            
        </div>

        <div style={{ display: 'flex', width: '33%', flexDirection: 'column', justifyItems: 'ceter', textAlign: 'center'}}>
        <div class={styles.parent} >
            <Image
            src="/images/team-photos/2009TeamNationalsinBoulder.JPG"
            alt="team photo"
            width = {919}
            height={620}
            style={{
            maxWidth: '70%',
            height: 'auto',
            objectFit: 'contain',
            
            //position: 'relative'
        }}/> </div>
            <p class={styles.section_head} style={{marginTop: '20px', marginBottom: '0px'}} > 2009 </p>
            <p class={styles.txt} style={{lineHeight: '1.75em', textAlign: 'center'}}>
            Amelia Druckenbrod<br></br>
Ashley Barfield<br></br>
Ashley Morris<br></br>
Ashley Underwood<br></br>
Audrey Peck<br></br>
Brian Dobyns<br></br>
Charliss Fenton<br></br>
Chessa Rich<br></br>
Claire Thompson<br></br>
Dorothy Scott<br></br>
Erin Wiltgen Weeks<br></br>
Heather Zimmerman<br></br>
Holly Czuba<br></br>
Janna Coulter<br></br>
Jennifer Waldrup<br></br>
Jill Simmerman Lawrence<br></br>
Kaitlin Baden<br></br>
Karen Kimel<br></br>
Kelly Carini<br></br>
Lauren Edwards<br></br>
Lauren McGuire<br></br>
Leila Tunnell<br></br>
Leslie Peck Rose<br></br>
Lindsay Hack<br></br>
Lindsey Lang<br></br>
Michaela Dudley<br></br>
Michaela Dudley<br></br>
Rachel Steber<br></br>
Suzanne Fauvre-Willis<br></br></p>        
        </div>

        <div style={{ display: 'flex', width: '33%', flexDirection: 'column', justifyItems: 'ceter', textAlign: 'center'}}>
            <p class={styles.section_head} style={{marginTop: '20px', marginBottom: '0px'}} > 2010 </p>
            <p class={styles.txt} style={{lineHeight: '1.75em', textAlign: 'center'}}>
            Amy Gilbert<br></br>
            Anna Ang<br></br>
            Annie Rose<br></br>
            Ashley Barfield<br></br>
            Britta Jones<br></br>
            Caitlin Baden<br></br>
            Emily Wright Gotwals<br></br>
            Heahther Zimmerman<br></br>
            Janna Coulter<br></br>
            Kat Whitfield<br></br>
            Kendall Beadleson<br></br>
            Lauren McGuire<br></br>
            Leila Tunnell<br></br>
            Leslie Willis<br></br>
            Lindsay D'Ambrosio<br></br>
            Lindsay Lang<br></br>
            Lindsey Hack<br></br>
            Michaela Dudley<br></br>
            Rachel Steber<br></br>
            Savannah Haas<br></br>
            Virginia Conover<br></br>
            Whitney Kramer<br></br>
            </p>
        </div>
        </div>

        <div style={{display: 'flex', flexDirection: 'row', alignContent: 'top', alignItems: 'top', width: '100%'}}>
        <div style={{ display: 'flex', width: '33%', flexDirection: 'column', justifyItems: 'ceter', textAlign: 'center'}}>
            <p class={styles.section_head} style={{marginTop: '20px', marginBottom: '0px'}} > 2011 </p>
            <p class={styles.txt} style={{lineHeight: '1.75em', textAlign: 'center'}}>
            Amy Gilbert
Anna Ang <br></br>
Bridget Walsh<br></br>
Britta Jones<br></br>
Dana Marshall<br></br>
Emily Wright Gotwals<br></br>
Emma Thompson<br></br>
Janna Coulter<br></br>
Kat Whitfield<br></br>
Kendall Beadleson<br></br>
Lauren McGuire<br></br>
Leila Tunnell <br></br>
Leslie Willis<br></br>
Lily Steponaitis<br></br>
Lindsay Lang<br></br>
Lindsey Hack<br></br>
Lisa Couper<br></br>
Meaghan O'Neal<br></br>
Michaela Dudley<br></br>
Michaela Dudley<br></br>
Savannah Haas<br></br>
Shellie Cohen <br></br>
Virginia Conover<br></br>
            </p>
        </div>

        <div style={{ display: 'flex', width: '33%', flexDirection: 'column', justifyItems: 'ceter', textAlign: 'center'}}>
            <p class={styles.section_head} style={{marginTop: '20px', marginBottom: '0px'}} > 2012 </p>
            <p class={styles.txt} style={{lineHeight: '1.75em', textAlign: 'center'}}>
            Amy Gilbert<br></br>
Bridget Walsh<br></br>
Dana Marshall<br></br>
Diana Lam<br></br>
Emily Wright Gotwals<br></br>
Emma Thompson<br></br>
Hope Thomson<br></br>
Kelly Duncan<br></br>
Kendall Beadleson<br></br>
Leslie Willis<br></br>
Lily Steponaitis<br></br>
Lindsay Lang<br></br>
Lindsey Hack<br></br>
Lisa Couper<br></br>
Meg Duffy<br></br>
Shellie Cohen<br></br>
Virginia Conover<br></br>

            </p>
        </div>

        <div style={{ display: 'flex', width: '33%', flexDirection: 'column', justifyItems: 'ceter', textAlign: 'center'}}>
        <div class={styles.parent} >
            <Image
            src="/images/team-photos/2013.jpg"
            alt="team photo"
            width = {919}
            height={620}
            style={{
            maxWidth: '70%',
            height: 'auto',
            objectFit: 'contain',
            
            //position: 'relative'
        }}/> </div>
            <p class={styles.section_head} style={{marginTop: '20px', marginBottom: '0px'}} > 2013 </p>
            <p class={styles.txt} style={{lineHeight: '1.75em', textAlign: 'center'}}>
            Abi Marklew<br></br>
Amelia Schirmer<br></br>
Amy Gilbert<br></br>
Bridget Walsh<br></br>
Claire Pauley<br></br>
Diana Lam<br></br>
Elena Wong<br></br>
Emma Thompson<br></br>
Hope Thomson<br></br>
Kendall Beadleson<br></br>
Laura Hamrick<br></br>
Lindsey Hack<br></br>
Lisa Couper<br></br>
Mckenzie Neighbors Chandler<br></br>
Meg Duffy<br></br>
Robin Lowe-Skillern<br></br>
Shellie Cohen<br></br>
Virginia Conover<br></br>
            </p>
        </div>
        </div>

        <div style={{display: 'flex', flexDirection: 'row', alignContent: 'top', alignItems: 'top', width: '100%'}}>
        <div style={{ display: 'flex', width: '33%', flexDirection: 'column', justifyItems: 'ceter', textAlign: 'center'}}>
        <div class={styles.parent} >
            <Image
            src="/images/team-photos/2014.jpeg"
            alt="team photo"
            width = {919}
            height={620}
            style={{
            maxWidth: '70%',
            height: 'auto',
            objectFit: 'contain',
            
            //position: 'relative'
        }}/> </div>
            <p class={styles.section_head} style={{marginTop: '20px', marginBottom: '0px'}} > 2014 </p>
            <p class={styles.txt} style={{lineHeight: '1.75em', textAlign: 'center'}}>
            Abigail Marklew<br></br>
Amanda Lohmann<br></br>
Amelia Schirmer<br></br>
Bridget Johnson<br></br>
Bridget Walsh<br></br>
Christina Jackson<br></br>
Claire Pauley<br></br>
Devon Allen<br></br>
Elena Wong<br></br>
Elisabeth Parker<br></br>
Elizabeth Fussell<br></br>
Emma Boyd<br></br>
Hope Thomson<br></br>
Jenny Wei<br></br>
Jocelyn Keung<br></br>
Joy Chen<br></br>
Julia Gallini<br></br>
Julie Becker<br></br>
Kendall Beadleson<br></br>
Lindsey Hack <br></br>
Lydia Youngblood<br></br>
Margaret Hopkins<br></br>
Megan Goldsby<br></br>
Natalie Schuster<br></br>
Rachel Simpson<br></br>
Samantha Iyer<br></br>
Shellie Cohen<br></br>
Taylor Fisher<br></br>
Vany Nguyen<br></br>
            </p>
        </div>
        <div style={{ display: 'flex', width: '33%', flexDirection: 'column', justifyItems: 'ceter', textAlign: 'center'}}>
        <div class={styles.parent} >
            <Image
            src="/images/team-photos/2015.jpeg"
            alt="team photo"
            width = {919}
            height={620}
            style={{
            maxWidth: '70%',
            height: 'auto',
            objectFit: 'contain',
            
            //position: 'relative'
        }}/> </div>
            <p class={styles.section_head} style={{marginTop: '20px', marginBottom: '0px'}} > 2015 </p>
            <p class={styles.txt} style={{lineHeight: '1.75em', textAlign: 'center'}}>
            Adrien Wilkie <br></br>
Anne Worth<br></br>
Ashton Carrick<br></br>
Bridget Johnson<br></br>
Christina Jackson<br></br>
Devon Allen<br></br>
Elisabeth Parker<br></br>
Elizabeth Henry<br></br>
Esther Lee<br></br>
Jenny Wei<br></br>
Jocelyn Keung<br></br>
Joy Chen<br></br>
Julia Gallini<br></br>
Julie Becker<br></br>
Lydia Youngblood<br></br>
Natalie Schuster<br></br>
Rachael Tevis<br></br>
Rebecca Fagan<br></br>
Robin  Lowe-Skillern<br></br>
Taylor Fisher<br></br>
Vany Nguyen<br></br>
            </p>
        </div>

        <div style={{ display: 'flex', width: '33%', flexDirection: 'column', justifyItems: 'ceter', textAlign: 'center'}}>
        <div class={styles.parent} >
            <Image
            src="/images/team-photos/2016.jpeg"
            alt="team photo"
            width = {919}
            height={620}
            style={{
            maxWidth: '70%',
            height: 'auto',
            objectFit: 'contain',
            
            //position: 'relative'
        }}/> </div>
            <p class={styles.section_head} style={{marginTop: '20px', marginBottom: '0px'}} > 2016 </p>
            <p class={styles.txt} style={{lineHeight: '1.75em', textAlign: 'center'}}>
            Adrien Wilkie <br></br>
Anna Xu<br></br>
Anne Worth<br></br>
Ashton Carrick<br></br>
Bridget Johnson<br></br>
Christina Jackson<br></br>
Devon Allen<br></br>
Elisabeth Parker<br></br>
Elizabeth Henry<br></br>
Emma Boyd<br></br>
Esther Lee<br></br>
JZ Zwierzynski<br></br>
Jenny Wei<br></br>
Jocelyn Keung<br></br>
Joy Chen<br></br>
Julia Gallini<br></br>
Lydia Youngblood<br></br>
Natalie Schuster<br></br>
Rachael Tevis<br></br>
Rebecca Fagan<br></br>
Robin Lowe-Skillern<br></br>
Taylor Fisher<br></br>
Vany Nguyen<br></br>
            </p>
        </div>
        </div>

        <div style={{display: 'flex', flexDirection: 'row', alignContent: 'top', alignItems: 'top', width: '100%'}}>
        <div style={{ display: 'flex', width: '33%', flexDirection: 'column', justifyItems: 'ceter', textAlign: 'center'}}>
        <div class={styles.parent} >
            <Image
            src="/images/team-photos/2017.jpeg"
            alt="team photo"
            width = {919}
            height={620}
            style={{
            maxWidth: '70%',
            height: 'auto',
            objectFit: 'contain',
            
            //position: 'relative'
        }}/> </div>
            <p class={styles.section_head} style={{marginTop: '20px', marginBottom: '0px'}} > 2017 </p>
            <p class={styles.txt} style={{lineHeight: '1.75em', textAlign: 'center'}}>
            Alexandra Barnett<br></br>
Alice Wang<br></br>
Anna Xu<br></br>
Anne Worth<br></br>
Ashton Carrick<br></br>
Bridget Johnson<br></br>
Bridget Mizener<br></br>
Connie Cui<br></br>
Elisabeth Parker<br></br>
Florence Brooks<br></br>
Ivey Long<br></br>
JZ Zwierzynski<br></br>
Jenny Wei<br></br>
Joy Chen<br></br>
Julia Gallini<br></br>
Lindsay Soo<br></br>
Lydia Youngblood<br></br>
Maggie Adams<br></br>
Mary-Catherine Adams<br></br>
Meg Van Horn<br></br>
Natalie Schuster<br></br>
Olivia Monroe<br></br>
Rachael Tevis<br></br>
Rachell Xu<br></br>
Rebecca Fagan<br></br>
Robin Lowe-Skillern<br></br>
Tyler Smith<br></br>
Vany Nguyen<br></br>
            </p>
        </div>

        <div style={{ display: 'flex', width: '33%', flexDirection: 'column', justifyItems: 'ceter', textAlign: 'center'}}>
            <p class={styles.section_head} style={{marginTop: '20px', marginBottom: '0px'}} > 2018 </p>
            <p class={styles.txt} style={{lineHeight: '1.75em', textAlign: 'center'}}>
            Alana Holder<br></br>
Alex Barnett<br></br>
Alice Wang<br></br>
Anna Xu<br></br>
Anne Worth<br></br>
Bridget Johnson<br></br>
Connie Cui<br></br>
Dawn Culton<br></br>
Elisabeth Parker<br></br>
Ella Juengst<br></br>
Erika Neave<br></br>
Florence Brooks<br></br>
JZ Zwierzynski<br></br>
Jenny Wei<br></br>
Lindsay Soo<br></br>
Maggie Adams<br></br>
Mary Rippe<br></br>
Meg Van Horn<br></br>
Olivia Monroe<br></br>
Rachell Xu<br></br>
Rebecca Fagan<br></br>
Sydney Rehder<br></br>
Tyler Smith<br></br>
Vany Nguyen<br></br>
            </p>
        </div>

        <div style={{ display: 'flex', width: '33%', flexDirection: 'column', justifyItems: 'ceter', textAlign: 'center'}}>
        <div class={styles.parent} >
            <Image
            src="/images/team-photos/2019.jpeg"
            alt="team photo"
            width = {919}
            height={620}
            style={{
            maxWidth: '70%',
            height: 'auto',
            objectFit: 'contain',
            
            //position: 'relative'
        }}/> </div>
            <p class={styles.section_head} style={{marginTop: '20px', marginBottom: '0px'}} > 2019 </p>
            <p class={styles.txt} style={{lineHeight: '1.75em', textAlign: 'center'}}>
            Alana Holder<br></br>
Alex Barnett<br></br>
Alex Evans<br></br>
Alice Wang<br></br>
Anna Xu<br></br>
Anne Worth<br></br>
Bridget Johnson<br></br>
Bridget Mizener<br></br>
Connie Cui<br></br>
Dawn Culton<br></br>
Elisabeth Parker<br></br>
Ella Juengst<br></br>
Erika Neave<br></br>
Florence Brooks<br></br>
JZ Zwierzynski<br></br>
Madoka Takashima<br></br>
Maggie Adams<br></br>
Mary Rippe<br></br>
Meg Van Horn<br></br>
Olivia Monroe<br></br>
Rachell Xu<br></br>
Rebecca Fagan<br></br>
Sydney Rehder<br></br>
Tyler Smith<br></br>
            </p>
        </div>
        </div>

        <div style={{display: 'flex', flexDirection: 'row', alignContent: 'top', alignItems: 'top', width: '100%'}}>
        <div style={{ display: 'flex', width: '33%', flexDirection: 'column', justifyItems: 'ceter', textAlign: 'center'}}>
        <div class={styles.parent} >
            <Image
            src="/images/team-photos/2020.jpg"
            alt="team photo"
            width = {919}
            height={620}
            style={{
            maxWidth: '70%',
            height: 'auto',
            objectFit: 'contain',
            
            //position: 'relative'
        }}/> </div>
            <p class={styles.section_head} style={{marginTop: '20px', marginBottom: '0px'}} > 2020 </p>
            <p class={styles.txt} style={{lineHeight: '1.75em', textAlign: 'center'}}>
            Alana Holder<br></br>
Alex Barnett<br></br>
Alexandra Evans<br></br>
Anne Worth<br></br>
Bridget Mizener<br></br>
Caroline Spencer<br></br>
Connie Cui<br></br>
Dawn Culton<br></br>
Ella Juengst<br></br>
Emily Fallon<br></br>
Emily Przykucki<br></br>
Florence Brooks<br></br>
JZ Zwierzynski<br></br>
Jessica Wu<br></br>
Maggie Adams<br></br>
Meg Van Horn<br></br>
Olivia Monroe<br></br>
Selena Kleber<br></br>
Sofia Ramirez<br></br>
Sonia Rao<br></br>
Sydney Rehder<br></br>
Theresa Yu<br></br>
            </p>
        </div>
        <div style={{ display: 'flex', width: '33%', flexDirection: 'column', justifyItems: 'ceter', textAlign: 'center'}}>
        <div class={styles.parent} >
            <Image
            src="/images/team-photos/2021.jpg"
            alt="team photo"
            width = {919}
            height={620}
            style={{
            maxWidth: '70%',
            height: 'auto',
            objectFit: 'contain',
            
            //position: 'relative'
        }}/> </div>
            <p class={styles.section_head} style={{marginTop: '20px', marginBottom: '0px'}} > 2021 </p>
            <p class={styles.txt} style={{lineHeight: '1.75em', textAlign: 'center'}}>
            Tyler Smith<br></br>
Alana Holder<br></br>
Alex Barnett<br></br>
Alex Evans<br></br>
Allison Reilly <br></br>
Bridget Mizener<br></br>
Caroline Spencer<br></br>
Connie Cui<br></br>
Dawn Culton<br></br>
Ella Juengst<br></br>
Emily Przykucki<br></br>
Erica Birdsong<br></br>
Eugenia Chow<br></br>
Florence Brooks<br></br>
Grace Conerly<br></br>
Izi Myers-Miller<br></br>
JZ Zwierzynski<br></br>
Jessica Wu<br></br>
Kailyn Lowder<br></br>
Maggie Adams<br></br>
Meg Van Horn<br></br>
Meg Woodburn<br></br>
Milena Jojic<br></br>
Olivia Monroe<br></br>
Sarah Combs<br></br>
Selena Kleber<br></br>
Sydney Rehder<br></br>
Taylor Lewis<br></br>
Theresa Yu<br></br>
Tyler Smith<br></br>
            </p>
        </div>
        <div style={{ display: 'flex', width: '33%', flexDirection: 'column', justifyItems: 'ceter', textAlign: 'center'}}>
        <div class={styles.parent} >
            <Image
            src="/images/team-photos/2022.jpg"
            alt="team photo"
            width = {919}
            height={620}
            style={{
            maxWidth: '70%',
            height: 'auto',
            objectFit: 'contain',
            
            //position: 'relative'
        }}/> </div>
            <p class={styles.section_head} style={{marginTop: '20px', marginBottom: '0px'}} > 2022 </p>
            <p class={styles.txt} style={{lineHeight: '1.75em', textAlign: 'center'}}>
            Alana Holder <br></br>
Alex Barnett <br></br>
Alex Evans<br></br>
Allison Reilly <br></br>
Anne Worth<br></br>
Caroline Spencer<br></br>
Claudia Dare<br></br>
Dawn Culton<br></br>
Dhara Buebel<br></br>
Ella Juengst<br></br>
Emily Przykucki<br></br>
Erica Birdsong<br></br>
Eugenia Chow<br></br>
Grace Conerly<br></br>
Izi Myers-Miller<br></br>
Jessica Wu<br></br>
Kailyn Lowder<br></br>
Maya Powell<br></br>
Meg Woodburn<br></br>
Milena Jojic<br></br>
Rachel Yao<br></br>
Sarah Combs<br></br>
Selena Kleber<br></br>
Sydney Rehder<br></br>
Theresa Yu<br></br>
            </p>
        </div>
        </div>

        <div style={{ display: 'flex', width: '33%', flexDirection: 'column', justifyItems: 'ceter', textAlign: 'center'}}>
        <div class={styles.parent} >
            <Image
            src="/images/team-photos/2023.jpg"
            alt="team photo"
            width = {919}
            height={620}
            style={{
            maxWidth: '70%',
            height: 'auto',
            objectFit: 'contain',
            
            //position: 'relative'
        }}/> </div>
            <p class={styles.section_head} style={{marginTop: '20px', marginBottom: '0px'}} > 2023 </p>
            <p class={styles.txt} style={{lineHeight: '1.75em', textAlign: 'center'}}>
            Abigail Stevens<br></br>
Alex Barnett<br></br>
Alex Hecht<br></br>
Alexandra Evans<br></br>
Allison Reilly<br></br>
Caroline Spencer<br></br>
Catherine Fradenburg<br></br>
Claudia Dare<br></br>
Dawn Culton<br></br>
Dhara Buebel<br></br>
Ella Juengst<br></br>
Emily Benson-Tyler<br></br>
Emily Przykucki<br></br>
Erica Birdsong<br></br>
Eugenia Chow<br></br>
Grace Conerly<br></br>
Izi Myers-Miller<br></br>
Jessica Wu<br></br>
Kailyn Lowder<br></br>
Martha Plaehn<br></br>
Rachel Gordon<br></br>
Rachel Yao<br></br>
Sarah Combs<br></br>
Selena Kleber<br></br>
Sonia Rao<br></br>
Sydney Rehder<br></br>
Theresa Yu<br></br>
            </p>
        </div>

        </div>

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