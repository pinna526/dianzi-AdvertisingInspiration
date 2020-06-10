<template>
    <!--  <div id="app">-->
    <!--    <div id="container1" v-bind:style="{width:screenWidth+'px',height:(screenWidth/1280)*813+'px'}">-->
    <!--      <HomeHead/>-->
    <!--      <HomePage1/>-->
    <!--    </div>-->
    <!--    &lt;!&ndash;    第二&三页&ndash;&gt;-->
    <!--    &lt;!&ndash;    <div id="container2" v-bind:style="{width:screenWidth+'px',height:screenHeight+15+'px'}">&ndash;&gt;-->
    <!--    <div id="container2" v-bind:style="{width:screenWidth+'px',height:(screenWidth/1935)*1023+'px',top:-(screenWidth/1935)*120+'px'}">-->
    <!--      <HomePage2/>-->
    <!--      <HomePage3/>-->
    <!--    </div>-->
    <!--    &lt;!&ndash;    第四页&ndash;&gt;-->
    <!--    &lt;!&ndash;    <div id="container3" v-bind:style="{width:screenWidth+'px',height:screenHeight+458+'px'}">&ndash;&gt;-->
    <!--    <div id="container3" v-bind:style="{width:screenWidth+'px',height:(screenWidth/1929)*1602+'px'}">-->
    <!--      <HomePage4/>-->
    <!--    </div>-->
    <!--    &lt;!&ndash;    第五页&ndash;&gt;-->
    <!--    &lt;!&ndash;    <div id="container4" v-bind:style="{width:screenWidth+'px',height:screenHeight-292+'px'}">&ndash;&gt;-->
    <!--    <div id="container4" v-bind:style="{width:screenWidth+'px',height:(screenWidth/2560)*818+'px'}">-->
    <!--&lt;!&ndash;      <ContactUs/>&ndash;&gt;-->
    <!--&lt;!&ndash;      <div id="statement">点子·创意广告词灵感站 版权所有</div>&ndash;&gt;-->
    <!--      <fixedBottom/>-->
    <!--    </div>-->

    <div id="app">
        <div v-if="!isPhone">
            <div id="container1" ref="bgContainer">
                <HomeHead :bgHeight="bgHeight"/>
                <HomePage1 :fatherShow="BigEnough"/>
                <!--      <div id="scrollHere2"></div>-->
            </div>
            <!--    第二&三页-->
            <div id="container2">
                <HomePage2/>
                <HomePage3/>
            </div>
            <!--    第四页-->
            <div id="container3">
                <HomePage4/>
            </div>
            <!--    第五页-->
            <div id="container4">
                <!--      <ContactUs/>-->
                <!--      <div id="statement">点子·创意广告词灵感站 版权所有</div>-->
                <fixedBottom/>
            </div>
        </div>
        <div v-if="isPhone" class="phoneDo">
            <img src="@/assets/miniprog.png" width="100px" height="100px">
            <p>请扫描二维码打开金点小程序</p>
            <p>或用PC端登录本页面</p>
        </div>
    </div>
</template>
<script>
    import HomeHead from '../components/HomeHead.vue'
    import HomePage1 from "../components/HomePage1";
    import HomePage2 from "../components/HomePage2";
    import HomePage3 from "../components/HomePage3";
    import HomePage4 from "../components/HomePage4";
    import fixedBottom from "../../../components/fixedBottom";

    export default {
        components: {
            HomeHead,
            HomePage1,
            HomePage2,
            HomePage3,
            HomePage4,
            fixedBottom
            // ContactUs,
        },

        data() {
            return {
                screenWidth: document.body.clientWidth,
                BigEnough: true,
                isPhone: false,
                bgHeight: 0
            }
        },
        beforeCreate() {
        },

        //渲染成html前
        created: function () {

        },
        // 渲染成html后
        mounted() {
            // 屏幕自适应
            const that = this
            var width = document.documentElement.clientWidth
            if (width < 640) {
                that.isPhone = true
            }
            window.onresize = () => {
                return (() => {
                    window.screenWidth = document.body.clientWidth
                    if (window.screenWidth > 2400) {
                        that.screenWidth = 2400
                    } else {
                        that.screenWidth = window.screenWidth
                    }
                })()
            }
            // window.onresize = () => {
            //   return (() => {
            //       window.screenWidth = document.documentElement.clientWidth
            //       if(window.screenWidth<=768){
            //           that.screenWidth = 768
            //       }else if(window.screenWidth>2400){
            //           that.screenWidth = 2400
            //       }else{
            //           that.screenWidth = window.screenWidth
            //       }
            //   })()
            // }

            that.bgHeight = this.$refs.bgContainer.offsetHeight;

            var width = this.$refs.bgContainer.offsetWidth;
            var css = `
        html{
        font-size: ${width / 80}px;
        }
        `
            document.write(`<style>${css}</style>`)


        },
        // 页面监听函数
        watch: {
            // 屏幕自适应
            screenWidth(val) {
                var that = this
                // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
                if (!this.timer) {
                    // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
                    var width = val
                    location.reload()
                    setTimeout(function () {
                        // console.log(that.screenWidth)
                        that.timer = false
                    }, 400)
                }
            }
        }
    }
