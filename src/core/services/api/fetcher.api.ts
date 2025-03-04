const apiFetcher = (url: string) =>
  fetch("http://uccaviar.com/api/" + url).then((res: Response) => res.json());

export default apiFetcher;
