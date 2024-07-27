import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://spfuazsvwsorulnglwww.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNwZnVhenN2d3NvcnVsbmdsd3d3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA2Njg1NzIsImV4cCI6MjAxNjI0NDU3Mn0.41vpKE1LKDF3bueYa7EUTe6UnfS-3k6mR7iq13Hfu1M";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
