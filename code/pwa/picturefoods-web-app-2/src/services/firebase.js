import * as firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/storage'

/*
The API key is de facto public, so make sure to implement security rules in Firebase!
For added security you should restrict authorization to your app domain(s). Do not leave localhost authorized!
Further information:
https://javebratt.com/hide-firebase-api/
https://stackoverflow.com/questions/37482366/is-it-safe-to-expose-firebase-apikey-to-the-public
https://cloud.google.com/docs/authentication/api-keys?hl=de#api_key_restrictions
*/
const config = {
  // Picturefoods2 (EU West)
  apiKey: 'AIzaSyCBal8HLOQJewOfVPrXMwta7ChmRtFB2xE',
  authDomain: 'picturefoods2.firebaseapp.com',
  databaseURL: 'https://picturefoods2.firebaseio.com',
  projectId: 'picturefoods2',
  storageBucket: 'picturefoods2.appspot.com',
  messagingSenderId: '154351165736'
  /*
  // Picturefoods 1 (US)
  apiKey: 'AIzaSyCIIwbzcI3fB7Dr30YtGJGHDXbvNsVUdeI',
  authDomain: 'picturefoods-firebase.firebaseapp.com',
  databaseURL: 'https://picturefoods-firebase.firebaseio.com',
  projectId: 'picturefoods-firebase',
  storageBucket: 'picturefoods-firebase.appspot.com',
  messagingSenderId: '812714589561'
  */
}
firebase.initializeApp(config)

const storage = firebase.storage()
const database = firebase.database()

export {
  database,
  storage,
  config
}
