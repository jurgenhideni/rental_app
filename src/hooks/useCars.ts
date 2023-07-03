import { supabase } from '@/api/supabase'

import { useQuery } from '@tanstack/react-query'

const getCars = async () => {
  const { data: cars } = await supabase.from('cars').select('*')

  return cars
}

export default function useCars() {
  const query = useQuery(['cars'], getCars)

  return { ...query }
}
