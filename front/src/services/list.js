import { api } from 'boot/axios'

// export const getLists = async () => {
//   return api.get('/lists')
// }
export async function getLists () {
  try {
    const response = await api.get('/lists')
    return response.data
  } catch (error) {
    console.error(error)
  }
}

// export const getList = async (id) => {
//   return api.get(`/list/${id}`)
// }
export async function getList (id) {
  try {
    const response = await api.get(`/list/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

// export const createList = async (name) => {
//   return api.post('/list', { name })
// }
export async function createList (name) {
  try {
    const response = await api.post('/list', { name })
    return response.data
  } catch (error) {
    console.error(error)
  }
}

// export const updateList = async (id, name) => {
//   return api.put(`/list/${id}`, { name })
// }
export async function updateList (id, name) {
  try {
    const response = await api.put(`/list/${id}`, { name })
    return response.data
  } catch (error) {
    console.error(error)
  }
}

// export const deleteList = async (id) => {
//   return api.delete(`/list/${id}`)
// }
export async function deleteList (id) {
  try {
    await api.delete(`/${id}`)
  } catch (error) {
    console.error(error)
  }
}
