import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 71, message: 'Remix Example 71' });
}

export default function RemixRoute71() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 71</h1><p>{data.message}</p></div>;
}
