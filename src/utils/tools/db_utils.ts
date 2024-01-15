const PROJECT_NAME = 'dbName'

/**
 * 操作本地缓存
 */
export const DB = {
  LS: {
    getKey(key: string) {
      return `${PROJECT_NAME}_${key}`
    },
    set(key, value) {
      const newKey = this.getKey(key)
      try {
        return localStorage.setItem(newKey, JSON.stringify(value))
      } catch (err) {
        return null
      }
    },
    get(key: string) {
      const newKey = this.getKey(key)
      try {
        return JSON.parse(localStorage.getItem(newKey) || '')
      } catch (err) {
        return null
      }
    },
    remove(key: string) {
      const newKey = this.getKey(key)
      try {
        return localStorage.removeItem(newKey)
      } catch (err) {
        return null
      }
    },
    clear() {
      localStorage.clear()
    },
  },
  SS: {
    getKey(key: string) {
      return `${PROJECT_NAME}_${key}`
    },
    set<T>(key: string, value: T) {
      const newKey = this.getKey(key)
      try {
        return sessionStorage.setItem(newKey, JSON.stringify(value))
      } catch (err) {
        return null
      }
    },
    get(key: string) {
      const newKey = this.getKey(key)
      try {
        return JSON.parse(sessionStorage.getItem(newKey) || '')
      } catch (err) {
        return null
      }
    },
    remove(key: string) {
      const newKey = this.getKey(key)
      try {
        return sessionStorage.removeItem(newKey)
      } catch (err) {
        return null
      }
    },
    clear() {
      sessionStorage.clear()
    },
  },
}
