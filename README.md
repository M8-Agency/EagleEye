# Eagle-Eye Front-End

**THIS Project only contains the FRONT-END portion**. We haven't started working on the back-end. Feel free to start on this and provide us a RESTful API.

## How it (should) work

### On the Client-side

#### Find person

1. User uploads a picture of the person they want to find and enters an email so that the app will contact them if the person is found.

#### Safe person picture upload

1. User upload pictures of found people. Batch or single upload.
1. We thank the users.

#### List of persons

1. List the persons we are looking for
1. List the persons we have matched

When a name is clicked, let's show the pictures. If the person is matched, let's show the pictures. If the user doens't want to give us a name, let's go with `Juanx Doe`.

### Server-side

1. Server searches for matched faces as photos are being uploaded.
1. If there's a face match within the proper image recognition threshold, we send the requesting user an email to the email they entered.

## Project Info

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Contributors

- Mohamed Dhia Soussi @modsoussi
- Antonio Rodriguez Martinez @antoniwan
- John Santiago
- Sergio Barrientos
- Rosalyn Otero
- Joaquin Lira
