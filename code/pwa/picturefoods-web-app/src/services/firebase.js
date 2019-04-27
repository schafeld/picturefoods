import * as firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/storage'

var config = {
  apiKey: 'AIzaSyCIIwbzcI3fB7Dr30YtGJGHDXbvNsVUdeI',
  authDomain: 'picturefoods-firebase.firebaseapp.com',
  databaseURL: 'https://picturefoods-firebase.firebaseio.com',
  projectId: 'picturefoods-firebase',
  storageBucket: 'picturefoods-firebase.appspot.com',
  messagingSenderId: '812714589561'
}
firebase.initializeApp(config)

const storage = firebase.storage()
const database = firebase.database()

export {
  database,
  storage
}
