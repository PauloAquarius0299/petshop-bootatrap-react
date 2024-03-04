// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css'
import 'swiper/css/scrollbar';

import {Scrollbar} from 'swiper/modules';

import user1 from '../assets/user1.jpg';
import user2 from  '../assets/user2.jpg';
import user3 from '../assets/user3.jpg'

const Clients = () => {
  return (
    <>
    <div className="container-fluid py-5 text-center">
    <h1 className='py-4'>O Que Os Nossos <span>Clientes</span> Dizem?</h1>
    <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="row gx-0 Clients text-center">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className="clients-col ">
                    <img src={user1} alt="usuario"  />
                    <h4 className='pt-4'>Carolina Dias</h4>
                    <div className="starts py-3">
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        </div>
                    <p className='pt-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor atque nisi, obcaecati voluptas incidunt illum iste at delectus molestias facere ducimus laboriosam unde, quas maiores, libero qui minus similique veniam.</p>
                    
                </div>
                </div>
                <div className="col-md-2"></div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="row gx-0 Clients text-center">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className="clients-col ">
                    <img src={user2} alt="usuario"  />
                    <h4 className='pt-4'>Ramon Fonseca</h4>
                    <div className="starts py-3">
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        </div>
                    <p className='pt-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor voluptates et aspernatur, voluptatum dicta laborum officiis amet doloribus facere nam tenetur eos ratione magni consectetur! Ipsa veritatis iure sapiente asperiores iusto ducimus quaerat magnam repellendus consequatur.</p>
                    
                </div>
                </div>
                <div className="col-md-2"></div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="row gx-0 Clients text-center">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className="clients-col ">
                    <img src={user3} alt="usuario"  />
                    <h4 className='pt-4'>Juliana Valença</h4>
                    <div className="starts py-3">
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        </div>
                    <p className='pt-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus eaque eos atque provident nulla cumque numquam, incidunt doloribus quam modi?</p>
                    
                </div>
                </div>
                <div className="col-md-2"></div>
            </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
    </>
  )
}

export default Clients