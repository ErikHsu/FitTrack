import { api } from "./api";

export async function getProfile(data) {
    const x = await api("peoples/getProfile", data)
    return x;
}

