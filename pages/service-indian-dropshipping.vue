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
          title="Indian Dropshipping <span class='fw-200'>Complete Setup</span>" 
          bgImage="/assets/imgs/background/bg4.jpg" 
        />
        <Intro :data="serviceData" />
        <Feat />
        <Pricing :plans="indianDropshippingPlans" />
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
  introTitle: "Dominate the E-commerce Market in India.",
  description1: "We build end-to-end local e-commerce solutions tailored for the Indian dropshipping market. From product sourcing and supplier integrations to high-converting shop setups, we provide everything needed to launch and scale.",
  description2: "Our services focus on optimizing COD orders, minimizing Return-to-Origin (RTO) ratios, and integrating fast shipping providers for local fulfillment.",
  list: [
    "Product Sourcing & Winner Identification",
    "Shopify Indian Store Setup",
    "COD (Cash on Delivery) Optimization",
    "RTO (Return to Origin) Reduction Strategies",
    "Local Supplier & Courier Integrations"
  ]
};

const indianDropshippingPlans = [
  {
    title: 'Starter',
    price: '$399',
    period: '/ project',
    popular: false,
    features: [
      'Shopify Indian Store Setup',
      '5 High-Converting Product Listings',
      'Standard COD App Configurations',
      'RTO Reduction Setup (Basic Rules)',
      'Local Payment Gateway Setup Support'
    ],
    link: '/page-contact?service=indian-dropshipping&plan=starter'
  },
  {
    title: 'Growth',
    price: '$899',
    period: '/ project',
    popular: true,
    features: [
      'Custom Premium Store Theme Design',
      'Winning Supplier Sourcing (Roposo/GlowRoad)',
      'Advanced RTO Reduction (OTP + Call verification)',
      'Meta Ad Campaigns Setup (Indian Audience)',
      'Ongoing 30-Day Support'
    ],
    link: '/page-contact?service=indian-dropshipping&plan=growth'
  },
  {
    title: 'Scale',
    price: 'Custom',
    period: '/ pricing',
    popular: false,
    features: [
      'Custom White-Label Product Branding',
      'Bulk Sourcing & Private Agent Contracts',
      'Automated Order Fulfillment Integration',
      'Omni-channel Native Marketing Strategy',
      'Dedicated Indian E-Commerce Account Director'
    ],
    link: '/page-contact?service=indian-dropshipping&plan=scale'
  }
];

useHead({
  title: 'Indian Dropshipping Complete Setup | 100x Dropship',
  meta: [
    { name: 'description', content: 'Launch and scale your local e-commerce business in India with 100x Dropship. Expert product sourcing, COD optimization, RTO reduction, and local supplier setups.' },
    { property: 'og:title', content: 'Indian Dropshipping Complete Setup | 100x Dropship' },
    { property: 'og:description', content: 'Launch and scale your local e-commerce business in India. Expert product sourcing, COD optimization, RTO reduction, and local setups.' },
  ],
});
</script>
