import { addition } from './planet.services'
import { test, expect } from 'vitest'

test('addtion', () => {
  expect(addition(1, 3)).toBe(4)
})
