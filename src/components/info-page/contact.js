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
            <div class="col-lg-4 block-icon-hover text-center">
              <div class="icon icon-outlined icon-outlined-primary icon-thin mx-auto mb-3"><i class="fab fa-whatsapp" style={{color:"#25D366"}}></i></div>
              <h4 class="text-uppercase mb-3">WhatsApp</h4>
              <p class="text-gray-600 text-sm">Свяжитесь с нами по данному номеру в текстовом виде (для контроля работы менеджеров)</p>
              <ul class="list-unstyled text-sm mb-0">
                <li><strong><a href="mailto:">info@fakeemail.com</a></strong></li>
                <li><strong><a href="/">Ticketio</a></strong> - our ticketing support platform</li>
              </ul>
            </div>
            <div class="col-lg-4 block-icon-hover text-center">
              <div class="icon icon-outlined icon-outlined-primary icon-thin mx-auto mb-3"><i class="fab fa-instagram" style={{color: '#fb3958'}}></i></div>
              <h4 class="text-uppercase mb-3">Instagram</h4>
              <p class="text-gray-600 text-sm">Свяжитесь с нами по данному номеру в текстовом виде (для контроля работы менеджеров)</p>
              <ul class="list-unstyled text-sm mb-0">
                <li><strong><a href="mailto:">info@fakeemail.com</a></strong></li>
                <li><strong><a href="/">Ticketio</a></strong> - our ticketing support platform</li>
              </ul>
            </div>
            <div class="col-lg-4 block-icon-hover text-center">
              <div class="icon icon-outlined icon-outlined-primary icon-thin mx-auto mb-3"><i class="fab fa-telegram-plane" style={{color:"#0088cc"}}></i></div>
              <h4 class="text-uppercase mb-3">Telegram</h4>
              <p class="text-gray-600 text-sm">Свяжитесь с нами по данному номеру в текстовом виде (для контроля работы менеджеров)</p>
              <ul class="list-unstyled text-sm mb-0">
                <li><strong><a href="mailto:">info@fakeemail.com</a></strong></li>
                <li><strong><a href="/">Ticketio</a></strong> - our ticketing support platform</li>
              </ul>
            </div>
          </div>
          
        </div>
      </section>
      </section>
      </div>
      
        </>
    )
}