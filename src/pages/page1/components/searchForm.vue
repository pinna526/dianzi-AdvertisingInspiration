<template>
    <div id="block" ref="bgContainer">
<!--        背景轮播图-->
        <div class="carousel-box">
        <el-carousel class="carousel" :height="bannerH+-35+'px'" interval="8000">
            <el-carousel-item class="carousel-image-type">
                <img src="@/assets/u49.png" width="100%" class="carousel-image">
            </el-carousel-item>
            <el-carousel-item>
                <img src="@/assets/u54.png" width="100%" class="carousel-image">
            </el-carousel-item>
            <el-carousel-item>
                <img src="@/assets/u59.png" width="100%" class="carousel-image">
            </el-carousel-item>
        </el-carousel>
        </div>

<!--        搜索框-->
        <div class="form-container"  :style="{height:bannerH +'px'}">
            <div class="form-box">
                <p class="form-title">点子·广告词灵感站</p>
                <p class="form-tips">请输入1-3个关键词</p>
                <div class="form-input-box">
                    <el-input v-model="input1" placeholder="请输入关键词" class="form-input"></el-input>
                    <el-input v-model="input2" placeholder="请输入关键词" class="form-input"></el-input>
                    <el-input v-model="input3" placeholder="请输入关键词" class="form-input"></el-input>
                </div>
                <p class="form-tips">请选择您的需求范围</p>
                    <div class="form-cource-box">
                        <el-checkbox-group v-model="sourceGroup" size="small" fill="#FFB800">
                            <el-checkbox-button v-for="item in source" :key="item" :label="item" class="form-cource">{{item}}</el-checkbox-button>
                        </el-checkbox-group>
                    </div>
                <div class="form-cource-box">
                    <el-radio-group v-model="optionGroup" size="small">
                        <el-radio-button label="同音" class="form-cource"></el-radio-button>
                        <el-radio-button label="同字" class="form-cource"></el-radio-button>
                    </el-radio-group>
                </div>
<!--                <div class="form-start-box">-->
<!--                    <el-button type="primary" class="form-start" @click="startSearch">获取我的灵感词</el-button>-->
<!--                </div>-->
                <div class="form-start-box">
<!--                    <scroll-to target="#scrollHere">-->

                    <el-button type="primary" class="form-start" @click="startSearch">获取我的灵感词</el-button>
<!--                    </scroll-to>-->
                </div>
            </div>
        </div>
        <div id="scrollHere" style="height: 1px"></div>
    </div>
</template>

<script>
    // import mock from "../../../mock/mock";
    export default {
        name: "searchForm",
        data() {
            return {
                bannerH:document.documentElement.clientHeight,
                bgHeight:document.documentElement.clientHeight,
                bannerImgLst:['~@/assets/u59.png','~@/assets/u49.png','~@/assets/u52.png'],
                input1:'',
                input2:'',
                input3:'',
                source:['成语','诗词','俗语','流行语'],
                option:['同音','同字'],
                sourceGroup:['成语'],
                optionGroup:'同音',
                search:{},
                result:{}



            }
        },
        methods:{
            scrollTo(){
                var that=this
                window.scroll({ top: that.bgHeight, left: 0, behavior: 'smooth' });
            },

            setBannerH(){
                // this.bannerH = (510/1280)*document.documentElement.clientWidth
                //this.bannerH = document.documentElement.clientWidth/2
                this.bannerH = document.documentElement.clientHeight

            },

            scrollSmoothTo : function (position) {
                if (!window.requestAnimationFrame) {
                    window.requestAnimationFrame = function(callback, element) {
                        return setTimeout(callback, 17);
                    };
                }
                // 当前滚动高度
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                // 滚动step方法
                var step = function () {
                    // 距离目标滚动距离
                    var distance = position - scrollTop;
                    // 目标滚动位置
                    scrollTop = scrollTop + distance / 8;
                    if (Math.abs(distance) < 1) {
                        window.scrollTo(0, position);
                    }
                    else {
                        window.scrollTo(0, scrollTop);
                        requestAnimationFrame(step);
                    }
                };
                step();
            },

            startSearch(){
                var that = this
                var labels = []
                search:{}
                result:{}
                var flag=0

                if(this.input1==''&&this.input2==''&&this.input3==''){
                    alert("请至少输入一个关键词")
                    flag=0
                }else{
                    flag=1
                    if (that.input1 != "") {
                        labels.push(that.input1)
                    }
                    if (that.input2 != "") {
                        labels.push(that.input2)
                    }
                    if (that.input3 != "") {
                        labels.push(that.input3)
                    }
                }
                if(that.sourceGroup.length==0){
                    flag=0
                    alert("请至少选择一种灵感词来源")
                }
                if(that.optionGroup.length==0){
                    flag=0
                    alert("请至少选择一个选项")
                }

                // console.log(flag)
                if(flag==1) {

                    //为search添加数据
                    that.search["keyword"] = labels
                    that.search["source"] = that.sourceGroup
                    that.search["option"] = [that.optionGroup]
                    that.$emit('labels', labels)
                    // console.log(that.search)


                    //axios发送post请求
                    that.$axios.post('dianzi/py', that.search)
                        .then(function (res) {
                            that.result = res.data
                            that.$emit('result', that.result)
                        })
                        .catch(function (error) {
                        })

                    //测试mock用
                    // that.$axios.post('http://test.cn', that.search)
                    //     .then(function (res) {
                    //         that.result = res.data
                    //         that.$emit('result', that.result)
                    //         // that.$set(that.result, res.data)
                    //     })
                    //     .catch(function (error) {
                    //     })
                    // // document.getElementById('container3').scrollIntoView({ block: 'start', behavior: 'smooth'})


                    // 滚动到顶部，指定距顶部的距离

                    // console.log(that.bgHeight)
                    that.scrollSmoothTo(that.bgHeight+20)
                    that.scrollTo()


                }
                }
        },
        mounted(){
            var that=this
            that.bgHeight= this.$refs.bgContainer.offsetHeight;
            that.setBannerH()
            //绑定监听事件
            //window.addEventListener('scroll',that.scrollSmoothTo());
            // this.$nextTick(function () {
            //     window.addEventListener('scrollTo',this.scrollSmoothTo(),true);
            // })

        },
        created(){

        },
        destroyed () {
            // this.$nextTick(function () {
            //     window.removeEventListener('scroll',that.scrollSmoothTo(),true);
            // })

        }

    }
