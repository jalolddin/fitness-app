import { Base } from "src/api/Base";

export class FitnessProgrammAPI extends Base {
    static get entity() {
        return "fitness-programs";
    }

    static async create({ name, span, period_start, period_end }) {
        const body = {
            name,
            span,
            period_start,
            period_end,
        };
        const { data } = await this.request({ auth: true }).post(
            `/${this.entity}`,
            body
        );
        return data;
    }

    static async getAll() {
        const { data } = await this.request({ auth: true }).get(`/${this.entity}`);
        return data;
    }

    static async getAllExercises({ id }) {
        const { data } = await this.request({ auth: true }).get(
            `/${this.entity}/${id}/workout`,
            body
        );
        return data;
    }

    static async createFitnessProgramm({ name, description, id }) {
        const body = {
            name,
            description,
        };
        const { data } = await this.request({ auth: true }).post(
            `/${this.entity}/${id}/workout`,
            body
        );
        return data;
    }

    static async createExercisesToFitness({
        workout_id,
        exercise_id,
        parameters,
        notes,
    }) {
        const body = {
            exercise_id,
            parameters,
            notes,
        };
        const { data } = await this.request({ auth: true }).post(
            `/${this.entity}/${id}/workout/${workout_id}/exercise`,
            body
        );
        return data;
    }

    static async deleteExercisesToFitness({ workout_id, id }) {
        const { data } = await this.request({ auth: true }).delete(
            `/${this.entity}/${id}/workout/${workout_id}/exercise/${id}`
        );
        return data;
    }
}
