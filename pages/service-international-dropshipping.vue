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
          title="International <span class='fw-200'>Dropshipping</span>" 
          bgImage="/assets/imgs/background/bg4.jpg" 
        />
        <Intro :data="serviceData" />
        <Feat />
        <Pricing :plans="internationalDropshippingPlans" />
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
  introTitle: "Scale Your Store to Global Markets.",
  description1: "We establish robust, automated international dropshipping businesses that scale worldwide. We set up professional, highly responsive Shopify stores customized for high-value global audiences.",
  description2: "Our setups integrate fast shipping international suppliers (such as CJ Dropshipping, Zendrop, and private agents), secure multi-currency checkouts, and automated order fulfillment systems.",
  list: [
    "Global Product Sourcing & Private Agents",
    "Premium Multi-Currency Shopify Setup",
    "Automated Order Fulfillment Systems",
    "Worldwide Marketing & Ad Targeting",
    "CJ Dropshipping, Zendrop, & Agent Integrations"
  ]
};

const internationalDropshippingPlans = [
  {
    title: 'Starter',
    price: '$499',
    period: '/ project',
    popular: false,
    features: [
      'Global Shopify Store Setup',
      '5 Trending E-Commerce Product Listings',
      'Fast Shipping Agent Sourcing Setup',
      'CJ Dropshipping & Zendrop Integrations',
      'Multi-currency Pricing & Checkout Config'
    ],
    link: '/page-contact?service=international-dropshipping&plan=starter'
  },
  {
    title: 'Growth',
    price: '$1,199',
    period: '/ project',
    popular: true,
    features: [
      'Custom Responsive Store Layout Design',
      'Private Agent Fulfillment Automated Setup',
      'High-converting Cart & Checkout Optimizations',
      'Facebook & Google Ad Campaigns Launch Setup',
      'Dedicated Post-Launch Support (45 Days)'
    ],
    link: '/page-contact?service=international-dropshipping&plan=growth'
  },
  {
    title: 'Scale',
    price: 'Custom',
    period: '/ pricing',
    popular: false,
    features: [
      'Private Labeling & Custom Packaging Sourcing',
      'Global 3PL Inventory & Logistics Warehouse Contracts',
      'Multi-Market Global Localization (Languages + Currencies)',
      'Advanced Customer Support Bot Automation',
      'VIP Scale Consultation & Ad Strategy Audit'
    ],
    link: '/page-contact?service=international-dropshipping&plan=scale'
  }
];

useHead({
  title: 'International Dropshipping Setup | 100x Dropship',
  meta: [
    { name: 'description', content: 'Establish a highly profitable global e-commerce brand. Expert international dropshipping setups, automated fulfillment, multi-currency checkouts, and premium supplier integrations.' },
    { property: 'og:title', content: 'International Dropshipping Setup | 100x Dropship' },
    { property: 'og:description', content: 'Establish a highly profitable global e-commerce brand. Expert setups, automated fulfillment, multi-currency checkouts, and premium integrations.' },
  ],
});
</script>
