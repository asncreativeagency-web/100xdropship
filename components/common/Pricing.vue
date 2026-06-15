<template>
  <section class="pricing section-padding">
    <div class="container">
      <div class="sec-head mb-80">
        <h6 class="sub-title main-color mb-25">Pricing Plans</h6>
        <div class="d-flex align-items-center">
          <h3>Choose the right <span class="fw-200">plan for you</span></h3>
        </div>
      </div>
      <div class="row">
        <div 
          v-for="(plan, index) in plans" 
          :key="index" 
          class="col-lg-4 col-md-6"
          :class="{'sm-mb50': index < plans.length - 1}"
        >
          <div class="item" :class="{'active-plan': plan.popular}">
            <h6 class="type mb-15" :class="{'main-color': plan.popular}">{{ plan.title }}</h6>
            <h3 class="price mb-30">{{ plan.price }} <span class="fz-14 opacity-7">{{ plan.period }}</span></h3>
            <ul class="rest mb-40">
              <li v-for="(feature, fIndex) in plan.features" :key="fIndex">{{ feature }}</li>
            </ul>
            <NuxtLink :to="plan.link" class="butn butn-md radius-30" :class="plan.popular ? 'butn-bg main-colorbg text-dark' : 'butn-bord'">
              <span class="text">{{ plan.popular ? 'Popular Plan' : 'Get Started' }}</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  plans: {
    type: Array,
    default: () => [
      {
        title: 'Starter',
        price: '$299',
        period: '/ month',
        popular: false,
        features: [
          'Meta Ads Management (1 Campaign)',
          'Basic Video Editing (3 Reels/TikToks)',
          'Shopify Store Audit & Fixes',
          'Standard Analytics Dashboard',
          'Email Support'
        ],
        link: '/page-contact?plan=starter'
      },
      {
        title: 'Growth',
        price: '$799',
        period: '/ month',
        popular: true,
        features: [
          'Advanced Meta Ads (Up to 5 Campaigns)',
          'Social Media Handling (IG & YT)',
          'Professional Video Editing (10 Reels/mo)',
          'Shopify Store Optimization',
          'Weekly Reports & Call Support'
        ],
        link: '/page-contact?plan=growth'
      },
      {
        title: 'Scale',
        price: 'Custom',
        period: '/ pricing',
        popular: false,
        features: [
          'Unlimited Campaigns & Agency Accounts',
          'Full Brand Sourcing & Logistics Setup',
          'Private Supplier Integration',
          'COD Optimization & RTO Management',
          'Dedicated Support Manager'
        ],
        link: '/page-contact?plan=scale'
      }
    ]
  }
});
</script>

<style scoped>
.item {
  transition: all 0.3s ease;
  position: relative;
  background: rgba(255, 255, 255, 0.02);
}
.item:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 255, 255, 0.3) !important;
}
.active-plan {
  border-color: #fd5b38 !important;
  box-shadow: 0 10px 30px rgba(253, 91, 56, 0.1);
  background: rgba(253, 91, 56, 0.02);
}
.active-plan:hover {
  border-color: #fd5b38 !important;
  background: rgba(253, 91, 56, 0.04);
}
.type {
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 2px;
  font-size: 14px;
}
.price {
  font-size: 40px;
  font-weight: 700;
}
.butn {
  display: inline-block;
  width: 100%;
  text-align: center;
  margin-top: 15px;
}
</style>
