import { api, Globals } from "./api";

export async function Register(data) {
    const x = await api("users/addUser", data)
    return x;
}

export async function Login(data) {
    const x = await api("users/login", data)
    return x;
}