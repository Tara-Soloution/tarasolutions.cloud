'use client'

import { Button } from "@/components/ui/button"

interface ScrollButtonProps {
    targetId: string
    children: React.ReactNode
    className?: string
}

export default function ScrollButton({ targetId, children, className }: ScrollButtonProps) {
    const handleClick = () => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <Button
            onClick={handleClick}
            className={className}
        >
            {children}
        </Button>
    )
} 