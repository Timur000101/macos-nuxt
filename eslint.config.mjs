import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    stylistic: {
      quotes: 'single',
      semi: false,
    },
    rules: {
      'no-console': 'warn',
    },
    ignores: ['node_modules/**', 'components/ui/**'],
  }),
)
