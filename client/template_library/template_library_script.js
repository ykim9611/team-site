const selectable1 = document.getElementById("selectable-1");
const selectable2 = document.getElementById("selectable-2");
const selectable1Content = document.querySelector(
  ".selectable-1-content-container"
);
const selectable2Content = document.querySelector(
  ".selectable-2-content-container"
);

selectable1.addEventListener("click", function () {
  selectable1Content.classList.toggle("toggled");
  if (selectable2Content.matches(".toggled")) {
    selectable2Content.classList.toggle("toggled");
  }
});

selectable2.addEventListener("click", function () {
  selectable2Content.classList.toggle("toggled");
  if (selectable1Content.matches(".toggled")) {
    selectable1Content.classList.toggle("toggled");
  }
});

const templates = [
  {
    title: "Template 1",
    img: "/images/template-preview-image.png",
    services: ["pay", "tv"],
    components: ["content-river"],
    types: ["marketing", "information", "blog"],
    summary:
      "Body-Reduced. Lorem ipsum ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vivamus sagittis lacus vel augue laoreetmagna mollis.",
    templateUrl:
      "https://medusa.apple.com/admin/page-revisions/62bcdd752a70940001b231fb/preview?locale=en-US&theme=628be25d01164300016f66f3",
  },
  {
    title: "Template 2",
    img: "/images/template-preview-image.png",
    services: ["music", "tv", "fitness"],
    components: ["content-river", "accordion"],
    types: ["information"],
    summary:
      "Body-Reduced. Lorem ipsum ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vivamus sagittis lacus vel augue laoreetmagna mollis.",
    templateUrl:
      "https://medusa.apple.com/admin/page-revisions/62bcdd752a70940001b231fb/preview?locale=en-US&theme=628be25d01164300016f66f3",
  },
  {
    title: "Template 3",
    img: "/images/template-preview-image.png",
    services: ["music", "arcade"],
    components: ["sticky-slider"],
    types: ["blog"],
    summary:
      "Body-Reduced. Lorem ipsum ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vivamus sagittis lacus vel augue laoreetmagna mollis.",
    templateUrl:
      "https://medusa.apple.com/admin/page-revisions/62bcdd752a70940001b231fb/preview?locale=en-US&theme=628be25d01164300016f66f3",
  },
  {
    title: "Template 4",
    img: "/images/template-preview-image.png",
    services: ["music", "pay", "tv"],
    components: ["content-river", "accordion", "sticky-slider"],
    types: ["marketing", "blog"],
    summary:
      "Body-Reduced. Lorem ipsum ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vivamus sagittis lacus vel augue laoreetmagna mollis.",
    templateUrl:
      "https://medusa.apple.com/admin/page-revisions/62bcdd752a70940001b231fb/preview?locale=en-US&theme=628be25d01164300016f66f3",
  },
  {
    title: "Template 5",
    img: "/images/template-preview-image.png",
    services: ["music", "tv", "news"],
    components: ["content-river", "sticky-slider"],
    types: ["information"],
    summary:
      "Body-Reduced. Lorem ipsum ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vivamus sagittis lacus vel augue laoreetmagna mollis.",
    templateUrl:
      "https://medusa.apple.com/admin/page-revisions/62bcdd752a70940001b231fb/preview?locale=en-US&theme=628be25d01164300016f66f3",
  },
  {
    title: "Template 6",
    img: "/images/template-preview-image.png",
    services: ["music", "pay", "books"],
    components: ["accordion", "sticky-slider"],
    types: ["marketing"],
    summary:
      "Body-Reduced. Lorem ipsum ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vivamus sagittis lacus vel augue laoreetmagna mollis.",
    templateUrl:
      "https://medusa.apple.com/admin/page-revisions/62bcdd752a70940001b231fb/preview?locale=en-US&theme=628be25d01164300016f66f3",
  },
];

function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) {
      e.stopPropagation();
      callback(e);
    }
  });
}
addGlobalEventListener("mouseover", ".image-div", (e) => handleOnHover(e));
addGlobalEventListener("mouseout", ".template-hover", (e) => handleOffHover(e));

const templateContainer = document.querySelector(".template-container");

const handleOnHover = (event) => {
  var hoveredTemplate = event.target;
  hoveredTemplate.classList.add("hidden");
  hoveredTemplate.nextSibling.classList.remove("hidden");
};

