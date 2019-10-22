import app from 'firebase/app'
import 'firebase/firestore'
import auth from 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig={
  apiKey: "AIzaSyCOwI8PpJZfbAOOPDfHAZyxsmeGNhwge-o",
  authDomain: "anywherefitness-4e2d0.firebaseapp.com",
  databaseURL: "https://anywherefitness-4e2d0.firebaseio.com",
  projectId: "anywherefitness-4e2d0",
  storageBucket: "anywherefitness-4e2d0.appspot.com",
  messagingSenderId: "149061271166",
  appId: "1:149061271166:web:b95f412fcaa37d9706e22f",
  measurementId: "G-4DTME7MFNT"
};

class Firebase {
  constructor() {
    app.initializeApp( firebaseConfig );
    this.auth=app.auth()
    this.db=app.firestore()
  }
  login( email,password) {
    return this.auth.signInWithEmailAndPassword( email, password )
  }
  logout() {
    return this.auth.signOut()
  }
  async register(email, password ) {
    await this.auth.createUserWithEmailAndPassword( email, password )
    return this.auth.currentUser.updateProfile( {displayName: email} )
  }

}
// Initialize Firebase


export default  Firebase