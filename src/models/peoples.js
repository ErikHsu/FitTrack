import { api } from "./api";

export async function getProfile(data) {
    const x = await api("peoples/profile", data)
    return x;
}

export async function editProfile(data) {
    const x = await api("peoples/edit", data)
    return x
}
