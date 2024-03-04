// eslint-disable-next-line no-unused-vars
import React from 'react';

import cat from '../assets/cat-bg.png'

const DogMid = () => {
  return (
    <>
    <div className="DigMid">
    <div className="container">
        <div className="row">
            
            <div className='bg-color square-cat'>
    <div className="catmid-col1">
        <h2>Promoção de Vendas Felino</h2>
        <p>Produtos com até 30% de desconto</p>
        <button className='btnMid'>Veja Mais</button>
    </div>
    <div className="catmid-col2">
        <img src={cat} alt="" />
    </div>
</div>

        </div>
    </div>
</div>

    </>
  )
}

export default DogMid