<template>
    <div id="resultWords">
        <div id="words-show">
            <!--        标题-->
            <div class="title-box">
                <p class="result-title">生成结果</p>
                <label class="gray_line"> </label>
            </div>
            <!--        结果-->
            <div v-for="(item,index) in currentPageData" :key="index" class="result-box" @click="clickItem(item,index)">
                <div class="result-num">{{pageSize*(currentPage-1)+index+1}}</div>
                <div  class="result-item" :class="{'selectClass':selectLabel==index}"><p>{{item.content}}</p></div>
            </div>
            <!--        翻页-->
            <div class="page-box">
                <a @click="prevPage()" class="page-item">上一页</a>
                <span class="page-item">第{{currentPage}}页/共{{totalPage}}页</span>
                <a @click="nextPage()" class="page-item">下一页</a>
            </div>
        </div>


        <div id="exp-show">
            <!--        标题-->
            <div class="title-box">
                <p class="result-title">词源及平面灵感</p>
                <label class="gray_line"></label>
            </div>
            <!--            内容-->

            <div class="select-title">
                {{selectData.content}}
            </div>
            <div class="select-js">
                <p>{{selectData.js}}</p>
            </div>
            <div class="select-picture">
                <div v-for="item in selectData.picture" :key="item" class="picture-item">
                    <img :src="item" width="100%" height="100%"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "resultWords",
        props:['text'],
        data(){
            return{
                totalPage: 1, // 统共页数，默认为1
                currentPage: 1, //当前页数 ，默认为1
                pageSize: 10, // 每页显示数量
                currentPageData: [], //当前页显示内容
                selectLabel:0, //当前选中的条目
                selectData:{}, //右边显示的数据
            }
        },
        mounted() {
            // 计算一共有几页

            //是否查询到结果
            if(this.text.flag==true){
                //是否数据条数为0
                if(this.text.result.length!=0){
                    this.totalPage = Math.ceil(this.text.result.length / this.pageSize);
                    // 计算得0时设置为1
                    this.totalPage = this.totalPage == 0 ? 1 : this.totalPage;
                    this.getCurrentPageData();
                    this.selectData=this.currentPage[0].content
                }
                else{
                    this.currentPageData=[{'content':"未查询到结果，换个关键词试试"}]
                }
            }
            else {
                this.currentPageData=[{'content':"未查询到结果"}]
            }
        },
        watch:{
            text:{
                handler:function(val){
                    // console.log(val)
                    this.text=val
                    // this.$set(this.text, val)
                    if(this.text.flag==true){
                        //是否数据条数为0
                        if(this.text.result.length!=0){
                            this.totalPage = Math.ceil(this.text.result.length / this.pageSize);
                            // 计算得0时设置为1
                            this.totalPage = this.totalPage == 0 ? 1 : this.totalPage;
                            this.getCurrentPageData();
                        }
                        else{
                            this.currentPageData=[{'content':"未查询到结果，换个关键词试试"}]
                        }
                    }
                    else {
                        this.currentPageData=[{'content':"未查询到结果"}]
                    }
                },
                deep:true//对象内部的属性监听，也叫深度监听
            },
        },
        methods:{
            // 设置当前页面数据，对数组操作的截取规则为[0~9],[10~20]...,
            // 当currentPage为1时，我们显示(0*pageSize+1)-1*pageSize，当currentPage为2时，我们显示(1*pageSize+1)-2*pageSize...
            getCurrentPageData() {
                let begin = (this.currentPage - 1) * this.pageSize;
                let end = this.currentPage * this.pageSize;
                this.currentPageData = this.text.result.slice(
                    begin,
                    end
                );
                this.selectData=this.currentPageData[0]
                this.selectLabel=0
            },
            //上一页
            prevPage() {
                // console.log(this.currentPage);
                if (this.currentPage == 1) {
                    return false;
                } else {
                    this.currentPage--;
                    this.getCurrentPageData();
                }
            },
            // 下一页
            nextPage() {
                if (this.currentPage == this.totalPage) {
                    return false;
                } else {
                    this.currentPage++;
                    this.getCurrentPageData();
                }
            },
            clickItem(val,index){
                this.selectData=val
                this.selectLabel=index

            }
        }
    }
</script>

<style scoped>
    #resultWords{
        display: flex;
        margin: 5% 10% 0 10%;
    }

    #words-show{
        /*width: 30%;*/
        flex-shrink:0;
        width: 30%;
        height: 100%;
        /*height: 30rem;*/
        min-width: 200px;
        position: relative;
    }
    #exp-show{
        width: 60%;
        height: 100%;
        margin-left: 60px;
        min-width: 280px;
    }
    .title-box{
        margin-bottom: 10px;
    }
    .result-title{
        font-size: 2rem;
    }
    .gray_line {
        background: #e5e5e5;
        width: 100%;
        height: 1.25px;
        float: left;
        margin: 8px auto 20px auto;
    }
    .result-box{
        clear:both;
        margin: 15px auto;
        display: flex;
    }
    .result-num{
        font-size: 14px;
        background-color: #ffd256;
        color: white;
        width: 20px;
        height: 20px;
        display: block;
        text-align: center;
        border-radius: 5px;
        flex-shrink:0;
        margin: auto 20px auto 0;
    }
    .result-item{
        /*margin-left: 15px;*/
        font-family: 'Arial Normal', 'Arial', sans-serif;
        font-weight: 500;
        font-style: normal;
        font-size: 1rem;
        letter-spacing: normal;
        color: #333333;
    }
    .result-item p{
        width: 100%;
        white-space:pre-wrap;
    }

    .result-item:hover{
        color: #1a6de3;
    }

    .selectClass{
        color: #1a6de3;
    }

    .page-box{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-content: space-around;
        width: 100%;
        margin-top: 3rem;
    }
    .page-item{
        /*width: 100%;*/
        margin: auto;
        text-align: center;
        font-size: 0.85rem;
    }


    .select-title{
        margin-top: 1rem;
        font-size: 1.25rem;
    }

    .select-js{
        margin-top: 1rem;
        font-size: 1.15em;

        word-wrap:break-word;
        word-break:break-all;
        text-indent: 2em;
    }

    .select-picture{
        margin-top: 3rem;
        display: flex;
        flex-wrap:wrap;
        /*justify-content:center;*/
        justify-content:space-around;
        align-items:flex-end;

    }
    .picture-item{
        width: 10rem;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }


</style>