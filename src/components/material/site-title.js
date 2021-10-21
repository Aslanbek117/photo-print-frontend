import * as React from 'react';
import "./app.css";


export default function SiteTitle() {
  return (
    <>
       <section class="bg-pentagon py-4">
              <div class="container py-3">
                <div class="row d-flex align-items-center gy-4">
                  <div class="col-md-7">
                    <h1 class="h2 mb-0 text-uppercase">Category with right sidebar</h1>
                  </div>
                  <div class="col-md-5">
                    <ol class="text-sm justify-content-start justify-content-lg-end mb-0 breadcrumb undefined">
                      <li class="breadcrumb-item"><a class="text-uppercase" href="index.html">Home</a></li>
                      <li class="breadcrumb-item text-uppercase active">Category with right sidebar      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>
    </>
  );
}
