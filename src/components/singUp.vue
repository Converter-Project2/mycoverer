<template>

    <br>
    <form  class="animate__animated animate__zoomIn" action="/" method="get" style="wight:20%;height:15% ;" >
    <fieldset>
      
        <ul style="  margin:auto;  ">
          <img class="pic2" src=" login-pana.png" style="size: 5%;width: 30%;display: block;margin:auto;padding: 10px;">
            <li class="fa-solid fa-user" style="color: rgb(41,139,219);font-size:20px;"></li>
            <input placeholder="Name" type="text"  v-model="Data.name"><br>
            <li class="fa-solid fa-envelope" style="color: rgb(41,139,219);font-size:20px; ">
            </li><input placeholder="Email" type="email" v-model="Data.email"><br>
            <li class="fa-solid fa-phone" style="color: rgb(41,139,219);font-size:20px;"></li><input  placeholder=090000000  type="number" v-model="$store.state.singUpData.number"><br>
    <li class="fa-solid fa-key" style="color: rgb(41,139,219);font-size:20px;"></li>
    <input  type="password" v-model="Data.password" placeholder=".........."  ></ul>
    <button class="s"  @click="singUpFunction">sing Up</button>
    
    </fieldset>
    </form>   
    
  </template>
  
  <script>

  export default {
    name: "singUp",
    data(){
      return{ 
       Data:{}
      }}
      ,methods:{
        singUpFunction(){ 
          this.$store.state.singUpData =this.Data

if(this.$store.state.url.include(this.Data)){
  document.querySelector("form").innerHtml=" <p style=''> You Are SingUp ,Yoe Cand Login </p><br><boutton router-link='loginPage'> Login</boutton>"
}else{  
  this.$store.dispatch("CheckSingUp")
}
}
      }
      

  };
  </script>
  
  <style>

  input:hover{
    transition: .2s ease-out;

    border: solid 1px  rgb(41, 139, 219);
padding:5px
  }
</style>
  
