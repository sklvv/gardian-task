import styles from "./loader.module.scss";
export const Loader = () => {
	return (
		<div className={styles.loader}>
			Подождите пожалуйста! Загружаем информацию о чатах...
		</div>
	);
};
