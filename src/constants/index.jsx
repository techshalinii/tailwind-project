import { Handshake } from "lucide-react";
import { ArrowRightLeft} from "lucide-react";
import { Lock } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";
import { GalleryVertical } from "lucide-react"
import { Mail } from "lucide-react";
import { Phone} from "lucide-react";
import { MapPin } from "lucide-react"

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const services = [
  {
    title: "Domain Brokerage:",
    description:
      "Expert assistance in buying and selling high-value domain names.",
  },
  {
    title: "Domain Valuation:",
    description:
      "Accurate appraisal services to determine the worth of a domain.",
  },
  {
    title: "Consultation:",
    description:
      "Professional advice on domain strategy and brand alignment.",
  }
];

export const navItems = [
  { label: "AboutUs", href: "#AboutUs" },
  { label: "Services", href: "#Services" },
  { label: "Feature", href: "#Features" },
  { label: "Testimonials", href: "#Testimonials" },
  { label: "ContactUs", href: "#ContactUs" },
];

export const testimonials = [
  {
    user: "Jane Doe",
    company: "CEO of TechStart",
    image: user1,
    text: "Namezar made the daunting task of finding the right domain incredibly easy. Their team's expertise is unparalleled.",
  },
  {
    user: "Jane Smith",
    company: "FinSoft Solutions",
    image: user2,
    text: "Namezar’s expertise was invaluable in acquiring a premium domain. Their market knowledge is unmatched.",
  },
  {
    user: "David Johnson",
    company: "Entrepreneur",
    image: user3,
    text: "Namezar helped me sell my domain quickly and at a great price. Highly recommend their service!",
  },
  {
    user: "Ronee Brown",
    company: "BrandX",
    image: user4,
    text: "They understood my business needs and found a domain that fit perfectly. Fantastic service!",
  },
  {
    user: "Michael Wilson",
    company: "EcomWave",
    image: user5,
    text: "The entire process was easy and stress-free, thanks to Namezar’s professional brokers.",
  },
  {
    user: "Emily Davis",
    company: " ShopSphere",
    image: user6,
    text: "Namezar’s transparency and reliability set them apart. I found the perfect domain for my business..",
  },
];

export const features = [
  {
    icon: <Handshake  />,
    text: "Expert Guidance",
    description:
      "Our experienced brokers provide personalized consultations to help you navigate the domain buying and selling process effortlessly.",
  },
  {
    icon: <GalleryVertical />,
    text: "Extensive Domain Portfolio",
    description:
      "Access a vast selection of premium domains across various industries, tailored to fit your brand’s identity.",
  },
  {
    icon: <BriefcaseBusiness />,
    text: "Valuation Services",
    description:
      "Accurate appraisal services to determine the worth of domain names, ensuring you make informed decisions",
  },
  {
    icon: <Handshake />,
    text: "Negotiation Expertise",
    description:
      "Skilled negotiators work to secure the best terms and prices for your desired domains, maximizing your investment.",
  },
  {
    icon: <ArrowRightLeft />,
    text: "Seamless Transactions",
    description:
      "We handle all aspects of the domain acquisition process, from initial inquiry to final transfer, ensuring a hassle-free experience",
  },
  {
    icon: <Lock />,
    text: "Confidentiality Assurance",
    description:
      "Your privacy is our priority. All transactions and communications are handled with the utmost confidentiality.",
  },
];

export const checklistItems = [
  {
    title: "1. Discover:",
    description:
      "Identify your domain needs with our experts.",
  },
  {
    title: "2. Negotiate:",
    description:
      "We handle discussions to secure the best terms.",
  },
  {
    title: "3. Acquire:",
    description:
      "Seamless transfer of domain ownership to you.",
  }
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#Features", text: "Features" },
  { href: "#AboutUs", text: "AboutUs" },
  { href: "#ContactUs", text: "ContactUs" },
  { href: "#Faqs", text: "FAQs" },
  { href: "#Services", text: "Services" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Jobs" },
];

export const contactDetails = [
  {
    icons: <Mail />,
    description:
      "info@namezar.com"
  },
  {
    icons: <Phone />,
    description:
      "+1 (800) 123-4567"
  },
  {
    icons: <MapPin />,
    description:
      "1234 Domain Lane, Web City, WC 56789"
  },
  
];

export const faqs = [
  {
    question: "How does Namezar select premium domains?",
    answer:
      "At Namezar, we use a combination of market analysis, keyword research, and brand potential to curate domain names that provide high value to businesses. Our team ensures that the domains are memorable, easy to spell, and aligned with current industry trends.",
  },
  {
    question: "What is a domain brokerage service?",
    answer:
      "A domain brokerage service connects buyers and sellers of high-value domain names. At Namezar, our brokers represent you throughout the process to ensure you get the best deal, whether you're buying or selling a premium domain.",
  },
  {
    question: " How do I know the value of a domain?",
    answer:
      "We offer professional domain valuation services where we assess factors like keyword relevance, traffic potential, market demand, and historical sales data to determine the worth of your domain.",
  },
{
  question:"Can Namezar help me sell my domain?",
 answer:
 "Absolutely! We assist in selling your domain by leveraging our network and marketing channels to connect you with potential buyers. Our brokers will negotiate on your behalf to get the best possible price."
},
{
  question:"How long does it take to complete a domain purchase?",
  answer:"The timeline depends on the complexity of the deal. Typically, a straightforward transaction can take anywhere from a few days to a couple of weeks."

},
{
  question:"Is there any confidentiality in the domain acquisition process?",
  answer:"Yes, at Namezar, we prioritize your privacy and confidentiality throughout the entire transaction. All negotiations are handled discreetly to protect your business interests."

},
];
