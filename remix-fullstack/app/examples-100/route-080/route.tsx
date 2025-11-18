import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 80, message: 'Remix Example 80' });
}

export default function RemixRoute80() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 80</h1><p>{data.message}</p></div>;
}
