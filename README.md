# Setup Dialogflow
## Create a Dialogflow project
If you have not already, create a new Dialogflow CX project:  
https://dialogflow.cloud.google.com/cx/projects

This will prompt you to create a new Google Cloud project first, if you don't already have one. Follow the prompts for this.

Once completed, return to the Dialogflow Console and select the new project. Choose `Enable API` for Dialogflow if you have not already.

## Create Agent
* Choose "Create Agent"
* Set the Display Name to "Companion Bot" (or something else you like :-))
* Click "Create"

## Import the agent
* Click the "Agent Settings" on the top-right of the Dialogflow CX console
* 

Import this project to your new project:

# Setup Local Development
## Clone this repository
```
git clone https://github.com/conversational-ai-in-practice/playbook
```

## Install the gcloud CLI for authentication
```
https://cloud.google.com/sdk/docs/install
```

Follow the instructions on that page, including running `gcloud init` to setup authentication credentials to access your Dialogflow project.

## Enable Programmatic Access to Dialogflow
Run `gcloud auth application-default login` on the command-line.

## Set environment variables
Make a copy of the `example.env` file and save it as `.env`.

Set the environment variables to correspond to your Dialogflow agent, as described here:  
https://cloud.google.com/dialogflow/cx/docs/quick/api#ids

## Install ngrok
We use ngrok to test the code on our local machine with our Dialogflow agent.

To download ngrok, go here:
https://ngrok.com/download

Follow the setup instructions. For the last step, which says:
```
ngrok http 80
```

Instead enter:
```
ngrok http 8080
```

You should see a Forward entry that starts with https (such as `https://c837-71-214-89-22.ngrok.io`). Copy this value and add it as the Webhook under your Dialogflow agent.

To add this, do the following in the Dialogflow console:
* Click on `Manager`
* Click on `Webhooks`
* Click on `+ Create`
* For the `Display name` field, enter `ngrok`
* For the `Webhook URL` field, enter the URL copied from the ngrok output on your CLI
* Add `/handle` to the end of the URL - it should look like this: `https://c837-71-214-89-22.ngrok.io/handle`
* Click `Save`
