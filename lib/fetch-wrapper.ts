const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const AUTH_TOKEN = process.env.SECRET_KEY;

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
type Cache = 'force-cache' | 'no-store';
type Revalidate = false | 0 | number;
type Tags = string[];

type FetchOptions = {
  method: HttpMethod;
  headers: HeadersInit;
  body?: any;
  cache?: Cache;
  next?: {
    revalidate?: Revalidate;
    tags?: Tags;
  };
};

async function fetchWrapper(
  url: string,
  method: HttpMethod,
  body?: any,
  cache?: Cache,
  revalidate?: Revalidate,
  tags?: Tags
) {
  const options: FetchOptions = {
    method,
    headers: {
      'Content-Type': 'application/json',
      authorization: AUTH_TOKEN
    } as HeadersInit
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  if (cache) {
    options.cache = cache;
  }

  if (revalidate || tags) {
    options.next = {};
    if (revalidate !== undefined) {
      options.next.revalidate = revalidate;
    }
    if (tags) {
      options.next.tags = tags;
    }
  }
  const response = await fetch(
    `${BASE_URL}/api${url.startsWith('/') ? url : `/${url}`}`,
    options
  );
  if (!response.ok) {
    throw new Error(`Fetch request failed: ${response.status}`);
  }
  return response.json();
}

export namespace api {
  export const get = (
    url: string,
    cache?: Cache,
    revalidate?: Revalidate,
    tags?: string[]
  ) => fetchWrapper(url, 'GET', undefined, cache, revalidate, tags);

  export const post = (
    url: string,
    body: any,
    cache?: Cache,
    revalidate?: Revalidate,
    tags?: string[]
  ) => fetchWrapper(url, 'POST', body, cache, revalidate, tags);

  export const patch = (
    url: string,
    body: any,
    cache?: Cache,
    revalidate?: Revalidate,
    tags?: string[]
  ) => fetchWrapper(url, 'PATCH', body, cache, revalidate, tags);

  export const put = (
    url: string,
    body: any,
    cache?: Cache,
    revalidate?: Revalidate,
    tags?: string[]
  ) => fetchWrapper(url, 'PUT', body, cache, revalidate, tags);

  export const del = (
    url: string,
    cache?: Cache,
    revalidate?: Revalidate,
    tags?: string[]
  ) => fetchWrapper(url, 'DELETE', undefined, cache, revalidate, tags);
}
