import * as React from "react";

export default function Auth() {
  return (
    <>
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
    </>
  );
};
