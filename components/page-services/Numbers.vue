<template>
  <section class="numbers-crev section-padding o-hidden">
    <div class="container">
      <div class="row lg-marg justify-content-center">
        <div
          v-for="(item, index) in items"
          :key="index"
          :class="['col-lg-6 col-md-6', { 'md-mb50': index === 0 }]"
        >
          <div class="item text-center">
            <div class="o-hidden">
              <h3 class="stroke">{{ item.value }}</h3>
            </div>
            <h6 class="p-color sub-title">{{ item.subtitle }}</h6>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const items = [
  { value: '100%', subtitle: 'Clients Satisfaction' },
  { value: '67', subtitle: 'Projects Completed' },
];
</script>
