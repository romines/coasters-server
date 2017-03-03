'use strict';

var admin = require("firebase-admin");

var serviceAccount = require("../srb-coasters-firebase-adminsdk-0s0i5-b7cac8c4d0.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://srb-coasters.firebaseio.com"
});

let coastersRef = admin.database().ref('data/coasters')
let listRef = coastersRef.orderByChild('date')


listRef.on('child_added', (snap) => {
  console.log(snap.val())
})
