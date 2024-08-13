import Link from "next/link";

const NotFound = () => {
    return ( 
        <>
        <main className="text-center"> 
            <h2 className="  text-3xl "> There was an issue </h2>
            <p className="error"> We couldn't find the resource you requested</p>
           
        </main>
        </>
     );
}
 
export default NotFound;