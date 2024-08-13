import Image from "next/image";


const Loader = () => {
    return ( 
        <>
            <div className="loader-div">
                <div className="custom-loader-words">

                    <div className="loader">
                    <div data-glitch="Loading..." className="glitch">Loading...</div>

                  


                    </div>
                </div>
            </div>
            
        </>
     );
}
 
export default Loader;