</script>


<style lang="less">
    html, body {
        position: relative;
        margin: 0px;
        padding: 0px;
        width: 100%;
        height: auto;
        overflow-x: hidden;
        /*保证居中*/
        left: 50%;
        transform: translatex(-50%);
        /*max-width: 1000px;*/
        max-width: 1480px;
        /*min-width: 780px;*/

    }

    #app {
        font-family: 'Arial Negreta', 'Arial Normal', 'Arial', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        /*overflow-x: hidden;*/
    }

    #container1 {
        position: relative;
        /*width: 100%;*/
        /*height: 100%;*/
        background: url('~@/assets/u1.png') no-repeat;
        background-size: cover;
        /*background-position:center;*/
        padding-top: 40.54%;
        /*background-attachment:fixed;*/
        z-index: 10000;
        min-width: 780px;
        min-height: 316px;
    }

    #container2 {
        position: relative;
        /*width: 100%;*/
        /*height: 100%;*/
        background: url('~@/assets/u0.png') no-repeat;
        background-size: cover;
        margin-top: -5%;
        padding-top: 37%;
        /*background-position:center;*/
        /*padding-top:30%;*/
        /*background-attachment:fixed;*/
        z-index: 0;
        min-width: 780px;
        /*min-height: 412px;*/
        margin-bottom: 15%;

    }

    #container3 {
        position: relative;
        /*width: 100%;*/
        background: url('~@/assets/u12.png') no-repeat;
        padding-top: 56%;
        background-size: cover;
        background-position: center;
        min-width: 780px;
        min-height: 480px;
        /*margin-bottom: -2%;*/
    }

    #container4 {
        width: 100%;
        background: url('~@/assets/u24.png') no-repeat;
        background-size: 100% 100%;
        background-position: center;
        position: relative;
        min-width: 780px;

    }


    #statement {
        text-align: center;
        color: #A9A9A9;
        font-size: 0.8125rem;
        position: absolute;
        bottom: 8px;
        left: 0;
        right: 0;
        margin: auto;
    }

    .text-head {
        color: #1F009A;
        font-size: 0.8125rem;
        margin-bottom: 2rem;
        /*font-size: 13px;*/
    }

    .text-title {
        color: #6d6e70;
        font-size: 2rem;
        /*font-size: 36px;*/
        /*margin: 2rem 0 4rem 0;*/
        line-height: 1.9375rem;
        margin-bottom: 3rem;
    }

    .text-content {
        color: #6d6e70;
        font-size: 1.25rem;
        /*font-size: 20px;*/
        margin-bottom: 5%;
        line-height: 1.875rem;

    }

    .start-button {
        /*margin-top: 50px;*/
        /*margin-top: 4rem;*/
        width: 100%;
        /*width: 178px;*/
        font-family: 'Arial Negreta', 'Arial Normal', 'Arial', sans-serif;
        color: white;
        border-radius: 15px;
        background-color: #1A6DF0;
        border: 4px solid #1A6DF0;
        padding: 6% 0;
        outline: none;
        font-weight: 700;
        font-style: normal;
        font-size: 1.125rem;
        /*font-size: 18px;*/
    }

    .start-button:hover {
        background-color: white;
        color: #1A6DF0;
    }

    .start-button:active {
        /*position:relative;*/
        /*top:1px;*/
    }

    .phoneDo {
        text-align: center;
    }


</style>
