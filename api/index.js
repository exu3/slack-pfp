const { WebClient } = require('@slack/web-api');
const axios = require('axios').default;

const images = {
  "morning": "https://cloud-hvd4ca9hs-hack-club-bot.vercel.app/0image_from_ios.png",
  "afternoon": "https://cloud-hvd4ca9hs-hack-club-bot.vercel.app/0image_from_ios.png",
  "night": "https://cloud-hvd4ca9hs-hack-club-bot.vercel.app/0image_from_ios.png",
  "moreafternoon": "https://cloud-hvd4ca9hs-hack-club-bot.vercel.app/0image_from_ios.png",
  "evening": "https://cloud-hvd4ca9hs-hack-club-bot.vercel.app/0image_from_ios.png"
}

async function setPFP() {
  var hour = new Date().getHours() - 8
  let image
  if (5 < hour && hour < 12) {
    image = await axios.get(images.morning, {
      responseType: "arraybuffer",
    });
  }
  else if (12 < hour && hour < 15) {
    image = await axios.get(images.afternoon, {
      responseType: "arraybuffer",
    });
  }
  else if (15 < hour && hour < 17) {
    image = await axios.get(images.moreafternoon, {
      responseType: "arraybuffer",
    });
  }
  else if (17 < hour && hour < 20) {
    image = await axios.get(images.evening, {
      responseType: "arraybuffer",
    });
  }
  else {
    image = await axios.get(images.night, {
      responseType: "arraybuffer",
    });
  }
  const client = new WebClient();
  const slackRequest = await client.users.setPhoto({
    image: image.data,
    token: process.env.SLACK_TOKEN
  });
}

export default async (req, res) => {
  await setPFP()
  res.send("Started changing your PFP!")
}
