import { cn } from "@/lib/utils"

interface TimelineItemProps {
    title: string
    subtitle: string
    description: string
    highlight: string
    technologies: string[]
}

interface TimelineProps {
    children?: React.ReactNode
    className?: string
}

export function Timeline({ children, className }: TimelineProps) {
    return (
        <div className={cn("relative", className)}>
            <div className="absolute left-0 top-0 h-full w-px bg-border" />
            <div className="relative space-y-8">
                {children}
            </div>
        </div>
    )
}

export function TimelineItem({ title, subtitle, description, highlight, technologies }: TimelineItemProps) {
    return (
        <div className="relative pl-8">
            <div className="absolute left-0 top-0 h-4 w-4 rounded-full bg-primary" />
            <div className="absolute left-[7px] top-4 h-full w-px bg-border" />
            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="text-sm text-muted-foreground">{subtitle}</p>
                </div>
                <p className="text-muted-foreground">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                        <span key={index} className="text-sm text-primary">{tech}</span>
                    ))}
                </div>
            </div>
        </div>
    )
} 