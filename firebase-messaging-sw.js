importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBzs5DgBE83wvYP37xBSYp3Um9j3kahqfo",
  authDomain: "sky-global-video-call.firebaseapp.com",
  projectId: "sky-global-video-call",
  storageBucket: "sky-global-video-call.firebasestorage.app",
  messagingSenderId: "828409758674",
  appId: "1:828409758674:web:5f0de6f772e3ff6ab8fe0b",
  measurementId: "G-CZ7K73WH35"
});

const messaging = firebase.messaging();

// Background message handler
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
