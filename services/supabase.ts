import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jrrpxgtuiarderxironm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpycnB4Z3R1aWFyZGVyeGlyb25tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYxNzA2MzgsImV4cCI6MjAyMTc0NjYzOH0.3uyoaj3hgAyM8XHm25ZZswipjb7KKCqfKdNtkszamAA";

if (!supabaseUrl.length || !supabaseKey.length) {
  throw new Error("Supabase Credentials Not Provided");
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
export { supabaseUrl };
