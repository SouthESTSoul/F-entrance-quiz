import { StudentModel } from '../models';
import { httpGet, httpPost } from './base';

const getStudentsURL = 'http://localhost:8080/students';
const postStudentURL = 'http://localhost:8080/student';
export async function apiGetStudents() {
  const response = await httpGet(getStudentsURL);
  const data = await response.json();

  if (response.status !== 200) {
    throw new Error(data.error);
  }

  return data.map(({ id, name }) => new StudentModel(id, name));
}

export async function apiAddStudent(product) {
  const response = await httpPost(postStudentURL, product);

  if (response.status !== 201) {
    const data = await response.json();
    throw new Error(data.error);
  }
}
