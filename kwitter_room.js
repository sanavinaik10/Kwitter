
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDuqev6DU116zgOpqNzrY_tFPeSz89slGw",
      authDomain: "kwitter-75b35.firebaseapp.com",
      databaseURL: "https://kwitter-75b35.firebaseio.com",
      projectId: "kwitter-75b35",
      storageBucket: "kwitter-75b35.appspot.com",
      messagingSenderId: "970619121644",
      appId: "1:970619121644:web:3fe4e931a62757827a1ac9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome"+username+"!";
function addroom(){
      roomname = document.getElementById("room_name").value;
      firebase.database().ref("/").child(roomname).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name",roomname);
      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name ="+Room_names)
      row = "<div class='roomname' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html"; 
}