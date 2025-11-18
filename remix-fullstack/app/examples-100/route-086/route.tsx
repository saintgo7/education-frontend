import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 86, message: 'Remix Example 86' });
}

export default function RemixRoute86() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 86</h1><p>{data.message}</p></div>;
}
