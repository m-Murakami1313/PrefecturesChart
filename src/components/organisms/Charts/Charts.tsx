import brewer from 'chartjs-plugin-colorschemes'
import { Line } from 'react-chartjs-2'

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

  console.log(graphDataSets)

  const graphData = {
    labels: labels,
    datasets: graphDataSets,
  }

  const options: {} = {
    maintainAspectRatio: false,
    plugin: {
      colorschemes: {
        scheme: brewer,
      },
    },
  }

  const divStyle: React.CSSProperties = {
    margin: '10px',
    width: '800px',
    height: '400px',
  }
  return (
    <div className='App' style={divStyle}>
      <Line height={300} width={300} data={graphData} options={options} id='chart-key' />
    </div>
  )
}
