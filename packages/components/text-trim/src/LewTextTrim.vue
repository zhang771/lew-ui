<script setup lang="ts">
import tippy from 'tippy.js'
import { watchDebounced } from '@vueuse/core'
import { object2class } from 'lew-ui/utils'
import { textTrimProps } from './text-trim'

const props = defineProps(textTrimProps)

const textTrimRef = ref()
let instance: any

const watchOptions = { debounce: 250, maxWait: 1000 }

// 监听变化 清除初始化
watchDebounced(
  () => props.text,
  () => clear(),
  watchOptions,
)
watchDebounced(
  () => props.allowHTML,
  () => clear(),
  watchOptions,
)
watchDebounced(
  () => props.placement,
  () => clear(),
  watchOptions,
)
watchDebounced(
  () => props.arrow,
  () => clear(),
  watchOptions,
)
watchDebounced(
  () => props.allowHTML,
  () => clear(),
  watchOptions,
)

function clear() {
  if (instance) {
    instance.destroy()
    instance = null
  }
}

function showPop() {
  const element = textTrimRef.value
  let isEllipsis = false
  const { placement, allowHTML, text, arrow }: any = props
  if (props.lineClamp)
    isEllipsis = element.offsetHeight < element.scrollHeight
  else
    isEllipsis = element.offsetWidth < element.scrollWidth

  if (isEllipsis && !instance) {
    element.style.cursor = 'pointer'
    instance = tippy(element, {
      theme: 'light',
      delay: [250, 250],
      duration: [200, 200],
      content: text,
      animation: 'shift-away-subtle',
      interactive: true,
      appendTo: () => document.body,
      placement,
      allowHTML,
      arrow,
      maxWidth: 250,
    })
    instance.popper.children[0].setAttribute('data-lew', 'tooltip')
  }
  else if (instance) {
    instance.setContent(props.text)
  }
}

const getTextTrimStyleObject = computed(() => {
  if (props.lineClamp)
    return `display: -webkit-box;-webkit-line-clamp: ${props.lineClamp};-webkit-box-orient: vertical;`

  return 'white-space: nowrap;'
})

const getClassNames = computed(() => {
  const { x } = props
  return object2class('lew-text-trim', { x })
})
</script>

<template>
  <div
    ref="textTrimRef"
    class="lew-text-trim-wrapper"
    :class="getClassNames"
    :style="getTextTrimStyleObject"
    @mouseover="showPop"
    v-html="text"
  />
</template>

<style lang="scss" scoped>
.lew-text-trim-wrapper {
    overflow: hidden;
    text-overflow: ellipsis; //文本溢出显示省略号
    width: 100px;
}
.lew-text-trim-x-start {
    text-align: left;
}
.lew-text-trim-x-center {
    text-align: center;
}
.lew-text-trim-x-end {
    text-align: right;
}
</style>
