<script setup lang="ts">
import LewDemoBox from '../../layout/LewDemoBox.vue'
import LewDocsTables from '../../layout/LewDocsTables.vue'
import { DemoDateRangePicker1, DemoDateRangePicker1_code } from './demo'
import * as API from './api'

const options = ref(
  Object.keys(API).map((key: any) => {
    // @ts-expect-error: todofix
    return API[key]
  }),
)
</script>

<template>
  <div class="demo-wrapper">
    <lew-title>DatePicker</lew-title>
    <p class="sub-title">
      一个很漂亮的、支持双向绑定的日期选择器。
    </p>
    <LewDemoBox title="常规" :code="DemoDateRangePicker1_code">
      <DemoDateRangePicker1 />
    </LewDemoBox>
    <LewDocsTables :options="options" />
  </div>
</template>
