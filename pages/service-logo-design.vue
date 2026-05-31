<template>
  <LoadingScreen />
  <Cursor />
  <ProgressScroll />
  <Lines />
  <Navbar />
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <main class="main-bg o-hidden">
        <Header 
          title="Logo <span class='fw-200'>Design</span>" 
          bgImage="/assets/imgs/background/bg4.jpg" 
        />
        <Intro :data="serviceData" />
        <Feat />
        <div style="padding-top: 140px">
          <Intro2 />
        </div>
        <Marq2 />
      </main>
      <Footer />
    </div>
  </div>
</template>
<script setup>
import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import Cursor from '@/components/common/cusor';
import LoadingScreen from '@/components/common/loader';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import Marq2 from '@/components/common/Marq2';
import Header from '@/components/page-services-details/Header';
import Intro from '@/components/page-services-details/Intro';
import Feat from '@/components/page-services-details/Feat';
import Intro2 from '@/components/home-digital-agency/Intro2';

const serviceData = {
  introTitle: "Your Brand Starts With a Great Logo.",
  description1: "A logo is the face of your brand. We design unique, versatile logos that communicate your brand's personality and values at a glance.",
  description2: "From initial concepts to final delivery, we work closely with you to craft a logo that stands out in any medium — digital, print, or merchandise.",
  list: [
    "Brand Discovery & Research",
    "Concept Sketching & Ideation",
    "Typography & Color Selection",
    "Multiple Format Delivery",
    "Brand Guidelines Documentation"
  ]
};

useHead({
  title: 'Logo Design Services | 100x Dropship',
  meta: [
    { name: 'description', content: 'Professional logo design by 100x Dropship. We craft unique, versatile logos that communicate your brand personality and values. From concept to brand guidelines.' },
    { property: 'og:title', content: 'Logo Design Services | 100x Dropship' },
    { property: 'og:description', content: 'Unique, versatile logo designs that communicate your brand personality.' },
  ],
});
</script>
