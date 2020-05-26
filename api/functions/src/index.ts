import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as cors from 'cors';

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

const app = express();
app.use( cors({ origin: true }) );

app.post('/youtube', async(request, response) => {
    const videoId          = request.body.videoId;
    const like             = request.body.like;
    const dislike          = request.body.dislike;

    const youtubeRef       = db.collection('youtube').doc(videoId);
    const docSnap          =  await youtubeRef.get();

    delete request.body.videoId;

    if (docSnap.exists) {
        const objYoutube = docSnap.data() || { like: 0, dislike: 0 }

        if( like > 0 ) {

            await youtubeRef.update({
                like:    objYoutube.like + 1 
            }).then(function() {
                response.status(200).json({
                    estado: true,
                    mensaje: `Se voto por el video ${ request.body.title }`
                });
            })
            .catch(function(error) {
                response.status(404).json({
                    estado: false,
                    mensaje: ` se genero un error al momento de votar por ${ request.body.title }`
                });
            });
        }
        if( dislike > 0 ) {
            await youtubeRef.update({
                dislike: objYoutube.dislike + 1 
            }).then(function() {
                response.status(200).json({
                    estado: true,
                    mensaje: `Se voto por el video ${ request.body.title }`
                });
            })
            .catch(function(error) {
                response.status(404).json({
                    estado: false,
                    mensaje: ` se genero un error al momento de votar por ${ request.body.title }`
                });
            });
        }
    } else{
        db.collection("youtube").doc(videoId).set(request.body).then(function() {
            response.status(200).json({
                estado: true,
                mensaje: `Se voto por el video ${ request.body.title }`
            });
        })
        .catch(function(error) {
            response.status(404).json({
                estado: false,
                mensaje: ` se genero un error al momento de votar por ${ request.body.title }`
            });
        });;
    }
});

exports.api = functions.https.onRequest(app);


