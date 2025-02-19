"use client"

import "../styles/experience.css"

import ExperienceCard from "./ExperienceCard"
import Image from "next/image"

import { useWindowSize } from "react-use";

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger)

export default function Experience() {
    const { width } = useWindowSize();

    useGSAP(() => {
        gsap.to([".exp-timeline"], {
            height: '100%',
            ease: "none",
            scrollTrigger: {
                trigger: ".timeline-wrapper",
                start: 'top center-=100',
                end: 'bottom center-=100',
                scrub: 3,
            },
        });
    })

    return (
        <div id="experience">
            {width > 470 ? 
            <>
            <div className="exp-ellipse-container">
                <Image src={`/white.svg`} alt="White" className="exp-white" fill/>
                <Image src={`/pink.svg`} alt="Pink" className="exp-pink" fill/>
                <Image src={`/horizon.svg`} alt="Black" id="horizon" className="exp-horizon" fill/>
            </div>
            <h3 className="section-heading">Experience</h3>
            <div className="exp-timeline-wrapper">
                <div className="exp-timeline-half flex-right">
                    <ExperienceCard 
                        number="01"
                        title="Formula Electric"
                        org="SOFTWARE DEVELOPER"
                        description="Worked with a team of 15 developers to write firmware for an electric Formula One car. Turned existing scripts into a fully isolated python package, using Poetry, that generates firmware written in C from a DBC file. This code is for ECU’s on a CAN bus network. Also developed a software in the loop testing system written in Go. The testing system uses gRPC and web sockets to simulate the sending of CAN frames to ECU code, to ensure firmware code has expected functionality for certain test cases."
                        link="https://github.com/macformula/hil/pull/99"
                        isLeft={true}
                        isHidden={false}
                    />
                    <ExperienceCard 
                        number=""
                        title=""
                        org=""
                        description=""
                        link=""
                        isLeft={true}
                        isHidden={true}
                    />
                    <ExperienceCard 
                        number="03"
                        title="FTC Robotics Team"
                        org="SOFTWARE LEAD"
                        description="Led a team of 4 to build a fully functioning robot that could successfully pick up cones and place them on large poles. Programmed a fully autonomous mode, where the robot took telemetry from color sensors to navigate a maze with no human input. Designed software allowing the robot to be controlled using controller input. Created 8 pages of documentation with details about how to set up and configure the robot, which my teacher continues to use as a guide for the team. "
                        link="https://github.com/Haaniyaahmed/iBMS-Website"
                        isLeft={true}
                        isHidden={false}
                    />
                    <ExperienceCard 
                        number=""
                        title=""
                        org=""
                        description=""
                        link=""
                        isLeft={true}
                        isHidden={true}
                    />
                </div>
                <div className="timeline-wrapper">
                    <div className="exp-timeline"></div>
                </div>
                <div className="exp-timeline-half">
                    <ExperienceCard 
                        number=""
                        title=""
                        org=""
                        description=""
                        link=""
                        isLeft={false}
                        isHidden={true}
                    />
                    <ExperienceCard 
                        number="02"
                        title="iBiomed Society"
                        org="WEB DEVELOPER"
                        description="Worked on a website for the McMaster iBiomed Society which is projected to have over 100 monthly visitors. Constructed the backend for the website using Next.js to make a REST API. The API supports reading, writing and deleting from a spreadsheet that stores information about upcoming events and news articles regarding the iBiomed society. Also created reusable React components like a navigation bar, and footer which are present across all pages."
                        link="https://github.com/Haaniyaahmed/iBMS-Website"
                        isLeft={false}
                        isHidden={false}
                    />
                    <ExperienceCard 
                        number=""
                        title=""
                        org=""
                        description=""
                        link=""
                        isLeft={false}
                        isHidden={true}
                    />
                    <ExperienceCard 
                        number="04"
                        title="Foodland"
                        org="CASHIER & SHELF STOCKER"
                        description="Spent four years working as a cashier and shelf stocker at a local grocery store. Received the Sobeys Scholarship ($1500) for my outstanding work both inside and outside the workplace. Served customers with a friendly attitude."
                        link="https://foodland.ca"
                        isLeft={false}
                        isHidden={false}
                    />
                </div>
            </div></>:
            <>
            <div className="exp-ellipse-container">
                <Image src={`/white.svg`} alt="White" className="exp-white" fill/>
                <Image src={`/pink.svg`} alt="Pink" className="exp-pink" fill/>
                <Image src={`/horizon.svg`} alt="Black" id="horizon" className="exp-horizon" fill/>
            </div>
            <h3 className="section-heading">Experience</h3>
            <div className="exp-timeline-wrapper"> 
                <div className="timeline-wrapper">
                    <div className="exp-timeline"></div>
                </div>
                <div className="exp-timeline-half">
                    <ExperienceCard 
                        number="01"
                        title="Formula Electric"
                        org="SOFTWARE DEVELOPER"
                        description="Worked with a team of 15 developers to write firmware for an electric Formula One car. Turned existing scripts into a fully isolated python package, using Poetry, that generates firmware written in C from a DBC file. This code is for ECU’s on a CAN bus network. Also developed a software in the loop testing system written in Go. The testing system uses gRPC and web sockets to simulate the sending of CAN frames to ECU code, to ensure firmware code has expected functionality for certain test cases."
                        link="https://github.com/macformula/hil/pull/99"
                        isLeft={false}
                        isHidden={false}
                    />
                    <ExperienceCard 
                        number="02"
                        title="iBiomed Society"
                        org="WEB DEVELOPER"
                        description="Worked on a website for the McMaster iBiomed Society which is projected to have over 100 monthly visitors. Constructed the backend for the website using Next.js to make a REST API. The API supports reading, writing and deleting from a spreadsheet that stores information about upcoming events and news articles regarding the iBiomed society. Also created reusable React components like a navigation bar, and footer which are present across all pages."
                        link="https://github.com/Haaniyaahmed/iBMS-Website"
                        isLeft={false}
                        isHidden={false}
                    />
                    <ExperienceCard 
                        number="03"
                        title="FTC Robotics Team"
                        org="SOFTWARE LEAD"
                        description="Led a team of 4 to build a fully functioning robot that could successfully pick up cones and place them on large poles. Programmed a fully autonomous mode, where the robot took telemetry from color sensors to navigate a maze with no human input. Designed software allowing the robot to be controlled using controller input. Created 8 pages of documentation with details about how to set up and configure the robot, which my teacher continues to use as a guide for the team. "
                        link="https://github.com/Haaniyaahmed/iBMS-Website"
                        isLeft={false}
                        isHidden={false}
                    />
                    <ExperienceCard 
                        number="04"
                        title="Foodland"
                        org="CASHIER & SHELF STOCKER"
                        description="Spent four years working as a cashier and shelf stocker at a local grocery store. Received the Sobeys Scholarship ($1500) for my outstanding work both inside and outside the workplace. Served customers with a friendly attitude."
                        link="https://foodland.ca"
                        isLeft={false}
                        isHidden={false}
                    />
                </div>
            </div>
            </>
            }
        </div>
    )
}