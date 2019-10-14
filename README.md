# TPI Reference App

AWS Amplify, AppSync, Cognito, Ionic 4


## 1. Initialize amlify in the project dir and choose AWS profile      
  ```amplify init```


## 2. Install Amplify library

Install the aws-amplify library. We'll be using its GraphQL client to handle GraphQL requests and responses:

```npm install -s aws-amplify```

Initialize Amplify by adding the following lines to src/main.ts:

```
import API from '@aws-amplify/api';  
import PubSub from '@aws-amplify/PubSub';  
import awsConfig from './aws-exports.js';

PubSub.configure(awsConfig);  
API.configure(awsConfig);  

```
The file src/aws-exports.js was generated when we created the GraphQL API in the previous part of this tutorial. It contains all the settings we need to connect to the GraphQL endpoint.

Amplify relies on the global and process objects to be defined, so to prevent errors, add the following code to src/polyfills.ts

```
(window as any).global = window;

(window as any).process = {
    env: { DEBUG: undefined },
  };

```

      
## 3. Create API service:

First, make sure you have the latest version of the Amplify CLI.

```
npm install -g @aws-amplify/cli
```

We'll use the Ionic CLI to create an Angular service for us.

```
$ ionic g service api
```