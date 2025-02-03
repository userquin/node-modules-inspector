import { computed } from 'vue'
import { getPackageFromSpec } from './filters'
import { query } from './query'

export const selectedNode = computed({
  get() {
    return query.selected ? getPackageFromSpec(query.selected) : undefined
  },
  set(v) {
    query.selected = v?.spec
  },
})
