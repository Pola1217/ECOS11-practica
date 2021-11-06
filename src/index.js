
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set, onValue} from 'firebase/database';

import { getFirebaseConfig } from './firebase-config';
import {postCard} from './post-card';


//inicializa firebase
const firebaseAppConfig = getFirebaseConfig(); 
const firebaseApp = initializeApp(firebaseAppConfig);

//realiza la publicacion
//igual que sem 10
function addPost (addP) {

    const database = getDatabase();

    const postN = ref(database, 'Post/' + addP.user);

    addP ["id"] = postN.key

    set(postN, addP);

}

//busca los user
function getPost () {

    const database = getDatabase();

    const postN = ref(database, 'Post');

     //firebase data
     onValue(postN, (snapshot)=> {

        const data = snapshot.val();

        //data pasa aca
        actCandid(data);

    });
}

function actCandid(data) {

    if (data) {
        
        actPost.innerHTML = " ";
        //let Lpost = "";
        Object.keys(data).forEach((key, index)=> {
            
            const user = new postCard(data[key])

            actPost.appendChild(user.render());
           // Lpost += data[key].post + "</br>";
        });

    }else{

        actPost.innerHTML = "No hay post aun";

    }
}

//DECLARACIONES
const user = document.getElementById('username');
const post = document.getElementById('post');
const postBtn = document.getElementById('postBtn');
const actPost = document.getElementById('actPost');

//EVENTOS
const publiPost = (e, event) => {

    const posts = {

    user: user.value,
    post: post.value

    }

    addPost(posts);

}

postBtn.addEventListener('click', publiPost);
getPost();