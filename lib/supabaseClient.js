import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mqfonngdwygxufqrpjma.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xZm9ubmdkd3lneHVmcXJwam1hIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MTc1NTMzOSwiZXhwIjoxOTk3MzMxMzM5fQ._blEIPQ6MXoTL4orB3EjF39VC35yfINIwtMZST2_4p8'
export const supabase = createClient(supabaseUrl, supabaseKey)
