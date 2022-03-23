import * as React from "react";
import { SiteHeader } from "../headers/header";
import TopBar from "../headers/top-bar.js";
import { Nav } from "../material/nav";



export default function Contacts() {
    return (
        <>
        <div className="wide">
            
        <TopBar />
          <SiteHeader ordersCount={0}/>
          <section className="" style={{backgroundColor: 'white'}}>
          
        
        <section class="">
            
        <div class="container py-2">
        <Nav toShow={false} title="" firstTitle="Оплата и доставка" firstTitleHref="/delivery" />
          <header class="mb-5">
            <h2 class="text-uppercase lined mb-4">Мы всегда поможем Вам! </h2>
            <p class="lead">Вам что-то интересно? У вас есть какие-то проблемы с нашими изделиями?</p>
            <p class="text-sm mb-5">Пожалуйста,  не стесняйтесь связаться с нами, наши менеджеры работают для Вас 7 дней в неделю с 9:00 до 21:00.</p>
          </header>

         <div class="row gy-5 mb-5">
            <div class="col-lg-6 block-icon-hover text-center">
              <div class="icon icon-outlined icon-outlined-primary icon-thin mx-auto mb-3">
                <i class="fab fa-whatsapp" style={{color:"#25D366"}}></i>
                </div>
              
              <ul class="list-unstyled text-sm mb-0">
                <li><strong><a target="_blank" href="https://wa.me/77473865301" style={{fontSize: 20}}>WhatsApp</a></strong></li>
              </ul>
              <p class="text-gray-600 text-sm">Свяжитесь с нами в текстовом виде</p>
              
            </div>
            <div class="col-lg-6 block-icon-hover text-center">
              <div class="icon icon-outlined icon-outlined-primary icon-thin mx-auto mb-3"><i class="fab fa-instagram" style={{color: '#fb3958'}}></i></div>
              <ul class="list-unstyled text-sm mb-0">
                <li><strong><a target="_blank" href="https://www.instagram.com/print_shop.kz" style={{fontSize: 20}}>Instagram</a></strong></li>
              </ul>
              <p class="text-gray-600 text-sm">Свяжитесь с нами в текстовом виде</p>
              
            </div>
          </div>
          
        </div>
      </section>
      </section>
      </div>
      
        </>
    )
}