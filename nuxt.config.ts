export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ['./assets/styles/global.scss'],
    modules: ['@nuxtjs/eslint-module'],
    typescript: {
        typeCheck: true,
    },
})
