<template>
	<div class="login">
		<input type="email" v-model="email" placeholder="Email"> <br>
        <input type="password" v-model="password" placeholder="Password"> <br>
		<button v-on:click="login">Login</button> 
		<br>

		<span> Don't have an account?<router-link to="/signup"> create one </router-link>.</span>
		
	</div>

</template>

<script >

import firebase from 'firebase'
	export default {
		name:'login',
		data: function() {
			return {
				email: '',
				password: '',
			}
		},
		methods: {

			login: function() {
			    
   

            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(

                function (user) {
                    alert('Signed in successfully')
 
                   
                }).catch(function(error) {
  // Handle Errors here.
                   var errorCode = error.code;
                   var errorMessage = error.message;

                       alert( errorMessage);
                      
                    console.log(error);

  // ...
                 });



        },

       



    }

  }



</script>