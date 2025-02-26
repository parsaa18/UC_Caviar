const hostname = "uccaviar.com";
const port = process.env.PORT || 3000;

const baseURL = `https://${hostname}/api/`;

const apiFetcher = (url: string) =>
  fetch("https://uccaviar.com/api/" + url).then((res: Response) => res.json());

export default apiFetcher;
