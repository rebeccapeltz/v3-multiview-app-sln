<template>
  <div class="home">
    <div class="form-container" v-show="showForm">
      <!-- TODO: Modulate display of the .form-container using v-show and the showForm variable. -->
      <h1>Join the Web Developers Club!</h1>
      <p>Sign up to access our special, secret page. Just create an account and answer a brief survey.</p>
      <!-- TODO: Add an HTML element to display an error message for when the user submits invalid information. Use v-show to show/hide this message based on the validity of the form data. -->
      <p
        class="error"
        v-show="showError"
      >Please check the information you have entered. Be sure to fill in all fields.</p>
      <form v-on:submit.prevent="validateForm">
        <!-- TODO: Add the proper v-on directive to let the validateForm method handle this form when it is submitted -->
        <!-- TODO: Add labels for each form field in this form. -->
        <!-- TODO: Add a username field. -->
        <!-- TODO: Add an email field. -->
        <!-- TODO: Add a password field. -->
        <!-- TODO: Add a passwordVerify field. -->
        <p>
          <label class="label" for="username">Username</label>
          <input type="text" id="username" v-model="username">
        </p>

        <p>
          <label class="label" for="email">Email</label>
          <input type="email" id="email" v-model="email">
        </p>

        <p>
          <label class="label" for="password">Password</label>
          <input type="password" id="password" v-model="password">
        </p>
        <p>
          <label class="label" for="passwordVerify">Verify Password</label>
          <input type="password" id="passwordVerify" v-model="passwordVerify">
        </p>

        <p>
          <input type="submit" value="Submit">
        </p>
      </form>
    </div>

    <div class="success-message" v-show="!showForm">
      <!-- TODO: Modulate display of the .success-message using v-show and the showForm variable. -->
      <h1>Thank you for signing up!</h1>

      <p>Please take our new member survey.
        <router-link to="/survey">Click here</router-link>
      </p>

      <!-- TODO: Link "Click here" to the survey page. -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      passwordVerify: "",
      showForm: true,
      showError: false
    };
  },
  methods: {
    validateForm: function() {
      // Validate the form by checking the following values:
      // username must not be blank
      // email must not be blank
      // password and passwordVerify must be equal
      //
      // When the form is validated, show the .success-message content
      // If the form is invalid, show the form error message
      if (
        this.username != "" &&
        this.email != "" &&
        this.password === this.passwordVerify
      ) {
        // Form data is valid, so turn off the form to show the success message.
        this.showForm = false;
      } else {
        // Form data is NOT valid, so show the error message.
        this.showError = true;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.label {
  display: inline-block;
  width: 200px;
  text-align: left;
}
​ .error {
  border: 1px solid #aa0000;
  padding: 1rem;
  color: #aa0000;
}
h1,
h2 {
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
</style>