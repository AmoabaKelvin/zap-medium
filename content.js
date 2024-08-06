function removeMediumArticles() {
  const links = document.querySelectorAll('a[jsname="UWckNb"]');
  links.forEach((link) => {
    if (link.href.includes("medium.com")) {
      const parentDiv = link.closest("div.MjjYud");
      if (parentDiv) {
        parentDiv.remove();
      }
    }
  });
}

removeMediumArticles();

const observer = new MutationObserver(removeMediumArticles);
observer.observe(document.body, { childList: true, subtree: true });
