![Cat jamming](https://emoji.slack-edge.com/T0266FRGM/catjam/e6bc1ad5b6bcf4fc.gif) **Slack pfp!**

This repo automates my profile picture in the Hack Club Slack! Head to [pfp.ella.cx](https://pfp.ella.cx) to change my profile picture to a random cat picture. It resets to <img src="https://emoji.slack-edge.com/T0266FRGM/ellathonk/cf1cbe408cfc3596.png" width="20" height="20" /> once in a while though.

### Develop

Set environment variables:

```
SLACK_TOKEN=
```
Then install dependencies and run it locally at localhost:3000.

```
yarn
yarn dev
# go to localhost:3000
```
### Routes

`/api/change-pfp` - changes my Hack Club Slack pfp to a random cat on each request

`/api/set-pfp` - set my Hack Club Slack pfp to the default

`/api/random-cat` - changes my pfp to a picture of a random cat every few minutes (runs on a cron job)
