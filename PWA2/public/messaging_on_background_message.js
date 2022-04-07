import { getMessaging } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-sw.js";
import { onBackgroundMessage } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-sw.js";
import { firebaseApp } from "./message_init_in_sw.js";

const messaging = getMessaging(firebaseApp);
onBackgroundMessage(messaging, (payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});