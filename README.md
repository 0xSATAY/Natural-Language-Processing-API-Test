# Project Introduction

This project uses Aylien API to analyse the sentiment of a news article through Natural Language Processing.

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
process and analyze large amounts of natural language data.

## Getting started

Clone this repo

`cd` into your new folder and run:
- `npm install`

## Setting up the API

The Aylien API is perhaps different than what you've used before. It has you install a node module to run certain commands through, it will simplify the requests we need to make from our node/express backend.

### Step 1: Signup for an API key
First, you will need to go [here](https://developer.aylien.com/signup). Signing up will get you an API key. The API is free to use up to 1000 requests per day or 333 intensive requests. It is free to check how many requests you have remaining for the day.

### Step 2: Install the SDK
Install the Aylien SDK from [here](https://docs.aylien.com/textapi/sdks/#sdks). You get 1000 free requests per day. 

### Step 3: Require the SDK package
Install the SDK into your project.

### Step 4: Environment Variables
Next we need to declare our API keys:
- Create a new ```.env``` file in the root of the folder
- Fill the .env file with your API keys like this:
```
API_ID=**************************
API_KEY=**************************
```

And you're good to go!
