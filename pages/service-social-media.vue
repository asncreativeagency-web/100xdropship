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
          title="Social Media <span class='fw-200'>Management</span>" 
          bgImage="/assets/imgs/background/bg4.jpg" 
        />
        <Intro :data="serviceData" />
        <Feat />
        <Pricing :plans="socialMediaPlans" />
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
  introTitle: "Build a Community, Grow Your Brand.",
  description1: "Social media is more than passing; it's about building lasting relationships with your audience. We manage your presence to reflect your brand's unique voice.",
  description2: "From content creation to community engagement, we ensure your social channels are active, engaging, and growing.",
  list: [
    "Content Strategy & Planning",
    "Community Management",
    "Post Scheduling & Publishing",
    "Analytics & Reporting",
    "Brand Voice Development"
  ]
};

const socialMediaPlans = [
  {
    title: 'Starter',
    price: '$199',
    period: '/ month',
    popular: false,
    features: [
      '3 Posts Per Week (Feed / Stories)',
      'Basic Caption & Hashtag Optimization',
      'Profile Bio & Design Alignment Audit',
      'Monthly Audience Growth Report',
      'Email Support'
    ],
    link: '/page-contact?service=social-media&plan=starter'
  },
  {
    title: 'Growth',
    price: '$499',
    period: '/ month',
    popular: true,
    features: [
      'Daily Posts & Scheduling (All Platforms)',
      '3 Custom Reels / TikTok Videos Per Week',
      'Active Daily Community Engagement',
      'Bi-weekly Analytics Review & Strategy Calls',
      'Priority Priority Support (WhatsApp)'
    ],
    link: '/page-contact?service=social-media&plan=growth'
  },
  {
    title: 'Scale',
    price: 'Custom',
    period: '/ pricing',
    popular: false,
    features: [
      'Multi-channel Full Management (IG, TikTok, YT Shorts)',
      'Custom Influencer Sourcing & Collaborations',
      '24/7 Customer Comment & Message Moderation',
      'Dedicated Brand Social Media Strategist',
      'Unlimited Creative Asset Sourcing'
    ],
    link: '/page-contact?service=social-media&plan=scale'
  }
];

useHead({
  title: 'Social Media Management | 100x Dropship',
  meta: [
    { name: 'description', content: 'Professional social media management by 100x Dropship. We build your community, grow your brand presence, and create engaging content strategies across all platforms.' },
    { property: 'og:title', content: 'Social Media Management | 100x Dropship' },
    { property: 'og:description', content: 'Build your community and grow your brand with expert social media management.' },
  ],
});
</script>
