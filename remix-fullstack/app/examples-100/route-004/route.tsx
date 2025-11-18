import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 4, message: 'Remix Example 4' });
}

export default function RemixRoute4() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 4</h1><p>{data.message}</p></div>;
}
