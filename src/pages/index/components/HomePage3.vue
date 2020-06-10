<template>
  <div id="page3">
    <div class="page-img">
      <div id="img-item">
<!--        <img src="../assets/u13.png" width="76%">-->
        <img src="@/assets/u13.png" width="100%">
      </div>
    </div>
    <div class="page-text">
      <div class="text-item">
<!--        <p class="text-head">点子·创意广告词</p>-->
        <p class="text-title">广告语联想</p>
        <p class="text-content">根据您的需求关键词，提供中文广告语灵感</p>
        <p class="text-content">为设计师，店家，团队宣传等所有有文案创意需求的团体或个人解决知识储备量问题，释放大脑cpu</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomePage3"
  }
</script>

<style scoped>
  #page3{
      position: absolute;
    width: 100%;
    height: 80%;
    display: flex;
    top:65%;
      min-width: 780px;
  }
  .page-img{
      width: 40%;
      min-width: 350px;
  }
  #img-item{
      /*padding-top: 0.8rem;*/
      /*padding-left: 4rem;*/
      /*width: 32rem;*/
      /*padding-bottom: 5rem;*/
      margin-left: 30%;
      margin-top: 23%;
      /*width: 60%;*/
      width: 70%;
  }
  .page-text{
    text-align: right;
    width: 59%;
      /*min-width:530px ;*/
  }

  .text-item{
      color: #6d6e70;
    padding-right: 30%;
    padding-top: 25%;
      min-width: 300px;
  }

</style>
