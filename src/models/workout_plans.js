import { api } from "./api";

export async function addWorkoutPlan(data) {
	const x = await api("workoutPlans/add", data);
	return x;
};

export async function linkToUser(data) {
	const x = await api("workoutPlans/linkToUser", data);
	return x;
}