/* eslint-disable no-console */
console.log('zeit-deploy.js - start (storybook deployment)');

const shell = require('child_process').execSync;

console.log('collecting params');

const token = process.env.ZEIT_TOKEN;

const pr =
  (process.env.VCS_BRANCH_NAME &&
    process.env.VCS_BRANCH_NAME.replace(/\D+/g, '')) ||
  false;
const domain = pr ? `wix-style-react-pr-${pr}` : 'wix-style-react';
console.log(`params: token=${token} pr=${pr} domain=${domain}`);

const deploymentCmd = `npx now alias --token=${token} $(npx now ./storybook-static --confirm --no-clipboard --token=${token} --public) ${domain}`;
console.log(`running now deployment: ${deploymentCmd}`);
const codeResult = shell(deploymentCmd).toString();
console.log('Done with result:', codeResult);

console.log('zeit-deploy.js - finished (storybook deployment)');
