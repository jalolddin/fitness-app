import { Base } from "src/api/Base";

export class AuthAPI extends Base {
    static get entity() {
        return "users";
    }

    static async register({ email, password, firstName, lastName, phone }) {
        const body = {
            email,
            password,
            phone,
            first_name: firstName,
            last_name: lastName,
        };
        const { data } = await this.request({ auth: false }).post(
            `/${this.entity}/register`,
            body
        );
        return data;
    }

    static async login({ phone }) {
        const body = { phone };
        const { data } = await this.request({ auth: false }).post(
            `/${this.entity}/get-otp/`,
            body
        );
        return data;
    }

    static async loginTrainer({ phone }) {
        const body = { phone };
        const { data } = await this.request({ auth: false }).post(
            `/${this.entity}/trener/get-otp/`,
            body
        );
        return data;
    }

    static async authClient({ phone, otp }) {
        const body = { phone, otp };
        const { data } = await this.request({ auth: false }).post(
            `/${this.entity}/login/`,
            body
        );
        return data;
    }

    static async refreshToken({ token }) {
        const body = { refresh_token: token };
        const { data } = await this.request({ auth: false }).post(
            `/${this.entity}/refresh-token`,
            body
        );
        return data;
    }

    static async getMe() {
        const { data } = await this.request().get(`/${this.entity}/me`);
        return data;
    }
}
