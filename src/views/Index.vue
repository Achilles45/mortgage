<template>
  <div class="home">
    <Topbar />
    <Navbar />
    <Banner />
    <Intro />
    <Features />
    <Counter />
    <Pricing />
    <Blog />
    <Testimonials />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Topbar from '@/components/Topbar.vue'
import Navbar from '@/components/Navbar.vue'
import Banner from '@/components/Banner.vue'
import Intro from '@/components/Intro.vue'
import Features from '@/components/Features.vue'
import Counter from '@/components/Counter.vue'
import Pricing from '@/components/Pricing.vue'
import Blog from '@/components/Blog.vue'
import Testimonials from '@/components/Testimonials.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Index',
  components:{
    Topbar,
    Navbar,
    Banner,
    Intro,
    Features,
    Counter,
    Pricing,
    Blog,
    Testimonials,
    Footer
  }
}
</script>
