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
          title="Pay Per Click <span class='fw-200'>(PPC)</span>" 
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
  introTitle: "Targeted Campaigns for Real Results.",
  description1: "PPC is the fastest way to get your brand noticed. We create highly targeted campaigns that drive qualified traffic to your site immediately.",
  description2: "Through continuous monitoring and bid management, we ensure you get the best possible CPA (Cost Per Acquisition).",
  list: [
    "Campaign Strategy & Planning",
    "Competitor Analysis",
    "Landing Page Optimization",
    "Ad Copywriting & Testing",
    "Budget Management"
  ]
};
</script>
