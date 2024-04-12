import { ButtonHTMLAttributes, ReactNode, memo } from 'react';

import { classNames } from '../../libs/classNames/classNames';

import cls from './Button.module.css';

type ButtonType = 'primary' | 'tertiary';
type ButtonSize = 'M' | 'L' | 'XL';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode;
	btnType?: ButtonType;
	btnSize?: ButtonSize;
	className?: string;
}

export const Button = memo((props: ButtonProps) => {
	const { children, btnType = 'primary', className = '', btnSize = 'M', ...otherProps } = props;

	return (
		<button
			className={classNames(cls.button, {}, [className, cls[btnType], cls[btnSize]])}
			{...otherProps}
		>
			{children}
		</button>
	);
});

Button.displayName = 'Button';
