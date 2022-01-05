import { useRouter } from 'next/router';

export const extractFirstParam = (param: string | string[] | undefined) =>
  Array.isArray(param) ? param[0] : param;

export const useSingleQueryParam = (paramName: string) => {
  const router = useRouter();

  return extractFirstParam(router.query[paramName]);
};
