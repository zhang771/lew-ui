<script lang="ts" setup>
const options = [
  {
    label: '愚不可及',
    value: '愚不可及',
  },
  {
    label: '有教无类',
    value: '有教无类',
  },
  {
    label: '欲罢不能',
    value: '欲罢不能',
  },
  {
    label: '用行舍藏',
    value: '用行舍藏',
  },
  {
    label: '择善而从',
    value: '择善而从',
  },
  {
    label: '择善而从',
    value: '择善而从',
  },
  {
    label: '择善而从',
    value: '择善而从',
  },
  {
    label: '择善而从',
    value: '择善而从',
  },
  {
    label: '择善而从',
    value: '择善而从',
  },
  {
    label: '择善而从',
    value: '择善而从',
  },
  {
    label: '择善而从',
    value: '择善而从',
  },
  {
    label: '择善而从',
    value: '择善而从',
  },
  {
    label: '择善而从',
    value: '择善而从',
  },
  {
    label: '择善而从',
    value: '择善而从',
  },
  {
    label: '择善而从',
    value: '择善而从',
  },
  {
    label: '择善而从',
    value: '择善而从',
  },
  {
    label: '择善而从',
    value: '择善而从',
  },
  {
    label: '择善而从',
    value: '择善而从',
  },
  {
    label: '择善而从',
    value: '择善而从',
  },
  {
    label: '择善而从',
    value: '择善而从',
  },
  {
    label: '择善而从',
    value: '择善而从',
  },
  {
    label: '择善而从',
    value: '择善而从',
  },
  {
    label: '择善而从',
    value: '择善而从',
  },
]
</script>

<template>
  <lew-flex direction="y" x="start">
    <lew-input-pro
      style="width: 250px"
      :options="options"
      clearable
      placement="left"
    />
    <lew-input-pro
      style="width: 250px"
      :options="options"
      clearable
      placement="right-start"
    />
    <lew-input-pro style="width: 250px" :options="options" clearable />
  </lew-flex>
</template>
