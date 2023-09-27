import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onClick }) => {
  return (
    <>
      <div className={css.buttons}>
        <button type="button" className={css.btn} name="good" onClick={onClick}>
          Good
        </button>
        <button
          type="button"
          className={css.btn}
          name="neutral"
          onClick={onClick}
        >
          Neutral
        </button>
        <button type="button" className={css.btn} name="bad" onClick={onClick}>
          Bad
        </button>
      </div>
    </>
  );
};
