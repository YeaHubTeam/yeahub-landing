import cls from './ProgressIcon.module.css';

export const ProgressIcon = () => {
	return (
		<div className={cls.container}>
			<svg
				width="43"
				height="45"
				viewBox="0 0 43 45"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect width="43" height="45" rx="8" fill="#A66DFF" />
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M21.5533 10.8555H21.4463C20.7261 10.8554 20.1055 10.8554 19.6085 10.9222C19.0759 10.9938 18.5654 11.1553 18.1513 11.5694C17.7372 11.9835 17.5757 12.494 17.5041 13.0266C17.4373 13.5236 17.4373 14.1442 17.4373 14.8645L17.4373 17.4942C17.1832 17.4044 16.9097 17.3555 16.6248 17.3555H13.3748C12.0286 17.3555 10.9373 18.4468 10.9373 19.793V32.5221H10.6665C10.2178 32.5221 9.854 32.8859 9.854 33.3346C9.854 33.7834 10.2178 34.1471 10.6665 34.1471H32.3332C32.7819 34.1471 33.1457 33.7834 33.1457 33.3346C33.1457 32.8859 32.7819 32.5221 32.3332 32.5221H32.0623V25.2096C32.0623 23.8634 30.971 22.7721 29.6248 22.7721H26.3748C26.0899 22.7721 25.8165 22.821 25.5623 22.9108L25.5623 14.8645C25.5624 14.1442 25.5624 13.5236 25.4956 13.0266C25.424 12.494 25.2625 11.9835 24.8484 11.5694C24.4343 11.1553 23.9238 10.9938 23.3912 10.9222C22.8942 10.8554 22.2736 10.8554 21.5533 10.8555ZM30.4373 32.5221V25.2096C30.4373 24.7609 30.0736 24.3971 29.6248 24.3971H26.3748C25.9261 24.3971 25.5623 24.7609 25.5623 25.2096V32.5221H30.4373ZM23.9373 32.5221V14.918C23.9373 14.129 23.9356 13.619 23.8851 13.2432C23.8377 12.8908 23.7612 12.7803 23.6994 12.7184C23.6375 12.6566 23.5271 12.5801 23.1746 12.5327C22.7989 12.4822 22.2888 12.4805 21.4998 12.4805C20.7108 12.4805 20.2008 12.4822 19.825 12.5327C19.4726 12.5801 19.3622 12.6566 19.3003 12.7185C19.2385 12.7803 19.162 12.8908 19.1146 13.2432C19.0641 13.619 19.0623 14.129 19.0623 14.918V32.5221H23.9373ZM17.4373 32.5221V19.793C17.4373 19.3442 17.0736 18.9805 16.6248 18.9805H13.3748C12.9261 18.9805 12.5623 19.3442 12.5623 19.793V32.5221H17.4373Z"
					fill="white"
				/>
			</svg>
		</div>
	);
};
