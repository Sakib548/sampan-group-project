type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: React.ReactNode,
    variant?: "primary" | "secondary" | "outline" | "danger" | "invert",
    size?: "sm" | "md" | "lg",
    borderRadius?: "rounded-xl" | "rounded-lg" | "rounded-md" | "rounded-full" | "rounded-none";
    leftIcon?: React.ReactNode,
    rightIcon?: React.ReactNode,


};


export default function Button({ children, variant = "primary", size = "md", borderRadius = "rounded-xl", leftIcon, rightIcon, ...props }: ButtonProps) {
    const baseStyles = `inline-flex items-center justify-center font-semibold whitespace-nowrap transition-all duration-150 ease-out cursor-pointer hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed select-none`

    const variantStyles = {
        // Deep obsidian with a soft shadow and 90% opacity hover
        primary:
            "bg-zinc-900 text-zinc-50 hover:bg-zinc-900/90 shadow-sm dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90",

        // Muted surface that feels integrated into the page
        secondary:
            "bg-zinc-100 text-zinc-900 hover:bg-zinc-200/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80",

        // Crisp white card surface with a precise border
        outline:
            "bg-white border border-zinc-200 text-zinc-900 shadow-xs hover:bg-zinc-100 dark:bg-zinc-950 dark:border-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800",

        // Refined crimson with smooth fade
        danger:
            "bg-red-600 text-white hover:bg-red-600/90 shadow-sm dark:bg-red-900 dark:text-zinc-50 dark:hover:bg-red-900/90",
        invert:
            "bg-transparent border border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white dark:border-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-100 dark:hover:text-zinc-900 transition-colors duration-200",

    };









    const sizeStyles = {
        "sm": "px-3.5 py-1.5 text-xs gap-1.5",
        "md": "px-5 py-2.5 text-sm gap-2",
        "lg": "px-6 py-3  text-base gap-2.5 tracking-tight"
    }
    // return <button className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${borderRadius}`} {...props}>
    //     {children}

    //     </button>;
    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${borderRadius}`}
            {...props}
        >
            {leftIcon && <span className="inline-flex shrink-0 items-center">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="inline-flex shrink-0 items-center">{rightIcon}</span>}
        </button>
    );

}