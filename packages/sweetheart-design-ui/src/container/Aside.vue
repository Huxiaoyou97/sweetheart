<template>
    <aside class="s-aside" :style="style">
        <slot></slot>
    </aside>
</template>

<script lang="ts">
import {defineComponent, computed} from "vue";
import {asideProps} from "./props";

import type {CSSProperties} from 'vue'

export default defineComponent({
    name: 'SAside',
    props: asideProps,

    setup(props) {
        return {
            style: computed(() => {
                return props.width
                    ? ({'--s-aside-width': props.width} as CSSProperties)
                    : {}
            }),
        }
    }
})
</script>

<style lang="less">
@import '../styles/common';
@import "styles/aside";
</style>
