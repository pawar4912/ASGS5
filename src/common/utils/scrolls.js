export const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    console.log(element)
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
};
