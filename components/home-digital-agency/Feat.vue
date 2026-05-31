<template>
  <section class="feat sub-bg">
    <div class="container section-padding bord-top-grd">
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
            <a href="/page-services" class="butn butn-sm butn-bord radius-30 cursor-pointer">
              <span>View All</span>
            </a>
            <span class="icon ti-arrow-top-right cursor-pointer"></span>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="(item, index) in data"
          :key="index"
          class="col-lg-3 col-md-6 col-sm-12"
        >
          <div class="item-box md-mb50">
            <NuxtLink :to="item.link" class="full-link-overlay"></NuxtLink>
            
            <!-- Service Icon at the Top -->
            <div class="service-icon-wrapper mb-40">
              <img :src="item.img" alt="" class="service-icon" />
            </div>
            
            <!-- Card Number -->
            <span class="mb-30 p-color font-jakarta">{{ `0${index + 1} .` }}</span>
            
            <!-- Card Title -->
            <h6 class="mb-20 title-link">{{ item.title }}</h6>
            
            <!-- Card Description -->
            <p class="desc-text">
              {{ item.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import data from '@/data/services.json';

onMounted(() => {
  const viMoreElements = document.querySelectorAll('.feat .vi-more a, .feat .vi-more .icon');
  const cursor = document.querySelector('.cursor');
  if (cursor) {
    viMoreElements.forEach((el) => {
      el.addEventListener('mousemove', () => {
        cursor.classList.add('cursor-active');
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-active');
      });
    });
  }
});
</script>

<style scoped>
.feat .row {
  margin-bottom: -70px; /* Offset the bottom margin of the last row */
}

.feat .item-box {
  position: relative;
  background: transparent;
  border: none;
  padding: 0;
  margin-bottom: 70px; /* Generous gap between rows to prevent any vertical overlap */
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.feat .item-box .full-link-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
}

/* Hover effects on floating elements (no movement or scale changes) */
.feat .item-box:hover .service-icon {
  opacity: 0.8;
  filter: drop-shadow(0 0 8px rgba(138, 70, 255, 0.4));
}

.feat .item-box:hover .title-link {
  color: #8a46ff;
}

/* Service Icon Styling */
.service-icon-wrapper {
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.service-icon {
  width: 60px;
  height: 60px;
  object-fit: contain;
  opacity: 0.3;
  transition: all 0.4s ease;
}

/* Typography Styling */
.feat .item-box span.p-color {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 2px;
  color: rgba(138, 70, 255, 0.8);
  display: block;
}

.feat .item-box h6.title-link {
  font-size: 20px !important;
  font-weight: 600;
  color: #ffffff;
  line-height: 1.4;
  transition: color 0.3s ease;
}

.feat .item-box p.desc-text {
  font-size: 14px !important;
  line-height: 1.65;
  color: #b7b7b7;
  margin: 0;
  font-weight: 400;
}
</style>
