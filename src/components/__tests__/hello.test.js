import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'
import { test, expect } from 'vitest'

test('Hello World', () => {
  const wrapper = mount(HelloWorld)
  expect(wrapper.text()).toContain('orld')
})
