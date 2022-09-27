import { ReactComponent as PatternDividerIcon } from 'assets/pattern-divider-desktop.svg';
import { ReactComponent as DiceIcon } from 'assets/icon-dice.svg';

type AdviceCardType = {
  title: string;
  advice: string;
};

export const AdviceCard = ({ title, advice }: AdviceCardType) => {
  return (
    <div className="relative bg-neutral-dark-grayish-blue text-center rounded-lg max-w-[540px] px-6 py-10 md:px-10">
      <h3 className="text-primary-neon-cyan uppercase text-xs font-extrabold tracking-widest">
        {title}
      </h3>
      <p className="text-primary-light-cyan mt-6 text-quote font-extrabold">&quot;{advice}&quot;</p>
      <PatternDividerIcon className="mx-auto mt-8 mb-9" />

      <button className="absolute inset-x-dice -bottom-8 rounded-full bg-primary-neon-cyan hover:shadow-btn flex justify-center items-center w-16 h-16 transition ease-in-out duration-500 hover:rotate-180">
        <DiceIcon />
      </button>
    </div>
  );
};
