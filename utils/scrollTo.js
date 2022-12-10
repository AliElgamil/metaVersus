export const scrollTo = (e) => {
  const { target } = e;

  const eleOffset = document
    .querySelector(target.dataset.scroll)
    .getBoundingClientRect().y;

  window.scrollTo({ top: eleOffset, behavior: 'smooth' });
};
