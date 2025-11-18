import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 89, message: 'Remix Example 89' });
}

export default function RemixRoute89() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 89</h1><p>{data.message}</p></div>;
}
