import React from 'react'
import { Form } from 'antd'
import classNames from 'classnames'
import styles from './index.module.less'
import type { FormGeneratorProps } from './types'

const FormGenerator = ({ className }: FormGeneratorProps) => {
  return <Form className={classNames(styles['form-generator'], className)} />
}

export default FormGenerator
