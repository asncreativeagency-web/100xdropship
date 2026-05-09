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
          title="Shopify <span class='fw-200'>Website</span>" 
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
  introTitle: "High-Converting E-Commerce Stores.",
  description1: "We build beautiful, functional Shopify stores that are optimized for sales. Whether you're starting fresh or scaling up, our designs focus on user experience and conversion.",
  description2: "Our team handles everything from theme customization to app integration, ensuring your store runs smoothly and efficiently.",
  list: [
    "Store Setup & Design",
    "Product Listing Optimization",
    "Theme Customization",
    "App Integration & Setup",
    "Speed Optimization"
  ]
};
</script>
