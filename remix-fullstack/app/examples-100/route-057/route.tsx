import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  return json({ id: 57, message: 'Remix Example 57' });
}

export default function RemixRoute57() {
  const data = useLoaderData<typeof loader>();
  return <div><h1>Remix Example 57</h1><p>{data.message}</p></div>;
}
