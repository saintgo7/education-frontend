import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 79, message: 'Remix Example 79' });
}

export default function RemixRoute79() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 79</h1><p>{data.message}</p></div>;
}
