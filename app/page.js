"use client"


import { Roboto } from 'next/font/google';
import Image from 'next/image';
import AudioPlayer from './components/AudioPlayer';
import Link from 'next/link';
import Images from './components/Images';

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});


export default function Home() {
  
  return (
    <>
    <div className="links-div">
          <div
            initial={{ y: 5250 }}
            animate={{ y: -10 }}
            transition={{delay:0.4}}
            id="socials"className="icon-animation  flex flex-row items-center justify-evenly w-[50vw]">
            <a href="https://www.facebook.com/thelatestvictim" target="_blank">
              
              <Image
              src="/icons/FC.png"
              alt="Facebook"
              height={40}
              width={40}
                />
            
            </a>

            <a href="https://www.instagram.com/thelatestvictim?igsh=MWJucDZ6NDBqZWltZw%3D%3D" target="_blank">
              
              <Image
              src="/icons/IC.png"
              alt="Instagram"
              height={40}
              width={40}
              />
            </a>

            <a href="https://open.spotify.com/artist/3D4CF6gqkkZezog1u9iiSi?si=clFuULL3TrCiyDHEzpugRw"target="_blank">

              <Image
              src="/icons/SC.png"
              alt="Spoitfy"
              height={40}
              width={40}
              />
            </a>

            <a href="https://www.youtube.com/channel/UC_P7pIIgrFcf5LTyvdWLoNw" target="_blank">

              <Image
              src="/icons/YTC.png"
              alt="Youtube"
              height={40}
              width={40}
              />
            </a>
            <a href="https://www.tiktok.com/@the.latest.victim?_t=8nYNFux77M2&_r=1" target="_blank">

              <Image
              src="/icons/TT.png"
              alt="Tik Tok"
              height={40}
              width={40}
              />
            </a>

            <a href="https://music.apple.com/us/album/bleeding-eyes/1754315139?i=1754315140" target="_blank">

              <Image
              src="/icons/AMC.png"
              alt="Tik Tok"
              height={40}
              width={40}
              />
            </a>


          </div>

          <ul
            className="links"
            initial={{ y: 5250 }}
            animate={{ y: -10 }}
          >
            <li>
              <Link
                href="/"
                className="link"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/shows"
                className="link"
              >
                Shows
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="link"
              >
                Merch
              </Link>
            </li>
          </ul>
        </div>

    <section id="song-section" className={roboto.className}>
      <h2 className='text-4xl font-bold text-center  mt-[10vh] mb-[5vh]'> Check out our latest single</h2>

        <div className="song-card">
          <Image
          src="/images/BleedingEyes.jpg"
          height={200}
          width={200}
          alt="Song Art"
          />
          <div className="song-data">         
            <h3 id="song-title"> Bleeding Eyes</h3>

            <AudioPlayer />

          
          <div className="streaming-link-container" >
          <h3>Avalible on :</h3>
            <div className="icon-animation streaming-links">
            <a href="https://open.spotify.com/track/0DE3Pw8j0iKJvDtJ9iPg39?si=BG3zqvkSRcaxbb70sX7jNQ&utm_medium=share&utm_source=linktree&nd=1&dlsi=6ad5197f7459494a"target="_blank">

              <Image
              src="/icons/SC.png"
              alt="Spoitfy"
              height={40}
              width={40}
              />
            </a>

            <a href="https://www.youtube.com/watch?v=zg0bflFlCzs" target="_blank">

              <Image
              src="/icons/YTC.png"
              alt="Youtube"
              height={40}
              width={40}
              />
            </a>
           

            <a href="https://music.apple.com/us/album/bleeding-eyes/1754315139?i=1754315140&at=1000lHKX&ct=linktree_http&itsct=lt_m&itscg=30200&ls=1" target="_blank">

              <Image
              src="/icons/AMC.png"
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
    <h2 className='text-center'> Our Members</h2>
    
    <section id="members-section">
     
      <div id="member-card">
        <Image
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
            <Image
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
            <Image
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
            <Image
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
        <Image
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
            <Image
            src="/Icons/IC.png"
            alt="Instagram"
            width={50}
            height={50}
            />
        
          <a href="https://www.instagram.com/lawshe223/"><p>@lawshe223</p></a>
          </div>

          <div id="social-container">
            <Image
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
            <Image
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
        <Image
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
            <Image
            src="/Icons/IC.png"
            alt="Instagram"
            width={50}
            height={50}
            />
        
          <a href="https://www.instagram.com/rabid.soul/"><p>@rabid.soul</p></a>
          </div>

          <div id="social-container">
            <Image
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
            <Image
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
        <Image
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
            <Image
            src="/Icons/IC.png"
            alt="Instagram"
            width={50}
            height={50}
            />
        
          <a href="https://www.instagram.com/hazambe/"><p>@hazambe</p></a>
          </div>

          <div id="social-container">
            <Image
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
            <Image
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
        <Image
        src="/images/IndividualPhotos/TristanIndividual.jpg"
        alt="Tristan Jones"
        width={200}
        height={200}
        />
        <h3>Tristan Jones</h3>
        <div className='content'>
        <p><em>Influences:</em> Avenged Sevenfold, All that Remains, Ghost, Breaking Benjaman, Metallica, Three Days Grace, Slipknot, Trivuim Pink Floyd</p>

        </div>
        <h3><em>Contact:</em></h3>
        
        <div id="socials-container">

          <div id="social-container">
            <Image
            src="/Icons/IC.png"
            alt="Instagram"
            width={50}
            height={50}
            />
        
          <a href="https://www.instagram.com/tristan.solos/"><p>@tristan.solos</p></a>
          </div>

          <div id="social-container">
            <Image
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
            <Image
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
    <h2> Photos</h2>
    <Images />
    </section>


    {/* <section id="footer">
        <form id="newsletter-container">
          <label htmlFor="newsletter-input"><h2>Sign up for our newsletter</h2></label>
          <input type="email" name="newsletter-input" placeholder='youremail@domain.com'></input>
        </form>
      
    </section> */}
    </>
  );
}
