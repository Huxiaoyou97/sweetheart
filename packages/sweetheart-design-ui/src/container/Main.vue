<template>
    <main class="s-main">
        <slot></slot>
    </main>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {asideProps} from "./props";

export default defineComponent({
    name: 'SMain',
    props: asideProps,
})
</script>

<style lang="less">
@import '../styles/common';
@import "styles/main";
</style>
