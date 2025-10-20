import { supabase } from './supabase';

export interface GuestMessage {
  id: number;
  name: string;
  message: string;
  created_at: string;
}

export async function getGuestMessages(): Promise<GuestMessage[]> {
  const { data, error } = await supabase
    .from('guest_messages')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

export async function addGuestMessage(name: string, message: string): Promise<GuestMessage> {
  const { data, error } = await supabase
    .from('guest_messages')
    .insert([{ name, message }])
    .select()
    .single();

  if (error) throw error;
  return data;
}