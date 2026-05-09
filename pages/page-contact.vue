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
        <Contact />
        <Map />
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
import Header from '@/components/page-contact/Header';
import Contact from '@/components/page-contact/Contact';
import Map from '@/components/page-contact/Map';

useHead({
  title: 'Contact Us | Prayag Digital',
  meta: [
    { name: 'description', content: 'Get in touch with Prayag Digital today. Let\'s discuss how we can help your brand grow with our expert digital marketing and design services.' },
    { property: 'og:title', content: 'Contact Prayag Digital | Get a Quote' },
    { property: 'og:description', content: 'Reach out to us for a consultation and discover how we can elevate your brand\'s digital presence.' },
  ],
});
</script>
