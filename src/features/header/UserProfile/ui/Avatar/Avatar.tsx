import AvatarPlaceholder from '@/shared/assets/images/avatar-placeholder.jpg';

import styles from './Avatar.module.css';

interface AvatarProps {
	link: string | null;
}

export const Avatar = ({ link }: AvatarProps) => {
	return (
		<div className={styles.wrapper}>
			<img src={link || AvatarPlaceholder} className={styles.avatar} alt="User Avatar" />
		</div>
	);
};
