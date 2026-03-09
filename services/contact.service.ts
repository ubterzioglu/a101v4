import { createClient as createClientBrowser } from '@/lib/supabase/client';
import type { Database } from '@/types';

type ContactMessage = Database['public']['Tables']['contact_messages']['Row'];

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

/**
 * Submits a contact form message
 * @param data - The contact form data
 * @returns Promise that resolves when message is submitted
 * @throws Error if submission fails
 */
export async function submitContactForm(data: ContactFormData): Promise<void> {
  const supabase = createClientBrowser();

  const { error } = await supabase
    .from('contact_messages')
    .insert(data as any);

  if (error) {
    throw new Error(`Failed to submit contact form: ${error.message}`);
  }
}
