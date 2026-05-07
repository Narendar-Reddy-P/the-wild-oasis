import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://tpflmjjtyazreytvzzwg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwZmxtamp0eWF6cmV5dHZ6endnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgwNzk0OTcsImV4cCI6MjA5MzY1NTQ5N30.EWwqhcPXq_nmBUzJ0gSlHxVmS77Z4SY-9rmeu1_qmr8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
