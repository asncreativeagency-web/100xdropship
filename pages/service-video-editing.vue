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
          title="Video <span class='fw-200'>Editing</span>" 
          bgImage="/assets/imgs/background/bg4.jpg" 
        />
        <Intro :data="serviceData" />
        <Feat />
        <Pricing :plans="videoEditingPlans" />
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
  introTitle: "Bring Your Story to Life with Video.",
  description1: "Video is the most engaging content format. We provide professional editing services that transform raw footage into polished, compelling videos for any platform.",
  description2: "From short-form reels and ads to long-form brand stories, our editors deliver cinematic quality that captures attention and drives results.",
  list: [
    "Social Media Reels & Shorts",
    "Promotional & Ad Videos",
    "Motion Graphics & Animation",
    "Color Grading & Sound Design",
    "YouTube & Long-Form Editing"
  ]
};

const videoEditingPlans = [
  {
    title: 'Starter',
    price: '$149',
    period: '/ month',
    popular: false,
    features: [
      '5 Short-Form Edits (Reels / TikToks / Shorts)',
      'Trending Text Captions & Subtitles',
      'Standard Audio Sync & Sound Effects',
      '2 Revision Rounds Per Video',
      '3-Day Standard Turnaround'
    ],
    link: '/page-contact?service=video-editing&plan=starter'
  },
  {
    title: 'Growth',
    price: '$399',
    period: '/ month',
    popular: true,
    features: [
      '15 Premium Video Edits (Ad / Organic)',
      'Cinematic Sound Design & Visual Effects (VFX)',
      'Motion Graphics & Custom Thumbnails Included',
      'Unlimited Revisions',
      '24-48 Hours Express Turnaround'
    ],
    link: '/page-contact?service=video-editing&plan=growth'
  },
  {
    title: 'Scale',
    price: 'Custom',
    period: '/ pricing',
    popular: false,
    features: [
      'Unlimited Video Editing Services',
      'Dedicated Professional Video Editor',
      'Long-Form YouTube (10-20 min) & Course Editing',
      'Custom 2D/3D Animations & Title Graphics',
      'Priority Turnaround & Direct Slack Communication'
    ],
    link: '/page-contact?service=video-editing&plan=scale'
  }
];

useHead({
  title: 'Video Editing Services | 100x Dropship',
  meta: [
    { name: 'description', content: 'Professional video editing by 100x Dropship. From social media reels to brand stories, we deliver cinematic quality with motion graphics, color grading, and sound design.' },
    { property: 'og:title', content: 'Video Editing Services | 100x Dropship' },
    { property: 'og:description', content: 'Professional video editing for reels, ads, and brand stories with cinematic quality.' },
  ],
});
</script>
