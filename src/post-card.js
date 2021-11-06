
import { getDatabase, ref, push, set, onValue} from 'firebase/database';

export class postCard{

    constructor(user){
        //this para atributos
        this.user = user;

    }

    
    render() {

        let posts = document.createElement("div");
        posts.className = "post-card";
        //posts.innerHTML = this.user.post;

        //pre sent post
        let texto = document.createElement("h3");
        texto.className = "post-card-addPost";
        texto.innerHTML = this.user.post;

        

        //@ con user name que puso
        let userNa = document.createElement("p");
        userNa.className = "post-card-userName"
        userNa.innerHTML = "@" + this.user.user

        let commentSpce = document.createElement("div");
        commentSpce.className = "post-card-commentSpce";
        //posts.innerHTML = this.user.post;

        //espacio para comentar
        let comment = document.createElement("input");
        comment.className = "post-card-comment";
        comment.placeholder =  "Responde aqui"
       
        //boton de responder post
        let answerBtn = document.createElement("button");
        answerBtn.className = "post-card-answerBtn"
        answerBtn.innerHTML = "Responder"

        answerBtn.addEventListener('click', (e, event)=> {

        const database = getDatabase();

        const postN = ref(database, "Post/" + this.user.user + '/comments');

            push(postN, comment.value);
            addComment(this.posts.commentSpce);
        
        });

        posts.appendChild(texto);
        posts.appendChild(userNa);
        posts.appendChild(commentSpce);
        posts.appendChild(comment);
        posts.appendChild(answerBtn);

        return posts;

    }

    }