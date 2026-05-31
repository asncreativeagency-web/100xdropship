import { fileURLToPath } from 'node:url';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  typescript: {
    shim: false,
  },
  nitro: {},
  alias: {
    '@': fileURLToPath(new URL('./', import.meta.url)),
  },
  app: {
    head: {
      title: '100x Dropship | Digital Marketing Agency',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          charset: 'utf-8',
        },
        {
          'http-equiv': 'X-UA-Compatible',
          content: 'IE=edge',
        },
        {
          name: 'keywords',
          content: 'digital marketing agency, meta ads, social media management, shopify website, logo design, graphic design, video editing, 100x dropship, online marketing, brand growth',
        },
        {
          name: 'description',
          content: '100x Dropship is a full-service digital marketing agency specializing in Meta Ads, Social Media Management, Shopify Websites, Logo Design, Graphic Design, and Video Editing. We help brands grow online.',
        },
        {
          name: 'author',
          content: '100x Dropship',
        },
        {
          name: 'robots',
          content: 'index, follow',
        },
        {
          name: 'theme-color',
          content: '#0f4c3a',
        },

        // Open Graph / Facebook / WhatsApp
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:url',
          content: 'https://100xdropship.com/',
        },
        {
          property: 'og:title',
          content: '100x Dropship | Digital Marketing Agency',
        },
        {
          property: 'og:description',
          content: 'Full-service digital marketing agency — Meta Ads, Social Media, Shopify, Logo Design, Graphic Design & Video Editing. We help brands grow online.',
        },
        {
          property: 'og:image',
          content: 'https://100xdropship.com/assets/imgs/og-image.png',
        },
        {
          property: 'og:image:width',
          content: '1200',
        },
        {
          property: 'og:image:height',
          content: '630',
        },
        {
          property: 'og:site_name',
          content: '100x Dropship',
        },
        {
          property: 'og:locale',
          content: 'en_US',
        },

        // Twitter Card
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:url',
          content: 'https://100xdropship.com/',
        },
        {
          name: 'twitter:title',
          content: '100x Dropship | Digital Marketing Agency',
        },
        {
          name: 'twitter:description',
          content: 'Full-service digital marketing agency — Meta Ads, Social Media, Shopify, Logo Design, Graphic Design & Video Editing.',
        },
        {
          name: 'twitter:image',
          content: 'https://100xdropship.com/assets/imgs/og-image.png',
        },
      ],
      link: [
        { rel: 'shortcut icon', href: '/assets/imgs/favicon-new.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/assets/imgs/favicon-new.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/assets/imgs/favicon-new.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/assets/imgs/favicon-new.png' },
        { rel: 'canonical', href: 'https://100xdropship.com/' },
        // Google Fonts
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap',
        },
        { rel: 'stylesheet', href: '/assets/css/plugins.css' },
        { rel: 'stylesheet', href: '/assets/css/style.css' },
      ],
      script: [
        { src: '/assets/js/plugins.js' },
        { src: '/assets/js/TweenMax.min.js' },
        { src: '/assets/js/charming.min.js' },
        { src: '/assets/js/countdown.js' },
        { src: '/assets/js/ScrollTrigger.min.js' },
        { src: '/assets/js/gsap.min.js' },
        { src: '/assets/js/splitting.min.js' },
        { src: '/assets/js/isotope.pkgd.min.js' },
        { src: '/assets/js/imgReveal/imagesloaded.pkgd.min.js' },
        { src: '/assets/js/ScrollSmoother.min.js' },
        // { src: '/showcase/assets/js/anime.min.js' },
        { src: '/assets/js/scripts.js', defer: true },
      ],
    },
  },
  webpack: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        layouts: true,
      },
    },
  },
});
