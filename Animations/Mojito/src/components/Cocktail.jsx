import React from 'react'
import { cocktailLists ,mockTailLists} from '../../Constants/Navlinks'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const Cocktail = () => {
    useGSAP(()=>{
        const parallaxTimeline = gsap.timeline({
            scrollTrigger: {
            trigger: "#cocktails",
            start: "top 30%",
            end: "bottom 80%",
            scrub: true,
            scroller: document.body

            }
        });
        parallaxTimeline.from("#c-left-leaf", {
            x: -100, y: 100
        })
        .from("#c-right-leaf", {
            x: 100, y: 100
        });
    })
  return (
    <div>
      <section id="cocktails" className="noisy">
        <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf"  />
        <img src="/images/cocktail-right-leaf.png" alt="r-leaf" id="c-right-leaf" />

        <div className='list p-10'>
            <div className='popular'>
                <h2>Most poplular cocktails:</h2>
                <ul>
                    {cocktailLists.map((drink)=>(
                        <li key={drink.name}>
                            <div className='md:me-28'>
                                <h3>{drink.name}</h3>
                                <p>{drink.country} | {drink.detail}</p>
                            </div>
                            <span>-{drink.price}</span>
                        </li>
                    ))}
                </ul>
            </div>
             <div className='loved'>
                <h2>Most Loved mocktails:</h2>
                <ul>
                    {mockTailLists.map((mocktail)=>(
                          <li key={mocktail.name}>
                            <div className='me-28'>
                                <h3>{mocktail.name}</h3>
                                <p>{mocktail.country} | {mocktail.detail}</p>
                            </div>
                            <span>-{mocktail.price}</span>
                        </li>  
                        ))
                    }
                </ul>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Cocktail
