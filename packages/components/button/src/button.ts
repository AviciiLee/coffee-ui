// import type { ExtractPropTypes } from 'vue'

export interface buttonProps {
  type: {
    type: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'
    default: 'default'
  }
  plain: {
    type: Boolean
    default: false
  }
  // round: {
  //   type: Boolean
  //   default: false
  // }
  // circle: {
  //   type: Boolean
  //   default: false
  // }
  // disabled: {
  //   type: Boolean
  //   default: false
  // }
  // icon: {
  //   type: String
  //   default: ''
  // }
}

// 从button props中提取出类型
// export type ButtonProps = ExtractPropTypes<typeof buttonProps>
