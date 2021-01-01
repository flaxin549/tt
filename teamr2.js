const express = require("express");
const { Client, RichEmbed } = require("discord.js");
const app = express();
const chalk = require("chalk");
const fs = require("fs");
const ytdl = require("ytdl-core");
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}
const http = require("http");
app.get("", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http:${process.env.PROJECT_DOMAIN}.glitch.me`);
}, 999999999);
const log = message => {
  console.log(`${message}`);
};

const Discord = require("discord.js");
const client = new Discord.Client();
const data = new Map();

const teamr21 = new Discord.Client();
const teamr22 = new Discord.Client();
const teamr23 = new Discord.Client();
const teamr24 = new Discord.Client();
const teamr25 = new Discord.Client();
const teamr26 = new Discord.Client();
const teamr27 = new Discord.Client();
const teamr28 = new Discord.Client();
const teamr29 = new Discord.Client();
const teamr30 = new Discord.Client();
const teamr31 = new Discord.Client();
const teamr32 = new Discord.Client();
const teamr33 = new Discord.Client();
const teamr34 = new Discord.Client();
const teamr35 = new Discord.Client();
teamr21.on("ready", () => {
teamr21.user.setActivity("🥰 I Need Nitro")
});

teamr21.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 1 };
    var kanal = msg.member.voiceChannel;
    kanal.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      })
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

teamr22.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 1500 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

teamr23.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 1500 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

teamr24.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 1500 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

teamr25.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 1500 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

teamr26.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 1500 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

teamr27.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 1500 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

teamr28.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 1500 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

teamr29.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 1500 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

teamr30.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 1500 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

teamr31.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 1500 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

teamr32.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 1500 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

teamr33.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ses") {
    const streamOptions = { seek: 5, volume: 1500 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

teamr34.on("message", async msg => {
  if (msg.content.toLowerCase() === "ado") {
    const streamOptions = { seek: 5, volume: 1500 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

teamr35.on("message", async msg => {
  if (msg.content.toLowerCase() === "ado") {
    const streamOptions = { seek: 5, volume: 1500 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

teamr21.login("NzU0NzgwMzk4MTI2MzY2NzMw.X-d9XQ.WWO237OYzOpeGQ0Ens7vBtP0h7w");
teamr22.login("NzU1NzQ4NTcyMDE1NjI0MTkz.X7_q4g.WgQ9cdcotrNZGsYxslf6XBrE9Bw");
teamr23.login("NzkyNDYwNTAwOTg5NjQwNzI1.X-4mnw.fUSH2vpJFKNPGF9ihXb9qEqRT_Q");
teamr24.login("NzkyNDgxODEzMjg0OTEzMTUy.X-eWbw.HkTrQ8niex1JRl-VPVzvxGbmUmg");
teamr25.login("NzkyNDg5MTc2MTgzMzQxMDU2.X-edPg.zkuJDGml9Z3vJkpgaVHJIMOO-fI");
teamr26.login("NzkyNDcxMzE3NDEyMTg0MDY0.X-eM0w.qqbRIcqMtUoZye5xmPnoiJfhCAM");
teamr27.login("NzkyNDgyNDEwMTU4ODgyODY3.X-eW8w.7JOszXMqgwTZQ90DeM6mRnRti0Y");
teamr28.login("NzIwNTkyMjA5MDMxOTg3MjAw.XuONuA.8SQRGXrqNwP5UNBataLjPuArzv4");
teamr29.login("NzkyNDgxMzYzOTE1NTcxMjMw.X-eV-g.Amer-WiTHKtGER6KOZi2xBC1hY8");
teamr30.login("NzkyNDc5NjA0MDM2MDc1NTcw.X-eVBw.fn3yVOiUqBq2UCv8-eE2kAa5kUQ");
teamr31.login("NzkyNDgzMjU5ODc0OTM0ODM0.X-eXuw.5lHJs_lV_iwhR93bMdpviR-5gLI");
teamr32.login("NzIwNTg5MDc4NzcyNDQ5MzAw.XuOOIQ.eURO9y7Q9meRh7SWgNPNN2Wor5U");
teamr33.login("NzkyNDgyODIwOTc5MTYzMTU3.X-eXVg.sFYraGdZKCGlDuDiZWyzwHg6edI");
teamr34.login("NzYyNjM0MDk2MDY4OTE5MzQ2.X7t8yA.95HQ5bKn_FZi6qKTsoEMO75XyXQ");
teamr35.login("NzYyNjM2NTA2ODg3NDg3NTc4.X7t-GQ.bQoTzGKg1L7jaFRoi37yCFDcETs");