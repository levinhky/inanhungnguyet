type Props = {};
function SwitcherLanguage({}: Props) {
  return (
    <div className="switcher-language cursor-pointer relative">
      <div className={`text-[var(--white)] language flex items-center vi-flag`}>
        VIE
      </div>
    </div>
  );
}

export default SwitcherLanguage;
