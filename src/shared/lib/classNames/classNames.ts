type Mods = Record<string, boolean | string>

export function classNames(className: string, mods: Mods, additional: string[]): string {
    return [
        className,
        ...additional,
        ...Object.entries(mods)
            .filter(([cls, value]) => Boolean(value))
            .map(([cls]) => cls)
    ]
        .join(" ")
}

