export function useTheme() {
  const darkMode = useLocalStorage('dark', false, { initOnMounted: true })
  function switchTheme() {
    document.documentElement.classList.toggle('dark')
    darkMode.value = !darkMode.value
  }

  return {
    darkMode,
    switchTheme,
  }
}