</script>

<style>

    #block{
        /*height: 100%;*/
        width: 100%;
        min-width: 780px;
        overflow: hidden;
    }
    .carousel-box{
        position: absolute;
        width: 100%;
        overflow: hidden;
        /*height: 100%;*/
        min-width: 780px;
        z-index: -1;
    }
    .carousel{
        width: 100%;

    }
    .carousel-image-type{
        /*width: 100%;*/
        /*height: 100%;*/
        /*object-fit:cover;*/
        position: relative;
        margin: 0 auto

    }
    .carousel-image{
        position: absolute;
        top: 50% ;
        transform:translateY(-50%);
    }

    .form-container{
        position:relative;
    }
    .form-box{
        width: 30%;
        height: 60%;
        position: absolute;
        min-width: 360px;
        /*min-height: 300px;*/

        /*background-color: white;*/
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
    }  .form-title{
        text-align: center;
        font-size: 2rem;
        font-family: '黑体 Bold', '黑体', sans-serif;
        font-weight: 700;
        font-style: normal;
        margin-bottom: 0.5rem;
    }  .form-tips{
        margin-top: 0.75rem;
        text-align: center;
        font-size: 0.75rem;
    }

    .form-input-box {

        /*margin: 0.5rem 1rem;*/
        margin: 0.75rem auto;
        width: 90%;
    }.form-input{
        margin-bottom: 0.5rem;
         }

    .form-cource-box{
        text-align: center;
        margin:0.75rem 1rem;
    }
    .form-cource {
         margin:0 0.3rem;
    }
    .el-input__inner{
        font-size: 0.9rem!important;
        height: 40px!important;

    }
    .el-checkbox-button--small .el-checkbox-button__inner{
        font-size: 0.8rem!important;
        padding: 0.5rem 0.75rem!important;
    }
    .el-radio-button--small .el-radio-button__inner{
        font-size: 0.8rem!important;
        padding: 0.5rem 0.75rem!important;
    }
    .el-carousel__button{
        width: 10px!important;
        height: 10px!important;
        border : 1px solid gainsboro!important;
        border-radius: 50px!important;
        background-color: white!important;
        padding-left: 5px!important;
    }
    .el-carousel__indicator.is-active button{
        background-color: #bfd7f8!important;
    }
    .el-carousel__indicator--horizontal{
        padding: 12px 12px!important;
    }
    .el-carousel--horizontal {
        overflow-x: visible!important;
    }


    .el-checkbox-button--small .el-checkbox-button__inner {
        border:1px solid gainsboro;
        border-radius: 4px !important;
    }
    .el-radio-button--small .el-radio-button__inner {
        border: 1px solid gainsboro;
        border-radius: 4px !important;
    }

    .form-start-box{
        margin-top: 2rem;
        text-align: center;
    }.form-start{
        font-size: 1rem!important;
        font-family: 'Arial Negreta', 'Arial Normal', 'Arial', sans-serif;
        font-weight: 700!important;
        font-style: normal;
        background-color: #1a6de3!important;
        border-color: #1a6de3;
        border-radius: 12px!important;
         }
    .form-start:hover{
        background-color: #1a6df0!important;
        border-color: #1a6de3;
    }

</style>