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
          title="Brand Building <span class='fw-200'>& Identity</span>" 
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
  introTitle: "Craft a High-Value E-Commerce Brand.",
  description1: "We transform simple stores into memorable, high-value dropshipping brands. We design custom corporate identities, high-impact premium logos, cohesive typography, and harmonized color palettes that command trust.",
  description2: "From unique voice guidelines to premium packaging designs, we build a cohesive brand asset library that scales and outclasses generic competitors.",
  list: [
    "Corporate Brand Identity & Research",
    "Custom Premium Logo Design",
    "Typography & Color Harmonization",
    "Brand Voice & Value Guidelines",
    "Premium Packaging & Asset Design"
  ]
};

useHead({
  title: 'Brand Building & Logo Design | 100x Dropship',
  meta: [
    { name: 'description', content: 'Stand out with a high-value e-commerce brand identity. Custom logo designs, typography, brand value guidelines, and premium voice designs by 100x Dropship.' },
    { property: 'og:title', content: 'Brand Building & Logo Design | 100x Dropship' },
    { property: 'og:description', content: 'Stand out with a high-value e-commerce brand identity. Custom logo designs, typography, and premium voice designs.' },
  ],
});
</script>
