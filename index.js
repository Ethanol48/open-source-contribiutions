const core = require("@actions/core");
const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");
const { Toolkit } = require("actions-toolkit");

const GH_USERNAME = "Ethanol48";

const time = (new Date()).toTimeString();
core.setOutput("time", time);

Toolkit.run(
  async (tools) => {
    tools.log.debug(`Getting activity for ${GH_USERNAME}`);
    const events = await tools.github.activity.listPublicEventsForUser({
      username: GH_USERNAME,
      per_page: 100,
    });


    

    tools.log.debug(
      `Activity for ${GH_USERNAME}, ${events.data.length} events found.`
    );
    
    JSON.stringify()

    tools.log.debug(`event 0: ${JSON.stringify(events.data[0])}`);
    tools.log.debug(`event 100: ${JSON.stringify(events.data[99])}`);
  },
  {
    event: ["workflow_dispatch"],
    secrets: ["GITHUB_TOKEN"],
  }
);

// try {
//   // `who-to-greet` input defined in action metadata file
//   const nameToGreet = core.getInput('who-to-greet');
//   console.log(`Hello ${nameToGreet}!`);
//   const time = (new Date()).toTimeString();
//   core.setOutput("time", time);

//   console.log("This is the index file")

//   // Get the JSON webhook payload for the event that triggered the workflow
//   const payload = JSON.stringify(github.context.payload, undefined, 2)
//   console.log(`The event payload: ${payload}`);
// } catch (error) {
//   core.setFailed(error.message);
// }
