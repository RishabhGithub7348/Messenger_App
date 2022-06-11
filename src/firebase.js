import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDxnqPsWy5JQDCbQcKaB3GsIb4ThShtyaY",
    authDomain: "facebook-messenger-clone-c5bb6.firebaseapp.com",
    projectId: "facebook-messenger-clone-c5bb6",
    storageBucket: "facebook-messenger-clone-c5bb6.appspot.com",
    messagingSenderId: "677584973889",
    appId: "1:677584973889:web:f8529cfa28aeaa3830d6c0"
  };


  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // async function getMessages(db) {
  //   const MessageCol = collection(db, 'Messages');
  //   const citySnapshot = await getDocs(MessageCol);
  //   const messageList = citySnapshot.docs.map(doc => doc.data());
  //   return messageList;
  // }cff
   
 export default db;