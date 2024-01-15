import React, { Component } from 'react'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import styles from './index.module.less'

interface BreadcrumbCustomProps {
  paths: {
    path?: string;
    name: string;
  }[];
}

export default class BreadcrumbCustom extends Component<BreadcrumbCustomProps> {
  Breadcrumbs() {
    const { paths } = this.props
    const v = paths?.map((item, index: number) => {
      return (
        <Breadcrumb.Item key={+index}>
          {item.path ? <Link to={item.path}>{item.name}</Link> : `${item.name}`}
        </Breadcrumb.Item>
      )
    })
    return v
  }

  render() {
    return (
      <div>
        <Breadcrumb className={styles.breadcrumb}>{this.Breadcrumbs()}</Breadcrumb>
      </div>
    )
  }
}
