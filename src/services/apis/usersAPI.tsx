import api from '../api';
import { UserModel } from '../../providers/models/UserModel';

export async function getUsers() {
    const response = await api.get(`Users`);
    return response;
};

export async function postUser(user: UserModel) {
    const response = await api.post(`Users`, user);
    return response;
};

export async function getUser(id: number) {
    const response = await api.get(`Users/${id}`);
    return response;
}

export async function deleteUser(id: number) {
    const response = await api.delete(`Users/${id}`);
    return response;
}

export async function putUser(user: UserModel) {
    const response = await api.put(`Users/${user.id}`, user);
    return response;
}