<template>
  <div id="page2">
<!--    <div class="page-text">-->
<!--      <div id="text-item">-->
<!--        <p class="text-head">点子·创意广告词</p>-->
<!--        <p class="text-title">广告语联想</p>-->
<!--        <p class="text-content">根据您的需求关键词，提供中文广告语灵感</p>-->
<!--        <p class="text-content">为设计师，店家，团队宣传等所有有文案创意需求的团体或个人解决知识储备量问题，释放大脑cpu</p>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="page-img">-->
<!--      <div  id="img-item">-->
<!--        <img src="@/assets/u10.png" width="100%">-->
<!--      </div>-->
<!--      &lt;!&ndash;        <img src="../assets/u10.png" width="500px">&ndash;&gt;-->
<!--    </div>-->
    <div class="dec-card-box">
      <div class="dec-card-img">
        <img src="@/assets/logos.jpg" class="card-img">
      </div>
      <div class="dec-card-text">
        <p class="card-text-title">1. 输入您的期望范围</p>
          <p class="card-text-content">输入您的1-3个关键词，选择您期望的点子类型和匹配模式</p>
      </div>
    </div>

    <div class="dec-card-box">
      <div class="dec-card-img">
        <img src="@/assets/logos.jpg" class="card-img">
      </div>
        <div class="dec-card-text">
            <p class="card-text-title">2. 查看为您匹配的灵感词</p>
            <p class="card-text-content">点击“获取我的灵感词”，页面自动跳转到为您匹配的灵感词</p>
        </div>
    </div>

    <div class="dec-card-box">
      <div class="dec-card-img">
        <img src="@/assets/logos.jpg" class="card-img">
      </div>
        <div class="dec-card-text">
            <p class="card-text-title">3. 词源及平面联想</p>
            <p class="card-text-content">点击灵感词，即可查看词源和相关联想图形</p>
        </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "HomePage2"
  }
</script>

<style scoped>
  #page2{
    position: absolute;
    display: flex;
    text-align: left;
      top: 0;
    /*height: 80%;*/
      margin: 0 8%;
      min-width: 600px;
  }
  .dec-card-box{
      margin: 6% 2.5%;
  }
  dec-card-img{

  }
  img.card-img{
      border-radius: 25px 25px 0 0;
      display: block;
  }
  .dec-card-text{
      /*margin-top: -3%;*/
      background-color: #f6f6f6 ;
      padding: 5% 5%;
      color: #6d6e70;
  }
  .card-text-title{
      font-size: 1.25rem;
      text-align: left;
  }
    .card-text-content{
        font-size: 0.9rem;
        margin:5% 8%;
    }

  .page-text{
    width:55%;
  }
  .page-img{
    width: 45%;
  }
  #img-item{
    width: 32rem;
    /*padding-left: 1rem;*/
    /*padding-top: 1rem;*/
  }
  #text-item{
    padding: 8rem 0 0 10rem;
  }
</style>
