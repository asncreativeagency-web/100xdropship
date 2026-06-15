<template>
  <LoadingScreen />
  <Cursor />
  <ProgressScroll />
  <Lines />
  <Navbar />
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <main class="main-bg o-hidden">
        <!-- We use pricing component as the main focus of this page -->
        <Pricing style="margin-top: 100px;" />
        <Clients />
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
import Clients from '@/components/common/Clients';
import Pricing from '@/components/common/Pricing';

useHead({
  title: 'Pricing Plans | 100x Dropship',
  meta: [
    { name: 'description', content: 'View pricing plans and packages for our specialized e-commerce and digital marketing services, including Meta Ads, Shopify development, and video editing.' },
  ],
});
</script>
