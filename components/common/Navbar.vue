<template>
  <nav class="navbar navbar-expand-lg bord blur">
    <div class="container o-hidden">
      <a class="logo icon-img-120" href="#">
        <img src="/assets/imgs/logo.png" alt="logo" />
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="icon-bar">
          <i class="fas fa-bars"></i>
        </span>
      </button>

      <div
        class="collapse navbar-collapse justify-content-center"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/">
              <span class="rolling-text">Home</span>
            </NuxtLink>
          </li>

          <li
            @mousemove="handleDropdownMouseMove"
            @mouseleave="handleDropdownMouseLeave"
            class="nav-item dropdown"
          >
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="rolling-text">Company</span>
            </a>
            <ul class="dropdown-menu">
              <li>
                <NuxtLink class="dropdown-item" to="/page-about"> About Us </NuxtLink>
              </li>
              <li>
                <NuxtLink class="dropdown-item" to="/page-team"> Our Team </NuxtLink>
              </li>
              <li>
                <NuxtLink class="dropdown-item" to="/page-FAQ"> FAQ </NuxtLink>
              </li>
            </ul>
          </li>

          <li
            @mousemove="handleDropdownMouseMove"
            @mouseleave="handleDropdownMouseLeave"
            class="nav-item dropdown"
          >
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="rolling-text">Services</span>
            </a>
            <ul class="dropdown-menu">
              <li>
                <NuxtLink class="dropdown-item" to="/service-meta-ads"> Meta Ads Run </NuxtLink>
              </li>
              <li>
                <NuxtLink class="dropdown-item" to="/service-shopify"> Shopify Website Development </NuxtLink>
              </li>
              <li>
                <NuxtLink class="dropdown-item" to="/page-contact?service=agency-account"> Facebook Agency Ad Account </NuxtLink>
              </li>
              <li>
                <NuxtLink class="dropdown-item" to="/service-social-media"> Social Media Handling </NuxtLink>
              </li>
              <li>
                <NuxtLink class="dropdown-item" to="/service-video-editing"> Video Editing </NuxtLink>
              </li>
              <li>
                <NuxtLink class="dropdown-item" to="/service-graphic-design"> Graphic Design </NuxtLink>
              </li>
              <li>
                <NuxtLink class="dropdown-item" to="/service-indian-dropshipping"> Indian Dropshipping Setup </NuxtLink>
              </li>
              <li>
                <NuxtLink class="dropdown-item" to="/service-international-dropshipping"> International Dropshipping </NuxtLink>
              </li>
              <li>
                <NuxtLink class="dropdown-item" to="/service-brand-building"> Brand Building </NuxtLink>
              </li>
              <li>
                <NuxtLink class="dropdown-item" to="/service-lead-generation"> Lead Generation </NuxtLink>
              </li>
            </ul>
          </li>

          <li
            @mousemove="handleDropdownMouseMove"
            @mouseleave="handleDropdownMouseLeave"
            class="nav-item dropdown"
          >
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="rolling-text">Portfolio</span>
            </a>
            <div class="dropdown-menu">
              <NuxtLink class="dropdown-item" to="/portfolio-grid"> Portfolio Grid </NuxtLink>
              <NuxtLink class="dropdown-item" to="/portfolio-masonry"> Portfolio Masonry </NuxtLink>
            </div>
          </li>

          <li
            @mousemove="handleDropdownMouseMove"
            @mouseleave="handleDropdownMouseLeave"
            class="nav-item dropdown"
          >
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="rolling-text">Blog</span>
            </a>
            <div class="dropdown-menu">
              <NuxtLink class="dropdown-item" to="/blog-grid-sidebar"> Blog Grid </NuxtLink>
              <NuxtLink class="dropdown-item" to="/blog-details"> Blog Details </NuxtLink>
            </div>
          </li>

          <li class="nav-item">
            <NuxtLink class="nav-link" to="/page-contact">
              <span class="rolling-text">Contact</span>
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div class="contact-button">
        <NuxtLink
          to="/page-contact"
          class="butn butn-sm butn-bg main-colorbg radius-5"
        >
          <span class="text">Get a Quote</span>
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { ref } from 'vue';

function handleScroll() {
  const bodyScroll = window.scrollY;
  const navbar = document.querySelector('.navbar');

  if (bodyScroll > 300) navbar.classList.add('nav-scroll');
  else navbar.classList.remove('nav-scroll');
}

function handleDropdownMouseMove(event) {
  event.currentTarget.querySelector('.dropdown-menu').classList.add('show');
}

function handleDropdownMouseLeave(event) {
  event.currentTarget.querySelector('.dropdown-menu').classList.remove('show');
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
