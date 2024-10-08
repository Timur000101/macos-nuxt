import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    stylistic: {
      indent: 2,
      quotes: 'single',
      semi: false,
    },
    ignores: ['node_modules/**', 'components/ui/**'],
  }),
)
