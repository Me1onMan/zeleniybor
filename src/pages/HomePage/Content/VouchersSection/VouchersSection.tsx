import { voucherCards } from "@/constants/voucherCardsProps";
import VoucherCard from "./VoucherCard/VoucherCard";
import styles from "./VouchersSection.module.scss";

function VouchersSection() {
  return (
    <section className={styles.section}>
      <div className={styles.cardsContainer}>
        {voucherCards.map(({ img, title, description, link }) => (
          <VoucherCard
            img={img}
            title={title}
            description={description}
            link={link}
          />
        ))}
      </div>
    </section>
  );
}

export default VouchersSection;
