<template>
  <section class="testimonials">
    <div class="container section-padding bord-bottom-grd">
      <div class="row">
        <div class="col-lg-4 md-mb50">
          <div class="img-full">
            <div class="fit-img">
              <img src="/assets/imgs/testim/bg.jpg" alt="" />
            </div>
            <div class="fix-img">
              <img src="/assets/imgs/arw1.png" alt="" />
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="cont-full">
            <div
              class="testim-swiper"
              data-carousel="swiper"
              data-loop="true"
              data-space="30"
            >
              <Swiper
                loop
                v-bind="swiperOptions"
                id="content-carousel-container-unq-testim"
                class="swiper-container"
                data-swiper="container"
              >
                <SwiperSlide v-for="(item, i) in testimonialsData" :key="i" class="swiper-slide">
                  <div class="item">
                    <div class="content">
                      <!-- Case 1: Result Screenshot testimonial -->
                      <div v-if="item.screenshot" class="screenshot-testim">
                        <div class="text mb-25">
                          <p class="fz-24 fw-500 text-white font-sans">{{ item.desc }}</p>
                        </div>
                        <div class="screenshot-wrapper mb-30" @click="openLightbox(item.screenshot)">
                          <img :src="item.screenshot" alt="Ads Manager Results" class="screenshot-img" />
                          <div class="zoom-overlay">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="zoom-icon"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                            <span class="zoom-text">Click to View Screenshot</span>
                          </div>
                        </div>
                        <div class="info d-flex align-items-center pt-20 mt-20 bord-thin-top">
                          <div>
                            <h5 class="text-white">{{ item.name }}</h5>
                            <span class="sub-title main-color">{{ item.subName }}</span>
                          </div>
                        </div>
                      </div>

                      <!-- Case 2: Standard client testimonial -->
                      <div v-else class="standard-testim">
                        <div class="text">
                          <p class="fz-30">
                            {{ item.desc }}
                          </p>
                        </div>
                        <div class="info d-flex align-items-center pt-40 mt-40 bord-thin-top">
                          <div v-if="item.img">
                            <div class="fit-img circle">
                              <img :src="item.img" alt="" />
                            </div>
                          </div>
                          <div :class="item.img ? 'ml-20' : ''">
                            <h5 class="text-white">{{ item.name }}</h5>
                            <span class="sub-title main-color">{{ item.subName }}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="256.721"
                height="208.227"
                viewBox="0 0 256.721 208.227"
                class="qout-svg"
              >
                <path
                  data-name="Path"
                  d="M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z"
                  transform="translate(121.55 640.568)"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1"
                  opacity="0.322"
                ></path>
              </svg>
            </div>
            <div class="swiper-arrow-control control-abslout">
              <div class="swiper-button-prev">
                <span class="ti-arrow-left"></span>
              </div>
              <div class="swiper-button-next">
                <span class="ti-arrow-right"></span>
              </div>
            </div>
            <div class="circle-blur">
              <img src="/assets/imgs/patterns/blur1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <ClientOnly>
      <Teleport to="body">
        <div v-if="lightboxImage" class="lightbox-modal" @click="lightboxImage = null">
          <button class="lightbox-close" aria-label="Close lightbox">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          <div class="lightbox-content" @click.stop>
            <img :src="lightboxImage" alt="Zoomed Screenshot" />
          </div>
        </div>
      </Teleport>
    </ClientOnly>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import testimonialsData from '@/data/testimonials';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper';

const lightboxImage = ref(null);
const openLightbox = (imgUrl) => {
  lightboxImage.value = imgUrl;
};

const swiperOptions = {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  loop: true,
  speed: 1000,
  centeredSlides: false,
  spaceBetween: 30,
  navigation: {
    nextEl: '.testimonials .swiper-button-next',
    prevEl: '.testimonials .swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
};
</script>

<style scoped>
.font-sans {
  font-family: 'Inter', sans-serif;
}
.screenshot-wrapper {
  position: relative;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  background: #0d0d0d;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.screenshot-wrapper:hover {
  transform: translateY(-4px);
}
.screenshot-img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease, filter 0.3s ease;
}
.screenshot-wrapper:hover .screenshot-img {
  transform: scale(1.02);
  filter: brightness(0.65);
}
.zoom-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  transition: opacity 0.3s ease;
}
.screenshot-wrapper:hover .zoom-overlay {
  opacity: 1;
}
.zoom-icon {
  stroke: #fff;
  margin-bottom: 8px;
  transform: translateY(10px);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.zoom-text {
  font-size: 13px;
  color: #fff;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  transform: translateY(10px);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.screenshot-wrapper:hover .zoom-icon,
.screenshot-wrapper:hover .zoom-text {
  transform: translateY(0);
}

/* Lightbox styles */
.lightbox-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 10, 10, 0.95);
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: zoom-out;
}
.lightbox-close {
  position: absolute;
  top: 30px;
  right: 30px;
  color: #fff;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s, transform 0.3s;
  cursor: pointer;
}
.lightbox-close:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: rotate(90deg);
}
.lightbox-content {
  max-width: 90%;
  max-height: 85%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  cursor: default;
  background: #0d0d0d;
}
.lightbox-content img {
  max-width: 100%;
  max-height: 80vh;
  display: block;
  object-fit: contain;
}
</style>
