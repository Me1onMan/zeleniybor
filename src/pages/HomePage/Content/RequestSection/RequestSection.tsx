import { useState } from "react";
import styles from "./RequestSection.module.scss";

function RequestSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  return (
    <section className={styles.section}>
      <div>
        <h2>Оставьте заявку</h2>
        <p>И мы с вами свяжемся</p>
        <form action="">
          <input
            value={name}
            placeholder="Ваше имя*"
            required
            onChange={(e) => setName(e.currentTarget.value)}
          />
          <input
            value={phone}
            placeholder="Ваше телефон*"
            required
            onChange={(e) => setPhone(e.currentTarget.value)}
          />
          <input
            value={email}
            placeholder="Ваше email*"
            required
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <button>Отправить</button>
        </form>
      </div>
    </section>
  );
}

export default RequestSection;
