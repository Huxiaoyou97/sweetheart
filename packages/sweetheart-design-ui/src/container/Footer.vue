<template>
    <footer class="s-footer" :style="style">
        <slot></slot>
    </footer>
</template>

<script lang="ts">
import {defineComponent, computed} from "vue";
import {headerProps} from "./props";
import type { CSSProperties } from 'vue'

export default defineComponent({
    name: 'SFooter',
    props: headerProps,

    setup(props) {
        return {
            style: computed(
                () =>
                    (props.height
                        ? {
                            '--s-footer-height': props.height,
                        }
                        : {}) as CSSProperties
            ),
        }
    }

})
</script>

<style lang="less">
@import '../styles/common';
@import "styles/footer";
</style>
