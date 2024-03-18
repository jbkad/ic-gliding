import { useState } from "react";
import { data } from "../website-data/faqs";
import AccordionItem from "../components/AccordionItem";
import '../styles/pages/FAQs.scss';

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionItemClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faqs" id="faqs">
      <h1 className="heading">Frequently Asked Questions</h1>
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isActive={activeIndex === index}
          onClick={() => handleAccordionItemClick(index)}
        />
      ))}
    </div>
  );
}
