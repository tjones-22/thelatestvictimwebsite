
import Link from "next/link";
import Image from "next/image";
const LinkMenu = ({ isOpen, toggleMenu }) => {
    if (!isOpen) return null;


    return (

      
        <aside className="fixed top-0 left-0 w-64 h-full bg-gray-800 text-white p-4 z-50 lg:hidden">
        <button className="mb-4" onClick={toggleMenu}>
            <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
            ></path>
            </svg>
        </button>
        <nav id="aside-links-div"className="flex flex-col space-y-4">
            <Link href="/" className=" link ">Home</Link>
            <Link href="/shows" className=" link ">Shows</Link>
            <Link href="/services" className=" link ">Merch</Link>
        </nav>

        <div id="socials-aside"className="mt-5">
            
            <a href="https://www.facebook.com/thelatestvictim" target="_blank">
                <Image
                    src="/icons/FC.png"
                    alt="Facebook"
                    width={40}
                    height={40}
                />
            </a>

            <a href="https://www.instagram.com/thelatestvictim?igsh=MWJucDZ6NDBqZWltZw%3D%3D" target="_blank">
                <Image
                    src="/icons/IC.png"
                    alt="Instagram"
                    width={40}
                    height={40}
                />
            </a>
            <a href="https://www.tiktok.com/@the.latest.victim?_t=8nYNFux77M2&_r=1" target="_blank">
                <Image
                    src="/icons/TT.png"
                    alt="TikTok"
                    width={40}
                    height={40}
                />
            </a>

            <a href="https://open.spotify.com/artist/3D4CF6gqkkZezog1u9iiSi?si=clFuULL3TrCiyDHEzpugRw&nd=1&dlsi=b864df9ded254483" target="_blank">
                <Image
                    src="/icons/SC.png"
                    alt="Spoitfy"
                    width={40}
                    height={40}
                />
            </a>

            <a href="https://music.apple.com/us/album/bleeding-eyes/1754315139?i=1754315140" target="_blank">
                <Image
                    src="/icons/AMC.png"
                    alt="Apple Music"
                    width={40}
                    height={40}
                />
            </a>
            <a href="https://www.youtube.com/channel/UC_P7pIIgrFcf5LTyvdWLoNw" target="_blank">
                <Image
                    src="/icons/YTC.png"
                    alt="Youtube"
                    width={40}
                    height={40}
                />
            </a>
         

        </div>
        </aside>
    );
};

export default LinkMenu;

