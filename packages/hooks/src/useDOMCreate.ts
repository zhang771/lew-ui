export function useDOMCreate(nodeId: string): void {
  const node = document.getElementById(nodeId)
  if (node) {
    throw new Error('已经有了相同的元素，请切换ID重试！')
  }
  else {
    const newNode = document.createElement('div')
    newNode.id = nodeId
    document.body.appendChild(newNode)
  }
}
