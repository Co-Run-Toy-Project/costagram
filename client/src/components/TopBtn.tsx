const TopBtn = () => {
  const handleScrollUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={handleScrollUp}
      className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
    >
      Top
    </button>
  );
};

export default TopBtn;
