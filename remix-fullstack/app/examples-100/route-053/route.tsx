import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 53, message: 'Remix Example 53' });
}

export default function RemixRoute53() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 53</h1><p>{data.message}</p></div>;
}
