'use server';

import { revalidatePath, revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

/**
 * Server Actions Example 2
 * Next.js Server Actions for server-side mutations
 */

interface FormData2 {
  title: string;
  content: string;
  published: boolean;
}

interface ActionResult2 {
  success: boolean;
  message: string;
  data?: any;
  errors?: Record<string, string>;
}

// Create action
export async function createItem2(formData: FormData): Promise<ActionResult2> {
  try {
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const published = formData.get('published') === 'true';

    // Validation
    const errors: Record<string, string> = {};
    if (!title || title.length < 3) {
      errors.title = 'Title must be at least 3 characters';
    }
    if (!content || content.length < 10) {
      errors.content = 'Content must be at least 10 characters';
    }

    if (Object.keys(errors).length > 0) {
      return { success: false, message: 'Validation failed', errors };
    }

    // Simulate database insert
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const newItem = {
      id: `item-${Date.now()}`,
      title,
      content,
      published,
      createdAt: new Date().toISOString(),
    };

    // Revalidate cache
    revalidatePath('/items');
    revalidateTag('items-2');

    return {
      success: true,
      message: 'Item created successfully',
      data: newItem,
    };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

// Update action
export async function updateItem2(
  id: string,
  formData: FormData
): Promise<ActionResult2> {
  try {
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;

    // Simulate database update
    await new Promise(resolve => setTimeout(resolve, 500));

    const updatedItem = {
      id,
      title,
      content,
      updatedAt: new Date().toISOString(),
    };

    revalidatePath(`/items/${id}`);
    revalidateTag(`item-${id}`);

    return {
      success: true,
      message: 'Item updated successfully',
      data: updatedItem,
    };
  } catch (error) {
    return {
      success: false,
      message: 'Update failed',
    };
  }
}

// Delete action
export async function deleteItem2(id: string): Promise<ActionResult2> {
  try {
    // Simulate database deletion
    await new Promise(resolve => setTimeout(resolve, 300));

    revalidatePath('/items');
    revalidateTag('items-2');

    return {
      success: true,
      message: 'Item deleted successfully',
      data: { deletedId: id },
    };
  } catch (error) {
    return {
      success: false,
      message: 'Delete failed',
    };
  }
}

// Toggle action
export async function togglePublished2(id: string): Promise<ActionResult2> {
  try {
    await new Promise(resolve => setTimeout(resolve, 200));

    revalidatePath(`/items/${id}`);

    return {
      success: true,
      message: 'Published status toggled',
      data: { id, toggled: true },
    };
  } catch (error) {
    return {
      success: false,
      message: 'Toggle failed',
    };
  }
}

// Batch action
export async function batchProcess2(ids: string[]): Promise<ActionResult2> {
  try {
    await new Promise(resolve => setTimeout(resolve, ids.length * 100));

    revalidatePath('/items');

    return {
      success: true,
      message: `Processed ${ids.length} items`,
      data: { processedIds: ids },
    };
  } catch (error) {
    return {
      success: false,
      message: 'Batch processing failed',
    };
  }
}

// Form action with redirect
export async function submitAndRedirect2(formData: FormData) {
  const result = await createItem2(formData);
  
  if (result.success && result.data) {
    redirect(`/items/${result.data.id}`);
  }
  
  return result;
}
