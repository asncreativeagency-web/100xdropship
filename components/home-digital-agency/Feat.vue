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
            <NuxtLink to="/page-services" class="butn butn-sm butn-bord radius-30">
              <span>View All</span>
            </NuxtLink>
            <span class="icon ti-arrow-top-right"></span>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="(item, index) in data"
          :key="index"
          class="col-lg-3 col-md-6"
        >
          <div class="item-box radius-15 md-mb50">
            <NuxtLink :to="item.link" class="full-link-overlay"></NuxtLink>
            <div class="icon-img-70 mb-40 opacity-3">
              <img :src="item.img" alt="" />
            </div>
            <span class="mb-30 p-color">{{ `0${index + 1} .` }}</span>
            <h6 class="mb-20">{{ item.title }}</h6>
            <p>
              {{ item.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import data from '@/data/services.json';
</script>

<style scoped>
.feat .item-box {
  position: relative;
}
.feat .item-box .full-link-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
}
</style>
