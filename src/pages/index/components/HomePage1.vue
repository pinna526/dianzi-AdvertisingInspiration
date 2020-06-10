<template>
  <div id="page1">
<!--    <p class="page1-text">创意 | 灵感 | 联想</p>-->
    <p class="page1-text">您的中文广告词灵感库</p>
    <div class="head-button">
      <a href="/dianzi/page1.html"><button class="start-button">获取灵感词</button></a>
<!--        <a href="page1.html"><button class="start-button">获取灵感词</button></a>-->
    </div>
<!--    <a href="http://39.104.120.161/dianzi/page1.html#/"><button class="start-button">开始</button></a>-->
    <div class="card-title" v-if="fatherShow">
      <p >如何获取您的灵感词</p>
    </div>

  </div>
</template>

<script>
  export default {
    name: "HomePage1",
      props: {
          fatherShow:Boolean
      },
    methods: {
    }
  }
</script>

<style scoped>
  #page1{
    position: absolute;
    top:45%;
    left: 59%;
  }

  .page1-text{
    font-size: 1.125rem;
    /*font-size: 1rem;*/
    color: #2e235f;
  }
  .head-button{
    margin-top: 10%;
    width: 60%;
  }

  .card-title{
    text-align: center;
    color: #6d6e70;
    font-size: 2rem;
    margin-top: 24%;
    margin-left: -180%;
  }



</style>
