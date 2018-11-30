<template>
  <div class="container-item input-form">
    <div class="form">
      <label>Name</label>
      <div class="input-container">
        <input type="text" v-model="form.name" />
      </div>
      <label>Gender</label>
      <div class="input-container height-auto">
        <a class="input-radio">
          <img class="input-radio__gendermale" v-bind:class="{active: form.gender==='male'}" v-on:click="form.gender='male'" />Male
        </a>
        <a class="input-radio">
          <img class="input-radio__genderfemale" v-bind:class="{active: form.gender==='female'}" v-on:click="form.gender='female'" />Female
        </a>
      </div>
      <label>Date of Birth</label>
      <div class="input-container">
        <i class="input-date-icon"></i>
        <input type="date"  v-model="form.dateofbirth"/>
      </div>
      <label v-bind:class="{invalid: !isValid}"><span v-if="!isValid" class="invalid invalid__dot"></span>Email</label>
      <div class="input-container">
        <input type="text" v-model="form.email" v-bind:class="{invalid: !isValid}"/>
        <span v-bind:class="{invalid: !isValid}" class="align-right hide">Invalid email address</span>
      </div>
      <label>Mobile</label>
      <div class="input-container">
        <input type="text"  v-model="form.mobile"/>
      </div>
      <label>Customer ID</label>
      <div class="input-container">
        <input type="text" v-model="form.customerID"/>
      </div>
      <label>Membership</label>
      <div class="input-container height-auto">
        <a class="input-radio">
          <img class="input-radio__membership" v-bind:class="{active: form.membership==='classic'}" v-on:click="form.membership='classic'" />Classic
        </a>
        <a class="input-radio">
          <img class="input-radio__membership" v-bind:class="{active: form.membership==='silver'}" v-on:click="form.membership='silver'"/>Silver
        </a>
        <a class="input-radio">
          <img class="input-radio__membership" v-bind:class="{active: form.membership==='gold'}" v-on:click="form.membership='gold'"/>Gold
        </a>
      </div>
      <br />
      <div class="button-row">
        <button class="button__secondary" v-on:click="clear()">Cancel</button>
        <button class="button__primary" v-on:click="save()">Save</button>
      </div>

    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          gender: '',
          dateofbirth: '',
          email: '',
          mobile: '',
          customerID: '',
          membership:''
        },
        isValid : true
      }
    },
    methods: {
      validateEmail: function(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      },
      clear: function () {
        this.form = {
          name: '',
          gender: '',
          dateofbirth: '',
          email: '',
          mobile: '',
          customerID: '',
          membership: ''
        }
        this.isValid = true;
      },
      save: function () {  
        this.isValid = true;
        if (this.form.email.length === 0) {
          this.isValid = false;
        }
        else if (!this.validateEmail(this.form.email)){
          this.isValid = false;
        }
        if (this.isValid) {
          console.log('Form Values ', this.form);
          //call API endpoint to save values
        }
      }
    }
  }
</script>