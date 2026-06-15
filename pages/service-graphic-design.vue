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
          title="Graphic <span class='fw-200'>Design</span>" 
          bgImage="/assets/imgs/background/bg4.jpg" 
        />
        <Intro :data="serviceData" />
        <Feat />
        <Pricing :plans="graphicDesignPlans" />
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
  introTitle: "Visuals That Speak Louder Than Words.",
  description1: "Great design is the bridge between your brand and your audience. We create stunning visuals for social media, marketing campaigns, packaging, and more.",
  description2: "Our design team combines creativity with strategy to produce graphics that not only look beautiful but also drive engagement and conversions.",
  list: [
    "Social Media Graphics & Templates",
    "Marketing Collateral Design",
    "Brochure & Flyer Design",
    "Packaging & Label Design",
    "Infographics & Presentations"
  ]
};

const graphicDesignPlans = [
  {
    title: 'Starter',
    price: '$99',
    period: '/ month',
    popular: false,
    features: [
      '5 Custom Graphics / Banner Designs',
      'Social Media Templates (Canva/Figma)',
      'High-Resolution File Exports',
      '2 Revision Rounds',
      'Standard Turnaround (3-5 Days)'
    ],
    link: '/page-contact?service=graphic-design&plan=starter'
  },
  {
    title: 'Growth',
    price: '$299',
    period: '/ month',
    popular: true,
    features: [
      '15 Premium Design Assets',
      'High-Converting Ad Creatives',
      'Packaging & Product Label Mockups',
      'Unlimited Revisions',
      'Priority Turnaround (24-48 Hours)'
    ],
    link: '/page-contact?service=graphic-design&plan=growth'
  },
  {
    title: 'Scale',
    price: 'Custom',
    period: '/ pricing',
    popular: false,
    features: [
      'Dedicated Senior Graphic Designer',
      'Unlimited Ongoing Design Requests',
      'Brand Identity Sourcing & Rebranding',
      'Infographics, PPT & Brochure Suites',
      'Same-day Delivery for Urgencies'
    ],
    link: '/page-contact?service=graphic-design&plan=scale'
  }
];

useHead({
  title: 'Graphic Design Services | 100x Dropship',
  meta: [
    { name: 'description', content: 'Creative graphic design services by 100x Dropship. Stunning visuals for social media, marketing campaigns, packaging, brochures, and brand collateral.' },
    { property: 'og:title', content: 'Graphic Design Services | 100x Dropship' },
    { property: 'og:description', content: 'Stunning graphic designs for social media, marketing campaigns, and brand collateral.' },
  ],
});
</script>
