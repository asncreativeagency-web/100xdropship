<template>
  <section class="blog-main section-padding">
    <div class="container">
      <div class="row lg-marg justify-content-around">
        <div class="col-lg-8">
          <div class="md-mb80 blog">
            <div class="row">
              <div 
                v-for="(blog, index) in filteredBlogs" 
                :key="index"
                class="col-md-6"
              >
                <div class="item mb-50">
                  <div class="img fit-img">
                    <img :src="blog.image" alt="" />
                  </div>
                  <div class="cont pt-40">
                    <div
                      class="info sub-title p-color d-flex align-items-center mb-15"
                    >
                      <div>
                        <a href="/blog-details">By : Admin</a>
                      </div>
                      <div class="ml-30">
                        <a href="/blog-details">{{ blog.date }}</a>
                      </div>
                    </div>
                    <h4 class="fz-30">
                      {{ blog.title }}
                    </h4>
                    <a
                      href="/blog-details"
                      class="butn-crev d-flex align-items-center mt-40"
                    >
                      <span class="hover-this">
                        <span class="circle hover-anim">
                          <i class="ti-arrow-top-right"></i>
                        </span>
                      </span>
                      <span class="text">Read more</span>
                    </a>
                  </div>
                </div>
              </div>
              <div v-if="filteredBlogs.length === 0" class="col-12">
                <p>No posts found for this category.</p>
              </div>
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
    title: 'Mastering Meta Ads: Strategies for 2026',
    date: 'Feb 14, 2026',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000&auto=format&fit=crop',
    category: 'PPC Ads'
  },
  {
    title: 'Google Ads vs. SEO: Which is Right for You?',
    date: 'Feb 10, 2026',
    image: 'https://images.unsplash.com/photo-1598128558393-70ff21433be0?q=80&w=1000&auto=format&fit=crop',
    category: 'Digital Marketing'
  },
  {
    title: 'Scaling Your Shopify Store: A Guide',
    date: 'Feb 05, 2026',
    image: 'https://images.unsplash.com/photo-1556742046-80f0746227a1?q=80&w=1000&auto=format&fit=crop',
    category: 'E-Commerce'
  },
  {
    title: 'Building a Loyal Community on Social Media',
    date: 'Jan 28, 2026',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1000&auto=format&fit=crop',
    category: 'Social Media'
  },
  {
    title: 'Techniques to Boost Your PPC ROI',
    date: 'Jan 20, 2026',
    image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=1000&auto=format&fit=crop',
    category: 'PPC Ads'
  },
  {
    title: 'Why Your Business Needs Data-Driven Marketing',
    date: 'Jan 15, 2026',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    category: 'Growth Strategy'
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
