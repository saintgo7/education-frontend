import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 68, message: 'Remix Example 68' });
}

export default function RemixRoute68() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 68</h1><p>{data.message}</p></div>;
}
