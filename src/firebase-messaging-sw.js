importScripts("https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.24.0/firebase-messaging.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyCn4QDrl1bni0SsXqO0hYp2s8Yp0PSbn6c",
  authDomain: "unanimal-629ae.firebaseapp.com",
  databaseURL: "https://unanimal-629ae.firebaseio.com",
  projectId: "unanimal-629ae",
  storageBucket: "unanimal-629ae.appspot.com",
  messagingSenderId: "368307067397",
  appId: "1:368307067397:web:a60eef646257ad53149a6c",
  measurementId: "G-M480QTV18K",
});

const messaging = firebase.messaging();
