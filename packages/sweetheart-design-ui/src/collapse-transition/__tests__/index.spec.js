import CollapseTransition from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test collapse-transition plugin', () => {
  const app = createApp({}).use(CollapseTransition)
  expect(app.component(CollapseTransition.name)).toBeTruthy()
})
