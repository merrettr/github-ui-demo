import fetch from 'isomorphic-fetch';
import { camelizeKeys } from 'humps';

export default async ({ endpoint }) => {
  const response = await fetch(endpoint);
  const json = camelizeKeys(await response.json());

  if (!response.ok) {
    throw json;
  }

  const linkString = response.headers.get('Link');
  const links = {};

  linkString &&
    linkString.split(',').forEach(link => {
      const sections = link.split(';');

      const url = sections[0].replace(/<(.*)>/, '$1').trim();
      const name = sections[1].replace(/rel="(.*)"/, '$1').trim();
      links[name] = url;
    });

  return {
    links,
    data: json.items ? json.items : json,
  };
};
