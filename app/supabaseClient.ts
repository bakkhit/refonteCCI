import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dorimtdgpubpodfraduh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRvcmltdGRncHVicG9kZnJhZHVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0MDkzNTksImV4cCI6MjA2Njk4NTM1OX0.n1DPNmvQj-sP9Mqg5q-6S6V5hQLVGgU7gVPZEisXx44';

export const supabase = createClient(supabaseUrl, supabaseKey);