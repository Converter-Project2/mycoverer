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
            <router-link to="/singUpPage" class="nav-link"><span>Sign up </span></router-link>
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
  name: "App",
  components: {},
};
</script>


<style>
  
fieldset {
  display: inline;
  position: center;
  margin:auto;
  padding: 60px 0px;
  font-size: 5px;
  font-weight: bold;
  width: 70%;
  box-shadow: 7px 15px 30px rgb(41,139,219);
  border-radius: 35px;
  height: 50%;

}

.d {
  display: inline;
  width: 35%;
  font-family: "Algerian";

}

input {
  display: inline;
  width: 30%;
  position: center;
  color: grey;
  margin: 15px 0;
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
}

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

</style>
