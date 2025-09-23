import React from 'react'
import { sliderLists } from '../../Constants/Navlinks';
import { useState ,useRef} from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const Menu = () => {
    let [currentIndex, setcurrentIndex] = useState(0);

    const contentRef = useRef();

    useGSAP(()=>{
        const cocktailTimeline=gsap.timeline({
            scrollTrigger:{
                trigger:"#menu",
                start:"-30% top",
                end:"bottom bottom",
                scroller: document.body
  
            }
            
        
        })
        cocktailTimeline
            .fromTo(
            ".cocktail img",
            { opacity: 0, xPercent: -100 },
            { xPercent: 0, opacity: 1, duration: 1, ease: "power1.inOut" },
            0 
            )
            .fromTo(
            "#title",
            { opacity: 0, yPercent: 25 },
            { opacity: 1, duration: 1, yPercent: 0, ease: "power1.inOut" },
            0 
            )
            .fromTo(
            ".details h2",
            { opacity: 0, yPercent: 100 },
            { yPercent: 0, opacity: 1, duration: 1, ease: "power1.inOut" },
            0 
            )
            .fromTo(
            ".details p",
            { opacity: 0, yPercent: 100 },
            { yPercent: 0, opacity: 1, duration: 1, ease: "power1.inOut" },
            0 
            )
        gsap.fromTo("#title",{opacity:0 ,yPercent:25},{opacity:1,duration:1,yPercent:0,ease:"power1.inOut"})
        gsap.fromTo(".cocktail img",{opacity:0,xPercent:-100},{xPercent:0,opacity:1,duration:1,ease:"power1.inOut"})
        gsap.fromTo(".details h2",{opacity:0,yPercent:100},{yPercent:0,opacity:1,duration:1,ease:"power1.inOut"})
        gsap.fromTo(".details p",{opacity:0,yPercent:100},{yPercent:0,opacity:1,duration:1,ease:"power1.inOut"})
    },[currentIndex])

    const totalSlide=sliderLists.length
    const gotoSlide=(index)=>{
    const newIndex=(index+totalSlide) % totalSlide
    setcurrentIndex(newIndex)

    }
    const getCocktailAt=(indexOffset)=>{
        return sliderLists[(currentIndex+indexOffset+totalSlide)%totalSlide]
    }
    const currentCocktail=getCocktailAt(0)
    const prevCocktail=getCocktailAt(-1)
    const nextCocktail=getCocktailAt(1)
  return (
    <section id="menu" aria-labelledby='menu-heading'>
        <img src="/images/slider-left-leaf.png" alt="left-leaf" id="m-left-leaf"  />
        <img src="/images/slider-right-leaf.png" alt="right-leaf" id="m-right-leaf"  />

        <h2 id="menu-heading" className='sr-only' >
            Cocktail Menu
        </h2>
        <nav className='cocktail-tabs' aria-label='Cocktail Navigation'>
            {sliderLists.map((cocktail,index)=>{
                const isActive=index==currentIndex
                return (
                    <button key={cocktail.id} className={`${isActive ? "text-white border-white" :"text-white/50 border-white/50"}`}onClick={()=>(gotoSlide(index))
                        
                    }> {cocktail.name}</button>
                )
})}
        </nav>
        <div className='content '>
            <div className='arrows  px-10'>
                <button className=' text-left' onClick={()=>gotoSlide(currentIndex-1)}>
                    <span>{prevCocktail.name}</span>
                    <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true" />
                </button>
                <button className='text-right flex flex-col items-end' onClick={()=>gotoSlide(currentIndex+1)}>
                    <span>{nextCocktail.name}</span>
                    <img src="/images/left-arrow.png" className='' alt="left-arrow" aria-hidden="true" />
                </button>
            </div>
            <div className='cocktail'>
                <img src={currentCocktail.image} alt="cocktail" />
            </div>
            <div className='recipe p-10'>
                <div ref={contentRef} className='info'>
                    <p>Recipe for:</p>
                    <p id="title">{currentCocktail.name}</p>
                    
                </div>
                <div className='details'>
                    <h2>{currentCocktail.title}</h2>
                    <p>{currentCocktail.description}</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Menu

