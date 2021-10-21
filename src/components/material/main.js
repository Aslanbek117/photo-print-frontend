import * as React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { CarouselComponent } from 'components/material/carousel';
import { CardComponent } from 'components/material/cards';
import { BrowserRouter } from 'react-router-dom';
import "antd/dist/antd.css";
import "./app.css";
import Sider from 'antd/lib/layout/Sider';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;


const { SubMenu } = Menu;

export default function App() {
  return (
    <>
    <div class="wide" id="all">
      <div class="top-bar py-2" id="topBar" style={{background: "#555"}}>
        <div class="container px-lg-0 text-light py-1">
          <div class="row d-flex align-items-center">
            <div class="col-md-6 d-md-block d-none">
              <p class="mb-0 text-xs">Contact us on +420 777 555 333 or hello@universal.com.</p>
            </div>
            <div class="col-md-6">
              <div class="d-flex justify-content-md-end justify-content-between">
                <ul class="list-inline d-block d-md-none mb-0">
                  <li class="list-inline-item"><a class="text-xs" href="#"><i class="fa fa-phone"></i></a></li>
                  <li class="list-inline-item"><a class="text-xs" href="#"><i class="fa fa-envelope"></i></a></li>
                </ul>
                <ul class="list-inline mb-0">
                  <li class="list-inline-item"><a class="text-xs text-uppercase fw-bold text-reset" href="#" data-bs-toggle="modal" data-bs-target="#login-modal"><i class="fas fa-door-open me-2"></i><span class="d-none d-md-inline-block">Sign In</span></a></li>
                  <li class="list-inline-item"><a class="text-xs text-uppercase fw-bold text-reset" href="customer-register.html"><i class="fas fa-user me-2"></i><span class="d-none d-md-inline-block">Sign Up</span></a></li>
                </ul>
                <ul class="list-inline mb-0 ms-lg-4">
                  <li class="list-inline-item text-gray-600 m-0"><a class="text-xs social-link-hover" href="#" title="Facebook"><i class="fab fa-facebook-f"></i></a></li>
                  <li class="list-inline-item text-gray-600 m-0"><a class="text-xs social-link-hover" href="#" title="Twitter"><i class="fab fa-twitter"></i></a></li>
                  <li class="list-inline-item text-gray-600 m-0"><a class="text-xs social-link-hover" href="#" title="Linkedin"><i class="fab fa-linkedin-in"></i></a></li>
                  <li class="list-inline-item text-gray-600 m-0"><a class="text-xs social-link-hover" href="#" title="Email"><i class="fas fa-envelope"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="login-modal" tabindex="-1" aria-labelledby="login-modalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title text-uppercase" id="login-modalLabel">Customer Login</h4>
              <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form action="customer-orders.html" method="get">
                <div class="form-group mb-3">
                  <input class="form-control" id="email_modal" type="text" placeholder="email" />
                </div>
                <div class="form-group mb-3">
                  <input class="form-control" id="password_modal" type="password" placeholder="password" />
                </div>
                <p class="text-center">
                  <button class="btn btn-outline-primary"><i class="fas fa-door-open"></i> Log in</button>
                </p>
              </form>
              <p class="text-center text-muted small">Not registered yet?</p>
              <p class="text-center text-muted small"><a href="customer-register.html"><strong>Register now</strong></a>! It is easy and done in 1 minute and gives you access to special discounts and much more!</p>
            </div>
          </div>
        </div>
      </div>
      <header class="nav-holder make-sticky">
        <div class="navbar navbar-light bg-white navbar-expand-lg py-0" id="navbar">
          <div class="container py-3 py-lg-0 px-lg-0">
            <a class="navbar-brand" href="index.html"><img class="d-none d-md-inline-block" src="img/logo.png" alt="Universal logo"/><img class="d-inline-block d-md-none" src="img/logo-small.png" alt="Universal logo" /><span class="sr-only">Universal - go to homepage</span></a>
            <button class="navbar-toggler text-primary border-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navigationCollapse" aria-controls="navigationCollapse" aria-expanded="false" aria-label="Toggle navigation"><span class="sr-only">Toggle navigation</span><i class="fas fa-align-justify"></i></button>
            <div class="collapse navbar-collapse" id="navigationCollapse">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown"><a class="nav-link dropdown-toggle active" id="hpDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Home</a>
                  <ul class="dropdown-menu" aria-labelledby="hpDropdown">
                    <li><a class="dropdown-item text-uppercase border-bottom active" href="index.html">Option 1: Default Page </a></li>
                    <li><a class="dropdown-item text-uppercase border-bottom" href="index2.html">Option 2: Application </a></li>
                    <li><a class="dropdown-item text-uppercase border-bottom" href="index3.html">Option 3: Startup </a></li>
                    <li><a class="dropdown-item text-uppercase border-bottom" href="index4.html">Option 4: Agency </a></li>
                    <li class="dropdown-submenu dropend border-0 p-0"><a class="dropdown-item text-uppercase dropdown-submenu-toggle" href="#" role="button" aria-expanded="false">Dropdown link</a>
                      <ul class="dropdown-menu dropdown-submenu m-0">
                        <li><a class="dropdown-item text-uppercase border-bottom" href="">Action </a></li>
                        <li><a class="dropdown-item text-uppercase border-bottom" href="">Another action </a></li>
                        <li><a class="dropdown-item text-uppercase border-bottom" href="">Application </a></li>
                        <li><a class="dropdown-item text-uppercase border-bottom" href="">Something else here </a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown menu-large"><a class="nav-link dropdown-toggle" id="featuresMegamenu" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Features</a>
                  <ul class="dropdown-menu megamenu p-4" aria-labelledby="featuresMegamenu">
                    <li>
                      <div class="row">
                        <div class="col-lg-6"><img class="img-fluid d-none d-lg-block" src="img/template-easy-customize.png" alt=""/></div>
                        <div class="col-lg-3 col-md-6">
                          <h5 class="text-dark text-uppercase pb-2 border-bottom">Shortcodes</h5>
                          <ul class="list-unstyled mb-3">
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="template-accordions.html">Accordions</a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="template-alerts.html">Alerts</a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="template-buttons.html">Buttons</a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="template-content-boxes.html">Content boxes</a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="template-blocks.html">Horizontal blocks</a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="template-pagination.html">Pagination</a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="template-tabs.html">Tabs</a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="template-typography.html">Typography</a></li>
                          </ul>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <h5 class="text-dark text-uppercase pb-2 border-bottom">Header variations</h5>
                          <ul class="list-unstyled mb-3">
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="template-header-default.html">Default sticky header</a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="template-header-nosticky.html">No sticky header</a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="template-header-light.html">Light header</a></li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown menu-large"><a class="nav-link dropdown-toggle" id="portfolioMegamenu" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Portfolio</a>
                  <ul class="dropdown-menu megamenu p-4" aria-labelledby="portfolioMegamenu">
                    <li>
                      <div class="row">
                        <div class="col-lg-6"><img class="img-fluid d-none d-lg-block" src="img/template-homepage.png" alt="" /></div>
                        <div class="col-lg-3 col-md-6">
                          <h5 class="text-dark text-uppercase pb-2 border-bottom">Portfolio</h5>
                          <ul class="list-unstyled mb-3">
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="portfolio-2.html">2 columns</a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="portfolio-no-space-2.html">2 columns with negative space</a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="portfolio-3.html">3 columns</a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="portfolio-no-space-3.html">3 columns with negative space</a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="portfolio-4.html">4 columns</a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="portfolio-no-space-4.html">4 columns with negative space</a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="portfolio-detail.html">Portfolio - detail</a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="portfolio-detail-2.html">Portfolio - detail 2</a></li>
                          </ul>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <h5 class="text-dark text-uppercase pb-2 border-bottom">About</h5>
                          <ul class="list-unstyled mb-3">
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="about.html">About us</a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="team.html">Our team</a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="team-member.html">Team member</a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="services.html">Services</a></li>
                          </ul>
                          <h5 class="text-dark text-uppercase pb-2 border-bottom">Marketing</h5>
                          <ul class="list-unstyled">
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="packages.html">Packages</a></li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown menu-large"><a class="nav-link dropdown-toggle" id="allPagesMegamenu" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">All pages</a>
                  <ul class="dropdown-menu megamenu p-4" aria-labelledby="allPagesMegamenu">
                    <li>
                      <div class="row">
                        <div class="col-md-6 col-lg-3">
                          <h5 class="text-dark text-uppercase pb-2 border-bottom">Home</h5>
                          <ul class="list-unstyled mb-3">
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase active" href="index.html">Option 1: Default Page </a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="index2.html">Option 2: Application </a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="index3.html">Option 3: Startup </a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="index4.html">Option 4: Agency </a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="index5.html">Option 5: Portfolio </a></li>
                          </ul>
                          <h5 class="text-dark text-uppercase pb-2 border-bottom">About</h5>
                          <ul class="list-unstyled mb-3">
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="about.html">About us</a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="team.html">Our team</a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="team-member.html">Team member</a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="services.html">Services</a></li>
                          </ul>
                          <h5 class="text-dark text-uppercase pb-2 border-bottom">Marketing</h5>
                          <ul class="list-unstyled mb-3">
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="packages.html">Packages</a></li>
                          </ul>
                        </div>
                        <div class="col-md-6 col-lg-3">
                          <h5 class="text-dark text-uppercase pb-2 border-bottom">Portfolio</h5>
                          <ul class="list-unstyled mb-3">
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="portfolio-2.html">2 columns</a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="portfolio-no-space-2.html">2 columns with negative space</a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="portfolio-3.html">3 columns</a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="portfolio-no-space-3.html">3 columns with negative space</a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="portfolio-4.html">4 columns</a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="portfolio-no-space-4.html">4 columns with negative space</a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="portfolio-detail.html">Portfolio - detail</a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="portfolio-detail-2.html">Portfolio - detail 2</a></li>
                          </ul>
                          <h5 class="text-dark text-uppercase pb-2 border-bottom">User pages</h5>
                          <ul class="list-unstyled mb-3">
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="customer-register.html">Register / login</a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="customer-orders.html">Orders history</a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="customer-order.html">Order history detail</a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="customer-wishlist.html">Wishlist</a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="customer-account.html">Customer account / change password</a></li>
                          </ul>
                        </div>
                        <div class="col-md-6 col-lg-3">
                          <h5 class="text-dark text-uppercase pb-2 border-bottom">Shop</h5>
                          <ul class="list-unstyled mb-3">
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="shop-category.html">Category - sidebar right</a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="shop-category-left.html">Category - sidebar left</a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="shop-category-full.html">Category - full width</a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="shop-detail.html">Product detail</a></li>
                          </ul>
                          <h5 class="text-dark text-uppercase pb-2 border-bottom">Shop - order process</h5>
                          <ul class="list-unstyled mb-3">
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="shop-basket.html">Shopping cart</a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="shop-checkout1.html">Checkout - step 1</a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="shop-checkout2.html">Checkout - step 2</a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="shop-checkout3.html"> Checkout - step 3</a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="shop-checkout4.html">Checkout - step 4</a></li>
                          </ul>
                        </div>
                        <div class="col-md-6 col-lg-3">
                          <h5 class="text-dark text-uppercase pb-2 border-bottom">Contact</h5>
                          <ul class="list-unstyled mb-3">
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="contact.html">Contact</a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="contact2.html">Contact - version 2</a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="contact3.html">Contact - version 3</a></li>
                          </ul>
                          <h5 class="text-dark text-uppercase pb-2 border-bottom">Pages</h5>
                          <ul class="list-unstyled mb-3">
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="text.html">Text page</a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="text-left.html">Text page - left sidebar</a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="text-full.html">Text page - full width</a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="faq.html"> FAQ</a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="404.html">404 page</a></li>
                          </ul>
                          <h5 class="text-dark text-uppercase pb-2 border-bottom">Blog</h5>
                          <ul class="list-unstyled mb-3">
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="blog.html">Blog listing big</a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="blog-medium.html">Blog listing medium</a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="blog-small.html">Blog listing small</a></li>
                            <li class="nav-item"><a class="nav-link-sub py-2 text-uppercase" href="blog-post.html">Blog Post</a></li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" id="contactMegamenu" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Contact</a>
                  <ul class="dropdown-menu dropdown-menu-end m-0" aria-labelledby="contactMegamenu">
                    <li><a class="dropdown-item text-uppercase border-bottom" href="contact.html">Contact option 1</a></li>
                    <li><a class="dropdown-item text-uppercase border-bottom" href="contact2.html">Contact option 2</a></li>
                    <li><a class="dropdown-item text-uppercase border-bottom" href="contact3.html">Contact option 3</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      style="background: url('img/photogrid.jpg') repeat"
      <section class="text-white bg-cover bg-center primary-overlay overlay-dense" >
        <div class="overlay-content py-5">
          <div class="container py-4">
            <div class="swiper-container homepage-slider">
              <div class="swiper-wrapper">
                <div class="swiper-slide h-auto mb-5">
                  <div class="row gy-5 h-100 align-items-center">
                    <div class="col-lg-5 text-lg-end"><img class="ml-auto img-fluid" src="img/logo.png" alt="" />
                      <h1 class="text-uppercase">Multipurpose responsive theme</h1>
                      <ul class="list-unstyled text-uppercase fw-bold mb-0">
                        <li class="mb-2">Business. Corporate. Agency.</li>
                        <li>Portfolio. Blog. E-commerce.</li>
                      </ul>
                    </div>
                    <div class="col-lg-7"><img class="img-fluid" src="img/template-homepage.png" alt="" /></div>
                  </div>
                </div>
                <div class="swiper-slide h-auto mb-5">
                  <div class="row gy-5 h-100 align-items-center">
                    <div class="col-lg-7"><img class="img-fluid" src="img/template-mac.png" alt="" /></div>
                    <div class="col-lg-5">
                      <h1 class="text-uppercase">46 HTML pages full of features</h1>
                      <ul class="list-unstyled text-uppercase fw-bold mb-0">
                        <li class="mb-2">Sliders and carousels</li>
                        <li class="mb-2">4 Header variations</li>
                        <li class="mb-2">Google maps, Forms, Megamenu, CSS3 Animations and much more</li>
                        <li>+ 11 extra pages showing template features</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide h-auto mb-5">
                  <div class="row gy-5 h-100 align-items-center">
                    <div class="col-lg-5 text-lg-end">
                      <h1 class="text-uppercase">Design</h1>
                      <ul class="list-unstyled text-uppercase fw-bold mb-0">
                        <li class="mb-2">Clean and elegant design</li>
                        <li class="mb-2">Full width and boxed mode</li>
                        <li class="mb-2">Easily readable Roboto font and awesome icons</li>
                        <li>7 preprepared colour variations</li>
                      </ul>
                    </div>
                    <div class="col-md-7"><img class="img-fluid" src="img/template-easy-customize.png" alt=""/></div>
                  </div>
                </div>
                <div class="swiper-slide h-auto mb-5">
                  <div class="row gy-5 h-100 align-items-center">
                    <div class="col-lg-7"><img class="img-fluid" src="img/template-easy-code.png" alt=""/></div>
                    <div class="col-lg-5">
                      <h1 class="text-uppercase">Easy to customize</h1>
                      <ul class="list-unstyled text-uppercase fw-bold mb-0">
                        <li class="mb-2">7 preprepared colour variations.</li>
                        <li>Easily to change fonts</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-pagination swiper-pagination-light"></div>
            </div>
          </div>
        </div>
      </section>
      <section class="py-5">
        <div class="container py-4">
          <div class="row gy-4">
            <div class="col-lg-4 col-md-6 block-icon-hover text-center">
              <div class="icon icon-outlined icon-outlined-primary icon-thin mx-auto mb-3"><i class="fas fa-desktop"></i></div>
              <h4 class="text-uppercase mb-3">Webdesign</h4>
              <p class="text-gray-600 text-sm">Fifth abundantly made Give sixth hath. Cattle creature i be don't them behold green moved fowl Moved life us beast good yielding. Have bring.</p>
            </div>
            <div class="col-lg-4 col-md-6 block-icon-hover text-center">
              <div class="icon icon-outlined icon-outlined-primary icon-thin mx-auto mb-3"><i class="fas fa-print"></i></div>
              <h4 class="text-uppercase mb-3">Print</h4>
              <p class="text-gray-600 text-sm">Advantage old had otherwise sincerity dependent additions. It in adapted natural hastily is justice. Six draw you him full not mean evil. Prepare garrets it expense windows shewing do an.</p>
            </div>
            <div class="col-lg-4 col-md-6 block-icon-hover text-center">
              <div class="icon icon-outlined icon-outlined-primary icon-thin mx-auto mb-3"><i class="fas fa-globe-americas"></i></div>
              <h4 class="text-uppercase mb-3">SEO and SEM</h4>
              <p class="text-gray-600 text-sm">Am terminated it excellence invitation projection as. She graceful shy believed distance use nay. Lively is people so basket ladies window expect.</p>
            </div>
            <div class="col-lg-4 col-md-6 block-icon-hover text-center">
              <div class="icon icon-outlined icon-outlined-primary icon-thin mx-auto mb-3"><i class="far fa-lightbulb"></i></div>
              <h4 class="text-uppercase mb-3">Consulting</h4>
              <p class="text-gray-600 text-sm">Fifth abundantly made Give sixth hath. Cattle creature i be don't them behold green moved fowl Moved life us beast good yielding. Have bring.</p>
            </div>
            <div class="col-lg-4 col-md-6 block-icon-hover text-center">
              <div class="icon icon-outlined icon-outlined-primary icon-thin mx-auto mb-3"><i class="far fa-envelope"></i></div>
              <h4 class="text-uppercase mb-3">Email marketing</h4>
              <p class="text-gray-600 text-sm">Advantage old had otherwise sincerity dependent additions. It in adapted natural hastily is justice. Six draw you him full not mean evil. Prepare garrets it expense windows shewing do an.</p>
            </div>
            <div class="col-lg-4 col-md-6 block-icon-hover text-center">
              <div class="icon icon-outlined icon-outlined-primary icon-thin mx-auto mb-3"><i class="fas fa-user"></i></div>
              <h4 class="text-uppercase mb-3">Email marketing</h4>
              <p class="text-gray-600 text-sm">Advantage old had otherwise sincerity dependent additions. It in adapted natural hastily is justice. Six draw you him full not mean evil. Prepare garrets it expense windows shewing do an.</p>
            </div>
          </div>
        </div>
      </section>
      <section class="py-5 bg-pentagon border-top border-gray-600">
        <div class="container py-4">
          <header class="mb-5">
            <h2 class="lined lined-center text-uppercase mb-4">Testimonials</h2>
            <p class="lead text-center">We have worked with many clients and we always like to hear they come out from the cooperation happy and satisfied. Have a look what our clients said about us.</p>
          </header>
          <div class="swiper-container testimonials-slider">
            <div class="swiper-wrapper">
              <div class="swiper-slide h-auto mb-5">
                <div class="p-4 bg-white h-100 d-flex flex-column justify-content-between">
                  <div class="mb-2">
                    <p class="text-sm text-gray-600">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
                    <p class="text-sm text-gray-600"></p>
                  </div>
                  <div class="d-flex align-items-center justify-content-between"><i class="fas fa-quote-left text-primary fa-2x"></i>
                    <div class="d-flex align-items-center ms-3">
                      <div class="me-3 text-end">
                        <h5 class="text-uppercase mb-0">John McIntyre</h5>
                        <p class="small text-muted mb-0">CEO, transTech</p>
                      </div><img class="avatar p-1 flex-shrink-0" src="img/person-1.jpg" alt="John McIntyre" width="60"/>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide h-auto mb-5">
                <div class="p-4 bg-white h-100 d-flex flex-column justify-content-between">
                  <div class="mb-2">
                    <p class="text-sm text-gray-600">The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. &quot;What's happened to me? &quot; he thought. It wasn't a dream.</p>
                    <p class="text-sm text-gray-600"></p>
                  </div>
                  <div class="d-flex align-items-center justify-content-between"><i class="fas fa-quote-left text-primary fa-2x"></i>
                    <div class="d-flex align-items-center ms-3">
                      <div class="me-3 text-end">
                        <h5 class="text-uppercase mb-0">John McIntyre</h5>
                        <p class="small text-muted mb-0">CEO, transTech</p>
                      </div><img class="avatar p-1 flex-shrink-0" src="img/person-2.jpg" alt="John McIntyre" width="60"/>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide h-auto mb-5">
                <div class="p-4 bg-white h-100 d-flex flex-column justify-content-between">
                  <div class="mb-2">
                    <p class="text-sm text-gray-600">His room, a proper human room although a little too small, lay peacefully between its four familiar walls.</p>
                    <p class="text-sm text-gray-600">A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.</p>
                  </div>
                  <div class="d-flex align-items-center justify-content-between"><i class="fas fa-quote-left text-primary fa-2x"></i>
                    <div class="d-flex align-items-center ms-3">
                      <div class="me-3 text-end">
                        <h5 class="text-uppercase mb-0">John McIntyre</h5>
                        <p class="small text-muted mb-0">CEO, transTech</p>
                      </div><img class="avatar p-1 flex-shrink-0" src="img/person-3.png" alt="John McIntyre" width="60"/>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide h-auto mb-5">
                <div class="p-4 bg-white h-100 d-flex flex-column justify-content-between">
                  <div class="mb-2">
                    <p class="text-sm text-gray-600">It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops of rain could be heard hitting the pane, which made him feel quite sad.</p>
                    <p class="text-sm text-gray-600"></p>
                  </div>
                  <div class="d-flex align-items-center justify-content-between"><i class="fas fa-quote-left text-primary fa-2x"></i>
                    <div class="d-flex align-items-center ms-3">
                      <div class="me-3 text-end">
                        <h5 class="text-uppercase mb-0">John McIntyre</h5>
                        <p class="small text-muted mb-0">CEO, transTech</p>
                      </div><img class="avatar p-1 flex-shrink-0" src="img/person-4.jpg" alt="John McIntyre" width="60"/>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide h-auto mb-5">
                <div class="p-4 bg-white h-100 d-flex flex-column justify-content-between">
                  <div class="mb-2">
                    <p class="text-sm text-gray-600">It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops of rain could be heard hitting the pane, which made him feel quite sad. Gregor then turned to look out the window at the dull weather. Drops of rain could be heard hitting the pane, which made him feel quite sad.</p>
                    <p class="text-sm text-gray-600"></p>
                  </div>
                  <div class="d-flex align-items-center justify-content-between"><i class="fas fa-quote-left text-primary fa-2x"></i>
                    <div class="d-flex align-items-center ms-3">
                      <div class="me-3 text-end">
                        <h5 class="text-uppercase mb-0">John McIntyre</h5>
                        <p class="small text-muted mb-0">CEO, transTech</p>
                      </div><img class="avatar p-1 flex-shrink-0" src="img/person-1.jpg" alt="John McIntyre" width="60"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </section>
     
      <section class="py-5">
        <div class="container py-4">
          <header class="mb-5">
            <h2 class="lined lined-center text-uppercase mb-4">From the blog</h2>
            <p class="lead">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. <a href="blog.html">Check our blog</a></p>
          </header>
          <div class="row gy-5">
            <div class="col-lg-3 col-md-6">
              <div class="box-image">
                <div class="mb-4 primary-overlay"><img class="img-fluid" src="img/portfolio-1.jpg" alt="..." />
                  <div class="overlay-content d-flex flex-column justify-content-center p-4">
                    <ul class="list-inline mb-0 box-image-content text-center">
                      <li class="list-inline-item"><a class="btn btn-outline-light" href="blog-post.html"> <i class="fas fa-link me-2"></i>Read more</a></li>
                    </ul>
                  </div>
                </div>
                <div class="text-center">                   
                  <h3 class="h4 text-uppercase text-primary"> <a class="text-reset" href="blog-post.html">Fashion now </a></h3>
                  <p class="small text-uppercase text-muted">By <a href="#">John snow </a>in <a href="#">Web design</a></p>
                  <p class="text-gray-600 text-sm text-start">Fifth abundantly made Give sixth hath. Cattle creature i be don't them behold green moved fowl Moved life us beast good yielding. Have bring.</p><a class="btn btn-outline-primary" href="blog-post.html">Continue reading</a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="box-image">
                <div class="mb-4 primary-overlay"><img class="img-fluid" src="img/portfolio-2.jpg" alt="..."/>
                  <div class="overlay-content d-flex flex-column justify-content-center p-4">
                    <ul class="list-inline mb-0 box-image-content text-center">
                      <li class="list-inline-item"><a class="btn btn-outline-light" href="blog-post.html"> <i class="fas fa-link me-2"></i>Read more</a></li>
                    </ul>
                  </div>
                </div>
                <div class="text-center">                   
                  <h3 class="h4 text-uppercase text-primary"> <a class="text-reset" href="blog-post.html">What to do </a></h3>
                  <p class="small text-uppercase text-muted">By <a href="#">John snow </a>in <a href="#">Web design</a></p>
                  <p class="text-gray-600 text-sm text-start">Fifth abundantly made Give sixth hath. Cattle creature i be don't them behold green moved fowl Moved life us beast good yielding. Have bring.</p><a class="btn btn-outline-primary" href="blog-post.html">Continue reading</a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="box-image">
                <div class="mb-4 primary-overlay"><img class="img-fluid" src="img/portfolio-3.jpg" alt="..." />
                  <div class="overlay-content d-flex flex-column justify-content-center p-4">
                    <ul class="list-inline mb-0 box-image-content text-center">
                      <li class="list-inline-item"><a class="btn btn-outline-light" href="blog-post.html"> <i class="fas fa-link me-2"></i>Read more</a></li>
                    </ul>
                  </div>
                </div>
                <div class="text-center">                   
                  <h3 class="h4 text-uppercase text-primary"> <a class="text-reset" href="blog-post.html">5 ways to look awesome </a></h3>
                  <p class="small text-uppercase text-muted">By <a href="#">John snow </a>in <a href="#">Web design</a></p>
                  <p class="text-gray-600 text-sm text-start">Fifth abundantly made Give sixth hath. Cattle creature i be don't them behold green moved fowl Moved life us beast good yielding. Have bring.</p><a class="btn btn-outline-primary" href="blog-post.html">Continue reading</a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="box-image">
                <div class="mb-4 primary-overlay"><img class="img-fluid" src="img/portfolio-4.jpg" alt="..." />
                  <div class="overlay-content d-flex flex-column justify-content-center p-4">
                    <ul class="list-inline mb-0 box-image-content text-center">
                      <li class="list-inline-item"><a class="btn btn-outline-light" href="blog-post.html"> <i class="fas fa-link me-2"></i>Read more</a></li>
                    </ul>
                  </div>
                </div>
                <div class="text-center">                   
                  <h3 class="h4 text-uppercase text-primary"> <a class="text-reset" href="blog-post.html">Fashion snow </a></h3>
                  <p class="small text-uppercase text-muted">By <a href="#">John snow </a>in <a href="#">Web design</a></p>
                  <p class="text-gray-600 text-sm text-start">Fifth abun Have bring.</p><a class="btn btn-outline-primary" href="blog-post.html">Continue reading</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="py-5 bg-gray-200">
        <div class="container py-4">
          <header class="mb-5">
            <h2 class="text-uppercase lined lined-center mb-4">Our clients </h2>
          </header>
          <div class="swiper-container customers-slider">
            <div class="swiper-wrapper">
              <div class="swiper-slide h-auto"><img class="img-fluid img-grayscale d-block mx-auto" src="img/customer-1.png" alt="..." width="140" /></div>
              <div class="swiper-slide h-auto"><img class="img-fluid img-grayscale d-block mx-auto" src="img/customer-2.png" alt="..." width="140" /></div>
              <div class="swiper-slide h-auto"><img class="img-fluid img-grayscale d-block mx-auto" src="img/customer-3.png" alt="..." width="140" /></div>
              <div class="swiper-slide h-auto"><img class="img-fluid img-grayscale d-block mx-auto" src="img/customer-4.png" alt="..." width="140"/></div>
              <div class="swiper-slide h-auto"><img class="img-fluid img-grayscale d-block mx-auto" src="img/customer-5.png" alt="..." width="140"/></div>
              <div class="swiper-slide h-auto"><img class="img-fluid img-grayscale d-block mx-auto" src="img/customer-6.png" alt="..." width="140"/></div>
            </div>
          </div>
        </div>
      </section>
      <div class="bg-primary py-5 text-white">
        <div class="container text-center">
          <div class="row">
            <div class="col-lg-8 p-3">
              <h3 class="text-uppercase mb-0">Do you want cool website like this one?</h3>
            </div>
            <div class="col-lg-4 p-3">   <a class="btn btn-outline-light" href="#">Buy this template now</a></div>
          </div>
        </div>
      </div>
      <footer>
        <div class="bg-gray-700 text-white py-5">
          <div class="container py-4">
            <div class="row gy-4">
              <div class="col-lg-3">
                <h4 class="mb-3 text-uppercase">About Us</h4>
                <p class="text-sm text-gray-500">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                <h4 class="h6 text-uppercase">Join Our Monthly Newsletter</h4>
                <form>
                  <div class="input-group border mb-3">
                    <input class="form-control bg-none border-0 shadow-0 text-white" type="email" placeholder="Email address" aria-label="Email address" aria-describedby="button-submit" />
                    <button class="btn btn-outline-light bg-none border-0" id="button-submit" type="button"><i class="fas fa-paper-plane"></i></button>
                  </div>
                </form>
              </div>
             
              <div class="col-lg-3">
                <h4 class="mb-3 text-uppercase">Contact</h4>
              </div>
             
            </div>
          </div>
        </div>
        <div class="bg-dark py-5">
          <div class="container">
            <div class="row align-items-cenrer gy-3 text-center">
              <div class="col-md-6 text-md-start">
                <p class="mb-0 text-sm text-gray-500">&copy; 2021. Your company / name goes here </p>
              </div>
              <div class="col-md-6 text text-md-end">
                <p class="mb-0 text-sm text-gray-500">Template designed by  <a href="https://bootstrapious.com" target="_blank">Bootstrapious</a> &amp; <a href="https://hikershq.com/" target="_blank">HHQ</a> </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="vendor/waypoints/lib/noframework.waypoints.js"></script>
    <script src="vendor/swiper/swiper-bundle.min.js"></script>
    <script src="vendor/choices.js/public/assets/scripts/choices.js"></script>
    <script src="js/theme.js"></script>

  </>
  );
}