// https://nuxt.com/docs/api/configuration/nuxt-config
const srcDir = 'src/'
export default defineNuxtConfig({
    srcDir,
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    modules: ["@nuxt/ui", "@nuxtjs/tailwindcss"],
    vite: {
        css: {
            preprocessorOptions: {
                sass: {
                    silenceDeprecations: ['legacy-js-api']
                },
                scss: {
                    silenceDeprecations: ['legacy-js-api']
                }
            }
        }
    },
    tailwindcss: {
        cssPath: `${srcDir}/assets/css/tailwind.css`,
        // default config
        configPath: './tailwind.config.ts'
    },
    postcss: {
    },
})