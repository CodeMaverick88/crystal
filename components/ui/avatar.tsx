import { cn } from "@/constants/utils"

interface AvatarProps {
  className?: string
  children?: React.ReactNode
}

export function Avatar({ className, children }: AvatarProps) {
  return <div className={cn("rounded-full bg-gray-700", className)}>{children}</div>
}

interface AvatarImageProps {
  src: string
  alt?: string
}

export function AvatarImage({ src, alt }: AvatarImageProps) {
  return <img src={src} alt={alt} className="w-full h-full rounded-full object-cover" />
}

interface AvatarFallbackProps {
  children: React.ReactNode
}

export function AvatarFallback({ children }: AvatarFallbackProps) {
  return <div className="flex items-center justify-center w-full h-full">{children}</div>
}
