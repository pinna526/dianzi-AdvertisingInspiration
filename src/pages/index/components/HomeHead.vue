<template>
    <div>
        <div id="head">
            <div  class="head-img">
                <img src='@/assets/u2.png' width="100%" height="100%">
            </div>

            <div class="head-text">
                <a id="home-a">首页</a>
            </div>
<!--            <div class="head-text" @click="scrollTo">-->
<!--                <a id="home-b">简介</a>-->
<!--            </div>-->
            <scroll-to class="head-text" :distance="bgHeight">
                <a id="home-b" ref="#scrollHere2">简介</a>
            </scroll-to>

        </div>

    </div>
</template>

<script>
  export default {
    name: "HomeHead",
      props: {
          bgHeight:Number
      },
    data(){
      return{
        homeColor:"#367EFE",
        introColor:"#05286C",
        index:0,
      }
    },
    methods:{
        click:function(e){
          this.index=e
        },
        scrollTo:function(){
            var that=this
            window.scroll({ top: that.bgHeight, left: 0, behavior: 'smooth' });
        },

      toIntro:function () {
        window.location.hash = "#container2";
        this.$refs.intro.style.color="#367EFE";
        this.$refs.home.style.color="#05286C";
      },
      toHome:function(){
        this.$refs.home.style.color="#367EFE";
        this.$refs.intro.style.color="#05286C";
      },
      enter(val){
        if(val=="1"){
          this.homeColor="#367EFE"
          this.introColor="#05286C"
        }else {
          this.introColor="#367EFE"
          this.homeColor="#05286C"
        }
      },
      leave(val){
        if(val=="1"){
          this.introColor="#367EFE"
          this.homeColor="#05286C"
        }else {
          this.homeColor="#367EFE"
          this.introColor="#05286C"
        }
      },
    },
    created() {
    },
      // mounted() {
      //   var that=this
      //     window.addEventListener('scroll',that,scrollTo(),true);
      // },
      // destroyed() {
      //     window.removeEventListener('scroll',that,scrollTo(),true);
      // }
  }


</script>

<style>
  #head{
    position: absolute;
    top: 4%;
    left: 9%;
    /*padding: 2rem 0 0 7rem;*/
    display: flex;
    width: 100%;

  }

  .head-img{
    /*width: 5%;*/
    /*height: auto;*/
    /*margin-right: 4rem;*/
    width: 3%;
    height: 3%;
  }

  .head-text{
    margin:auto 0 auto 4rem;
    /*vertical-align: middle;*/
    font-size: 1.125rem;
    /*font-size: 80px;*/
    display: flex;
    align-items: center;
  }
  #home-a{
      color: #05286C;
  }
  #home-b{
      color: #367EFE;
  }

  #home-b:hover{
      color: #05286C;
  }

  /*#home{*/
  /*  color: #367EFE;*/
  /*}*/
  /*#intro{*/
  /*  color:#05286C;*/
  /*}*/

  /*a home-a:hover {*/
  /*  color: #367EFE; !*鼠标移动到链接的颜色*!*/
  /*}*/
  /*a home-a:active {*/
  /*  color: #367EFE; !*鼠标点击时的颜色*!*/
  /*}*/



</style>
