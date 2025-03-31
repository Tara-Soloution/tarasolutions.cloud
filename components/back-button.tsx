import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

interface BackButtonProps {
    href: string
    text?: string
}

export default function BackButton({ href, text = "Back to Solutions" }: BackButtonProps) {
    return (
        <Link href={href}>
            <Button
                variant="ghost"
                className="group relative -ml-4 mb-8 flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                {text}
            </Button>
        </Link>
    )
} 