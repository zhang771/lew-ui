<script setup lang="ts">
const props = defineProps({
  options: {
    type: Array<any>,
    default() {
      return []
    },
  },
})

const columnsMap: any = {
  props: [
    {
      title: '参数名',
      width: 150,
      field: 'name',
    },
    {
      title: '描述',
      width: 150,
      field: 'description',
    },
    {
      title: '类型',
      width: 320,
      field: 'type',
    },
    {
      title: '默认值',
      width: 120,
      field: 'default',
    },
  ],
  slots: [
    {
      title: '插槽名',
      width: 150,
      field: 'name',
    },
    {
      title: '描述',
      width: 220,
      field: 'description',
    },
    {
      title: '参数',
      width: 240,
      field: 'params',
    },
  ],
  events: [
    {
      title: '事件名',
      width: 150,
      field: 'name',
    },
    {
      title: '描述',
      width: 220,
      field: 'description',
    },
    {
      title: '参数',
      width: 240,
      field: 'params',
    },
  ],
  methods: [
    {
      title: '方法名',
      width: 150,
      field: 'name',
    },
    {
      title: '描述',
      width: 240,
      field: 'description',
    },
    {
      title: '参数',
      width: 120,
      field: 'params',
    },
  ],
}
const sortOptions = computed(() => {
  const columnArr = [
    'Props',
    'FormOptions',
    'SelectOptions',
    'SelectMultipleOptions',
    'Slots',
    'Events',
    'Methods',
  ]
  return props.options
    .map((e: any) => {
      const orderNum
                = !columnArr.includes(e.title)
                  ? 99
                  : columnArr.indexOf(e.title)
      return {
        orderNum,
        ...e,
      }
    })
    .sort((a: any, b: any) => a.orderNum - b.orderNum)
})
</script>

<template>
  <lew-flex direction="y" gap="70px" class="docs-wrapper">
    <lew-flex
      v-for="(item, index) in sortOptions"
      :key="index"
      direction="y"
      x="start"
    >
      <lew-title :id="item.title" :size="16" class="demo-docs-title">
        {{
          item.title
        }}
      </lew-title>
      <lew-table
        :data-source="item.data"
        :columns="columnsMap[item.columnsKey]"
      />
    </lew-flex>
  </lew-flex>
</template>
