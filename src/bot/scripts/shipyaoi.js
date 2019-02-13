"use strict";

const Command = require("../script");

const males = [
  "Garry",
  "Cartman",
  "Kyle",
  "Stan",
  "Kenny",
  "Butters",
  "Clyde",
  "Craig",
  "Tweek",
  "Token",
  "Jimmy",
  "Timmy",
  "Nathan",
  "Mimsy",
  "Dogpoo",
  "Towelie",
  "Bradley",
  "Bill",
  "Fosse",
  "Brimmy",
  "Damien",
  "Pip",
  "Gregory",
  "Christophe",
  "Kevin",
  "Scott Malkinson",
  "GS-401"
];

let shipyaoi = new Command({

  name: "South Park Ship Yaoi",
  description: "Insert kinky af description here",
  help: "**[prefix]shipyaoi** to ship two random South Park boys together!",
  thumbnail: "https://cdn.discordapp.com/attachments/209040403918356481/509092365575913482/t22.png",
  marketplace_enabled: true,

  type: "js",
  match_type: "command",
  match: "shipyaoi",

  featured: false,

  preload: true,

  cb: function(client, message) {
    const randommale1 = Math.floor(Math.random() * males.length);
    const randommale2 = Math.floor(Math.random() * males.length);
    message.channel.send("**:heart: Here's your yaoi ship:** " + males[randommale1] + " **x** " + males[randommale2] + " :heart:");
    if (males[randommale1] == males[randommale2]) {
      message.channel.send("**S E L F C E S T**");
    }
  }
});

module.exports = shipyaoi;
