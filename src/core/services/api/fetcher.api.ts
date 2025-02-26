const hostname = "uccaviar.com";
const port = process.env.PORT || 3000;

const baseURL = `https://${hostname}/api/`;

const apiFetcher = (url: string) =>
  fetch("http://localhost:3000/api/" + url).then((res: Response) => res.json());

export default apiFetcher;
