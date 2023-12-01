import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '../src/button.vue'

describe('测试button组件', () => {
  it('测试默认type', () => {
    const wrapper = mount(Button)
    expect(wrapper.classes()).toContain('coffee-button--default')
    expect(wrapper.classes()).toContain('coffee-button')
  })

  it('测试属性正常接收', () => {
    const wrapper = mount(Button, {
      props: {
        type: 'primary',
        round: true
      }
    })
    expect(wrapper.classes()).toContain('coffee-button--primary')
    expect(wrapper.classes()).toContain('is-round')
  })

  it('测试点击事件', () => {
    const wrapper = mount(Button)
    wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('测试icon', () => {
    const wrapper = mount(Button, {
      props: {
        icon: 'search'
      }
    })
    expect(wrapper.find('i').classes()).contain('coffee-icon-search')
  })

  it('测试slot', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'coffee'
      }
    })
    expect(wrapper.text()).toBe('coffee')
  })
})
