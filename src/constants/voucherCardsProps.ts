import image1 from "@assets/Vouchers_cards/voucher-1.jpg";
import image2 from "@assets/Vouchers_cards/voucher-2.jpg";
import image3 from "@assets/Vouchers_cards/voucher-3.jpg";

export interface voucherCard {
  img: string;
  title: string;
  description: string;
  link: string;
}

export const voucherCards: voucherCard[] = [
  {
    img: image1,
    title: "Санаторно-курортная",
    description: "Широкий комплекс физиотерапевтических процедур.",
    link: "https://zeleniybor.by/nomera-i-tseny",
  },
  {
    img: image2,
    title: "Санаторно-курортная",
    description: "Широкий комплекс физиотерапевтических процедур.",
    link: "https://zeleniybor.by/nomera-i-tseny",
  },
  {
    img: image3,
    title: "Санаторно-курортная",
    description: "Широкий комплекс физиотерапевтических процедур.",
    link: "https://zeleniybor.by/nomera-i-tseny",
  },
];
