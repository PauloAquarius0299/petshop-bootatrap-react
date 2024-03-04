// eslint-disable-next-line no-unused-vars
import React from 'react'
import product1 from '../assets/product1.png'
import product2 from '../assets/product2.jpg'
import product3 from '../assets/product3.png'
import product4 from '../assets/product4.png'
import product5 from '../assets/product5.png'
import product6 from '../assets/product6.png'
import product7 from '../assets/projuct7.png'
import product8 from '../assets/product8.png'
import product9 from '../assets/product9.png'

const Products = () => {
  return (
    <>
    <div className="Products">
        <div className="container-fluid products-main ">
            <h1 className='py-4'>Nossos <span>Produtos</span></h1>
            <div className="row">
                <div className="col-md-4">
                    <div className="products-col grid">
                        <img src={product1} alt="" className='img-fluid' />
                        <div className="products_mid p-3 px-2">
                        <h4>Multi-Cat Strength</h4>
                       
                        <div className="starts">
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star-half' ></i>
                        </div>
                        <h5 className='pt-2'>$80,00</h5>
                        </div>
                        <button className='btn1'>Add ao Carrinho</button>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="products-col">
                        <img src={product2} alt="" className='img-fluid' />
                        <div className="products_mid p-3 ">
                        <h4>Purpurina one</h4>
                       
                        <div className="starts">
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star-half' ></i>
                        </div>
                        <h5 className='pt-2'>$70,00</h5>
                        </div>
                        <button className='btn1'>Add ao Carrinho</button>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="products-col">
                        <img src={product3} alt="" className='img-fluid' />
                        <div className="products_mid p-3">
                        <h4>Pedigree Adulto</h4>
                       
                        <div className="starts">
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star-half' ></i>
                        </div>
                        <h5 className='pt-2'>$90,00</h5>
                        </div>
                        <button className='btn1'>Add ao Carrinho</button>
                    </div>
                </div>
            </div>
            {/* coluna 2 */}
            <div className="row">
                <div className="col-md-4">
                    <div className="products-col">
                        <img src={product4} alt="" className='img-fluid' />
                        <div className="products_mid p-3 px-2">
                        <h4>Pure Balance</h4>
                       
                        <div className="starts">
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star-half' ></i>
                        </div>
                        <h5 className='pt-2'>$90,00</h5>
                        </div>
                        <button className='btn1'>Add ao Carrinho</button>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="products-col">
                        <img src={product5} alt="" className='img-fluid' />
                        <div className="products_mid p-3 ">
                        <h4>Shampoo Faldagos</h4>
                       
                        <div className="starts">
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star-half' ></i>
                        </div>
                        <h5 className='pt-2'>$20,00</h5>
                        </div>
                        <button className='btn1'>Add ao Carrinho</button>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="products-col">
                        <img src={product6} alt="" className='img-fluid' />
                        <div className="products_mid p-3">
                        <h4>Sache Whiskas Adulto</h4>
                       
                        <div className="starts">
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star-half' ></i>
                        </div>
                        <h5 className='pt-2'>$10,00</h5>
                        </div>
                        <button className='btn1'>Add ao Carrinho</button>
                    </div>
                </div>
            </div>
            {/* COLUNA 3 */}
            <div className="row">
                <div className="col-md-4">
                    <div className="products-col">
                        <img src={product7} alt="" className='img-fluid' />
                        <div className="products_mid p-3 px-2">
                        <h4>Wardley Shrimp</h4>
                       
                        <div className="starts">
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star-half' ></i>
                        </div>
                        <h5 className='pt-2'>$20,00</h5>
                        </div>
                        <button className='btn1'>Add ao Carrinho</button>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="products-col">
                        <img src={product8} alt="" className='img-fluid' />
                        <div className="products_mid p-3 ">
                        <h4>Vasilha de Comida</h4>
                       
                        <div className="starts">
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star-half' ></i>
                        </div>
                        <h5 className='pt-2'>$5,00</h5>
                        </div>
                        <button className='btn1'>Add ao Carrinho</button>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="products-col">
                        <img src={product9} alt="" className='img-fluid' />
                        <div className="products_mid p-3">
                        <h4>Kit Colheira </h4>
                       
                        <div className="starts">
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star-half' ></i>
                        </div>
                        <h5 className='pt-2'>$20,00</h5>
                        </div>
                        <button className='btn1'>Add ao Carrinho</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Products