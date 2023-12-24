import { HiShieldCheck } from "react-icons/hi";
import {
  MdCancel,
  MdAnalytics,
  MdLocationOn,
  MdAttachMoney,
  MdHome,
} from "react-icons/md";

const data = [
  {
    icon: <MdCancel />,
    heading: "Prevent unstable prices",
    details:
      "Our strategies aim to stabilize property prices, providing reliability to our clients.",
  },
  {
    icon: <MdAnalytics />,
    heading: "Best price on the market",
    details:
      "We analyze market trends to ensure you get the best value for your property investment.",
  },
  {
    icon: <MdLocationOn />,
    heading: "Prime Locations",
    details:
      "Choose from a selection of properties in prime locations, catering to your preferences.",
  },
  {
    icon: <MdAttachMoney />,
    heading: "Financial Security",
    details:
      "Invest with confidence knowing our financial experts guide you towards secure real estate transactions.",
  },
  {
    icon: <MdHome />,
    heading: "Dream Homes",
    details:
      "Find your dream home with our extensive range of properties and personalized search options.",
  },
  {
    icon: <HiShieldCheck />,
    heading: "Secure Transactions",
    details:
      "Rest easy with our secure and transparent transaction processes, prioritizing your peace of mind.",
  },
];

export default data;
