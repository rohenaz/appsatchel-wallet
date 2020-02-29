# Satchel Wallet App

This repo contains the underlying wallet app that can be downloaded as a chrome extension on [appsatchel.com](https://appsatchel.com/).

## Development

Install the dependencies with `yarn`.

Run the app locally with `yarn start`.

## Deployment

Deploy the app with `yarn deploy`.

### Notes

A prerequisite for deployment is the [Firebase cli](https://www.npmjs.com/package/firebase-tools), which can be installed with `npm install -g firebase-tools`.

You need to login using `firebase login` and ensure that your account has permissions to deploy this project.
