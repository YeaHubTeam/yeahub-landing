import styles from './Avatar.module.css';

interface AvatarProps {
	link: string;
}

export const Avatar = ({ link }: AvatarProps) => {
	return (
		<div className={styles.wrapper}>
			<img src={link} alt="User Avatar" />
		</div>
	);
};
