document.onreadystatechange = () => {
  if (document.readyState === "interactive") {
    toggleGroup("languages", false);
    toggleGroup("frameworks-libraries", false);
    toggleGroup("mobile-development", false);
    toggleGroup("operating-systems", false);
  }
};
const handleLanguageFilter = () => {
  const filter = document.getElementById("language-filter").value;
  switch (filter) {
    case "languages":
      toggleGroup("languages", false);
      toggleGroup("frameworks-libraries", true);
      toggleGroup("mobile-development", true);
      toggleGroup("operating-systems", true);
      break;
    case "frameworks-libraries":
      toggleGroup("languages", true);
      toggleGroup("frameworks-libraries", false);
      toggleGroup("mobile-development", true);
      toggleGroup("operating-systems", true);
      break;
    case "mobile-development":
      toggleGroup("languages", true);
      toggleGroup("frameworks-libraries", true);
      toggleGroup("mobile-development", false);
      toggleGroup("operating-systems", true);
      break;
    case "operating-systems":
      toggleGroup("languages", true);
      toggleGroup("frameworks-libraries", true);
      toggleGroup("mobile-development", true);
      toggleGroup("operating-systems", false);
      break;
    default:
      toggleGroup("languages", false);
      toggleGroup("frameworks-libraries", false);
      toggleGroup("mobile-development", false);
      toggleGroup("operating-systems", false);
      break;
  }
};
