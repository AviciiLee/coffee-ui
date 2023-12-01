import { randomNumber } from '../utils'

it('测试随机数', () => {
  const result = randomNumber(1, 10)
  expect(result).toBeGreaterThanOrEqual(1)
  expect(result).toBeLessThanOrEqual(10)
})
