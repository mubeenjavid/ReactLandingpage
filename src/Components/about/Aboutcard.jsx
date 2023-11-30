import React from 'react'

function Aboutcard(props) {
    const {img, title,category,descriptionhead,descriptionfooter,desc,spam}=props.data;
  return (
    <>
 <div class="container">
                <img class="img-fluid rounded about-heading-img mb-3 mb-lg-0" src={img} alt="..." />
                <div class="about-heading-content">
                    <div class="row">
                        <div class="col-xl-9 col-lg-10 mx-auto">
                            <div class="bg-faded rounded p-5">
                                <h2 class="section-heading mb-4">
                                    <span class="section-heading-upper">{category}</span>
                                    <span class="section-heading-lower">{title}</span>
                                </h2>
                                <p>{desc}</p>
                                <p class="mb-0">
                                {descriptionhead}
                                    <em>{spam}</em>
                                   {descriptionfooter}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


    </>
  )
}

export default Aboutcard;