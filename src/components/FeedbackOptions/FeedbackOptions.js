import React from 'react';
import s from './FeedbackOptions.module.css';
import propTypes from 'prop-types';

const FeedbackOptions = ({ options, onIncrement }) => {
  return (
    <>
      <ul className={s.btnList}>
        {options.map(option => (
          <li key={option}>
            <button
              onClick={() => {
                onIncrement(option);
              }}
              className={s.btn}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: propTypes.array,
  onIncrement: propTypes.func,
};
