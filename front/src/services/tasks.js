import { api } from 'boot/axios'

// export const getTasks = async (listId) => {
//   return api.get(`/list/${listId}/tasks`)
// }
export async function getTasks (listId) {
  try {
    const response = await api.get(`/list/${listId}/tasks`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

// export const getTask = async (listId, taskId) => {
//   return api.get(`/list/${listId}/tasks/${taskId}`)
// }
export async function getTask (listId, taskId) {
  try {
    const response = await api.get(`/list/${listId}/tasks/${taskId}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

// export const createTask = async (listId, task) => {
//   return api.post(`/list/${listId}/tasks`, task)
// }
export async function createTask (listId, task) {
  try {
    const response = await api.post(`/list/${listId}/tasks`, task)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

// export const updateTask = async (listId, taskId, task) => {
//   return api.put(`/list/${listId}/tasks/${taskId}`, task)
// }
export async function updateTask (listId, taskId, task) {
  try {
    const response = await api.put(`/list/${listId}/tasks/${taskId}`, task)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

// export const deleteTask = async (listId, taskId) => {
//   return api.delete(`/list/${listId}/tasks/${taskId}`)
// }
export async function deleteTask (listId, taskId) {
  try {
    await api.delete(`/list/${listId}/tasks/${taskId}`)
  } catch (error) {
    console.error(error)
  }
}
