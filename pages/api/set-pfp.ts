import type { NextApiRequest, NextApiResponse } from "next";
import { WebClient } from "@slack/web-api";
const axios = require("axios").default;

const images = {
  normal:
    "https://cloud-hvd4ca9hs-hack-club-bot.vercel.app/0image_from_ios.png",
  uwucat:
    "https://cdn.discordapp.com/attachments/829562865215471627/852085432245682256/pfp_uwucat.png",
  ninjadino:
    "https://cdn.discordapp.com/attachments/829562865215471627/852091148292849744/ninjadinopfp.png",
};

async function setPFP() {
  const hour = new Date().getHours() - 8;
  let image: any;
  if (5 < hour && hour < 12) {
    image = await axios.get(images.uwucat, {
      responseType: "arraybuffer",
    });
  } else if (12 < hour && hour < 15) {
    image = await axios.get(images.normal, {
      responseType: "arraybuffer",
    });
  } else if (15 < hour && hour < 17) {
    image = await axios.get(images.ninjadino, {
      responseType: "arraybuffer",
    });
  } else if (17 < hour && hour < 20) {
    image = await axios.get(images.uwucat, {
      responseType: "arraybuffer",
    });
  } else {
    image = await axios.get(images.ninjadino, {
      responseType: "arraybuffer",
    });
  }
  const client = new WebClient();
  const slackRequest = await client.users.setPhoto({
    image: image.data,
    token: process.env.SLACK_TOKEN,
  });
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await setPFP();
  res.send("Changing your profile pic 👀");
};
