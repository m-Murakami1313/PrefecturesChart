import React from 'react'

import styles from './Header.module.scss'
import { HeaderText } from '@/components/organisms/HearderText/HeaderText'

export const Header = () => {
  return (
    <div className={styles.header}>
      <HeaderText />
    </div>
  )
}
