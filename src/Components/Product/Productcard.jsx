import React from 'react';

function Productcard(props) {
    const{category,title,img,description}=props.data;
  return (
    <>

<section class="page-section">
            <div class="container">
                <div class="product-item">
                    <div class="product-item-title d-flex">
                        <div class="bg-faded p-5 d-flex ms-auto rounded">
                            <h2 class="section-heading mb-0">
                                <span class="section-heading-upper">{category}</span>
                                <span class="section-heading-lower">{title}</span>
                            </h2>
                        </div>
                    </div>
                    <img class="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src={img} alt="..." />
                    <div class="product-item-description d-flex me-auto">
                        <div class="bg-faded p-5 rounded"><p class="mb-0">{description}</p></div>
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}

export default Productcard;