import { StudentModel } from '../models';
import { httpGet, httpPost, URL } from './base';

const ENDPOINT = `${URL  }/students`;

export async function apiGetStudents() {
  const response = await httpGet(ENDPOINT);
  const data = await response.json();

  if (response.status !== 200) {
    throw new Error(data.error);
  }

  return data.map(({ id, name }) => new StudentModel(id, name));
}

export async function apiAddStudent(product) {
  const response = await httpPost(ENDPOINT, product);

  if (response.status !== 201) {
    const data = await response.json();
    throw new Error(data.error);
  }
}
