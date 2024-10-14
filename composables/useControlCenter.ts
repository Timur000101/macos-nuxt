export function useControlCenter() {
  const isOpen = ref(false)

  const toggle = () => {
    isOpen.value = !isOpen.value
  }

  return {
    toggle,
    isOpen,
  }
}
