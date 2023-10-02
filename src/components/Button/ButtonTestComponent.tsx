import type { ComponentProps } from "react";

const Button = forwardRef<
  HTMLButtonElement,
  Omit<ComponentProps<"button">, "className">
>(({ children, ...rest }, ref) => {
  return (
    <button
      ref={ref}
      className="flex-none w-full px-6 py-3 text-lg font-semibold leading-6 text-white transition-colors duration-200 bg-blue-600 border border-transparent sm:w-auto hover:bg-blue-700 rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none"
      {...rest}
    >
      {children}
    </button>
  );
});

export default Button;