import { useState } from "react";
import { data } from "../website-data/faqs";
import "../styles/pages/faqs.scss";

function AccordionItem({ title, content, isActive, onClick }) {
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={onClick}>
        <button className="question-container">
          <div className="question h4">{title}</div>
          <div className={`toggle ${isActive ? "toggle-rotate" : ""}`}>
            {isActive ? "–" : "+"}
          </div>
        </button>
      </div>
      {isActive && (
        <div className="content-container">
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      )}
      <hr />
    </div>
  );
}

function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionItemClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faqs">
      <h1 className="heading">Frequently Asked Questions</h1>
      <p className="subheading">
        Browse through these FAQ's to seek answers to commonly raised questions
        about the club.{" "}
      </p>
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isActive={activeIndex === index}
          onClick={() => handleAccordionItemClick(index)}
          tabIndex="0"
        />
      ))}
    </div>
  );
}

export default FAQs;
