import { api } from "./api";

export async function addExerciseType(data) {
    const x = await api("exercises/addType", data)
    return x;
}