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
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
    >
      Top
    </button>
  );
};

export default TopBtn;
