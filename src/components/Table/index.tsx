import styles from './styles.module.scss'

export interface TableProps {
  dataBody: string[]
}

export const Table = ({ dataBody }: TableProps) => {
  return (
    <>
      <table className={styles.container}>
        <thead>
          <tr>
            <th>Origem</th>
            <th>Destino</th>
            <th>Tempo</th>
            <th>Plano FaleMais</th>
            <th>Com FaleMais</th>
            <th>Sem FaleMais</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {dataBody.map((data) => (
              <td key={data}>{data}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </>
  )
}
