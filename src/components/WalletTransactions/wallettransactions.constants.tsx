import { uid } from "uid";

export const transactions = [
  {
    id: uid(8),
    img: "",
    summary: "Wallet Funded",
    category: "Bank transfer",
    amount: 1000,
    transaction_date: "02-24-2021Z:03:00:00",
  },
  {
    id: uid(8),
    img: "",
    summary: "Wallet Funded",
    category: "Bank transfer",
    amount: 5902,
    transaction_date: "02-28-2021Z:24:00:00",
  },
  {
    id: uid(8),
    img: "",
    summary: "Paid for Overseas Shipping",
    category: "Shipping fees",
    amount: 2300,
    transaction_date: "03-01-2021Z:10:30:00",
  },
  {
    id: uid(8),
    img: "",
    summary: "Wallet Funded",
    category: "Bank transfer",
    amount: 10000,
    transaction_date: "04-02-2021Z:13:00:00",
  },
];