const handleOffHover = (event) => {
  event.stopPropagation();
  var hoveredTemplate = event.target;
  if (hoveredTemplate.matches(".template-hover")) {
    hoveredTemplate.classList.add("hidden");
    hoveredTemplate.previousSibling.classList.remove("hidden");
  }
};
//creating a single block
const createBlock = (block) => {
  const templateDiv = document.createElement("div");
  templateDiv.classList.add("template");

  //add different tags to template
  for (var service of block.services) {
    templateDiv.classList.add(service);
  }
  for (var component of block.components) {
    templateDiv.classList.add(component);
  }
  for (var type of block.types) {
    templateDiv.classList.add(type);
  }
  //Template Image div
  const imageDiv = document.createElement("img");
  imageDiv.src = block.img;
  imageDiv.classList.add("image-div");
  templateDiv.appendChild(imageDiv);

  //Template Hover state div
  const templateHoverDiv = document.createElement("div");
  templateHoverDiv.classList.add("template-hover");
  templateHoverDiv.classList.add("hidden");
  const templateContent = document.createElement("div");
  templateContent.classList.add("template-content");
  const descriptionTitle = document.createElement("div");
  descriptionTitle.innerHTML = "Description:";
  const descriptionContent = document.createElement("p");
  descriptionContent.innerHTML = block.summary;
  const previewTemplateButton = document.createElement("a");
  previewTemplateButton.href = "/template-library/template";
  previewTemplateButton.innerHTML = "Preview Template";
  const chevronButton = document.createElement("img");
  chevronButton.classList.add("chevron");
  chevronButton.src = "/images/chevron-down-solid.svg";

  previewTemplateButton.appendChild(chevronButton);

  templateContent.appendChild(descriptionTitle);
  templateContent.appendChild(descriptionContent);
  templateContent.appendChild(previewTemplateButton);

  templateHoverDiv.appendChild(templateContent);

  templateDiv.appendChild(templateHoverDiv);

  //Unchanging Title div
  const titleDiv = document.createElement("div");
  titleDiv.classList.add("template-title");
  titleDiv.innerHTML = block.title;
  templateDiv.appendChild(titleDiv);

  templateContainer.appendChild(templateDiv);
};

for (var template of templates) {
  createBlock(template);
}

/*****************Filters**************/

var accordionButtons = document.getElementsByClassName("accordion-button");
var resetButton = document.getElementsByClassName("resetButton")[0];

var selectedFilters = [];

const filterOptions = [
  [
    { pay: "Pay" },
    { tv: "TV" },
    { fitness: "Fitness" },
    { arcade: "Arcade" },
    { music: "Music" },
  ],
  [
    { "content-river": "Content River" },
    { accordion: "Accordion" },
    { "sticky-slider": "Sticky Slider" },
  ],
  [
    { marketing: "Marketing" },
    { information: "Information" },
    { blog: "Blog" },
  ],
];

for (var i = 0; i < accordionButtons.length; i++) {
  var accordionButton = accordionButtons[i];
  accordionButton.addEventListener("click", function () {
    var button = this;
    if (button.lastChild.classList[0] === "flip") {
      this.lastChild.classList.remove("flip");
      this.lastChild.classList.add("unflip");
    } else {
      this.lastChild.classList.remove("unflip");
      this.lastChild.classList.add("flip");
    }
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.paddingTop = null;
      panel.style.maxHeight = null;
    } else {
      panel.style.paddingTop = "14px";
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
  var panel = accordionButton.nextElementSibling;
  for (var filterOption of filterOptions[i]) {
    var optionDiv = document.createElement("div");
    optionDiv.innerHTML = Object.values(filterOption)[0];
    optionDiv.id = Object.keys(filterOption)[0];
    optionDiv.classList.add("option");
    optionDiv.addEventListener("click", function () {
      var filterElement = this;
      filterElement.classList.toggle("selected");
      if (selectedFilters.includes(filterElement.id)) {
        selectedFilters = selectedFilters.filter(
          (filterString) => filterString !== filterElement.id
        );
        applyFilters();
      } else {
        selectedFilters.push(filterElement.id);
        applyFilters();
      }
    });
    panel.appendChild(optionDiv);
  }
}

const applyFilters = () => {
  const templateBlocks = document.querySelectorAll(".template");
  for (var templateBlock of templateBlocks) {
    templateBlock.style.display = "flex";
    const templateBlockAppliedFilters = templateBlock.classList;
    for (var selectedFilter of selectedFilters) {
      if (templateBlockAppliedFilters.contains(selectedFilter)) {
        templateBlock.style.display = "flex";
      } else {
        templateBlock.style.display = "none";
        break;
      }
    }
  }
  if (selectedFilters.length === 0) {
    resetButton.classList.add("hidden");
  } else {
    resetButton.classList.remove("hidden");
  }
};

var options = document.getElementsByClassName("option");
resetButton.addEventListener("click", function () {
  selectedFilters = [];
  for (var option of options) {
    option.classList.remove("selected");
  }
  applyFilters();
});
