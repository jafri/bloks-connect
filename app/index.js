import connectToParent from 'penpal/lib/connectToParent'
import KVStore from 'store'

connectToParent({
  // Methods child is exposing to parent
  methods: {
    get: (key) => KVStore.get(key),
    set: (key, value) => KVStore.set(key, value)
  }
})
