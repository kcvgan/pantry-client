import { AxiosPromise } from "axios";

const on = <RES, ERR = any> (promise: AxiosPromise): Promise<[RES, ERR]> => {
  return promise
    .then(({ data }): [RES, ERR] => [data, null] as [RES, ERR])
    .catch((error): [RES, ERR] => [null, error] as [RES, ERR])
}

export default on;