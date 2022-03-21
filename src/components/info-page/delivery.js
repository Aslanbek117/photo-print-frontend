import * as React from "react";
import { SiteHeader } from "../headers/header";
import TopBar from "../headers/top-bar.js";
import { Nav } from "../material/nav";
import '../../styles/app.css'


export default function Delivery() {

    const [show, setShow] = React.useState(new Map())


    React.useEffect(() => {
      let map = new Map()
      map.set(1, true)
      map.set(2, false)
      setShow(map)
    }, []);



    const onClick = (id) => {
      let map = new Map(show)

      if (id === 1) {
        if (map.get(1) === true) {
          map.set(1, false)
        } else {
          map.set(1, true)
        map.set(2, false)
        }
      } else if (id === 2) {
        if (map.get(2) === true) {
          map.set(2, false)
        } else {
          map.set(2, true)
          map.set(1, false)
        }      
      }
      setShow(map)
    }

    return (
        <>
        <div className="wide">
            
        <TopBar />
          <SiteHeader ordersCount={0}/>
          <section className="" style={{backgroundColor: 'white'}}>
          
        
        <section class="">
            
        <div class="container py-4">
        <Nav toShow={false} title="" firstTitle="Оплата и доставка" firstTitleHref="/delivery" />
          <header class="mb-5">
            <h2 class="text-uppercase lined mb-4">Оплата и доставка </h2>
            <p class="lead">Мы принимаем заказы через сайт или социальные сети. Чтобы держать низкие цены и качество на достаточном уровне, мы работаем по предоплате 30% от суммы заказа.</p>
            <p class="lead">Каждая картина изготавливается индивидуально. У нас отстутсвует тиражная продукция. Именно поэтому мы имеем возможность тщательно контролировать каждый этап изготовления заказа на достаточном уровне.</p>
          </header>
          <div class="row gy-4">
            <div class="col-lg-8">
              <div class="accordion mb-5" id="aboutAccordion">
                      <div class="accordion-item mb-2">
                        <h5 class="accordion-header" id="aboutAccordion-headingOne">
                          <button class="accordion-button text-uppercase fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#aboutAccordion-collapseOne" aria-expanded="true" aria-controls="aboutAccordion-collapseOne"
                          onClick={() => onClick(1) }
                          >Оплата</button>
                        </h5>
                        <div class={ + show.get(1) ? "accordion-collapse collapse show" : "accordion-collapse collapse" } >
                          <div class="accordion-body">
                            <div class="row">
                              <div class="col-md-4"><i class="far fa-money-bill-alt fa-5x" style={{color: "green"}}></i></div>
                              <div class="col-md-8">
                                <p>Предоплата заказа составляет 30%. <br/>Отправить предоплату можно посредством банковского перевода, например, Kaspi Gold.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item mb-2">
                        <h5 class="accordion-header" id="aboutAccordion-headingTwo">
                          <button class="accordion-button text-uppercase fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#aboutAccordion-collapseTwo" aria-expanded="false" aria-controls="aboutAccordion-collapseTwo"
                          onClick={() => onClick(2)}>Доставка</button>
                        </h5>
                        <div class={ + show.get(2) ? "accordion-collapse collapse show" : "accordion-collapse collapse" } >
                          <div class="accordion-body">
                            <div class="row">
                              <div class="col-md-4"><i class="fas fa-truck fa-5x" style={{color: "orange"}}></i></div>
                              <div class="col-md-8">
                                <p>Доставка осуществляется в периметре Толе-би - Аль-Фараби. <br/>Стоимость доставки составляет 2000 тг.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
              </div>
            </div>
            {/* <div class="col-lg-4">
              <div class="ratio ratio-4x3">
                <iframe class="embed-responsive-item" src="//www.youtube.com/embed/upZJpGrppJA"></iframe>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      </section>
      </div>
      
        </>
    )
}