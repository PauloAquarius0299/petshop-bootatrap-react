// eslint-disable-next-line no-unused-vars
import React from 'react';
import dog from '../assets/bg-dogmid.png'

const CatMid = () => {
  return (
    <>
    <div className="DigMid">
    <div className="container">
        <div className="row">
            
            <div className='bg-color square'>
    <div className="dogmid-col1">
        <h2>Promoção de Vendas Caninos</h2>
        <p>Produtos com até 30% de desconto</p>
        
        <button className='btnDog'>Veja Mais</button>
    </div>
    <div className="dogmid-col2">
        <img src={dog} alt="" />
        
    </div>
</div>

        </div>
    </div>
</div>
    </>
  )
}

export default CatMid