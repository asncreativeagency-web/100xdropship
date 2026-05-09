<template>
  <section class="page-faqs section-padding pb-0 position-re">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div>
            <div class="sec-head mb-50">
              <h6 class="sub-title main-color mb-15">How We Help</h6>
              <h3>
                Answers to your most <br />
                common questions.
              </h3>
            </div>
            <div class="accordion bord">
              <div
                v-for="(item, index) in faqs"
                :key="index"
                :class="{
                  active: index === 0,
                  'item wow fadeInUp': true,
                  animated: true,
                }"
                :data-wow-delay="`${index * 0.2 + 0.1}s`"
              >
                <div class="title" @click="openAccordion">
                  <h6>{{ item.title }}</h6>
                  <span
                    class="ico"
                    :class="{ 'ti-plus': !item.open, 'ti-minus': item.open }"
                  ></span>
                </div>
                <div class="accordion-info">
                  <p>{{ item.content }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="img1">
      <img src="/assets/imgs/intro/03.jpg" alt="" />
    </div>
    <div class="img2">
      <img src="/assets/imgs/arw0.png" alt="" />
    </div>
    <div class="img3">
      <img src="/assets/imgs/intro/04.jpg" alt="" />
    </div>
  </section>
</template>

<script setup>
const faqs = ref([
  {
    title: 'What specific services do you offer?',
    content:
      'We specialize in performance marketing, including Meta Ads (Facebook & Instagram), Google Ads (PPC), Social Media Management, and end-to-end Shopify store development and optimization.',
    open: true,
  },
  {
    title: 'How long does it take to see results?',
    content:
      'For paid ads (Meta/Google), initial traction typically begins within the first week. However, optimal performance is usually achieved after 3-4 weeks of data gathering and campaign optimization.',
    open: false,
  },
  {
    title: 'Do you only work with e-commerce brands?',
    content:
      'While we have deep expertise in scaling Shopify e-commerce stores, we also work with service-based businesses to generate high-quality leads through targeted PPC and social campaigns.',
    open: false,
  },
  {
    title: 'How do you measure success?',
    content:
      'We focus on metrics that matter to your bottom line: ROAS (Return on Ad Spend), CPA (Cost Per Acquisition), and overall Conversion Rate. We provide transparent, data-driven reports regularly.',
    open: false,
  },
]);

function openAccordion(event) {
  document.querySelectorAll('.accordion-info').forEach((element) => {
    element.classList.remove('active');
    element.style.maxHeight = 0;
    element.parentElement.classList.remove('active');
  });
  event.currentTarget.parentElement.classList.add('active');
  event.currentTarget.nextElementSibling.style.maxHeight = '300px';
  event.currentTarget.nextElementSibling.classList.add('active');
}
</script>

<style scoped>
/* Your component-specific styles go here */
</style>
