import React, { useRef, useEffect } from 'react';

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const AutoGrowingTextArea: React.FC<Props> = ({ className = '', ...props }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    handleInput();
  }, []);

  return (
    <textarea
      ref={textareaRef}
      onInput={handleInput}
      rows={1}
      className={`resize-none overflow-hidden outline-none border-s-2 font-serif border-stone-400 w-full ps-1 ${className}`}
      {...props}
    />
  );
};

export default AutoGrowingTextArea;
