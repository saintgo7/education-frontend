import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 83, message: 'Remix Example 83' });
}

export default function RemixRoute83() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 83</h1><p>{data.message}</p></div>;
}
