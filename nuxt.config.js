import user from "./utils/account";
export default {
  ssr: false,
  target: "static",
  head: {
    title: user.defaultTitle,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: user.description
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: user.defaultTitle
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: user.description
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: user.website.iconLocation
      },
      {
        hid: "twitter:image:alt",
        name: "twitter:image:alt",
        content: user.defaultTitle
      },
      {
        hid: "og:title",
        property: "og:title",
        content: user.defaultTitle
      },
      {
        hid: "og:description",
        property: "og:description",
        content: user.description
      },
      {
        hid: "og:image",
        property: "og:image",
        content: user.website.iconLocation
      },
      {
        hid: "og:image:secure_url",
        property: "og:image:secure_url",
        content: user.website.iconLocation
      },
      {
        hid: "og:image:alt",
        property: "og:image:alt",
        content: user.defaultTitle
      }
    ],
    link: [
      { rel: "canonical", href: user.website.hostURL },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        type: "text/css",
        crossorigin: "anonymous",
        href:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:300,400,500|Rubik:500,700,400,300",
        crossorigin: "anonymous"
      }
    ],
    script: [
      {
        type: "application/ld+json",
        json: {
          "@context": "http://schema.org",
          "@type": "Organization",
          legalName: user.defaultTitle,
          url: "nilanjandeb.me",
          logo: user.website.iconLocation,
          foundingDate: user.website.foundingDate,
          founders: [
            {
              "@type": "Person",
              name: user.defaultTitle
            }
          ],
          contactPoint: [
            {
              "@type": "ContactPoint",
              ...user.contact,
              contactType: "customer service"
            }
          ],
          address: {
            "@type": "PostalAddress",
            ...user.address
          },
          sameAs: [
            user.social.github.url,
            user.social.linkedin.url,
            user.social.twitter.url
          ]
        }
      }
    ]
  },
  css: [
    "@/assets/scss/_reset.scss",
    "@/assets/scss/_predefine.scss",
    "@/assets/scss/_banner.scss",
    "@/assets/scss/_responsive.scss",
    "@/assets/font-awesome/all.min.css"
  ],
  components: true,
  modules: ["@nuxtjs/pwa", "@nuxtjs/style-resources", "vue-scrollto/nuxt"],
  styleResources: {
    scss: ["~/assets/scss/_variable.scss", "~/assets/scss/_mixins.scss"]
  },
  build: {},
  buildModules: ["@nuxtjs/pwa"],
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: "*",
        redirect: "/"
      });
    }
  },
  pwa: {
    icon: {
      fileName: "app-icon.png"
    },
    manifest: {
      name: "Nilanjan Deb",
      lang: "en-US",
      useWebmanifestExtension: false,
      short_name: "Nil Deb",
      description: "Hi, I am a Web Developer from BITS Pilani, India",
      dir: "auto",
      display: "standalone",
      orientation: "any",
      start_url: "/",
      background_color: "#FBFBFF",
      theme_color: "#FBFBFF"
    }
  },
  workbox: {
    runtimeCaching: [
      {
        urlPattern: "https://fonts.googleapis.com/.*",
        handler: "cacheFirst",
        method: "GET",
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      },
      {
        urlPattern: "https://fonts.gstatic.com/.*",
        handler: "cacheFirst",
        method: "GET",
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      },
      {
        urlPattern:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css",
        handler: "cacheFirst",
        method: "GET",
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      }
    ]
  }
};
