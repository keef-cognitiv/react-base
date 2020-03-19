import axios from 'axios';
const { REACT_APP_HOST } = process.env;

export const postData = async (url, data) => {
  const res = await axios({
    method: 'post',
    url: `${REACT_APP_HOST}${url}`,
    data: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res;
};
export const getData = async url => {
  const res = await axios({
    method: 'get',
    url: `${REACT_APP_HOST}${url}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res;
};
