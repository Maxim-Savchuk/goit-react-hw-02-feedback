import PropTypes from 'prop-types';
import { Notification } from 'components/Notification/Notification';
import s from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <div className={s.Container}>
            <h2 className={s.Title}>Statistics</h2>
            {total ?
                (
                    <div>
                        <p className={s.Text}>Good: <span>{good}</span></p>
                        <p className={s.Text}>Neutral: <span>{neutral}</span></p>
                        <p className={s.Text}>Bad: <span>{bad}</span></p>
                        <p className={s.Text}>Total: <span>{total}</span></p>
                        <p className={s.Text}>Positive feedback: <span>{positivePercentage}</span></p>
                    </div>
                ) : (
                    <Notification message="No feedback given" />
                )
            }
        </div>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string,
}