import { cn } from "@/constants/utils"

interface CardProps {
  className?: string
  children?: React.ReactNode
  onClick?: () => void
}

export function Card({ className, children, onClick }: CardProps) {
  return (
    <div
      className={cn("rounded-lg shadow-md bg-gray-900", className)}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

interface CardContentProps {
  className?: string
  children: React.ReactNode
}

export function CardContent({ className, children }: CardContentProps) {
  return <div className={cn("p-4", className)}>{children}</div>
}
