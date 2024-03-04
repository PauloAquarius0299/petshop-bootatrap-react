// eslint-disable-next-line no-unused-vars
import React from 'react'

export const Contact = () => {
  return (
    <>
        <div className="Contact px-5 py-4">
        
            <div className="container mt-2">
                <div className="row">
                    <div className="col-md-4 order-0 order-md-1 pb-5 ">
                        <div className="contact-col1"></div>
                    </div>
                    <div className="col-md-8 ">
                        <div className="contact-col2">
                        <h1 className=' text-center'>Entre em <span>Contato</span></h1>
        <p className='text-center py-2 px-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni officiis quam non modi maiores natus praesentium voluptatem.</p>
                                <div className="contact-col px-5 d-flex">
                                    <input 
                                    className='form-control form-control-lg '
                                    type="name" 
                                    placeholder='Nome Completo'
                                    />
                                    <input 
                                    className='form-control form-control-lg '
                                    type='text' 
                                    placeholder='Animal'
                                    />
                                     
                                </div>
                                <div className='px-5'>
                                    <input
                                        className='form-control form-control-lg my-3'
                                        type='email'
                                        placeholder='Email'
                                        />
                                        <select
                                        className='form-select form-select-lg mb-3'
                                        aria-label='Large select example'>
                                            <option selected>Selecione Serviço</option>
                                            <option value='1'>Alimentos</option>
                                            <option value="2">Brinquedos</option>
                                            <option value="3">Remedios</option>
                                        </select>
                                        <textarea className='form-control form-control-lg my-3' placeholder='Escreva sua menssagem' cols="60" rows="3"></textarea>
                                        <div className='btn1 py-2 text-center'>Enviar</div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
export default Contact;