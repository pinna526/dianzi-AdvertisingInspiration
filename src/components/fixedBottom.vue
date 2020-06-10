<template>
    <div id="fixedBottom">
        <img src="@/assets/u24.png" id="bottom-bg" width="100%">
        <ContactUs />
        <div id="statement">点子·创意广告词灵感站 版权所有</div>
    </div>
</template>

<script>
    import bottom from "./bottom";
    import ContactUs from "./ContactUs";
    export default {
        name: "fixedBottom",
        components:{
            ContactUs,
        },
    }
</script>

<style scoped>
    #fixedBottom{
        height: 100%;
        width: 100%;
        min-width: 780px;
    }
    #bottom-bg{
        position:relative;
        z-index: 0;

    }
    #statement{
        text-align:center;
        color: #A9A9A9;
        font-size: 0.8125rem;
        position: absolute;
        bottom: 8px;
        left: 0;
        right: 0;
        margin: auto;
        min-width: 780px;
    }
</style>