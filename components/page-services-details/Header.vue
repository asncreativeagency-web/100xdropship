<template>
  <header
    class="header page-header bg-img section-padding valign"
    :data-background="bgImage || '/assets/imgs/background/bg4.jpg'"
    data-overlay-dark="8"
  >
    <div class="container pt-80">
      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <h1 class="text-u ls1 fz-80" v-html="title || 'Our Services'"></h1>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import loadBackgroudImages from '@/common/loadBackgroudImages';
const props = defineProps(['title', 'bgImage']);
onMounted(() => {
  loadBackgroudImages();
});
</script>
