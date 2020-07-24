"use strict";

module.exports = {
  "* * * * * *": async () => {
    try {
      await strapi.plugins["email"].services.email.send({
        to: "aeyijqxusvloeorazf@awdrt.com",
        from: "joelrobuchon@strapi.io",
        cc: "helenedarroze@strapi.io",
        bcc: "ghislainearabian@strapi.io",
        replyTo: "annesophiepic@strapi.io",
        subject: "Use strapi email provider successfully",
        text: "Hello world!",
        html: "Hello world!",
      });
    } catch (error) {
      console.error(error);
    }
  },
};
