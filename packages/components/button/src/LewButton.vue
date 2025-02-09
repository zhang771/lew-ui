<script setup lang="ts">
import { LewIcon } from 'lew-ui'
import { object2class } from 'lew-ui/utils'
import { buttonProps } from './button'

const props = defineProps(buttonProps)
const emit = defineEmits(['click'])
const _loading = ref(false)

async function handleClick(e: any) {
  if (props.disabled || _loading.value || props.loading)
    return
  emit('click', e)
  if (typeof props.request === 'function') {
    if (_loading.value)
      return

    _loading.value = true
    await props.request()
    _loading.value = false
  }
}

const getButtonClass = computed(() => {
  const { round, size, type, icon, text } = props
  const loading = _loading.value || props.loading
  const singleIcon = !!(!text && icon)
  return object2class('lew-button', {
    round,
    size,
    type,
    loading,
    singleIcon,
  })
})

const getIconSize = computed(() => {
  const { size } = props
  switch (size) {
    case 'small':
      return 12
    case 'medium':
      return 14
    case 'large':
      return 16
    default:
      return 14
  }
})
</script>

<template>
  <button
    class="lew-button"
    :class="getButtonClass"
    :disabled="disabled"
    @click="handleClick"
  >
    <LewIcon
      v-if="icon"
      class="lew-button-icon"
      :size="getIconSize"
      :type="icon"
    />
    <LewIcon
      v-if="loading || _loading"
      class="lew-loading-icon"
      :size="getIconSize"
      animation="spin"
      animation-speed="fast"
      :class="{
        'lew-loading-icshow': (_loading || loading) && !disabled,
      }"
      type="loader"
    />
    <span v-if="!!!(!text && icon)" class="lew-button-text">
      <template v-if="text">
        {{ text }}
      </template>
      <template v-else>
        <slot />
      </template>
    </span>
  </button>
</template>

<style lang="scss" scoped>
.lew-button {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    flex-shrink: 0;
    user-select: none;
    width: auto;
    white-space: nowrap;
    box-sizing: border-box;
    transition: background-color 0.1s, transform 0.1s,
        color 0.35s cubic-bezier(0.65, 0, 0.25, 1),
        padding 0.25s cubic-bezier(0.65, 0, 0.25, 1);
    border: none;
    cursor: pointer;
    border-radius: var(--lew-border-radius);
    box-sizing: border-box;
    overflow: hidden;
    box-shadow: var(--lew-form-box-shadow);

    .lew-loading-icon {
        position: absolute;
        left: 10px;
        opacity: 0;
        transition: opacity 0.35s;
    }

    .lew-loading-icshow {
        opacity: 1;
    }
}

.lew-button:active {
    transform: scale(0.96);
}

.lew-button-size-small {
    min-width: 50px;
    height: var(--lew-form-item-height-small);
    line-height: var(--lew-form-item-height-small);
    padding: 0px 8px;
    font-size: var(--lew-form-font-size-small);
    gap: 4px;

    .lew-loading-icon {
        left: 8px;
    }
}

.lew-button-size-medium {
    min-width: 60px;
    height: var(--lew-form-item-height-medium);
    line-height: var(--lew-form-item-height-medium);
    padding: 0px 14px;
    font-size: var(--lew-form-font-size-medium);
    gap: 6px;
    .lew-loading-icon {
        left: 10px;
    }
}

.lew-button-size-large {
    min-width: 70px;
    height: var(--lew-form-item-height-large);
    line-height: var(--lew-form-item-height-large);
    padding: 0px 20px;
    font-size: var(--lew-form-font-size-large);
    gap: 8px;
    .lew-loading-icon {
        left: 12px;
    }
}

.lew-button-size-small.lew-button-singleIcon {
    min-width: auto;
    padding: 0px;
    width: var(--lew-form-item-height-small);
    height: var(--lew-form-item-height-small);
}
.lew-button-size-medium.lew-button-singleIcon {
    min-width: auto;
    padding: 0px;
    width: var(--lew-form-item-height-medium);
    height: var(--lew-form-item-height-medium);
}
.lew-button-size-large.lew-button-singleIcon {
    min-width: auto;
    padding: 0px;
    width: var(--lew-form-item-height-large);
    height: var(--lew-form-item-height-large);
}

.lew-button.lew-button-loading.lew-button-singleIcon {
    padding: 0px;
    .lew-button-text {
        display: none;
    }
    .lew-button-icon {
        display: none;
    }
    .lew-loading-icon {
        position: static;
    }
}

.lew-button-round {
    border-radius: 50px;
}
.lew-button-active:hover {
    color: var(--lew-text-color-0);
}

.lew-button-type-primary {
    background: var(--lew-primary-color);
    color: var(--lew-white-text-color);
}

.lew-button-type-primary:hover {
    background-color: var(--lew-primary-color-hover);
}

.lew-button-type-primary:active {
    background-color: var(--lew-primary-color-active);
}

.lew-button-type-info:hover {
    background-color: var(--lew-info-color-hover);
}

.lew-button-type-info {
    background: var(--lew-info-color);
    color: var(--lew-white-text-color);
}

.lew-button-type-info:active {
    background-color: var(--lew-info-color-active);
}

.lew-button-type-success {
    background: var(--lew-success-color);
    color: var(--lew-white-text-color);
}

.lew-button-type-success:hover {
    background-color: var(--lew-success-color-hover);
}

.lew-button-type-success:active {
    background-color: var(--lew-success-color-active);
}

.lew-button-type-error {
    background: var(--lew-error-color);
    color: var(--lew-white-text-color);
}

.lew-button-type-error:hover {
    background-color: var(--lew-error-color-hover);
}

.lew-button-type-error:active {
    background-color: var(--lew-error-color-active);
}

.lew-button-type-blank {
    background-color: transparent;
    color: var(--lew-text-color-2);
    padding: 0px 4px;
    min-width: auto;
    box-shadow: none;
}

.lew-button-type-blank:hover {
    background-color: transparent;
    color: var(--lew-text-color-2);
}

.lew-button-type-blank:active {
    background-color: transparent;
    color: var(--lew-text-color-2);
}

.lew-button-type-normal {
    background: var(--lew-normal-color);
    color: var(--lew-text-color-3);
}

.lew-button-type-normal:hover {
    background-color: var(--lew-normal-color-hover);
}

.lew-button-type-normal:active {
    background-color: var(--lew-normal-color-active);
}

.lew-button-type-warning {
    background: var(--lew-warning-color);
    color: var(--lew-white-text-color);
}

.lew-button-type-warning:hover {
    background-color: var(--lew-warning-color-hover);
}

.lew-button-type-warning:active {
    background-color: var(--lew-warning-color-active);
}

.lew-button-loading {
    cursor: progress;
    padding-left: 0px;
}
.lew-button-size-small.lew-button-loading {
    padding-left: 24px;
}
.lew-button-size-medium.lew-button-loading {
    padding-left: 30px;
}
.lew-button-size-large.lew-button-loading {
    padding-left: 36px;
}

.lew-button-loading:active {
    transform: scale(1);
}

.lew-button[disabled] {
    pointer-events: none; //鼠标点击不可修改
    opacity: var(--lew-disabled-opacity);
}
</style>
