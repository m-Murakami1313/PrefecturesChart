import brewer from 'chartjs-plugin-colorschemes'
import { Line } from 'react-chartjs-2'

import styles from './Charts.module.scss'

interface Props {
  checkedPrefectures: {
    prefCode: string
    prefName: string
    prefData?: {
      data: {
        value: number
        year: number
      }[]
    }[]
  }[]
}

export const Charts = ({ checkedPrefectures }: Props) => {
  const labels =
    checkedPrefectures[0].prefData &&
    checkedPrefectures[0].prefData[0].data.map((data) => data.year)
  const graphDataSets =
    checkedPrefectures[0].prefData &&
    checkedPrefectures.map((data) => ({
      label: data.prefName,
      data: data.prefData && data.prefData[0].data.map((data) => data.value),
    }))

  const graphData = {
    labels: labels,
    datasets: graphDataSets,
  }

  const options: {} = {
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: '年度',
          },
        },
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: '人口数',
          },
        },
      ],
    },
    maintainAspectRatio: false,
    plugin: {
      colorschemes: {
        scheme: brewer,
      },
    },
  }

  return (
    <div className={styles.chartContainner}>
      <Line height={400} data={graphData} options={options} />
    </div>
  )
}
