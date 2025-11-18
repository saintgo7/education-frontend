import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 8, message: 'Remix Example 8' });
}

export default function RemixRoute8() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 8</h1><p>{data.message}</p></div>;
}
