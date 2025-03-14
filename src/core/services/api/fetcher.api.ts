const apiFetcher = (url: string) =>
  fetch("https://uccaviar.com/api/" + url).then((res: Response) => res.json());

export default apiFetcher;
