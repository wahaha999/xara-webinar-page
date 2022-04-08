let accordions = Array.from(document.getElementsByClassName("accordion"));
let panels = Array.from(document.getElementsByClassName("panel"));

accordions.forEach((accordion) => {
  accordion.addEventListener("click", function () {
    let thisPanel = this.nextElementSibling;

    panels.forEach((panel, index) => {
      if (panel !== thisPanel) panel.style.maxHeight = null;
      if (accordions[index] !== this)
        accordions[index].classList.remove("active");
    });

    this.classList.toggle("active");

    if (thisPanel.style.maxHeight) {
      thisPanel.style.maxHeight = null;
    } else {
      thisPanel.style.maxHeight = thisPanel.scrollHeight + "px";
    }
  });
});
