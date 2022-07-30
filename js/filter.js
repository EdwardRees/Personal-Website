const toggleGroup = (group, hidden) => {
  const iter = document.getElementsByClassName(`${group}`);
  for (let i = 0; i < iter.length; i++) {
    iter[i].hidden = hidden
  }
}
document.onreadystatechange = () => {
  if(document.readyState === "interactive"){
    toggleGroup("tech", false);
    toggleGroup("teaching", false);
    toggleGroup("other", false);
  }
}
const handleFilter = () => {
  const filter = document.getElementById("filter").value;
  switch (filter) {
    case "tech":
      toggleGroup("tech", false);
      toggleGroup("teaching", true);
      toggleGroup("other", true);
      break;
    case "teaching":
      toggleGroup("tech", true);
      toggleGroup("teaching", false);
      toggleGroup("other", true);
      break;
    case "other":
      toggleGroup("tech", true);
      toggleGroup("teaching", true);
      toggleGroup("other", false);
      break;
    default:
      toggleGroup("tech", false);
      toggleGroup("teaching", false);
      toggleGroup("other", false);

      break;
  }
}