import firebase from 'firebase'
// TODO: Rather import sensitive data from gitignored file?

var config = {
  apiKey: 'AIzaSyCIIwbzcI3fB7Dr30YtGJGHDXbvNsVUdeI',
  authDomain: 'picturefoods-firebase.firebaseapp.com',
  databaseURL: 'https://picturefoods-firebase.firebaseio.com',
  projectId: 'picturefoods-firebase',
  storageBucket: 'picturefoods-firebase.appspot.com',
  messagingSenderId: '812714589561'
}
firebase.initializeApp(config)

export default {
  database: firebase.database()
}
