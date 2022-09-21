export type fetchDataType = {
  result: {
    prefCode: string
    prefName: string
  }[]
}

export interface checkedPrefecturesTypes {
  prefCode: string
  prefName: string
  prefData?: {
    data: {
      value: number
      year: number
    }[]
  }[]
}

export interface prefecturesDataTypes {
  result: {
    data: {
      value: number
      year: number
    }
  }
}
