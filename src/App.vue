<template>
  <div class="container">
    <div class="container-item left-banner">
      <div class="customer">
        <img class="customer__image" src="" />
      </div>
      <h1>Front-end challenge!</h1>
      <h2>This is a design that you will need to code up and impress us.</h2>
      <div class="expand">
        <input type="image" v-bind:class="{collapse__image:contentIsActive}" v-bind:src="expandCollapseImg" v-on:click="toggleExpand()" />
      </div>
    </div>
    <div class="container-item content" v-bind:class="{container__active:contentIsActive, container__inactive:!contentIsActive}">
      <h1 style="text-align:left"><strong>My world today</strong></h1>
      <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. View all days eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat</p>
    </div>
    <input-form v-bind:class="{container__inactive:contentIsActive}"></input-form>
  </div>
</template>
<script>
  import './assets/sass/main.scss'
  import InputForm from './components/inputform.vue'
  export default {
    components: {
      InputForm
    },
    data() {
      return {
        expandCollapseImg: '/src/assets/images/expand.svg',
        contentIsActive: false
      }
    },
    methods: {
      toggleExpand: function () {
        const _this = this;
        if (_this.contentIsActive) {
          _this.contentIsActive = false;
        }
        else {
          _this.contentIsActive = true;
        }
      }
    }
  }
</script>
