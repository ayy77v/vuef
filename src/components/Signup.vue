<template>
	<div class = "sign-up">
		<p> Let's create a new account</p>
		<input type="email" v-model="email" placeholder="Email"> <br>
        <input type="password" v-model="password" placeholder="Password"> <br>
        <button v-on:click="signUp">Sign Up</button>
        <br>
        <span> go back to<router-link to="/login"> login </router-link>.</span>

	</div>

</template>


<script> 




import firebase from 'firebase'


 firebase.initializeApp(config);

	  export default {
    name:'Signup',
    data: function() {
      return {
        email: '',
        password: '',
      }
    },
    methods: {
        signUp: function() {
   

            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(

                function (user) {
                    alert('Your account has been created');
                   

                }).catch(function(error) {
  // Handle Errors here.
                   var errorCode = error.code;
                   var errorMessage = error.message;

                   if (errorCode == 'auth/weak-password') {
                       alert('The password is too weak.');
                  } else {
                       alert(errorMessage);
                      }
                    console.log(error);
  // ...
                 });
        }

    }

  }



</script>