import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 94, message: 'Remix Example 94' });
}

export default function RemixRoute94() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 94</h1><p>{data.message}</p></div>;
}
