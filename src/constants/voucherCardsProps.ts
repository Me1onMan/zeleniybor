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
    link: "/nomera-i-tseny",
  },
  {
    img: image2,
    title: "Оздоровительная",
    description: "Отдых вдали от городской суеты.",
    link: "/nomera-i-tseny",
  },
  {
    img: image3,
    title: "Проживание",
    description:
      "Комфортные номера различной вместимости с прекрасным видом на хвойные и лиственные деревья.",
    link: "/nomera-i-tseny",
  },
];
