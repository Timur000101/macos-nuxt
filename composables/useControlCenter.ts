import { useRoute, useRouter } from 'vue-router'
import { POPUP } from '~/types/popup'

export function useControlCenterPanel() {
  const isOpen = ref(false)

  const route = useRoute()
  const router = useRouter()

  watch(
    () => route.hash,
    (val) => {
      isOpen.value = (val === POPUP.CONTROL_CENTER)
    },
    {
      immediate: true,
    },
  )

  async function toggle() {
    if (isOpen.value) {
      await router.replace({ hash: '' })
    }
    else {
      await router.replace({ hash: POPUP.CONTROL_CENTER })
    }
  }

  return {
    toggle,
    isOpen,
  }
}
