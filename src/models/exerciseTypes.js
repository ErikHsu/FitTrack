import { api } from "./api";

export async function addExerciseType(data) {
    const x = await api("exercise_types/addType", data)
    return x;
}

export async function getExerciseTypes() {
    const x = await api("exercise_types/getTypes")
    return x;
}