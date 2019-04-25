import { api } from "./api";

export async function getProfile(data) {
    try{
    const x = await api("peoples/getProfile", data)
    return x;
    } catch {
        throw Error("getProfile Error")
    }
}

