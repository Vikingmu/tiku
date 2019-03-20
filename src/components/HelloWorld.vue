<template>
  <div class="hello">

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  beforeCreate(){
    //计算
    // $('#total').css('width', $('#rightBox').height() * 0.5)
    //跳到科目选择页
    this.$router.push({path:'/chooseClassPage'})
  },
  // computed: {
  //   mapWidth() {return$(document).width() -200+'px'},
  //   mapHeight() {return$(document).height() -100+'px'}
  // },
  methods:{

  }
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
</style>
