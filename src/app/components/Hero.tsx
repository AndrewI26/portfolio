"use client"
import "../styles/hero.css"
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger)


export default function Hero() {
    useGSAP(() => {
        gsap.to([".hero-title", ".hero-subtitle", ".hero-small"], {
          opacity: 0,
          scale: .8,
          margin: "-1px",
          delay: 5,
          scrollTrigger: {
            trigger: ".hero-container",
            start: 'top 10%',
            end: 'top -50%',
            scrub: 2,
          },
        });
    })

    return (
      <div className="hero-container">
        <h6 className="hero-small">Hi, my name is</h6>
        <h1 id="title" className="hero-title">Andrew Iammancini</h1>
        <h3 id="subtitle" className="hero-subtitle">My coding skills are out of this world</h3>  
      </div>
    )
}