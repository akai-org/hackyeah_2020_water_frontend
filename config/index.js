module.exports = {
  lang: "pl",
  siteUrl: "https://swq.netlify.app",
  website: "swq.netlify.app",
  title: "water",
  description: "water",
  keywords: ["water"],
  image_src: "/img/img_src.png",
  manifest: {
    name: "manifest.json",
    options: {
      title: "Water App",
      short_name: `Krychaxp`,
      name: "Krychaxp",
      description: "water",
      start_url: `/?web_app`,
      background_color: `#0059b2`,
      theme_color: `#0059b2`,
      display: `standalone`,
      manifest_version: 2,
      icons: [
        {
          src: "/favicon.ico",
          sizes: "48x48",
          type: "image/x-icon",
        },
      ],
    },
  },
  author: {
    activeEmail: "krychaxp.pl@gmail.com",
    contacts: {
      email: "",
      email2: "",
      webEmail: "",
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
      github: "https://github.com/",
      linkedin: "https://www.linkedin.com/in/",
      instagram: "https://www.instagram.com/",
    },
  },
  preconnect: [
    "https//www.googletagmanager.com",
    "https//www.google-analytics.com",
    process.env.NEXT_PUBLIC_API_URL,
  ],
  //doesnt remove \/
  fonts: [
    "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap",
    "https://fonts.googleapis.com/css?family=Montserrat&subset=latin-ext&display=swap",
    "https://fonts.googleapis.com/icon?family=Material+Icons",
  ],
  // scripts: [
  //   `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_TRACKING_ID}`,
  // ],
};
