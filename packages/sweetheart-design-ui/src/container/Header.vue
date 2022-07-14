<template>
    <header class="s-header" :style="style">
        <slot></slot>
    </header>
</template>

<script lang="ts">
import {defineComponent, computed} from "vue";
import {headerProps} from "./props";
import type { CSSProperties } from 'vue'

export default defineComponent({
    name: 'SHeader',
    props: headerProps,

    setup(props) {
        return {
            style: computed(
                () =>
                    (props.height
                        ? {
                            '--s-header-height': props.height,
                        }
                        : {}) as CSSProperties
            ),
        }
    }

})
</script>

<style lang="less">
@import '../styles/common';
@import "styles/header";
</style>
