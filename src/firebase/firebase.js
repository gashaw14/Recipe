import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA83WPo0jScPlgkNZhX1DDqlZg6etmoi4s",
    authDomain: "recipe-app-c59ef.firebaseapp.com",
    databaseURL: "https://recipe-app-c59ef.firebaseio.com",
    projectId: "recipe-app-c59ef",
    storageBucket: "recipe-app-c59ef.appspot.com",
    messagingSenderId: "429441223883",
    appId: "1:429441223883:web:61677f2b29deca7f1c1f4e",
    measurementId: "G-810QX24JWS"
  };

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

database.ref().set({
    name:'gashaw',
    age: 30
}).then(()=>{
console.log('Data saved');
}).catch((e)=>{
    console.log('this failed',e);
})

database.ref('location').set({
    city:'cedarrapids',
    state:'iowa'
}).then(()=>{
 console.log('It updated!');
}).catch((e)=>{
 console.log('error:',e);
})