import type { voucherCard } from "@/constants/voucherCardsProps";
import styles from "./VoucherCard.module.scss";

function VoucherCard({ img, title, description, link }: voucherCard) {
  return (
    <a href={link} className={styles.cardContainer}>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <span>Подробнее</span>
    </a>
  );
}

export default VoucherCard;
