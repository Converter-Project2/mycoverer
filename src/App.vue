<template>
  <nav class="navbar navbar-expand-lg sticky-top"
   style="background-color: black; color:white">
    <div class="container-fluid" style="background-color: black; color:white">

      <img src="logo.png" style="width: 90px;">
      <a href="#" class="navbar-brand" style="font-size: 30px; ">Convertio</a>
     
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/loginPage" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/singUpPage" class="nav-link">Sign up</router-link>
          </li>
          
        </ul>
      </div>
  </nav>
  
<router-view />

 

    <footer>
    <div class="main animate__animated animate__zoomIn" >
      <div>
         <h2><i class="bi bi-text-center" style="color: black;"></i> Description </h2> 
        <p>File Converter is a very simple tool which allows you to convert file(s)
           using the context menu in windows explorer. And it's FREE! 
           A free online app that converts audio files for you. The app supports all formats,
            processes your files quickly, and does not require installation.
          </p>
      </div>
      <div >
        <h2> <i class="bi bi-question-diamond-fill" style="color: black;"></i> How to use</h2>
        <p> Convertio is browser-based and works for all platforms.
           There is no need to download and install any software.
          just Drop file here  Convertio is browser-based and works for all platforms.
          There is no need to download and install any software.
         just Drop file here 
        </p>
      </div>
      <div style="margin-right: -5px;">
        <h2> <i class="bi bi-heart-fill" style="color: black;"></i> About us</h2>
        <p>Convertio is a website focused on collecting the information about file types & extensions
           and their associated software programs, free online tools , 
           so we will provide you with any information you'd like about your files.
            and convert to any form. 
            </p>
      </div>
    </div>
  </footer>
 
</template>

<script>
export default {
  show:true,
  name: "App",
  components: {},
};
</script>


<style>



nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;

 
}
.nav-link{
  color: white;
}
.nav-link:hover{
  
  color: white;
  color: rgb(41, 139, 219);
  border: 1px solid rgb(41, 139, 219);
  border-radius: 30px;
  letter-spacing: 1px;
  transition: .4s;
  transform: scale(0.5s);

}
.navbar-brand:hover{
  color: white;
  letter-spacing: 1px;
  cursor: pointer;



}

h1{
  margin-top: 160px;
  font-size: 50px;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  text-shadow: 2px 2px black;
}
h2{
  font-size: 22px;
  font-weight: bold;
  color:rgb(41, 139, 219);
  
}
#one{
  font-size: 20px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
}
.sa{
  width: 250px;
  margin: auto;
  margin-top: 40px;
  border: 2px solid rgb(41, 139, 219);
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
  background-color:rgb(41, 139, 219);
  }
  option{
    background-color: white;
  }
  .convert{
 
    width: 150px;
    height: 50px;
    margin: auto;
    text-align: center;
    margin-top: 50px;
    border: 4px solid rgb(41, 139, 219);
    border-radius: 10px;
    font-size: 18px;
    font-weight: bold;
    background-color: none;
  }
a{
  text-decoration: none;
  color: black;
  font-weight: bold;
}
a:hover{
  color: black;
  
}

h3{
  margin-top: 50px;
  font-size: 20px;
}
.main{
  display: flex;
            flex-direction: row;
            padding: 5px;
            width: 100%;
            margin-top: 300px;
        
           
}
.main div{
 
 margin-right: 120px;
  width: 50%;
  padding: 20px;
  
}
.main :hover{
 
  border: solid 2px rgb(41, 139, 219);

}
.main div :hover{
  border: none;
}
.animate__animated.animate__flip {
  --animate-duration: 2s;
}
fieldset {
  display: inline;
  position: center;
  margin:auto;
  padding: 7px 0px;
  font-size: 5px;
  font-weight: bold;
  width: 60%;
  box-shadow: 7px 15px 30px rgb(41,139,219);
  border-radius: 35px;
  height: 20%;

}

.d {
  display: inline;
  width: 35%;
  font-family: "Algerian";

}

input {
  display: inline;
  width: 40%;
  position: center;
  color: grey;
  margin: 10px 0;
  box-shadow: 2px 5px 10px rgb(41, 139, 219);
  margin-left: 1%;
}
figure {
  display: inline;
  width: 50%;
}

figure figcaption {
  display: inline;
  width: 30%;
}

hr {
  border: rgb(41, 139, 219) solid 1px;
}

button.s {
  transition: transform 0.3s;
  margin:auto;
  margin-left: 5%;
  margin-top: 1%;

}
ss
.g {
  margin-left: 0;
  width: 23%;
  padding: 4%;
  display: inline;
}

div img {
  transition: all 2s;
}

button.n {
  transition: all 2s;
  background-color: rgb(41, 139, 219);
  color: #d1dccb;
}
button.n:hover {
  width:50%
}
button:hover::before {
  width: 100%;
}
button:hover{
  background: var(--black);
    transition: .2s ease-out;
    

}


</style>
