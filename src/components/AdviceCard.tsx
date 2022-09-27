import { ReactComponent as PatternDividerIcon } from 'assets/pattern-divider.svg';
import { ReactComponent as DiceIcon } from 'assets/icon-dice.svg';
import { AdviceType } from 'App';

type AdviceCardType = AdviceType & {
  handleClick?: () => void;
};

export const AdviceCard = ({ title, content, handleClick }: AdviceCardType) => {
  const containerDividerClass = `flex justify-center mt-8 ${handleClick ? 'mb-9' : ''}`;

  return (
    <div className="relative bg-neutral-dark-grayish-blue text-center rounded-lg max-w-[540px] px-6 py-10 md:px-10">
      <h3 className="text-primary-neon-cyan uppercase text-xs font-extrabold tracking-widest">
        {title}
      </h3>
      <p className="text-primary-light-cyan mt-6 text-quote font-extrabold">
        &quot;{content}&quot;
      </p>
      <div className={containerDividerClass}>
        <PatternDividerIcon className="w-[295px] h-4" />
      </div>

      {handleClick && (
        <button
          className="absolute inset-x-dice -bottom-8 rounded-full bg-primary-neon-cyan hover:shadow-btn flex justify-center items-center w-16 h-16 transition ease-in-out duration-500 hover:rotate-180"
          onClick={handleClick}
        >
          <DiceIcon />
        </button>
      )}
    </div>
  );
};
