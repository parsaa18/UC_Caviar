const baseURL = "http://localhost:3000/api/";

const apiFetcher = (url: string) =>
  fetch(baseURL + url).then((res: Response) => res.json());

export default apiFetcher;
