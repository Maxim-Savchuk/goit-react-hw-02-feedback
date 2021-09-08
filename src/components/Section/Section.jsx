import PropTypes from 'prop-types';
import s from './Section.module.css';

export const Section = ({ title, children }) => {
    return (
        <div className={s.Container}>
            <h1 className={s.Title}>{title}</h1>
            {children}
        </div>
    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
}