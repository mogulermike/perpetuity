import { createClient } from '@supabase/supabase-js';

// Get these from your Supabase dashboard
const supabaseUrl = 'https://ixlgvmwqbrtwavxzynon.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4bGd2bXdxYnJ0d2F2eHp5bm9uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk3OTUyNzEsImV4cCI6MjA0NTM3MTI3MX0.wqrgvmtdkHL0O3x4PhD_B7krc1VWWHrAIWfZ8iKobXM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
