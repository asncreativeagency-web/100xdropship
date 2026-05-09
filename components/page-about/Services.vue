<template>
  <section
    class="services-inline2 section-padding sub-bg bord-bottom-grd bord-top-grd"
  >
    <div class="container ontop">
      <div class="sec-head mb-80">
        <div class="d-flex align-items-center">
          <div>
            <span class="sub-title main-color mb-5">Our Specialize</span>
            <h3 class="fw-600 fz-50 text-u d-rotate wow">
              <span class="rotate-text">
                Featured <span class="fw-200">Services.</span>
              </span>
            </h3>
          </div>
          <div class="ml-auto vi-more">
            <nuxt-link
              to="/page-services"
              class="butn butn-sm butn-bord radius-30"
            >
              <span>View All</span>
            </nuxt-link>
            <span class="icon ti-arrow-top-right"></span>
          </div>
        </div>
      </div>
      <div class="item" v-for="service in services" :key="service.id">
        <div class="row md-marg align-items-end">
          <div class="col-lg-4">
            <div>
              <span class="num">{{ service.number }}</span>
              <div>
                <span class="sub-title main-color mb-10">{{
                  service.category
                }}</span>
                <h2>
                  {{ service.title }}
                  <span class="fw-200">{{ service.subtitle }}</span>
                </h2>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="text md-mb80">
              <p>{{ service.description }}</p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="img fit-img">
              <img :src="service.image" alt="" />
              <nuxt-link to="/page-services-details">
                <span class="ti-arrow-top-right"></span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    id: 1,
    number: '01',
    category: 'Advertising',
    title: 'Meta & Google',
    subtitle: 'Ads',
    description:
      'We create high-converting ad campaigns on Facebook, Instagram, and Google to drive targeted traffic and maximize ROI.',
    image: '/assets/imgs/serv-img/1.jpg',
  },
  {
    id: 2,
    number: '02',
    category: 'E-Commerce',
    title: 'Shopify',
    subtitle: 'Solutions',
    description:
      'From custom store setup to conversion rate optimization, we build seamless shopping experiences that sell.',
    image: '/assets/imgs/serv-img/2.jpg',
  },
  {
    id: 3,
    number: '03',
    category: 'Growth',
    title: 'Social Media',
    subtitle: 'Handling',
    description:
      'Engage your audience and build brand loyalty with our comprehensive social media management and content strategies.',
    image: '/assets/imgs/serv-img/3.jpg',
  },
];
</script>
