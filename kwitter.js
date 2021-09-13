function addUser(){
    username=document.getElementById("user_name").value;
    localStorage.setItem("User_name", username);
    window.location="kwitter_room.html";
}