<template>
  <div class="hello">
    <h1>{{ msg }} <button v-on:click="logout">Logout</button></h1>
<div class="container">
 
  <form id="geocoding_form" class="form-horizontal">
    <div class="form-group">
      <div class="col-xs-12 col-md-6 col-md-offset-3">
        <button type="button" class="find-me btn btn-info btn-block">Find My Location</button>
      </div>
    </div>
  </form>

  <p class="no-browser-support">Sorry, the Geolocation API isn't supported in Your browser.</p>
  <p class="coordinates">Latitude: <b class="latitude">42</b> Longitude: <b class="longitude">32</b></p>



</div>
   

    
  </div>



</template>



  <script >

  var findMeButton = $('.find-me');

// Check if the browser has support for the Geolocation API
if (!navigator.geolocation) {

  findMeButton.addClass("disabled");
  $('.no-browser-support').addClass("visible");
  alert('no');

} else {

  findMeButton.on('click', function(e) {

alert('yes');
    e.preventDefault();
    navigator.geolocation.getCurrentPosition(function(position) {

      // Get the coordinates of the current possition.
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;

      $('.latitude').text(lat.toFixed(3));
      $('.longitude').text(lng.toFixed(3));
      $('.coordinates').addClass('visible');

})
  })}
  </script>

<script>
import firebase from 'firebase';
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      alt: 5,
      lat: 10,
    }
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    },



  },


}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}


.container {
  max-width: 980px;
  text-align: center;
  margin: 20px auto;
}

h1 {
  margin-bottom: 20px;
}

#geocoding_form {
  margin: 40px auto 40px;
}

.input-group {
  margin-left: 4%;
}

.find-me.btn:focus {
  border-color: transparent;
  outline: 0;
}

.coordinates {
  font-size: 18px;
  opacity: 0;
  margin-bottom: 40px;
}

.no-browser-support {
  font-size: 18px;
  opacity: 0;
}

.coordinates b:first-child {
  margin-right: 15px;
}

.visible {
  opacity: 1;
}


</style>