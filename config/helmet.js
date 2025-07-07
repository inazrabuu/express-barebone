module.exports = {
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'none'"],
        connectSrc: ["'self'"],
        fontSrc: ["'none'"],
        imgSrc: ["'none'"],
        scriptSrc: ["'none'"],
      },
    },
  }