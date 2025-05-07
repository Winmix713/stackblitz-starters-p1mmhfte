// Fixed import path to match the existing project structure
import { useToast as useToastOriginal, toast } from "@/components/ui/use-toast"

export const useToast = useToastOriginal

export { toast }
