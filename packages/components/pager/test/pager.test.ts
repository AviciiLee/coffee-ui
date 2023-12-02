import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Pager from '../src/pager.vue'

describe('渲染正确的页码数量', () => {
  it('渲染正确的页码数量', () => {
    const wrapper = mount(Pager, {
      props: {
        total: 20,
        currentPage: 1
      }
    })
    expect(wrapper.findAll('a').length).toBe(11)
  })
})
