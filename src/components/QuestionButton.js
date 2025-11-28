import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './QuestionButton.module.css';

const QuestionButton = ({ 
  text = "Imaš li pitanja?", 
  onClick,
  to = "/konsultacije?usluga=mentorstvo"
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Scroll to top prije navigacije
    window.scrollTo(0, 0);
    
    if (onClick) {
      onClick();
    } else if (to) {
      navigate(to);
    }
  };

  return (
    <div className={styles.buttonContainer}>
      <button 
        className={styles.questionButton}
        onClick={handleClick}
      >
        {text}
      </button>
    </div>
  );
};

export default QuestionButton;