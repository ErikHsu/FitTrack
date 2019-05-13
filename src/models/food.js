import { api } from "./api";

export async function addFood(data) {
	const x = await api("foods/addFood", data)
	return x;
}

export async function getFoods() {
	const x = await api("foods/getFoods")
	return x;
}

export async function searchFood(data) {
	const x = await api("foods/searchFood", data)
	return x;
}