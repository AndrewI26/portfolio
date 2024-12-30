"use client"

import "./globals.css"
import "./styles/hero.css"
import "./styles/projects.css"
import "./styles/skills.css"
import "./styles/contact.css"

import Layout from "./components/layout";

import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact"


export default function Home() {
  return (
    <Layout>
      <Hero />
      <div className="black-wrapper">
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
      
    </Layout>
  );
}