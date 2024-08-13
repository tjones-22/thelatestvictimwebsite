"use client"

import Loader from "../components/Loader"
import { useEffect,useState } from "react";
import Image from "next/image"
import Link from "next/link"


export default function Merch(){
const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading state
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  if (loading) {
    return <Loader />;
  }
  
    return (
        <>
         
        <h1 className="text-[20px] text-center text-white mt-[10vh] mb-[10vh]"> Check back soon 😀</h1>
        
        </>
    )
}