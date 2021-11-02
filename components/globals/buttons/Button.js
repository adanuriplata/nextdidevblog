import styles from "../../../styles/components/Button.module.scss";

const Button = ({ link, copy }) => {
  return (
    <a
      href={link}
      className={`${styles.ddevHoverButton} focus:outline-none text-green-ddev text-sm py-2.5 px-5 rounded-md border border-green-ddev`}
    >
      {copy}
    </a>
  );
};

export default Button;
