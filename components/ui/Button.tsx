import styles from '../../styles/components/Button.module.scss';

interface ButtonProps {
  link: string;
  copy: string;
}

export const Button = ({ link, copy }: ButtonProps) => {
  return (
    <a
      href={link}
      className={`${styles.ddevHoverButton} focus:outline-none text-green-ddev text-sm py-2.5 px-5 rounded-md border border-green-ddev transition duration-700 ease-in-out;`}
    >
      {copy}
    </a>
  );
};

export default Button;
