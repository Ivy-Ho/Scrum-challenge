module.exports = {
  publicPath: "/Scrum-challenge/",
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/scss/main.scss";
        `,
      },
    },
  },
};
