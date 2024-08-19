
"use client"
import { useState, useEffect } from 'react';
import { Roboto } from 'next/font/google';
import { Courier_Prime } from 'next/font/google';
import Image from 'next/image';
import AudioPlayer from './components/AudioPlayer';
import Link from 'next/link';
import Images from './components/Images';
import Loader from './components/Loader';

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

const courier = Courier_Prime({
  subsets:['latin'],
  weight:"400"
});

export default function Home() {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // Simulate a loading state
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // Adjust the delay as needed

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  if (loading) {
    return <Loader />;
  }

  
  return (
    < >
    
    

  <section  className="logo">
    <img
      src="/images/Logo.PNG"
      alt="Logo"
      height={400}
      width={400}
      priority={true}
    />
  </section>

  <section id="song-section" >
    <h2 className=' h2-center  margin-left text-4xl font-bold text-center  mt-[10vh] mb-[5vh]'> Check out our latest single</h2>

      <div className="song-card" >
        <img
          src="/images/BleedingEyes.jpg"
          height={200}
          width={200}
          alt="Song Art"
        />
        <div className="song-data">         
          <h3 id="song-title"> Bleeding Eyes</h3>

          <AudioPlayer />

          
          <div className="streaming-link-container" >
            <h3 className='paragraph'>Avalible on :</h3>
            <div className="icon-animation streaming-links">
              <a href="https://open.spotify.com/track/0DE3Pw8j0iKJvDtJ9iPg39?si=BG3zqvkSRcaxbb70sX7jNQ&utm_medium=share&utm_source=linktree&nd=1&dlsi=6ad5197f7459494a"target="_blank">

                <img
                src="/Icons/SC.png"
                alt="Spoitfy"
                height={40}
                width={40}
                />
              </a>

              <a href="https://www.youtube.com/watch?v=zg0bflFlCzs" target="_blank">

                <img
                src="/Icons/YTC.png"
                alt="Youtube"
                height={40}
                width={40}
                />
              </a>
            

              <a href="https://music.apple.com/us/album/bleeding-eyes/1754315139?i=1754315140&at=1000lHKX&ct=linktree_http&itsct=lt_m&itscg=30200&ls=1" target="_blank">

                <img
                src="/Icons/AMC.png"
                alt="Apple Music"
                height={40}
                width={40}
                />
              </a>
            </div>
            </div>
          </div>
          
        </div>
        
        
    </section>

    <h2 className=' h2-center text-center'> The Band</h2>
    
    <section id="members-section">
     
      <div id="member-card">
        <img
        src="/images/IndividualPhotos/WesIndividual.jpg"
        alt="Wes Anderson"
        width={200}
        height={200}
        />
        <h3 className='title-h3'>Wes Anderton</h3>
        <div className='content'>

        <p><em>Influences:</em> The All-American Rejects, Three Days Grace, Linkin Park, Protest The Hero, Escape The Fate, Coheed & Cambria, Like Moths To Flames, Dance Gavin Dance, The Devil Wears Prada, Trivium, Alesana, Veil of Maya</p>

        </div>

        <h3 className='title-h3'><em>Contact:</em></h3>
        
        <div id="socials-container">

          <div id="social-container">
            <img
            src="/Icons/IC.png"
            alt="Instagram"
            width={50}
            height={50}
            />
        
          <a href="https://www.instagram.com/i.am.king.awful/">
            <p>@i.am.king.awful</p>
          </a>
          </div>

          <div id="social-container">
            <img
            src="/Icons/FC.png"
            alt="Facebook"
            width={50}
            height={50}
            />
        
          <a href="https://www.facebook.com/Sarcasm.Kills.People/?_rdr/">
            <p>Wes Anderton</p>
          </a>
          </div>

          <div id="social-container">
            <img
            src="/Icons/EmailC.png"
            alt="Email"
            width={50}
            height={50}
            />
            
        
          <p id="email">wes.thelatestvictim@gmail.com</p>
          </div>

          
          
        </div>
      </div>

      <div id="member-card">
        <img
        src="/images/IndividualPhotos/AustinIndividual.jpg"
        alt="Austin Lawshe"
        width={200}
        height={200}
        />
        <h3>Austin Lawshe</h3>
        <div className='content'>

        <p><em>Influences:</em> Killswitch Engage, Bullet For My Valentine, Avenged Sevenfold, Asking Alexandria, Lamb of God, Whitechapel, Breaking Benjamin, All That Remains, Slipknot, Bad Omens, Sleep Token, Tremonti</p>

        </div>
        <h3><em>Contact:</em></h3>
        
        <div id="socials-container">

          <div id="social-container">
            <img
            src="/Icons/IC.png"
            alt="Instagram"
            width={50}
            height={50}
            />
        
          <a href="https://www.instagram.com/lawshe223/"><p>@lawshe223</p></a>
          </div>

          <div id="social-container">
            <img
            src="/Icons/FC.png"
            alt="Facebook"
            width={50}
            height={50}
            />
        
          <a href="https://www.facebook.com/austin.lawshe?mibextid=LQQJ4d">
            <p>Austin Lawshe</p>
          </a>
          </div>

          <div id="social-container">
            <img
            src="/Icons/EmailC.png"
            alt="Email"
            width={50}
            height={50}
            />
        
          <p id="email">austin.thelatestvictim@gmail.com</p>
          </div>

          
          
        </div>
      </div>

      <div id="member-card">
        <img
        src="/images/IndividualPhotos/BrendanIndividual.jpg"
        alt="Brendan Herb"
        width={200}
        height={200}
        />
        <h3>Brendan Herb</h3>
        <div className='content'>
        <p><em>Influences:</em>I See Stars, August Burns Red, The Devil Wears Prada, Bring Me The Horizon, Crown The Empire, Of Mice & Men, Attack Attack!, A Day To Remember, Memphis May Fire, Three Days Grace</p>

        </div>

        <h3><em>Contact:</em></h3>
        
        <div id="socials-container">

          <div id="social-container">
            <img
            src="/Icons/IC.png"
            alt="Instagram"
            width={50}
            height={50}
            />
        
          <a href="https://www.instagram.com/rabid.soul/"><p>@rabid.soul</p></a>
          </div>

          <div id="social-container">
            <img
            src="/Icons/FC.png"
            alt="Facebook"
            width={50}
            height={50}
            />
        
          <a href="https://www.facebook.com/brendan.herb?mibextid=LQQJ4d">
            <p>Brendan Herb</p>
          </a>
          </div>

          <div id="social-container">
            <img
            src="/Icons/EmailC.png"
            alt="Email"
            width={50}
            height={50}
            />
        
          <p id="email">brendan.thelatestvictim@gmail.com</p>
          </div>

          
          
        </div>
      </div>

      <div id="member-card">
        <img
        src="/images/IndividualPhotos/JustinIndividual.jpg"
        alt="Justin Fowler"
        width={200}
        height={200}
        />
        <h3>Justin Fowler</h3>
        <div className='content'>
        <p><em>Influences:</em> Guns n’ Roses, Motley Crue, Ratt, Linkin Park, Lamb of God, As I Lay Dying, Killswitch Engage, Trivium, Hatebreed, Megadeth, Avenged Sevenfold</p>

        </div>
        <h3><em>Contact:</em></h3>
        
        <div id="socials-container">

          <div id="social-container">
            <img
            src="/Icons/IC.png"
            alt="Instagram"
            width={50}
            height={50}
            />
        
          <a href="https://www.instagram.com/hazambe/"><p>@hazambe</p></a>
          </div>

          <div id="social-container">
            <img
            src="/Icons/FC.png"
            alt="Facebook"
            width={50}
            height={50}
            />
        
          <a href="https://www.facebook.com/justin.fowler.9022?mibextid=LQQJ4d">
            <p>Justin Fowler</p>
          </a>
          </div>

          <div id="social-container">
            <img
            src="/Icons/EmailC.png"
            alt="Email"
            width={50}
            height={50}
            />
        
          <p id="email">justin.thelatestvictim@gmail.com</p>
          </div>

          
          
        </div>
      </div>

      <div id="member-card">
        <img
        src="/images/IndividualPhotos/TristanIndividual.jpg"
        alt="Tristan Jones"
        width={200}
        height={200}
        />
        <h3>Tristan Jones</h3>
        <div className='content'>
        <p><em>Influences:</em> Avenged Sevenfold, All that Remains, Ghost, Breaking Benjaman, Metallica, Three Days Grace, Slipknot, Trivuim, Pink Floyd</p>

        </div>
        <h3><em>Contact:</em></h3>
        
        <div id="socials-container">

          <div id="social-container">
            <img
            src="/Icons/IC.png"
            alt="Instagram"
            width={50}
            height={50}
            />
        
          <a href="https://www.instagram.com/tristan.solos/"><p>@tristan.solos</p></a>
          </div>

          <div id="social-container">
            <img
            src="/Icons/FC.png"
            alt="Facebook"
            width={50}
            height={50}
            />
        
          <a href="https://www.facebook.com/profile.php?id=61560777752330&mibextid=LQQJ4d">
            <p>Tristan Jones</p>
          </a>
          </div>

          <div id="social-container">
            <img
            src="/Icons/EmailC.png"
            alt="Email"
            width={50}
            height={50}
            />
        
          <p id="email">tristan.thelatestvictim@gmail.com</p>
          </div>

        </div>
        
      </div>
    </section>

    <section className="media">
        <button> <h2> Photos</h2></button>
        <button><h2> Videos</h2></button>
      <Images />
    </section>

    </>
  );
}
