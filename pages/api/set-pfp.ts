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
  turtle:
    "https://cloud-n2u30somo-hack-club-bot.vercel.app/0project_-_drawing_18630208909876220125_2.png",
  minnow:
    "https://cloud-n2u30somo-hack-club-bot.vercel.app/1project_-_drawing_11380846989486699402_3.png",
};

async function setPFP() {
  const hour = new Date().getHours() - 8;
  let image: any;
  if (2 < hour && hour < 5) {
    image = await axios.get(images.uwucat, {
      responseType: "arraybuffer",
    });
  } else if (6 < hour && hour < 9) {
    image = await axios.get(images.minnow, {
      responseType: "arraybuffer",
    });
  } else if (10 < hour && hour < 13) {
    image = await axios.get(images.ninjadino, {
      responseType: "arraybuffer",
    });
  } else if (14 < hour && hour < 17) {
    image = await axios.get(images.turtle, {
      responseType: "arraybuffer",
    });
  } else {
    image = await axios.get(images.normal, {
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
