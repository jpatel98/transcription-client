# Transcription App - Client

The app uses [Assembly AI's](https://www.assemblyai.com/) API to convert user inputted audio to text, making it easier for everyone from journalists to students to transcribe speech and make notes.

*NOTE: This app needs the [transcription-server](https://github.com/jpatel98/transcription-server) to run in parallel for full functionality*

## Frontend Stack

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)

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

### Environment Variables

To implement [Auth0](https://auth0.com/docs/quickstart/spa/react/01-login) in this project, you will need to add the following env variables.

`REACT_APP_AUTH0_DOMAIN`

`REACT_APP_AUTH0_CLIENT_ID`

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

