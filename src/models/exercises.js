import { api } from "./api";

export async function addExercise(data) {
    const x = await api("exercises/addExercise", data)
    return x;
}

export async function getExercises() {
    const x = await api("exercises/getExercises")
    return x;
}

export async function getAllExerciseInfo() {
    const x = await api("exercises/getAllInfo")
    return x;
}