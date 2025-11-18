import { NextRequest, NextResponse } from 'next/server';

/**
 * API Route Example 10
 * Next.js 14 App Router API Route Handler
 */

interface RequestBody10 {
  name?: string;
  value?: number;
  data?: any;
}

interface ResponseData10 {
  success: boolean;
  message: string;
  data: any;
  timestamp: number;
  requestId: string;
}

// GET handler
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get('id');
  const filter = searchParams.get('filter');

  try {
    // Simulate database query
    await new Promise(resolve => setTimeout(resolve, 100));

    const data: ResponseData10 = {
      success: true,
      message: 'GET request successful for route 10',
      data: {
        id: id || '10',
        filter: filter || 'none',
        items: Array.from({ length: 5 }, (_, idx) => ({
          id: `10-${idx}`,
          name: `Item ${idx + 1}`,
          value: Math.random() * 100,
        })),
      },
      timestamp: Date.now(),
      requestId: `req-10-${Date.now()}`,
    };

    return NextResponse.json(data, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30',
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

// POST handler
export async function POST(request: NextRequest) {
  try {
    const body: RequestBody10 = await request.json();

    // Validate request
    if (!body.name) {
      return NextResponse.json(
        { success: false, message: 'Name is required' },
        { status: 400 }
      );
    }

    // Simulate database insertion
    await new Promise(resolve => setTimeout(resolve, 200));

    const data: ResponseData10 = {
      success: true,
      message: 'POST request successful for route 10',
      data: {
        id: `new-${Date.now()}`,
        ...body,
        createdAt: new Date().toISOString(),
      },
      timestamp: Date.now(),
      requestId: `req-10-${Date.now()}`,
    };

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to process request',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

// PUT handler
export async function PUT(request: NextRequest) {
  try {
    const body: RequestBody10 = await request.json();

    const data: ResponseData10 = {
      success: true,
      message: 'PUT request successful for route 10',
      data: {
        ...body,
        updatedAt: new Date().toISOString(),
      },
      timestamp: Date.now(),
      requestId: `req-10-${Date.now()}`,
    };

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Update failed' },
      { status: 500 }
    );
  }
}

// DELETE handler
export async function DELETE(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json(
      { success: false, message: 'ID is required' },
      { status: 400 }
    );
  }

  const data: ResponseData10 = {
    success: true,
    message: `Deleted item ${id} from route 10`,
    data: { deletedId: id },
    timestamp: Date.now(),
    requestId: `req-10-${Date.now()}`,
  };

  return NextResponse.json(data);
}
