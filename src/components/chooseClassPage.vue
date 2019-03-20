<template>
  <div class="wapper">
    <div class="header">
      <tikuHeader></tikuHeader>
    </div>


    <div class="content">
      <div v-for="(item) in classes" class="classTag">
        <div class="classTag2">
          <span class="className" @click="goClassPage(item)"> {{item.text}}</span>
        </div>
      </div>
    </div>


    <div class="footer">
      <span class="footer-msg">Design By Toast Studio</span>
    </div>
  </div>
</template>

<script>
  import tikuHeader from './tikuHeader'

  export default {
    name: "chooseClassPage",
    data() {
      return {
        classes: [
          {text: '思修'},
          {text: '近代史'},
          {text: '马克思'},
          {text: '毛概'},
        ]

      }
    },
    //引入组件
    components: {
      tikuHeader: tikuHeader,
    },
    methods: {
      goClassPage: function (index) {
        console.log(index)


      },

    }
  }
</script>

<style scoped>

  wrapper {
    height: 100%;
    overflow: hidden;

  }

  .header {
    height: 4rem;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }

  .content {
    position: absolute;
    top: 4rem;
    width: 93%;
    margin-left: 3.5%;
  }

  .classTag {
    margin-top: 1rem;
  }

  .classTag2 {
    /*border-radius: .3rem .3rem;*/
    border-top-left-radius: .5rem;
    border-top-right-radius: .5rem;
    -moz-box-shadow: 0px -10px 18px #333333;
    -webkit-box-shadow: 0px -10px 18px #333333;
    box-shadow: 0px -10px 18px #454545;
    background-color: #3487ff;
    height: 2rem;
  }

  .className {
    font-size: 1.3rem;
    left: 15%;

  }

  .footer {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 25rem;
    background-color: #c07a4c;
  }

</style>
