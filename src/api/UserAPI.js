import { Base } from "src/api/Base";

export class UserAPI extends Base {
    static get entity() {
        return "users";
    }

    static async editUserData({
        email,
        password,
        first_name,
        last_name,
        phone,
        gender,
        birthday,
        height,
        weight,
    }) {
        const body = {
            email,
            password,
            phone,
            first_name,
            last_name,
            gender,
            birthday,
            height,
            weight,
        };
        const { data } = await this.request({ auth: true }).put(
            `/${this.entity}/me`,
            body
        );
        return data;
    }

    static async createUserSurvey({ id, survey }) {
        const body = {
            survey,
        };
        const { data } = await this.request({ auth: true }).post(
            `/${this.entity}/surveys/${id}`,
            body
        );
        return data;
    }

    static async getMe() {
        const { data } = await this.request({ auth: true }).get(
            `/${this.entity}/me`
        );
        return data;
    }
}
