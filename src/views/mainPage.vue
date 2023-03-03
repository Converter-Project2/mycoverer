<template>
  <h1 style="margin-top: 150px;" class="animate__animated animate__backInDown"> online & free <i class="bi bi-emoji-heart-eyes" style="color: black; width:20%"></i> </h1> 
  <p id="one" class="animate__animated animate__backInDown">convert all things in 2 clics ! </p>
  
  <div >
    <img src="pic2.jpeg" width="35%" id="pic2"> 
  </div>
  <section class=" container animate__animated animate__zoomIn ">
    <select  class="s form-select form-select-lg mb-10">
      <option selected>select file to convert</option>
      <option value="1"></option>
      <option value="2"></option>
      <option value="3"></option>
    </select>
    
    <select  class="convert form-select form-select-lg mb-10">
      <option selected> convert to</option>
      <option value="1"></option>
      <option value="2"></option>
      <option value="3"></option>
    </select>
    </section>
</template>

<script>
export default {
 name:"mainPage"

}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;

}
nav {
  
  font-size: 20px;
  width: 100%;
  height: 90px;

}

nav a {
  font-weight: bold;
  color: white;
 
}
.nav-link{
  color: white;
}
.nav-link:hover{
  color: white;
  color:rgb(41, 139, 219); 
  border: 1px solid rgb(41, 139, 219);
}
.navbar-brand:hover{
  color: white;

}
h1{
  margin-top: 160px;
  font-size: 60px;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  text-shadow: 2px 2px black;
}
h2{
  font-size: 22px;
  font-weight: bold;
  color:rgb(41, 139, 219);
}
#one{
  font-size: 30px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;

}
.s{
  width: 250px;
  margin: auto;
  margin-top: 40px;
  color: black;
    font-weight: bold;
  border: 2px solid rgb(41, 139, 219);
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
  background-color:rgb(41, 139, 219);
  box-shadow: 10px 10px 5px black;
  }
  option{
    background-color: white;
  }
  .convert{
 
    width: 150px;
    height: 50px;
    margin: auto;
    color: black;
    font-weight: bold;
    text-align: center;
    margin-top: 50px;
    border: 4px solid rgb(41, 139, 219);
    background-color:rgb(41, 139, 219) ;
    border-radius: 10px;
    font-size: 18px;
    font-weight: bold;
    background-color: none;
    box-shadow: 10px 10px 5px black;
   
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
  border: solid 2px rgb(41, 139, 219);
}
.main :hover{
 
 background-color: rgb(136, 193, 238);
 border: solid 2px rgb(136, 193, 238);
}
.main div :hover{
  border: none;
}
.on{
  width: 100%;
  height: 100%;
  margin: auto;
  
}
#pic2:hover{
transform: scale(1.1) rotate(2deg);
}

</style>