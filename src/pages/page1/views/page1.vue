<template>
    <div id="app">
        <div id="container1" ref="page1Head">
            <Page1Head @result="getresult" @labels="getlabels"/>
        </div>
        <div id="holdon" v-bind:style="{height:page1Head+'px'}"></div>
        <div id="container2" ref="bgContainer">
            <search-form @result="getresult" @labels="getlabels"></search-form>
        </div>
        <div id="scrollToHere"></div>
        <div id="labels">
            <WordsLabel :labels="labels"/>
        </div>
        <div id="container3" v-if="labels.length!=0">
            <!--                遮盖-->
            <!--                <div id="shade" v-if="!flag">-->
            <!--                    <img src="@/assets/u68.svg" width="8%" id="push" @click="flag=true"/>-->
            <!--                </div>-->
            <resultWords :text="result"/>
        </div>
        <div id="container4">
            <fixedBottom/>
        </div>
    </div>
</template>

<script>
    // import ContactUs from "../../../components/ContactUs";
    import Page1Head from "../components/Page1Head";
    import WordsLabel from "../components/WordsLabel";
    import resultWords from "../components/resultWords";
    import fixedBottom from "../../../components/fixedBottom";
    import searchForm from "../components/searchForm";

    export default {
        components: {
            Page1Head,
            // ContactUs,
            WordsLabel,
            resultWords,
            fixedBottom,
            searchForm
        },

        data() {
            return {
                page1Head: 0,
                screenWidth: document.documentElement.clientWidth,
                // screenHeight: document.documentElement.clientHeight,
                //交没交钱
                flag: false,
                //搜索标签
                labels: [],
                select: [],
                search: {},
                result: {
                    "flag": false
                },
            }
        },
        beforeCreate() {
            // var that = this
            // if (that.screenWidth < 780) {
            //     that.screenWidth = 780
            //     // console.log(that.screenWidth)
            // }
        },

        //渲染成html前
        created: function () {

        },
        // 渲染成html后
        mounted() {
            //撑起顶上的高度
            this.page1Head = this.$refs.page1Head.offsetHeight;

            // 屏幕自适应
            const that = this
            // window.onresize = () => {
            //     return (() => {
            //         window.screenWidth = document.documentElement.clientWidth
            //         if(window.screenWidth<=768){
            //             that.screenWidth = 768
            //         }else if(window.screenWidth>2400){
            //             that.screenWidth = 2400
            //         }else{
            //             that.screenWidth = window.screenWidth
            //         }
            //
            //     })()
            // }
            var width = this.$refs.bgContainer.offsetWidth
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
            // screenWidth(val){
            //     // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
            //     if(!this.timer){
            //         // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
            //         this.screenWidth = val
            //         location.reload()
            //         document.write(`<style>${css}</style>`)
            //         // this.$router.go(0)
            //         this.timer = true
            //         let that = this
            //         setTimeout(function(){
            //             // console.log(that.screenWidth)
            //             that.timer = false
            //         },400)
            //     }
            // },
        },
        methods: {
            getlabels: function (e) {
                this.labels = e
            },
            getresult: function (e) {
                this.result = e
                // console.log(e)
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
        /*overflow-y: scroll;*/
        /*保证居中*/
        left: 50%;
        transform: translatex(-50%);
        font: normal 100% 'Arial Negreta', 'Arial Normal', 'Arial', sans-serif;
        /*max-width: 2400px;*/
        max-width: 1480px;
        /*max-width: 1200px;*/
        /*min-width: 780px;*/

    }

    #app {
        font-family: 'Arial Negreta', 'Arial Normal', 'Arial', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*color: #2c3e50;*/
        /*overflow-x: hidden;*/
    }

    #container1 {
        position: fixed;
        top: 0;
        width: 100%;
        background-color: white;
        box-shadow: 0 5px 15px -2px darkgrey;
        z-index: 100;
    }

    #container2 {
        width: 100%;
        /*max-width: 2400px;*/
        /*min-width: 780px;*/
    }

    #container3 {
        width: 100%;
    }

    #container4 {
        width: 100%;
        /*height: auto;*/
        background: url('~@/assets/u24.png') no-repeat;
        min-width: 780px;
        background-size: 100% 100%;
        /*background-position: center;*/
        position: relative;
        /*bottom: 0;*/
    }

    /*#words-show{*/
    /*    !*width: 30%;*!*/
    /*    width: 20rem;*/
    /*    height: 30rem;*/
    /*    position: relative;*/
    /*}*/
    #shade {
        width: 20rem;
        height: 40rem;
        position: absolute;
        top: 100px;
        /*background-color: grey;*/
        background-image: linear-gradient(to bottom,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.3) 5%,
        rgba(255, 255, 255, 0.5) 10%,
        rgba(255, 255, 255, 0.8) 14%,
        rgba(255, 255, 255, 1) 16%);
    }

    #push {
        margin: 5rem 0 0 7rem;
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

</style>