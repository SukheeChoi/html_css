import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getMessaging } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging.js";


// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
// const firebaseApp = initializeApp({
//     apiKey: "AIzaSyCPBxwAEX-88JJLXNlXzNs72RTKr6S03RY",
//     authDomain: "osstem-1d784.firebaseapp.com",
//     databaseURL: 'https://osstem-1d784.firebaseio.com',
//     projectId: "osstem-1d784",
//     storageBucket: "osstem-1d784.appspot.com",
//     messagingSenderId: "230699301529",
//     appId: "1:230699301529:web:dbc9a588b294b091d89608",
//     measurementId: "G-YZZ3CG7XP9"
// });

const firebaseConfig = initializeApp({
    apiKey: "AIzaSyC0y_clIzsn18PeP7WbAjLntqYU0b1BvoU",
    authDomain: "osstemproject01.firebaseapp.com",
    projectId: "osstemproject01",
    storageBucket: "osstemproject01.appspot.com",
    messagingSenderId: "1000123949354",
    appId: "1:1000123949354:web:cb93c012e6c97e64fffe53",
    measurementId: "G-QZ3JML7J2Y",
  });

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = getMessaging(firebaseApp);

export { firebaseApp };