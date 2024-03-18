export default function AccordionItem({ title, content, isActive, onClick }) {
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
