
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title:'我能前台展示页',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'ant-design-vue/dist/antd.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/antd-ui',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  /*
  ** Build configuration
  */
  build:{
    // vendor: ['axios'],
    extend (config, ctx) {
    }
  },
  proxy: {
    '/api/': {
      target: 'http://192.168.77.151:9999/', // 代理地址
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      },
    },
  },
  // modules: [ '@nuxtjs/axios' ], // 不需要加入@nuxtjs/proxy
  css: [
    'assets/main.css'
  ],
  /*自定义加载中组件 */
  // loading: 'components/loading.vue',
}
