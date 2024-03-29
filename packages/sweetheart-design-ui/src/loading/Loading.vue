<template>
  <div class="s-loading">
    <div class="s-loading__content" :class="[loading ? 's-loading__content--active' : null]" v-if="$slots.default">
      <slot />
    </div>
    <div class="s--box s-loading__body" :class="[$slots.default ? 's-loading__inside' : null]" v-if="isShow">
      <div class="s-loading__circle" v-if="type === 'circle'">
        <span
          class="s-loading__circle-block"
          :style="{
            width: getRadius * 2 + 'px',
            height: getRadius * 2 + 'px',
            color,
          }"
        >
          <svg viewBox="25 25 50 50">
            <circle cx="50" cy="50" r="20" fill="none"></circle>
          </svg>
        </span>
      </div>

      <template v-for="(nums, key) in loadingTypeDict" :key="key">
        <div :class="`s-loading__${key} s-loading__${key}-${size}`" v-if="type === key">
          <div
            v-for="num in nums"
            :key="num + key"
            :style="{ backgroundColor: color }"
            :class="`s-loading__${key}-item s-loading__${key}-item-${size}`"
          ></div>
        </div>
      </template>
      <div
        class="s-loading__description"
        :class="`s-loading__description--${size}`"
        :style="{ color }"
        v-if="$slots.description || description"
      >
        <slot name="description">{{ description }}</slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { props } from './props'
import { toNumber } from '../utils/shared'
import type { ComputedRef } from 'vue'

export default defineComponent({
  name: 'SLoading',
  props,
  setup(props, { slots }) {
    const loadingTypeDict = {
      wave: 5,
      cube: 4,
      rect: 8,
      disappear: 3,
    }

    const sizeDict = {
      mini: 9,
      small: 12,
      normal: 15,
      large: 18,
    }

    const getRadius: ComputedRef<number> = computed(() => {
      return props.radius ? toNumber(props.radius) : sizeDict[props.size]
    })

    const isShow: ComputedRef<boolean> = computed(() => {
      if (!slots.default?.()) return true

      return props.loading
    })

    return {
      loadingTypeDict,
      getRadius,
      isShow,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import 'loading';
</style>
