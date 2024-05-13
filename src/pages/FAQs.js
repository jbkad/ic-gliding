import React, { useState } from "react";
import { data } from "../website-data/faqs";
import '../styles/pages/FAQs.scss';

function AccordionItem({ title, content, isActive, onClick }) {
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={onClick}>
        <div className="question-container">
          <h2 className="question">{title}</h2>
          <div className="toggle">{isActive ? '×' : '+'}</div>
        </div>
      </div>
      {isActive && (
        <div className="content-container">
          <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      )}
    </div>
  );
}

const MemoizedItem = React.memo(AccordionItem);

function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionItemClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faqs" id="faqs">
      <h1 className="heading">Frequently Asked Questions</h1>
      {data.map((item, index) => (
        <MemoizedItem
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

export default FAQs;