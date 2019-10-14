# TPI Reference App

AWS Amplify, AppSync, Cognito, Ionic 4


## 1. Initialize amlify in the project dir and choose AWS profile      
  ```amplify init```


## 2. Install Amplify library

Install the aws-amplify library. We'll be using its GraphQL client to handle GraphQL requests and responses:

```npm install -s aws-amplify```

Initialize Amplify by adding the following lines to src/main.ts:

```javascript
import API from '@aws-amplify/api';  
import PubSub from '@aws-amplify/PubSub';  
import awsConfig from './aws-exports.js';

PubSub.configure(awsConfig);  
API.configure(awsConfig);  

```
The file src/aws-exports.js was generated when we created the GraphQL API in the previous part of this tutorial. It contains all the settings we need to connect to the GraphQL endpoint.

Amplify relies on the global and process objects to be defined, so to prevent errors, add the following code to src/polyfills.ts

```javascript
(window as any).global = window;

(window as any).process = {
    env: { DEBUG: undefined },
  };

```

## 3. Create GraphQL Schema:


```
amplify api add
```
Annotation: No
Guided: Yes
This will open the schema editor.


## 4. Create API service:

First, make sure you have the latest version of the Amplify CLI.

```javascript
npm install -g @aws-amplify/cli
```

We'll use the Ionic CLI to create an Angular service for us.

```javascript
$ ionic g service api
```

Next, we'll need to configure the codegen to use angular instead of typescript. The CLI will ask you some questions, choose as shown below.

```javascript
amplify codegen configure

? Choose the code generation language target angular
? Enter the file name pattern of graphql queries, mutations and subscriptions src/graphql/**/*.graphql
? Enter the file name for the generated code src/app/api.service.ts
```

You might want to delete any previously generated code before you continue. Delete the directory src/graphql/ and the file src/API.ts.

And now we can use the Amplify codegen command to generate the code for our GraphQL queries and mutations.

```
amplify codegen
```

Have a look at the generated code in /src/app/api.service.ts, we'll use this service now to implement the create/update/delete functionality in our app.


```
amplify push
```