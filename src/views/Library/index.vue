<template>
    <div class="Library">
        <an-header title="热门推荐"/>

        <div class="main">
            <an-drama/>
        </div>
    </div>
</template>

<script>
    import AnHeader from "@/components/header/an-header";
    import AnDrama from "@/components/Drama/an-drama";
    export default {
        name: "ibrary",
        components: {AnDrama, AnHeader}
    }
</script>

<style lang="less" scoped>
.Library{
    height: 100%;
    background: #FFFFFF;
}
</style>
