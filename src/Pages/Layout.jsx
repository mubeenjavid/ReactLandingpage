import React from 'react';
import { Outlet, Link } from "react-router-dom";
function Layout() {
  return (
    <div>
          <nav class="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
            <div class="container">
                <Link class="navbar-brand text-uppercase fw-bold d-lg-none" to="index.html">Start Bootstrap</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item px-lg-4"><Link class="nav-link text-uppercase" to="/">Home</Link></li>
                        <li class="nav-item px-lg-4"><Link class="nav-link text-uppercase" to="/about">About</Link></li>
                        <li class="nav-item px-lg-4"><Link class="nav-link text-uppercase" to="/products">Products</Link></li>
                        <li class="nav-item px-lg-4"><Link class="nav-link text-uppercase" to="/store">Store</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
      <Outlet  />
    </div>
  )
}

export default Layout;