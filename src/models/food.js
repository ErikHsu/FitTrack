import { api } from "./api";

export async function addFood(data) {
	const x = await api("foods/addFood", data)
	return x;
}

export async function getFoods() {
	const x = await api("foods/getFoods")
	return x;
}