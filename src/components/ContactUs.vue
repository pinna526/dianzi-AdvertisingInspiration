<template>
    <div id="contactUs-box">
        <!--      微信二维码-->
        <div id="part1">
            <div class="wechat">
                <img src="@/assets/miniprog.png" width="100%">
            </div>
        </div>
        <!--      联系我们图标-->
        <div id="part2">
            <div class="icon-text">
                <p>联系我们</p>
            </div>
            <div class="icon-container">
                <!--    微博-->
                <div class="icon-box">
                    <div id="icon2" class="contactUs-icon" onclick="window.open('https://weibo.com/u/7297692180')"></div>
                </div>
                <!--          微信二维码-->
                <!--          <div class="icon-box">-->
                <!--              <div id="wechat">-->
                <!--                  <img src="@/assets/u29.jpg" width="100%" v-show="wechatShow">-->
                <!--              </div>-->
                <!--              &lt;!&ndash;        <img src="../assets/u34.svg" class="contactUs-icon">&ndash;&gt;-->
                <!--              <div id="icon1" class="contactUs-icon"-->
                <!--                   @mouseenter="wechatShow=true" @mouseleave="wechatShow=false" v-on:click="wechatShow=!wechatShow">-->
                <!--              </div>-->
                <!--          </div>-->
                <!--      邮箱-->
                <div class="icon-box">
                    <div id="mail" v-show="mailShow">
                        <p id="mail-text">idea_dianzi@163.com</p>
                    </div>
                    <div id="icon3" class="contactUs-icon"
                         @mouseenter="mailShow=true" @mouseleave="mailShow=false" v-on:click="mailShow=!mailShow">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ContactUs",
        data(){
            return {
                wechatShow:false,
                mailShow:false
            }
        },
        methods:{
            enter(val){
                if(val=="1"){
                    this.wechatShow=true
                }else {
                    this.mailShow=true
                }
            },
            leave(val){
                if(val=="1"){
                    this.wechatShow=false
                }else {
                    this.mailShow=false
                }
            },

        }
    }
</script>

<style scoped>
    #contactUs-box{
        display: flex;
        justify-content:center;
        position: absolute;
        bottom: 10%;
        left: 0;
        right: 0;
        margin: 0 auto 0 auto;
        flex-wrap: wrap;
        min-width: 780px;
    }
    #part1{
        padding-right: 1rem;
        border-right: 0.2rem solid white;
    }
    .wechat{
        width: 5rem;
        font-size: 0.5rem;
    }

    #part2{
        margin: 0 1rem;
    }

    .icon-text p{
        color: white;
        margin-bottom: 0.5rem;
        padding-left: 3px;

    }
    .icon-container{
        display:flex;
        width: 20%;
        /*margin-left: 1rem;*/
        justify-content:space-between;
    }

    #wechat{
        position: absolute;
        top: -5.5rem;
        left: -1rem;
        width: 5rem;
        height: 5rem;
    }
    .wechat-text p{
        text-align: center;
        font-size: 0.5rem;
        background-color: white;
        position:relative;
        top: -4px;
    }

    #mail{
        padding: 0 12px;
        position: absolute;
        top: -3rem;
        left: -2.5rem;
        background-color: white;
        border-radius:20px;
        font-size: 1rem;
        font-weight:500;
        color: #333333;
    }

    #mail-text{
        margin: 8px;
    }
    #icon2{
        background: url('~@/assets/u33.svg');
        background-size: 100%;
    }
    #icon2:hover{
        background: url('~@/assets/u31.svg');
        background-size: 100%;
    }
    #icon3{
        background: url('~@/assets/u35.svg');
        background-size: 100%;
    }
    #icon3:hover{
        background: url('~@/assets/u30.svg');
        background-size: 100%;
    }

    .icon-box{
        margin-right: 1.5rem;
        position: relative;
    }

    .contactUs-icon{
        width:3rem;
        height: 3rem;
        /*background-size: 100%;*/
    }
</style>
