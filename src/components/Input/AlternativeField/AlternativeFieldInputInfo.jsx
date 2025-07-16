import cn from "classnames";
import "./AlternativeFieldInputInfo.css";

const InputHelper = ({ testId, className, disabled, message }) => (
  <div
    className={cn(
      "tempo-alternative-field__helper",
      {
        "tempo-alternative-field__errors--disabled": disabled,
      },
      className,
    )}
    data-testid={testId}
  >
    {message}
  </div>
);

const InputErrors = ({ testId, className, disabled, errors }) => {
  if (!errors.length) {
    return null;
  }

  return (
    <ul
      className={cn(
        "tempo-alternative-field__errors",
        {
          "tempo-alternative-field__errors--disabled": disabled,
        },
        className,
      )}
      data-testid={testId}
    >
      {errors.map((error, i) => (
        <li key={i} data-testid={testId && `${testId}-${i}`}>
          {error}
        </li>
      ))}
    </ul>
  );
};

const InputInfo = ({ testId, className, disabled, helper, errors = [] }) => {
  if (errors.length > 0) {
    return (
      <InputErrors testId={testId && `${testId}-errors`} className={className} disabled={disabled} errors={errors} />
    );
  }

  return helper ? (
    <InputHelper testId={testId && `${testId}-helper`} className={className} disabled={disabled} message={helper} />
  ) : null;
};

export default InputInfo;
