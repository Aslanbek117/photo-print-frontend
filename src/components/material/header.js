import * as React from 'react';
import "./app.css";


export default function Header() {
    return (
        <>
        <header class="nav-holder make-sticky">
        <div class="navbar navbar-light bg-primary navbar-expand-lg py-0" id="navbar">
          <div class="container py-3 py-lg-0 px-lg-0">
            <a class="navbar-brand" href="index.html"><img class="d-none d-md-inline-block" src="http://i.imgur.com/qHjO7J9.png" alt="Universal logo"/><img class="d-inline-block d-md-none" src="img/logo-small.png" alt="Universal logo" /><span class="sr-only">Universal - go to homepage</span></a>
            <button class="navbar-toggler text-primary border-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navigationCollapse" aria-controls="navigationCollapse" aria-expanded="false" aria-label="Toggle navigation"><span class="sr-only">Toggle navigation</span><i class="fas fa-align-justify"></i></button>
            <div class="collapse navbar-collapse" id="navigationCollapse">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown"><a class="nav-link"  href="/" role="button"  aria-expanded="false">Модульные картины</a>
                  {/* <ul class="dropdown-menu" aria-labelledby="hpDropdown">
                    <li><a class="dropdown-item text-uppercase border-bottom" href="index.html">Option 1: Default Page </a></li>
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
                  </ul> */}
                </li>
                <li class="nav-item dropdown menu-large"><a class="nav-link dropdown-toggle" id="featuresMegamenu" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Фотообои</a>
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
                <li class="nav-item dropdown menu-large"><a class="nav-link dropdown-toggle" id="portfolioMegamenu" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Информация</a>
                  <ul class="dropdown-menu megamenu p-4" aria-labelledby="portfolioMegamenu">
                    <li>
                      <div class="row">
                        <div class="col-lg-6"><img class="img-fluid d-none d-lg-block" src="img/template-homepage.png" alt=""/></div>
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
                <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" id="contactMegamenu" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">О нас</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
        </>
    )
}