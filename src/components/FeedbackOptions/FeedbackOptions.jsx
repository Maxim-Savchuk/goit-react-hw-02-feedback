import PropTypes from 'prop-types';
import s from './Feedback.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className={s.Container}>
            {options.map((option, index) => {
                return (
                    <button
                        type="button"
                        key={index}
                        name={option}
                        className={s.Button}
                        onClick={onLeaveFeedback}
                    >
                        {option}
                    </button>
                )
            })}
        </div>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}