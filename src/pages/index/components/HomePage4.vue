<template>
  <div>
    <div id="page4">
      <div id="page-text">
        <div id="text-item">
<!--          <p class="text-head">点子·创意广告词</p>-->
          <p class="text-title">数据库支持</p>
          <p class="text-content">依托丰富强大的数据库，进行广告语、口号素材联想</p>
          <p class="text-content">无论是成语、诗词，亦或俗语、流行语，都有机会成为您的店名、口号或广告词</p>
        </div>
      </div>
      <div id="page-img">
        <!--        <img src="../assets/u19.png" width="89%">-->
        <div id="img-item">
          <img src="@/assets/u19.png" width="100%">
        </div>
      </div>
    </div>
    <!--    按钮组件和左边的一个小块块-->
    <div id="page4-bottom">
      <div id="between-img">
        <img src="@/assets/u18.png" width="50%">
      </div>
      <div id="button-box">
        <a href="/dianzi/page1.html"><button class="start-button bottom-start">获取灵感词</button></a>
<!--          <a href="page1.html"><button class="start-button bottom-start">获取灵感词</button></a>-->
<!--        <a href="http://39.104.120.161/dianzi/page1.html#/"><button class="start-button">开始</button></a>-->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomePage4"
  }
</script>

<style scoped>
  #page4{
    position: absolute;
    display: flex;
    text-align: left;
    top: 0;
    min-width: 780px;
    /*top: 0;*/
    /*padding-top: 18%;*/
  }
  #page4-bottom{
    display: flex;
    position: absolute;
    width: 100%;
  }
  #page-text{
    width: 54%;
  }
  #page-img{
    width: 40%;
    min-width: 350px;
  }
  #text-item{
    width: 76%;
    /*padding: 6rem 0 0 10rem;*/
    margin-left: 35%;
    margin-top: 32%;
    min-width: 300px;
  }
  #img-item{
    margin-left: 18%;
    margin-right: 28%;
    margin-top: 32%;
    /*width: 60%;*/
    width: 65%;
  }
  #between-img{
    margin-top: -16%;
    width: 37%;
  }
  #button-box{
    position: absolute;
      top: -100%;
    left: 45%;
    bottom: 22%;
    /*padding-top: 10%;*/
  }
  .bottom-start{
      width: 130%;
      padding: 8% 12%;
  }
  .text-li{
    margin-bottom: 3%;
  }


</style>
