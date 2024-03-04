// eslint-disable-next-line no-unused-vars
import React from 'react';
import hero from '../assets/hero-2.png'
import waves from '../assets/layer.png'

const Hero = () => {
  return (
    <>
    <div className='Hero'>
            <div className="container-fluid gx-0 px-5 ">
                <div className="row gx-0 align-items-center mx-4">
                    <div className="col-md-6">
                        <div className="hero_col1">
                            <h3>Todo Cuidado Com o Seu Pet</h3>
                            <h1>Melhores <span>Produtos</span> e Brinquedos</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, illo sit omnis inventore dignissimos facere hic deleniti corrupti natus pariatur debitis exercitationem, asperiores sunt unde saepe tenetur. Dolore rerum quos minima quod veritatis molestias saepe nostrum? Dignissimos autem ad sequi tempore ipsum at.</p>
                            <button className="btn1">Veja Mais</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="hero_col2 text-end pt-5 pt-md-0">
                            <img src={hero} alt="" className='img-fluid hero-image' />
                        </div>
                    </div>
                </div>
            </div>
        
    </div>
    <div className="Waves">
        <img src={waves} alt="" className='img-fluid' />
    </div>
    </>
  )
}

export default Hero