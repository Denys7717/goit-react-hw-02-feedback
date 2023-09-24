import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onClick }) => {
  let btnNamesArr = [];
  for (let key in options) {
    btnNamesArr.push(key);
  }

  return (
    <>
      <div className={css.buttons}>
        {btnNamesArr.map(btnItem => {
          return (
            <button
              key={btnItem}
              type="button"
              className={css.btn}
              name={btnItem}
              onClick={onClick}
            >
              {btnItem}
            </button>
          );
        })}
      </div>
    </>
  );
};
