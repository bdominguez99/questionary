import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://mwdeubytqwdggweqmzpr.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13ZGV1Ynl0cXdkZ2d3ZXFtenByIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjA3NzAzNTcsImV4cCI6MTk3NjM0NjM1N30.u553dDLve5mOwSJA7wAgJ4PtfT9WpJwfmgTsm01f0I8'
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
