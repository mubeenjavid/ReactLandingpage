import React from 'react'
import Aboutcard from '../Components/about/Aboutcard';
import aboutdata from '../Components/about/Aboutdata';
function About() {
  return (
    <>
        <section class="page-section about-heading">
            {
                aboutdata.map((item)=>{
                    return(
                        <Aboutcard  data={item}/>

                    )
                })
            }
        </section>

    </>
  )
}

export default About;