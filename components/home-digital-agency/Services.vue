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
      <div class="serv-boxs" @scroll="handleScroll">
        <div
          v-for="(item, i) in data"
          :key="i"
          @mouseenter="activeIndex = i"
          @click="handleItemClick($event, i)"
          :class="{ item: true, active: activeIndex === i }"
        >
          <NuxtLink v-slot="{ href, navigate }" :to="item.link" custom>
            <a
              :href="activeIndex === i ? href : 'javascript:void(0)'"
              @click="activeIndex === i ? navigate($event) : null"
              class="full-link-overlay"
            ></a>
          </NuxtLink>
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
import { ref, onMounted, nextTick } from 'vue';
import data from '@/data/services';

const activeIndex = ref(0);
let isScrolling = false;

function handleItemClick(event, index) {
  if (activeIndex.value !== index) {
    activeIndex.value = index;
    event.preventDefault();
    
    // Smoothly scroll to center the clicked item
    const container = event.currentTarget.parentElement;
    if (container) {
      const item = event.currentTarget;
      const containerWidth = container.offsetWidth;
      const targetScrollLeft = item.offsetLeft - (containerWidth - item.offsetWidth) / 2;
      container.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth'
      });
    }
  }
}

function handleScroll(event) {
  if (isScrolling) return;
  isScrolling = true;

  requestAnimationFrame(() => {
    const container = event.target;
    if (!container) {
      isScrolling = false;
      return;
    }

    // Only apply horizontal scroll logic on mobile/tablet screen sizes (< 992px)
    if (window.innerWidth >= 992) {
      isScrolling = false;
      return;
    }

    const containerWidth = container.offsetWidth;
    const scrollLeft = container.scrollLeft;
    const centerOfContainer = scrollLeft + containerWidth / 2;

    let closestIndex = activeIndex.value;
    let minDistance = Infinity;

    const items = container.querySelectorAll('.item');
    items.forEach((item, index) => {
      const itemCenter = item.offsetLeft + item.offsetWidth / 2;
      const distance = Math.abs(centerOfContainer - itemCenter);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
      
      // Calculate scroll progress for parallax effect
      const distanceFromCenter = itemCenter - centerOfContainer;
      const progress = distanceFromCenter / containerWidth;
      const normalizedProgress = Math.max(-1, Math.min(1, progress));
      item.style.setProperty('--scroll-progress', normalizedProgress);
    });

    if (closestIndex !== activeIndex.value) {
      activeIndex.value = closestIndex;
    }
    isScrolling = false;
  });
}

onMounted(() => {
  nextTick(() => {
    const container = document.querySelector('.services-modern .serv-boxs');
    if (container) {
      handleScroll({ target: container });
    }
  });
});
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

/* ----------------------------------------------------
   Mobile/Tablet Parallax Card Slider Style Override
---------------------------------------------------- */
@media (max-width: 991px) {
  .services-modern .serv-boxs {
    padding: 20px;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    gap: 15px;
  }
  
  .services-modern .item {
    flex: 0 0 280px !important;
    min-width: 280px !important;
    max-width: 280px !important;
    width: 280px !important;
    height: 380px !important;
    padding: 40px 25px !important;
    border: 1px solid rgba(255, 255, 255, 0.08) !important;
    border-radius: 16px !important;
    background: rgba(255, 255, 255, 0.03) !important;
    scroll-snap-align: center;
    transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), 
                border-color 0.3s ease, 
                background-color 0.3s ease !important;
  }
  
  .services-modern .item.active {
    border-color: rgba(255, 255, 255, 0.2) !important;
    background: rgba(255, 255, 255, 0.07) !important;
    transform: scale(1.02) !important;
  }

  /* Descriptions are always visible inside cards on mobile */
  .services-modern .item p {
    opacity: 0.85 !important;
    transform: translateX(calc(var(--scroll-progress, 0) * -15px));
    margin-top: 15px !important;
    transition: transform 0.1s linear !important;
  }

  /* Parallax horizontal translation on icon and titles */
  .services-modern .item .icon-img-60 {
    transform: translateX(calc(var(--scroll-progress, 0) * -25px));
    margin: 0 !important;
    transition: transform 0.1s linear !important;
  }

  /* Keep the title horizontal inside all items on mobile */
  .services-modern .item:not(.active) .bottom-tag,
  .services-modern .item.active .bottom-tag {
    position: absolute !important;
    bottom: 40px !important;
    left: 25px !important;
    right: 25px !important;
    transform: none !important;
    width: calc(100% - 50px) !important;
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
  }

  .services-modern .item:not(.active) .bottom-tag h6,
  .services-modern .item.active .bottom-tag h6 {
    writing-mode: horizontal-tb !important;
    transform: none !important;
    font-size: 14px !important;
    margin-top: 0 !important;
    white-space: normal !important;
  }
}
</style>
