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
          title="Lead Generation <span class='fw-200'>Strategies</span>" 
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
  introTitle: "Fill Your Sales Pipeline with High-Intent Buyers.",
  description1: "We design and execute data-driven lead generation campaigns that acquire highly qualified customers for your brand. Using laser-focused targeting across Meta, Google, and email networks, we capture valuable sales-ready leads.",
  description2: "From interactive funnel designs to strategic opt-in creatives and email automation sequence integrations, we optimize every conversion point for maximum lead capture efficiency.",
  list: [
    "High-Intent Audience Research",
    "Landing Page & Opt-in Funnel Design",
    "Multi-Channel Acquisition Campaigns",
    "Email & SMS Automation Setup",
    "Lead Nurturing & Conversion Optimization"
  ]
};



useHead({
  title: 'Lead Generation Services | 100x Dropship',
  meta: [
    { name: 'description', content: 'Acquire high-intent sales-ready leads for your e-commerce brand. Data-driven acquisition campaigns, custom landing page funnels, and marketing automation by 100x Dropship.' },
    { property: 'og:title', content: 'Lead Generation Services | 100x Dropship' },
    { property: 'og:description', content: 'Acquire high-intent sales-ready leads for your e-commerce brand. Data-driven acquisition campaigns, funnels, and marketing automation.' },
  ],
});
</script>
