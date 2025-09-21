import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/cn'
import * as React from 'react'

const buttonVariants = cva(
  'inline-flex items-center justify-center text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer w-max',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer',
        secondary: 'bg-white text-black px-6 py-3 hover:bg-gray-100',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: cn(
          'border border-white text-white bg-black px-5',
          'hover:bg-yellow-500 hover:text-black hover:border-yellow-500'
        ),
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'underline-offset-4 hover:underline text-primary',
        tertiary: cn(
          'relative inline-flex items-center justify-center px-6 py-3 font-bold text-black bg-yellow-500',
          'skew-x-[-6deg] [clip-path:polygon(0_0,100%_0,96%_100%,10%_95%)]',
          'transition-transform duration-300',
          ''
        ),
      },
      size: {
        default: 'h-10',
        sm: 'h-10 px-3',
        lg: 'h-11 px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button ref={ref} className={cn(buttonVariants({ size, variant }), className)} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
