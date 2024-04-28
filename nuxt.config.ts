// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ['./assets/styles/global.scss'],
    modules: ['@nuxtjs/eslint-module'],
    typescript: {
        typeCheck: true,
    },
})
