import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pb-7 w-full">
      <button
        className={`w-full text-left py-3 px-6 border border-black transition-colors duration-300 ${isOpen ? 'bg-black text-white' : 'bg-white text-black'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center">
          <span className="text-lg font-medium">{title}</span>
          <span className={`text-lg transition-colors duration-300 ${isOpen ? 'text-white' : 'text-black'}`}>
            <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
          </span>
        </div>
      </button>
      <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        {isOpen && (
          <div className="p-6 bg-white">
            <p>{content}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
