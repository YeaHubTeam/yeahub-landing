import styles from './ErrorMessageRenderer.module.css';

interface ErrorMessageRendererProps {
	props: number;
}

export const ErrorMessageRenderer = ({ props }: ErrorMessageRendererProps) => {
	return <div className={styles.wrapper}>Что-то пошло не так! Статус-код ошибки: {props}</div>;
};
