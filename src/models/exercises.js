import { api } from "./api";

export async function addExercise(data) {
    const x = await api("exercises/addExercise", data)
    return x;
}