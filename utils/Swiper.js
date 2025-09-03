const handleArrowState = (key,swiper, prevClass, nextClass) => {
  const prevBtn = document.querySelector(prevClass);
  const nextBtn = document.querySelector(nextClass);

  if (!prevBtn || !nextBtn) return;

  // Toggle prev
  if (swiper.isBeginning) {
    prevBtn.classList.add("disable");
  } else {
    prevBtn.classList.remove("disable");
  }

  // Toggle next
  if (swiper.isEnd) {
    nextBtn.classList.add("disable");
  } else {
    nextBtn.classList.remove("disable");
  }
};

export { handleArrowState };
