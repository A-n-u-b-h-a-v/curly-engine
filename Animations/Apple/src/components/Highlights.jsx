import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { rightImg, watchImg } from '../utils'
import VideoCarousel from './VideoCarousel'

const Highlights = () => {
    useGSAP(()=>{
        gsap.to("#title",{opacity:1,y:10})
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".link", {
            scrollTrigger: {
            trigger: ".link",
            start: "top-=50 95%",
            end: "bottom bottom",
            scroller: document.body

            },
            opacity: 1,
            y: 0,
            stagger: 0.25
        });
    })
  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding  bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex justify-between">
          <h1 id="title" className="section-heading">Get the highlights.</h1>

          <div className="flex flex-wrap gap-5 ">
            <p className="link">
              Watch the film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link">
              Watch the event
              <img src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarousel/>
      </div>
    </section>
  )
}

export default Highlights
