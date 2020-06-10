<template>
    <div id="Page1Head">
        <div id="head-img">
            <img src="@/assets/u52.png" width="100%"/>
        </div>

        <div id="head-back">
            <a href="index.html" id="back">返回首页</a>
<!--            <a href="http://39.104.120.161/dianzi/#/" id="back">返回首页</a>-->
        </div>

    </div>
</template>

<script>
    export default {
        name: "Page1Head",
        data() {
            return {}
        }
    }
</script>

<style scoped>
    #Page1Head{
        height: 100%;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        background-color: white;
        justify-content:space-between;
        z-index: 100;
    }
    #head-img{
        margin: 0.6rem 0 3px 2rem;
        width: 90px;
        /*margin:0.1% 2%;*/
    }
    #head-back{
        margin: auto 3rem auto 0;
    }

    #back{
        /*font-size: 1rem;*/
        font-size: 1em;
        color: #65A3FF;
        text-decoration: none;
    }
    #back:hover{
        font-size: 1rem;
        color: #DCDCDC;
    }


</style>