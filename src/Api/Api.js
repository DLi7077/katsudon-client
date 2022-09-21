import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();

export default async function Api(props) {
  const { method, endpoint, params, headers, body } = props;
  const request = {
    method: method,
    url: `${process.env.REACT_APP_API_TARGET}${endpoint}`,
    params: params,
    headers: headers,
    data: body,
  };

  return axios(request).then((res) => res.data);
}
