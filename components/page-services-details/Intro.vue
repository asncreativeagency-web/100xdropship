<template>
  <section class="intro section-padding">
    <div class="container">
      <div class="row lg-marg">
        <div class="col-lg-8">
          <div class="row lg-marg">
            <div class="col-md-6">
              <div>
                <h6 class="sub-title main-color mb-15">Description</h6>
                <h3 class="mb-30" v-html="data?.introTitle || 'Data-driven strategies for <span class=\'fw-300\'>exponential</span> <span class=\'fw-300\'>growth.</span>'">
                </h3>
              </div>
            </div>
            <div class="col-md-6">
              <div class="text">
                <p class="mb-15" v-html="data?.description1 || 'We partner with ambitious brands to unlock their full potential through targeted digital marketing. Our strategies are built on data, creativity, and a relentless focus on ROI.'">
                </p>
                <p v-html="data?.description2 || 'From crafting compelling ad copy to optimizing unnecessary ad spend, we handle every aspect of your digital acquisition funnel.'">
                </p>

                <div class="mt-30">
                  <ul class="rest dot-list">
                    <li class="mb-10" v-for="(item, i) in (data?.list || defaultList)" :key="i">{{ item }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="numbers mt-80 md-mb50">
            <div class="row lg-marg">
              <div class="col-md-6">
                <div
                  class="item bord-thin-top pt-30 d-flex align-items-end mt-20 sm-mb30"
                >
                  <div>
                    <h3 class="fw-300 mb-10">100%</h3>
                    <h6 class="p-color sub-title">Clients Satisfaction</h6>
                  </div>
                  <div class="ml-auto">
                    <div class="icon-img-40">
                      <img src="/assets/imgs/arw0.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div
                  class="item bord-thin-top pt-30 d-flex align-items-end mt-20"
                >
                  <div>
                    <h3 class="fw-300 mb-10">6700</h3>
                    <h6 class="p-color sub-title">Projects Completed</h6>
                  </div>
                  <div class="ml-auto">
                    <div class="icon-img-40">
                      <img src="/assets/imgs/arw0.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="img-full fit-img">
            <img src="/assets/imgs/intro/2.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const props = defineProps(['data']);
const defaultList = [
  'Meta Ads (Facebook & Instagram)',
  'Google Ads & PPC',
  'Social Media Management',
  'Shopify Store Optimization',
  'Conversion Rate Optimization (CRO)',
];
</script>
