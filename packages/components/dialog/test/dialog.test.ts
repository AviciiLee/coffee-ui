import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Dialog from '../src/dialog.vue'

describe('测试dialog组件', () => {
  it('测试标题', () => {
    const wrapper = mount(Dialog, {
      props: {
        title: '自定义标题'
      }
    })
    expect(wrapper.find('.coffee-dialog_title').text()).toBe('自定义标题')
  })

  it('测试宽度', () => {
    const wrapper = mount(Dialog, {
      props: {
        title: '自定义标题',
        width: '200px'
      }
    })
    expect(wrapper.find('.coffee-dialog').attributes('style')).contain('width: 200px;')
  })

  it('测试top', () => {
    const wrapper = mount(Dialog, {
      props: {
        title: '自定义标题',
        top: '200px'
      }
    })
    expect(wrapper.find('.coffee-dialog').attributes('style')).contain('top: 200px;')
  })

  it('测试关闭事件', async () => {
    const wrapper = mount(Dialog, {
      props: {
        title: '自定义标题',
        top: '200px'
      }
    })
    await wrapper.find('.coffee-dialog_headerbtn').trigger('click')
    expect(wrapper.emitted('update:visible')).toBeTruthy()
  })
})
