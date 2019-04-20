import { api } from "./api";

export async function Register(data) {
    const x = await api("users/addUser", data)
    return x;
}