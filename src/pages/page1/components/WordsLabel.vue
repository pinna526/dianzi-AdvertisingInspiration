<template>
    <div id="labels">
<!--        {{labels}}-->
        <div v-for="item in labels" :key="item"  class="labels-box">
            {{item}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "WordsLabel",
        props:['labels'],
    }
</script>

<style scoped>
#labels{
    display: flex;
    /*margin: 15px 5px 0 5px;*/
    margin: 1rem;
    justify-content: center;
    min-width: 780px;
}
    .labels-box{
        margin: auto 1rem;
        padding: 0.25rem 1rem;
        border-width: 0px;
        /*height: 2rem;*/
        background: inherit;
        background-color: rgba(255, 210, 86, 1);
        border: none;
        border-radius: 14px;
        -moz-box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.349019607843137);
        -webkit-box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.349019607843137);
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.349019607843137);
        font-size: 1rem;
        color: #FFFEFE;

    }
</style>