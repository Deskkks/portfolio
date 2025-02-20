"use client"

import Header from "@/components/header";
import Home from "@/components/Home/home";
import { useEffect, useState } from "react";

export default function Portfolio() {

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return(
    <>
      <Header scrollPosition={scrollPosition}/>
      <Home scrollPosition={scrollPosition}/>
    </>
  )
}