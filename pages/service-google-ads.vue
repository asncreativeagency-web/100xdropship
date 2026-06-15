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
          title="Google Ads <span class='fw-200'>Management</span>" 
          bgImage="/assets/imgs/background/bg4.jpg" 
        />
        <Intro :data="serviceData" />
        <Feat />
        <Pricing :plans="googleAdsPlans" />
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
import Pricing from '@/components/common/Pricing';

const serviceData = {
  introTitle: "Capture High-Intent Traffic Instantly.",
  description1: "Dominating search results is key to acquiring ready-to-buy customers. Our Google Ads experts build campaigns that put your brand in front of the right people at the right time.",
  description2: "We optimize for conversions, not just clicks, ensuring every dollar spent contributes to your bottom line.",
  list: [
    "Keyword Research & Strategy",
    "Search Ads (PPC)",
    "Display Network Campaigns",
    "YouTube Video Ads",
    "Conversion Tracking Setup"
  ]
};

const googleAdsPlans = [
  {
    title: 'Starter',
    price: '$299',
    period: '/ month',
    popular: false,
    features: [
      'Search Campaigns Setup',
      'High-Intent Keyword Sourcing',
      'A/B Tested Ad Copywriting',
      'Monthly Optimization Reports',
      'Email Support'
    ],
    link: '/page-contact?service=google-ads&plan=starter'
  },
  {
    title: 'Growth',
    price: '$799',
    period: '/ month',
    popular: true,
    features: [
      'Search + Display + PMax Setup',
      'Advanced Conversion Tracking (GTM)',
      'Negative Keyword Management',
      'Weekly Budget & Bid Adjustments',
      'Weekly Call & Report Support'
    ],
    link: '/page-contact?service=google-ads&plan=growth'
  },
  {
    title: 'Scale',
    price: 'Custom',
    period: '/ pricing',
    popular: false,
    features: [
      'YouTube Ads + Omni-channel Strategy',
      'Custom Analytics & Data Studio Dashboard',
      'Competitor Keyword Hijacking',
      'Dedicated Ad Optimization Expert',
      'Priority Turnaround & Landing Page Audit'
    ],
    link: '/page-contact?service=google-ads&plan=scale'
  }
];
</script>
