import firebase from 'firebase'
import firebaseui from 'firebaseui'

const config = {
  apiKey: 'AIzaSyCXNu-Mnej2q9W_bZQOofeG-LFsi-lDMq4',
  authDomain: 'coding-is-magic.firebaseapp.com',
  databaseURL: 'https://coding-is-magic.firebaseio.com',
  projectId: 'coding-is-magic',
  storageBucket: 'coding-is-magic.appspot.com',
  messagingSenderId: '906729331525'
}

const uiConfig = {
  signInSuccessUrl: '/',
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID]
}

firebase.initializeApp(config)

const ui = new firebaseui.auth.AuthUI(firebase.auth())

const startFirebaseUI = function(id) {
  ui.start(id, uiConfig)
}

export default startFirebaseUI
