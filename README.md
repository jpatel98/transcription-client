# Scribe11.xyz

[![Netlify Status](https://api.netlify.com/api/v1/badges/ed2189ea-4926-404b-bc81-0d155860732f/deploy-status?branch=develop)](https://app.netlify.com/sites/scribe11/deploys)

Scribe11.xyz uses a machine learning API to convert user inputted audio to text, making it easier for 1) journalists to transcribe interview quotes, press conferences etc 2) students to transcribe long tutorials, lectures etc and have them for notes 3) office teams to make meeting notes for members who may have missed the meeting.
## FrontEnd Stack

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)
## Environment Variables

To implement Auth0 in this project, you will need to add the following environment variables to your .env file

`REACT_APP_AUTH0_DOMAIN`

`REACT_APP_AUTH0_CLIENT_ID`
## Run Locally

Clone the project

```bash
  git clone git@github.com:jpatel98/transcription-client.git
```

Go to the project directory

```bash
  cd transcription-client
```

Install dependencies

```bash
  npm install
```

Start the app

```bash
  npm run start
```

Make a prod build

```bash
  npm run build
```
## Lessons Learned

Lessons learned while building this project.
- Divide the problem in smaller chunks.
- Learn to get better at time management.
- Read documentation before diving in.
- Simple is better.


## Roadmap

- Connect to a database and allow users to save their transcripts.

- Enable video transcription and implement a video player on screen.

- Create a transcript editor using Draft.js.

- Add realtime transcription feature.



## Deployment
You can check the live app at - https://scribe11.xyz/ 

**NOTE**: A bug is preventing users from uploading files longer than 30 seconds. Please refrain from uploading files longer than 30 seconds until the issue resolves. 
You may use files from [this repository.](https://github.com/jpatel98/scribe11-test-audio)
