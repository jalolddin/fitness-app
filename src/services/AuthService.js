import moment from "moment";
import $router from "src/router";
import { AuthAPI } from "src/api";
import { LocalStorageService } from "./index";

export class AuthService {
  // static isRefreshing = false;
  static get bearer() {
    if (this.hasAccessToken) {
      return `Bearer ${this.accessToken.token}`;
    }
    return "";
  }

  static get accessToken() {
    return LocalStorageService.get("accessToken");
  }

  static set accessToken({ token, expiresIn }) {
    LocalStorageService.set("accessToken", { token, expiresIn });
  }

  static get hasAccessToken() {
    const { token } = LocalStorageService.get("accessToken");
    const hasToken = token !== undefined;
    return hasToken;
  }

  static get refreshToken() {
    return LocalStorageService.get("refreshToken");
  }

  static set refreshToken(token) {
    LocalStorageService.set("refreshToken", token);
  }

  static get hasRefreshToken() {
    return LocalStorageService.has("refreshToken");
  }

  static refreshingEnd() {
    return new Promise((resolve) => {
      const intervalId = setInterval(() => {
        // if (this.isRefreshing) {
        //     return;
        // }
        clearInterval(intervalId);
        resolve();
      }, 200);
    });
  }

  static setTokens({ accessToken, expiresIn, refreshToken }) {
    this.accessToken = {
      token: accessToken,
      expiresIn: Date.now() + expiresIn * 1000,
    };
    this.refreshToken = refreshToken;
  }

  static async logout() {
    LocalStorageService.remove("accessToken");
    LocalStorageService.remove("refreshToken");
    this.refreshing = false;
    // route to login page
    const router = $router();
    await router.replace({ name: "login" });
    router.go();
  }

  static refresh() {
    return new Promise(async (resolve, reject) => {
      try {
        // this.isRefreshing = true;
        const data = AuthAPI.refreshToken({ token: this.refreshToken });
        this.setTokens({
          accessToken: data.access_token,
          refreshToken: data.refresh_token,
          expiresIn: data.expires_in,
        });
        // this.isRefreshing = false;
        resolve();
      } catch (error) {
        this.logout();
        reject(error);
      }
    });
  }
}
