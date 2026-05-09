<template>
  <section class="blog-main section-padding">
    <div class="container">
      <div class="row lg-marg justify-content-around">
        <div class="col-lg-8">
          <div class="md-mb80">
            <div 
              v-for="(blog, index) in filteredBlogs" 
              :key="index"
              class="item mb-80"
            >
              <div class="img">
                <img :src="blog.image" alt="" />
              </div>
              <div class="content">
                <div class="d-flex align-items-center mb-15">
                  <div class="post-date">{{ blog.date }}</div>
                  <div class="commt opacity-7 fz-13">
                    <span class="ti-comment-alt mr-10"></span>{{ blog.comments }} Comments
                  </div>
                </div>
                <h3 class="mb-15">
                  <a href="/blog-details" v-html="blog.title"></a>
                </h3>
                <p>
                  {{ blog.desc }}
                </p>
                <a
                  href="/blog-details"
                  class="d-flex align-items-center main-color mt-40"
                >
                  <span class="text mr-15">Read More</span>
                  <span class="ti-arrow-top-right"></span>
                </a>
              </div>
            </div>
            <div v-if="filteredBlogs.length === 0" class="col-12">
              <p>No posts found for this category.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="sidebar">
            <div class="widget">
              <h6 class="title-widget">Search Here</h6>
              <div class="search-box">
                <input type="text" name="search-post" placeholder="Search" />
                <span class="icon pe-7s-search"></span>
              </div>
            </div>
            <div class="widget catogry">
              <h6 class="title-widget">Categories</h6>
              <ul class="rest">
                  <li>
                  <span>
                    <a href="#" @click.prevent="selectCategory('All')">All</a>
                  </span>
                  <span class="ml-auto">{{ blogs.length }}</span>
                </li>
                <li v-for="cat in categories" :key="cat.name">
                  <span>
                    <a href="#" @click.prevent="selectCategory(cat.name)">{{ cat.name }}</a>
                  </span>
                  <span class="ml-auto">{{ getCategoryCount(cat.name) }}</span>
                </li>
              </ul>
            </div>
            <div class="widget last-post-thum">
              <h6 class="title-widget">latest Posts</h6>
              <div class="item d-flex align-items-center">
                <div>
                  <div class="img">
                    <a href="/blog-details">
                      <img src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000&auto=format&fit=crop" alt="" />
                      <span class="date">
                        <span>
                          14 / <br />
                          Feb
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
                <div class="cont">
                  <span class="tag">
                    <a href="/blog-grid-sidebar">Ads</a>
                  </span>
                  <h6>
                    <a href="/blog-details">
                      Mastering Meta Ads in 2026
                    </a>
                  </h6>
                </div>
              </div>
              <div class="item d-flex align-items-center">
                <div>
                  <div class="img">
                    <a href="/blog-details">
                      <img src="https://images.unsplash.com/photo-1598128558393-70ff21433be0?q=80&w=1000&auto=format&fit=crop" alt="" />
                      <span class="date">
                        <span>
                          10 / <br />
                          Feb
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
                <div class="cont">
                  <span class="tag">
                    <a href="/blog-grid-sidebar">Search</a>
                  </span>
                  <h6>
                    <a href="/blog-details">
                      Google Ads vs SEO Guide
                    </a>
                  </h6>
                </div>
              </div>
              <div class="item d-flex align-items-center">
                <div>
                  <div class="img">
                    <a href="/blog-details">
                      <img src="https://images.unsplash.com/photo-1556742046-80f0746227a1?q=80&w=1000&auto=format&fit=crop" alt="" />
                      <span class="date">
                        <span>
                          05 / <br />
                          Feb
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
                <div class="cont">
                  <span class="tag">
                    <a href="/blog-grid-sidebar">Shopify</a>
                  </span>
                  <h6>
                    <a href="/blog-details">
                      Scaling Your Online Store
                    </a>
                  </h6>
                </div>
              </div>
            </div>
            <div class="widget tags">
              <h6 class="title-widget">Tags</h6>
              <div>
                <a href="/blog-grid-sidebar">Meta</a>
                <a href="/blog-grid-sidebar">Google</a>
                <a href="/blog-grid-sidebar">Shopify</a>
                <a href="/blog-grid-sidebar">ROI</a>
                <a href="/blog-grid-sidebar">Growth</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const blogs = ref([
  {
    title: 'Mastering Meta Ads: <span class="fw-200">Strategies for 2026</span>',
    date: '14 Feb 2026',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000&auto=format&fit=crop',
    category: 'PPC Ads',
    comments: 4,
    desc: 'With social platforms evolving rapidly, staying ahead in Meta Ads requires a data-first approach. Learn how to leverage AI targeting and creative testing.'
  },
  {
    title: 'Google Ads vs. SEO: <span class="fw-200">Which is Right for You?</span>',
    date: '10 Feb 2026',
    image: 'https://images.unsplash.com/photo-1598128558393-70ff21433be0?q=80&w=1000&auto=format&fit=crop',
    category: 'Digital Marketing',
    comments: 4,
    desc: 'Should you invest in paid search or organic growth? We break down the pros and cons of Google Ads and SEO to help you decide the best path.'
  },
  {
    title: 'Scaling Your <span class="fw-200">Shopify Store</span>',
    date: '05 Feb 2026',
    image: 'https://images.unsplash.com/photo-1556742046-80f0746227a1?q=80&w=1000&auto=format&fit=crop',
    category: 'E-Commerce',
    comments: 4,
    desc: "From conversion rate optimization to abandoned cart email flows, discover the key tactics to doubling your Shopify store's revenue this year."
  }
]);

const categories = [
  { name: 'Digital Marketing' },
  { name: 'Social Media' },
  { name: 'E-Commerce' },
  { name: 'PPC Ads' },
  { name: 'Growth Strategy' }
];

const activeCategory = ref('All');

const route = useRoute();

onMounted(() => {
  if (route.query.category) {
    activeCategory.value = route.query.category;
  }
});

const filteredBlogs = computed(() => {
  if (activeCategory.value === 'All') return blogs.value;
  return blogs.value.filter(blog => blog.category === activeCategory.value);
});

const selectCategory = (category) => {
  activeCategory.value = category;
};

const getCategoryCount = (categoryName) => {
  return blogs.value.filter(blog => blog.category === categoryName).length;
};
</script>
