import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zjaimhxoyrosobbyenoh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqYWltaHhveXJvc29iYnllbm9oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI1OTUxNTgsImV4cCI6MjA1ODE3MTE1OH0.dw3AwY2FgWE6qUmOFkjfysPfUi_bMJgLdhz8Jstass0';
export const supabase = createClient(supabaseUrl, supabaseKey);