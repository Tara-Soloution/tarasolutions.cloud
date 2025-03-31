import { cn } from "@/lib/utils"

interface WaveIllustrationProps {
    className?: string
}

export function WaveIllustration({ className }: WaveIllustrationProps) {
    return (
        <div className={cn("absolute inset-0 overflow-hidden", className)}>
            {/* Wave Container */}
            <div className="absolute inset-0">
                {/* Wave 1 - Primary */}
                <div className="absolute inset-0">
                    <svg
                        className="absolute inset-0 h-full w-[200%] animate-wave"
                        viewBox="0 0 5760 300"
                        preserveAspectRatio="none"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0,50 C720,50 720,250 1440,250 C2160,250 2160,50 2880,50 C3600,50 3600,250 4320,250 C5040,250 5040,50 5760,50 V300 H0 V50Z"
                            fill="url(#gradient1)"
                        />
                        <defs>
                            <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="300" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
                                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                {/* Wave 2 - Accent */}
                <div className="absolute inset-0">
                    <svg
                        className="absolute inset-0 h-full w-[200%] animate-wave-delayed"
                        viewBox="0 0 5760 300"
                        preserveAspectRatio="none"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0,250 C720,250 720,50 1440,50 C2160,50 2160,250 2880,250 C3600,250 3600,50 4320,50 C5040,50 5040,250 5760,250 V300 H0 V250Z"
                            fill="url(#gradient2)"
                        />
                        <defs>
                            <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="300" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.15" />
                                <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.05" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                {/* Wave 3 - Background */}
                <div className="absolute inset-0">
                    <svg
                        className="absolute inset-0 h-full w-[200%] animate-wave-more-delayed"
                        viewBox="0 0 5760 300"
                        preserveAspectRatio="none"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0,150 C720,150 720,250 1440,250 C2160,250 2160,50 2880,50 C3600,50 3600,250 4320,250 C5040,250 5040,150 5760,150 V300 H0 V150Z"
                            fill="url(#gradient3)"
                        />
                        <defs>
                            <linearGradient id="gradient3" x1="0" y1="0" x2="0" y2="300" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="hsl(var(--background))" stopOpacity="0.15" />
                                <stop offset="100%" stopColor="hsl(var(--background))" stopOpacity="0.05" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    )
} 