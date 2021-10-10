import axios from 'axios'

export const getTableData = () => {
  return axios({
    method: 'GET',
    url: 'api/table'
  })
}
