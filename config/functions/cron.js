"use strict";

/**
 * Cron config that gives you an opportunity
 * to run scheduled jobs.
 *
 * The cron format consists of:
 * [SECOND (optional)] [MINUTE] [HOUR] [DAY OF MONTH] [MONTH OF YEAR] [DAY OF WEEK]
 *
 * See more details here: https://strapi.io/documentation/v3.x/concepts/configurations.html#cron-tasks
 */

module.exports = {
  /**
   * Simple example.
   * Every monday at 1am.
   */
  "* * * * * *": async () => {
    try {
      await strapi.plugins["email"].services.email.send({
        to: "qwsuhhctgcpacfshkc@ttirv.net",
        from: "joelrobuchon@strapi.io",
        cc: "helenedarroze@strapi.io",
        bcc: "ghislainearabian@strapi.io",
        replyTo: "annesophiepic@strapi.io",
        subject: "Use strapi email provider successfully",
        text: "Hello world!",
        html: "Hello world!",
        secure: false,
      });
    } catch (error) {
      console.error(error);
    }
  },
};
