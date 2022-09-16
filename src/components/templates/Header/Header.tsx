import React from 'react'

import { HeaderText } from 'src/components/organisms/HearderText/HeaderText'
import styles from './Header.module.scss'

export const Header = () => {
  return (
    <div className={styles.header}>
      <HeaderText />
    </div>
  )
}
