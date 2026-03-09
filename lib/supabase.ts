// Re-export Supabase clients
export { createClient as createClientBrowser } from './supabase/client';
export { createClient as createClientServer } from './supabase/server';

// Export types
export type { Database } from '@/types';

// Legacy export for backward compatibility
import { createClient as createClientBrowser } from './supabase/client';

export const supabase = createClientBrowser();
