import {api} from "./api";

export async function editBody(data) {
	const x = await api("body_histories/editBody", data)
	return x;
}

export async function getBodyHistory(data) {
	const x = await api("body_histories/getHistory", data)
	return x;
}