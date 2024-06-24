import axios from 'axios'
import { BusService } from './BusService'
import { NotifyService } from './NotifyService'

export class HttpService {
  constructor(params = {}) {
    const controller = new AbortController()
    this.instance = axios.create({ baseURL: params.baseURL, signal: controller.signal })

    const abortRequest = () => {
      controller.abort()
      BusService.off(params.customCancelEvent, abortRequest)
      BusService.off('abortCurrentHTTPRequests', abortRequest)
    }

    if (params.customCancelEvent) {
      BusService.on(params.customCancelEvent, abortRequest)
    }

    if (params.shouldCancelOnRoute) {
      BusService.on('abortCurrentHTTPRequests', abortRequest)
    }

    return this.init()
  }

  init() {
    this.instance.interceptors.response.use(
      (response) => response,
      (error) => {
        const errors = error.response?.data?.errors?.errors
        if (errors !== undefined) {
          const message = Object.values(errors).reduce((acc, err) => `${acc}<p>${err}</p>`, '')
          NotifyService.create({
            type: 'negative',
            message,
            html: true,
            group: error.request.responseURL,
          })
        }

        return Promise.reject(error)
      }
    )

    return this.instance
  }
}
