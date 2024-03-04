// eslint-disable-next-line no-unused-vars
import React from 'react'



const Footer = () => {
  return (
    <>
    <div className="Footer ">
        <div className="container-fluid">
            <div className="row gx-0">
                <div className="col-md-3">
                    <div className="footer-col1">
                       <h4>Nossas Redes</h4>
                        <p className='py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic itaque esse, minima praesentium quis molestias.</p>
                        <div className='icons'>
                            <i className='bx bxl-tiktok' ></i>
                            <i className='bx bxl-twitter' ></i>
                            <i className='bx bxl-instagram' ></i>
                            <i className='bx bxl-facebook' ></i>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="footer-col2 px-5">
                        <h3>Informação</h3>
                        <ul>
                            <li>
                                <a href="#">Contatos</a>
                            </li>
                            <li>
                                <a href="#">Produtos</a>
                            </li>
                            <li>
                                <a href="#">Saude</a>
                            </li>
                            <li>
                                <a href="#">Veterinario</a>
                            </li>
                            <li>
                                <a href="#">Redes</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="footer-col3">
                    <h3>Nossa Politica</h3>
                        <ul>
                            <li>
                                <a href="#">Abandono</a>
                            </li>
                            <li>
                                <a href="#">Extinção</a>
                            </li>
                            <li>
                                <a href="#">Apoio</a>
                            </li>
                            <li>
                                <a href="#">Carreiras</a>
                            </li>
                            <li>
                                <a href="#">Politica de Privacidade</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="footer-col4">
                        <h4>Sobre Nos</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, blanditiis.</p>
                        
                        <button className='btn2'>Cadastrar</button>
                    </div>
                </div>
                <p className='text-center py-2'>copyright <a href="https://github.com/PauloAquarius0299" target='blank'>Paulo.Dev</a></p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer