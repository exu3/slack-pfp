const { WebClient } = require('@slack/web-api');
const axios = require('axios').default;

const images = {
  "morning": "https://images.unsplash.com/photo-1490650034439-fd184c3c86a5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxNDk0OTAwfHxlbnwwfHx8&w=1000&q=80",
  "afternoon": "https://images.unsplash.com/photo-1561389881-dac6bb97f175?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8bG92ZWx5JTIwY2F0fGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80",
  "night": "https://images.unsplash.com/photo-1570534536531-c3def02ad855?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGNhdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
  "moreafternoon": "https://images.unsplash.com/photo-1557743952-b088259408a2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  "evening": "https://images.unsplash.com/photo-1539562151676-2cce8ca47d04?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
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

setPFP()