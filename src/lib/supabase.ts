import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// If keys are missing, we export a proxy or a dummy client that logs warnings
export const supabase = supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : (null as any);

if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase credentials are missing. Check your .env.local file.');
}
