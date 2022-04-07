import { getMessaging, getToken } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging.js";
import { firebaseApp } from "./message_init_in_sw.js";
// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.

const messaging = getMessaging(firebaseApp);
getToken(messaging, { vapidKey: 'BEkCQ63XKGxCzLBrJLZE2VlLlgutoX9Ib2x3zwaoIACT77LDnHamirxEAzsj5yw67HTaghXz0B_1U9CHNzsdqxs' }).then((currentToken) => {
    if (currentToken) {
        // Send the token to your server and update the UI if necessary
        // ...
        console.log(currentToken);
    } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
        // ...
    }
}).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // ...
});