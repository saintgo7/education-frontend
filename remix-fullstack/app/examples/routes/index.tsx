import type { LoaderFunction } from '@remix-run/node';

export const loader: LoaderFunction = async () => {
  return null;
};

export default function ${file}() {
  return <div>${file} Route</div>;
}
