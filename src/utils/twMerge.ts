import { type ClassValue, clsx } from "clsx"
import { twMerge as twMergePrimitive } from "tailwind-merge"

export function twMerge(...inputs: ClassValue[]) {
  return twMergePrimitive(clsx(inputs))
}