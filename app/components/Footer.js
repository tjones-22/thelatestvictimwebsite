
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
    return ( 
        <>
        <footer>
            <div className="footer-links-icons icon-animation">
                <h2>Visit us on:</h2>
                <div className="links-div">

                    <a href="https://www.facebook.com/thelatestvictim" target="_blank">

                        <Image
                            src="/Icons/FC.png"
                            alt="Facebook"
                            height={40}
                            width={40}
                        />
                
                    </a>

                    <a href="https://www.instagram.com/thelatestvictim?igsh=MWJucDZ6NDBqZWltZw%3D%3D" target="_blank">
                    
                        <Image
                        src="/Icons/IC.png"
                        alt="Instagram"
                        height={40}
                        width={40}
                        />
                    </a>

                    <a href="https://open.spotify.com/artist/3D4CF6gqkkZezog1u9iiSi?si=clFuULL3TrCiyDHEzpugRw"target="_blank">

                        <Image
                        src="/Icons/SC.png"
                        alt="Spoitfy"
                        height={40}
                        width={40}
                        />
                    </a>

                <a href="https://www.youtube.com/channel/UC_P7pIIgrFcf5LTyvdWLoNw" target="_blank">

                        <Image
                        src="/Icons/YTC.png"
                        alt="Youtube"
                        height={40}
                        width={40}
                        />
                    </a>
                    <a href="https://www.tiktok.com/@the.latest.victim?_t=8nYNFux77M2&_r=1" target="_blank">

                        <Image
                        src="/Icons/TT.png"
                        alt="Tik Tok"
                        height={40}
                        width={40}
                        />
                    </a>

                    <a href="https://music.apple.com/us/album/bleeding-eyes/1754315139?i=1754315140" target="_blank">

                        <Image
                        src="/Icons/AMC.png"
                        alt="Tik Tok"
                        height={40}
                        width={40}
                        />
                    </a>
                </div>
            </div>

            <div className="links-div">
                <ul
                className="footer-links"
                initial={{ y: 5250 }}
                animate={{ y: -10 }}
                >
                    <li>
                        <Link href="/" className="link">Home</Link>
                    </li>

                    <li>
                        <Link href="/shows" className="link">Shows</Link>
                    </li>

                    <li>
                        <Link href="/merch" className="link">Merch</Link>
                    </li>
                </ul>
            </div>
        </footer>
        </>
     );
}
 
export default Footer;