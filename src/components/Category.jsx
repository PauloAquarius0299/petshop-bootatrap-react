// eslint-disable-next-line no-unused-vars
import React from 'react';
import categoria1 from '../assets/categoria.png';
import categoria2 from '../assets/categoria2.png';
import categoria3 from '../assets/categoria3.png';
import categoria4 from '../assets/categoria4.png';

const Category = () => {
  return (
    <>
   <div className="category">
    <div className="container-fluid category-main text-center">
        <h2 className='h2-main '>Top <span>Categorias</span></h2>
        <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet minima iste dolore et. Culpa ullam.</p>
        <div className="category-grid">
            <div className="category-col">
                <div className='circle circle-blue'>
                    <img src={categoria1} alt="" className='img-fluid' />
                </div>
            </div>
            <div className="category-col ">
                <div className='circle circle-yellow'>
                    <img src={categoria2} alt="" className='img-fluid' />
                </div>
            </div>
            <div className="category-col">
                <div className='circle circle-green'>
                    <img src={categoria3} alt="" className='img-fluid' />
                </div>
            </div>
            <div className="category-col">
                <div className='circle circle-red'>
                    <img src={categoria4} alt="" className='img-fluid' />
                </div>
            </div>
        </div>
    </div>
</div>


    </>
  )
}

export default Category