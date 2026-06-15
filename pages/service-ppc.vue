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
        <Pricing :plans="ppcPlans" />
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

const ppcPlans = [
  {
    title: 'Starter',
    price: '$299',
    period: '/ month',
    popular: false,
    features: [
      'PPC Setup & Strategy Map',
      'Targeted Keyword & Audience Setup',
      'Basic Ad Creative Copywriting',
      'Monthly Report on Conversions',
      'Email Support'
    ],
    link: '/page-contact?service=ppc&plan=starter'
  },
  {
    title: 'Growth',
    price: '$799',
    period: '/ month',
    popular: true,
    features: [
      'Multi-channel PPC Setup (Search + Social)',
      'Advanced Custom Funnel Configurations',
      'A/B Creative and Hooks Split Testing',
      'Weekly Bid Adjustments & Optimization',
      'Weekly Strategy Updates & Calls'
    ],
    link: '/page-contact?service=ppc&plan=growth'
  },
  {
    title: 'Scale',
    price: 'Custom',
    period: '/ pricing',
    popular: false,
    features: [
      'Omni-channel Native Campaigns Scaling',
      'High-Limit Ad Account Operations',
      'Custom Landing Page Design & Copy',
      'Dedicated PPC Account Representative',
      'Priority Support & Strategic Direction'
    ],
    link: '/page-contact?service=ppc&plan=scale'
  }
];
</script>
