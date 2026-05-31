<template>
  <LoadingScreen />
  <Cursor />
  <ProgressScroll />
  <Lines />
  <Navbar />
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <main class="main-bg o-hidden">
        <Header />
        <Intro />
        <Numbers />
        <Services />
        <Team />
        <Testimonials />
        <Clients />
        <Blog />
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
import Blog from '@/components/home-main/Blog';
import Clients from '@/components/common/Clients';
import Team from '@/components/home-modern-studio/Team';
import Testimonials from '@/components/home-modern-studio/Testimonials';
import Header from '@/components/page-about/Header';
import Intro from '@/components/page-about/Intro';
import Numbers from '@/components/page-about/Numbers';
import Services from '@/components/page-about/Services';

useHead({
  title: 'About Us | 100x Dropship',
  meta: [
    { name: 'description', content: 'Learn more about 100x Dropship, a results-driven digital marketing agency committed to helping businesses grow through innovative strategies and creative excellence.' },
    { property: 'og:title', content: 'About 100x Dropship | Digital Marketing Agency' },
    { property: 'og:description', content: 'Discover our story, our mission, and the team behind our results-driven digital marketing solutions.' },
  ],
});
</script>
