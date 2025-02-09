<script lang="ts" setup>
import { useVModel } from '@vueuse/core'
import { object2class } from 'lew-ui/utils'
import LewRadio from './LewRadio.vue'
import { radioGroupProps } from './radio'
import type { RadioOptions } from './radio'

const props = defineProps(radioGroupProps)
const emit = defineEmits(['change', 'update:modelValue'])
const modelValue = useVModel(props, 'modelValue', emit)

function check(item: RadioOptions) {
  modelValue.value = item.value
  emit('change', {
    value: item.value,
    item: toRaw(item),
  })
}

const getRadioGroupClassName = computed(() => {
  const { size, direction } = props
  return object2class('lew-radio-group', { size, direction })
})
</script>

<template>
  <lew-flex
    x="start"
    gap="15"
    class="lew-radio-group"
    :class="getRadioGroupClassName"
  >
    <LewRadio
      v-for="item in options"
      :key="item.value"
      :block="block"
      :iconable="iconable"
      :label="item.label"
      :disabled="item.disabled || disabled"
      :size="size"
      :checked="modelValue === item.value"
      @update:checked="check(item)"
    />
  </lew-flex>
</template>

<style lang="scss" scoped>
.lew-radio-group {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.lew-radio-group-size-small {
    min-height: var(--lew-form-item-height-small);
}

.lew-radio-group-size-medium {
    min-height: var(--lew-form-item-height-medium);
}

.lew-radio-group-size-large {
    min-height: var(--lew-form-item-height-large);
}
.lew-radio-group.lew-radio-group-direction-x {
    flex-direction: row;
}

.lew-radio-group.lew-radio-group-direction-y {
    flex-direction: column;
    align-items: start;
    justify-content: flex-start;
}
</style>
