<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        ican-show-ui
      </h1>
      <h2 class="subtitle">
        ican-show
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import { roleList } from "~/api/index";
export default {
  components: {
    Logo
  },
  created () {
    roleList().then((res) => {
      console.log(res)
    });
  }
  // mounted () {
  //   /*设置加载过程 */
  //   this.$nextTick(() => {
  //     this.$nuxt.$loading.start()
  //     this.$axios({
  //       url: '/hrms/channel_recruit/training_teacher',
  //       data: {
  //         username: '哈哈哈',
  //         password: '123'
  //       }
  //     }).then(res => {
  //       console.log('res: ', res)
  //     });
  //     setTimeout(() => this.$nuxt.$loading.finish(), 1000)
  //   })
  // }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
