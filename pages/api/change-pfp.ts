import type { NextApiRequest, NextApiResponse } from "next";
import { WebClient } from "@slack/web-api";
const axios = require("axios").default;

// const images = [
//   "https://images.unsplash.com/photo-1490650034439-fd184c3c86a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
//   "https://images.unsplash.com/photo-1593626986521-f24d25d60103?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=960&q=80",
//   "https://images.unsplash.com/photo-1565560681175-99ae21e26ce1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
//   "https://images.unsplash.com/photo-1567016724100-bf1301e1cc4b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1102&q=80",
//   "https://images.unsplash.com/photo-1607014326008-cbf35c358666?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
//   "https://images.unsplash.com/photo-1587896046517-d8154a1e633c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
//   "https://cloud-mj24bdo7e-hack-club-bot.vercel.app/0screen_shot_2021-06-10_at_11.29.21_am.png",
// ];

const images = [
  "https://pfp.ella.cx/santa/camel.png",
  "https://pfp.ella.cx/santa/cat.png",
  "https://pfp.ella.cx/santa/corgi.png",
  "https://pfp.ella.cx/santa/gift.png",
  "https://pfp.ella.cx/santa/ninja.png",
  "https://pfp.ella.cx/santa/wahoo.png",
];

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const client = new WebClient();
  const randomPic = Math.floor(Math.random() * images.length);
  let image: any = images[randomPic];

  image = await axios.get(image, {
    responseType: "arraybuffer",
  });

  const slackRequest = await client.users.setPhoto({
    image: image.data,
    token: process.env.SLACK_TOKEN,
  });
  res.json("you changed my profile picture!");
};
