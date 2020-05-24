import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fir-75d5c.firebaseio.com"
});

const db = admin.firestore();


// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
 response.json("Hello from Firebase!");
});


