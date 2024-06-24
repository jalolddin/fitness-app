export class LocalStorageService {
  static get(key) {
    const value = localStorage[key]

    if (value !== undefined) {
      return JSON.parse(value)
    }

    return value
  }

  static set(key, value) {
    localStorage[key] = JSON.stringify(value)
  }

  static remove(key) {
    delete localStorage[key]
  }

  static has(key) {
    return this.get(key) !== undefined
  }
}
