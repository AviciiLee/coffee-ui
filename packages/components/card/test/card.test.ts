import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Card from '../src/card.vue'

describe('测试卡片组件', () => {
  it('测试类样式', () => {
    const wrapper = mount(Card)
    expect(wrapper.classes()).toContain('coffee-card')
  })
  it('测试插槽', () => {
    const wrapper = mount(Card, {
      slots: {
        default: '卡片内容'
      }
    })
    expect(wrapper.text()).toContain('卡片内容')
  })
  it('测试summary属性', () => {
    const wrapper = mount(Card, {
      props: {
        summary: '卡片摘要'
      }
    })
    console.log(wrapper.text(), '!')
    expect(wrapper.text()).toContain('卡片摘要')
  })
})
