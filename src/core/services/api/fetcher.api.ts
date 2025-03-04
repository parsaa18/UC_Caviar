const apiFetcher = (url: string) =>
  fetch("http://localhost:3000/api/" + url).then((res: Response) => res.json());

export default apiFetcher;
