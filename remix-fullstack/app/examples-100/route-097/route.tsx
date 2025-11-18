import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 97, message: 'Remix Example 97' });
}

export default function RemixRoute97() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 97</h1><p>{data.message}</p></div>;
}
