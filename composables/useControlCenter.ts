import { useRoute, useRouter } from 'vue-router'
import { POPUP } from '~/types/popup'

export function useControlCenter() {
  const isOpen = ref(false)

  const route = useRoute()
  const router = useRouter()

  watch(
    () => route.hash,
    (val) => {
      if (val === POPUP.CONTROL_CENTER)
        isOpen.value = true
      else
        isOpen.value = false
    },
    {
      immediate: true,
    },
  )

  function toggle() {
    if (isOpen.value) {
      // Clear the hash when closing the control center
      router.replace({ hash: '' })
    }
    else {
      // Set the hash to open the control center
      router.replace({ hash: POPUP.CONTROL_CENTER })
    }
  }

  return {
    toggle,
    isOpen,
  }
}
