
import { toast } from 'sonner';
import { supabase } from "@/integrations/supabase/client";

export async function signInWithEmail(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    toast.error(error.message);
    return { error };
  }

  if (data?.session) {
    await supabase.rpc('log_auth_event', {
      user_id: data.session.user.id,
      event_type: 'login',
      metadata: { provider: 'email' }
    });
  }

  return { data };
}

export async function signUpWithEmail(email: string, password: string, fullName: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      },
    },
  });

  if (error) {
    toast.error(error.message);
    return { error };
  }

  return { data };
}
