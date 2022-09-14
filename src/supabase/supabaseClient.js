import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vohbrjdjfuqunvmwzpwv.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDQzMzA3OCwiZXhwIjoxOTU2MDA5MDc4fQ.O5-zzBkE-KqcXYEwkHaGjPrZylTcfkcldfV0WT5ycW4";
export const supabase = createClient(supabaseUrl, supabaseKey);
