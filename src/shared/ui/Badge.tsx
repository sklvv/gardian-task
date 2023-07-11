import React from "react";
import styles from "./badge.module.scss";
export const Badge: React.FC<{ text: string }> = ({ text }) => {
	return <div className={styles.badge}>{text}</div>;
};
