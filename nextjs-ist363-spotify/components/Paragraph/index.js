import classnames from "classnames/bind";
import styles from "./Paragraph.module.scss";

const cx = classnames.bind(styles);

const Paragraph = ({ caption, children, intro, marginBottom }) => {
  const paragraphClasses = cx({
    paragraph: true,
    intro: intro,
    caption: caption,
    [`margin-top--${marginTop}`]: marginTop,
    [`margin-bottom--${marginBottom}`]: marginBottom,
    [`margin-right--${marginRight}`]: marginRight,
    [`margin-left--${marginLeft}`]: marginLeft,
  });
  return <p className={styles.paragraph}>{children}</p>;
};
export default Paragraph;
