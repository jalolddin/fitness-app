import { AuthService, HttpService } from "src/services";

export class Base {
  static get entity() {
    throw new Error('"entity" getter not defined');
  }

  static request(payload = {}) {
    const params = { version: "v1", auth: true, ...payload };
    const httpInstance = new HttpService({
      baseURL: "https://87.249.54.136/api/v1",
      ...params,
    });

    httpInstance.interceptors.request.use(
      async (config) => {
        if (params.auth) {
          // if (AuthService.hasRefreshToken) {
          //     if (AuthService.isRefreshing) {
          //         await AuthService.refreshingEnd();
          //     }

          //     if (!AuthService.hasAccessToken) {
          //         await AuthService.refresh();
          //     }
          // }
          config.headers.Authorization = AuthService.bearer;
        }

        return config;
      },
      (error) => Promise.reject(error) // Do something with request error
    );

    return httpInstance;
  }
}
