const core = require('@actions/core');
const github = require('@actions/github');
const rp = require('request-promise');
const axios = require('axios');



try {
  // `who-to-greet` input defined in action metadata file
  const webhookUrl = core.getInput('webhook_url');
  const { GITHUB_TOKEN, GITHUB_REPOSITORY, GITHUB_API_URL } = process.env;
  console.log(webhookUrl, GITHUB_TOKEN, GITHUB_REPOSITORY, GITHUB_API_URL)
//   console.log(`Hello ${nameToGreet}!`);
//   const time = (new Date()).toTimeString();
//   core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
//   const payload = JSON.stringify(github.context.payload, undefined, 2)
  const options = {
    method: 'POST',
    uri: webhookUrl,
    body: {
        text:"Hello, World!"
    },
    json: true // Automatically stringifies the body to JSON
    };
    slackmessage(options)
    
//   console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}

async function slackmessage(options) {
    try {
        await axios(options);

    }catch(err) {
        console.log("err----",err)
    }
   
    // const options = {
    //     method: 'POST',
    //     uri: 'https://hooks.slack.com/services/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',
    //     body: {
    //         text:"Hello, World!"
    //     },
    //     json: true // Automatically stringifies the body to JSON
    //     };
    //     const res = await rp(options)
    //     console.log(res.statusCode)
        // return res;
}