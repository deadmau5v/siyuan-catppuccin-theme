/**
 * Reload the page when switching themes to ensure all styles are applied correctly.
 */
(function () {
  const themeName = "Catppuccin";
  const observer = new MutationObserver(() => {
    const appearance = window.siyuan.config.appearance;
    if (appearance.theme === themeName) {
      const currentState = `${appearance.theme}-${appearance.mode}`;
      const lastState = sessionStorage.getItem("catppuccin-last-state");
      if (lastState && lastState !== currentState) {
        sessionStorage.setItem("catppuccin-last-state", currentState);
        window.location.reload();
      } else if (!lastState) {
        sessionStorage.setItem("catppuccin-last-state", currentState);
      }
    }
  });

  observer.observe(document.body, {
    attributes: true,
    attributeFilter: ["class", "style"],
  });

  if (window.siyuan?.config?.appearance) {
    const appearance = window.siyuan.config.appearance;
    sessionStorage.setItem(
      "catppuccin-last-state",
      `${appearance.theme}-${appearance.mode}`,
    );
  }
})();
