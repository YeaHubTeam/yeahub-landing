import cls from './ArrowIcon.module.css';

interface ArrowIconProps {
	color: string;
}

export const ArrowIcon = ({ color }: ArrowIconProps) => {
	return (
		<div className={cls.container}>
			<svg
				width="50px"
				height="50px"
				viewBox="0 0 50 50"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M12.5 37.5L37.5 12.5M37.5 12.5C37.5 12.5 21.2868 12.5 12.5 12.5M37.5 12.5V37.5"
					stroke={color}
					strokeWidth="3"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</div>
	);
};
