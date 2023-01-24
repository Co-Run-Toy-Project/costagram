/* eslint-disable */
interface Props {
  onClick: () => void;
}

const HeartOff = ({ onClick }: Props) => {
  return (
    <div className="w-fit h-fit cursor-pointer" onClick={onClick}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 82 82"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_217_47)">
          <path
            d="M60.475 5.125C51.8548 5.125 44.4389 12.136 41.0051 19.4596C37.5663 12.136 30.1504 5.125 21.5301 5.125C9.65038 5.125 0.00512695 14.7702 0.00512695 26.65C0.00512695 50.8195 24.3899 57.1591 41.0051 81.057C56.7133 57.3077 82.0051 50.0507 82.0051 26.65C82.0051 14.7651 72.3599 5.125 60.4801 5.125H60.475Z"
            fill="#BBBBBB"
          />
        </g>
        <defs>
          <clipPath id="clip0_217_47">
            <rect width="82" height="82" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default HeartOff;
