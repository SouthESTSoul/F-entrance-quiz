import { StudentModel } from '../models';
import { httpGet, httpPost } from './base';
// TODO GTB-工程实践: - http://localhost:8080可以提取为公共变量
const getStudentsURL = 'http://localhost:8080/students';
const postStudentURL = 'http://localhost:8080/student';

// TODO GTB-工程实践: - 方法的名字里面不用加api
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
