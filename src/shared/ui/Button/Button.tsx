import { ButtonHTMLAttributes, ReactNode, memo } from 'react';

import cls from './Button.module.css';

export type ButtonType = 'Primary' | 'Secondary' | 'Outline' | 'Tertiary';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode;
	Btntype?: ButtonType;
	className?: string;
}

export const Button = memo((props: ButtonProps) => {
	const { children, Btntype = 'Primary', className = '', ...otherProps } = props;

	return (
		<button className={`${cls.button} ${cls[Btntype]} ${className}`} {...otherProps}>
			{children}
		</button>
	);
});
