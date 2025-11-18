import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 78, message: 'Remix Example 78' });
}

export default function RemixRoute78() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 78</h1><p>{data.message}</p></div>;
}
