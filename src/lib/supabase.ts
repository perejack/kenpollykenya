import { createClient } from "@supabase/supabase-js";

// Client-side Supabase (use anon key ONLY)
const supabaseUrl = "https://mgkvggwifttjkwtbfvcf.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1na3ZnZ3dpZnR0amt3dGJmdmNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU2ODExMDQsImV4cCI6MjA3MTI1NzEwNH0.P6Xd0grKsEaQ7EOIlHIEoTCcdGBJ5rrtxayyaVDzSTw";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Product = {
  id: number;
  name: string;
  description?: string | null;
  price: number;
  category?: string | null;
  image_url?: string | null;
  featured?: boolean | null;
  created_at?: string;
};
