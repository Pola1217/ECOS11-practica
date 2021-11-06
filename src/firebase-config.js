const firebaseConfig = {

    apiKey: "AIzaSyALiWCBwP-qhNCkAKUZDbbLpl6IcL24RwE",
    authDomain: "ecos11-practica.firebaseapp.com",
    projectId: "ecos11-practica",
    storageBucket: "ecos11-practica.appspot.com",
    messagingSenderId: "223347106429",
    appId: "1:223347106429:web:840bf1600175f1727b4714"

    };

  export function getFirebaseConfig() {

    if(!firebaseConfig || !firebaseConfig.apiKey) {
        
        throw new Error("Firebase config error");
    }

    else {
        return firebaseConfig;
    }
}
