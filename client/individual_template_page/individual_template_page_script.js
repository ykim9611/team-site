const templateButton = document.getElementById("template-button");
const wireframeButton = document.getElementById("wireframe-button");
const pages = document.getElementsByClassName("page");

templateButton.addEventListener("click", function () {
  if (!templateButton.matches(".wireframe-toggled")) {
    templateButton.classList.add("wireframe-toggled");
    wireframeButton.classList.remove("wireframe-toggled");
    for (let page of pages) {
      page.classList.toggle("wireframe-page-off");
    }
  }
});

wireframeButton.addEventListener("click", function () {
  if (!wireframeButton.matches(".wireframe-toggled")) {
    wireframeButton.classList.add("wireframe-toggled");
    templateButton.classList.remove("wireframe-toggled");
    for (let page of pages) {
      page.classList.toggle("wireframe-page-off");
    }
  }
});

const viewportButtons = document.getElementsByClassName("viewport");
const templatePreviewPages = document.getElementsByClassName(
  "template-preview-page"
);

const toggleViewports = (e) => {
  const selectedNode = e.target;
  console.log(selectedNode.id);
  for (var viewportButton of viewportButtons) {
    if (viewportButton.id === selectedNode.id) {
      viewportButton.classList.add("selected-viewport");
    } else {
      viewportButton.classList.remove("selected-viewport");
    }
  }
  for (var templatePreviewPage of templatePreviewPages) {
    var templatePreviewPageId = templatePreviewPage.id.split("-")[1];

    if (templatePreviewPageId === selectedNode.id) {
      templatePreviewPage.style.display = "block";
    } else {
      templatePreviewPage.style.display = "none";
    }
  }
};

for (var viewportButton of viewportButtons) {
  viewportButton.addEventListener("click", (e) => toggleViewports(e));
}
