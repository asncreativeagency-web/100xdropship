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
        <Pricing :plans="logoDesignPlans" />
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

const logoDesignPlans = [
  {
    title: 'Starter',
    price: '$99',
    period: '/ project',
    popular: false,
    features: [
      '2 Custom Initial Logo Concepts',
      'High-Resolution PNG/JPG Formats',
      'Transparent Background Version',
      '2 Revision Rounds',
      '3-Day Delivery'
    ],
    link: '/page-contact?service=logo-design&plan=starter'
  },
  {
    title: 'Growth',
    price: '$199',
    period: '/ project',
    popular: true,
    features: [
      '4 Premium Logo Concepts',
      'Vector Source Files (AI/EPS/PDF/SVG)',
      'Brand Color Palette & Typography Rules',
      'Unlimited Revisions',
      'Priority Turnaround (24-48 Hours)'
    ],
    link: '/page-contact?service=logo-design&plan=growth'
  },
  {
    title: 'Scale',
    price: 'Custom',
    period: '/ pricing',
    popular: false,
    features: [
      'Complete Brand Identity Suite',
      'Main Logo + Sub-Logos & Icons',
      'Social Media Branding & Cover Kits',
      'Business Card & Stationery Layouts',
      'Priority 1-on-1 Design Consultation'
    ],
    link: '/page-contact?service=logo-design&plan=scale'
  }
];

useHead({
  title: 'Logo Design Services | 100x Dropship',
  meta: [
    { name: 'description', content: 'Professional logo design by 100x Dropship. We craft unique, versatile logos that communicate your brand personality and values. From concept to brand guidelines.' },
    { property: 'og:title', content: 'Logo Design Services | 100x Dropship' },
    { property: 'og:description', content: 'Unique, versatile logo designs that communicate your brand personality.' },
  ],
});
</script>
