import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 74, message: 'Remix Example 74' });
}

export default function RemixRoute74() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 74</h1><p>{data.message}</p></div>;
}
