<template>
  <section class="services-modern section-padding">
    <div class="container">
      <div class="sec-head mb-80">
        <div class="row">
          <div class="col-lg-4">
            <h6 class="title-bord mb-30">Our Services</h6>
          </div>
          <div class="col-lg-8">
            <div class="text">
              <h4>
                From the inception of a project to its completion, we employ a
                comprehensive and holistic approach that ensures all aspects and
                stages are thoughtfully and thoroughly addressed.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid rest">
      <div class="serv-boxs">
        <div
          v-for="(item, i) in data"
          :key="i"
          @mouseenter="handleActiveSer"
          :class="{ item: true, active: i === 0 }"
        >
          <NuxtLink :to="item.link" class="full-link-overlay"></NuxtLink>
          <div class="icon-img-60">
            <img :src="item.img" alt="" />
          </div>
          <div>
            <div class="text mb-80">
              <p>{{ item.desc }}</p>
            </div>
            <div class="d-flex align-items-center bottom-tag">
              <h6 class="sub-title">{{ item.title }}</h6>
              <span class="ml-auto fz-13">{{ `0${i + 1}` }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import data from '@/data/services';

function handleActiveSer(event) {
  document.querySelectorAll('.serv-boxs .item').forEach((serv) => {
    serv.classList.remove('active');
  });
  event.currentTarget.classList.add('active');
}
</script>

<style scoped>
.services-modern .serv-boxs {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  overflow-x: auto;
  padding: 10px 0;
}
.services-modern .item {
  position: relative;
  flex: 1;
  min-width: 90px;
  max-width: 130px;
  width: auto !important; /* Override style.css absolute width */
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  overflow: hidden;
}
.services-modern .item.active {
  flex: 5;
  min-width: 320px;
  max-width: 500px;
  width: auto !important; /* Override style.css active width */
}
.services-modern .item .full-link-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
}
.services-modern .item .bottom-tag {
  position: absolute;
  bottom: 40px;
  left: 20px;
  right: 20px;
  width: calc(100% - 40px);
  transition: all 0.3s ease;
}
/* Ensure the description paragraph is styled cleanly */
.services-modern .item p {
  font-size: 15px !important;
  line-height: 1.6;
  text-indent: 0 !important; /* Remove the extreme indent to make it look clean */
  opacity: 0;
  transition: opacity 0.3s ease;
  margin-top: 20px;
  white-space: normal;
}
.services-modern .item.active p {
  opacity: 0.9;
}
/* Rotate titles on collapsed items for a clean vertical text presentation! */
.services-modern .item:not(.active) .bottom-tag {
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
}
.services-modern .item:not(.active) .bottom-tag h6 {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
  border: none !important;
  padding: 0 !important;
  margin-top: 10px;
  font-size: 12px !important;
  letter-spacing: 1px;
  white-space: nowrap;
}
.services-modern .item:not(.active) .icon-img-60 {
  margin: 0 auto;
}
</style>
