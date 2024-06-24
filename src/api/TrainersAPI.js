import { Base } from "src/api/Base";

export class TrainersAPI extends Base {
    static get entity() {
        return "treners";
    }

    static async editUserData({
        email,
        password,
        first_name,
        last_name,
        phone,
        gender,
        birthday,
    }) {
        const body = {
            email,
            password,
            phone,
            first_name,
            last_name,
            gender,
            birthday,
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

    static async getAll() {
        const { data } = await this.request({ auth: true }).get(`/${this.entity}`);
        return data;
    }
}
