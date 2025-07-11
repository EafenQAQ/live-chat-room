import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyC0_zRrUVrzoHliedl9CQV0QrF_uErTOto',
  authDomain: 'vue-blog-4ba13.firebaseapp.com',
  projectId: 'vue-blog-4ba13',
  storageBucket: 'vue-blog-4ba13.firebasestorage.app',
  messagingSenderId: '719944443581',
  appId: '1:719944443581:web:04eb6504c8cb69687779d4',
}

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const timeStamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timeStamp }
