import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {  //cn - className для склейки классов
  return twMerge(clsx(inputs))
}
