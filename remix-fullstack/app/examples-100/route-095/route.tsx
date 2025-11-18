import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 95, message: 'Remix Example 95' });
}

export default function RemixRoute95() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 95</h1><p>{data.message}</p></div>;
}
