const tabsData = [
  {
    id: "tab1",
    title: "Tab 1",
    content: "This is a contnet for tab 1",
  },
  {
    id: "tab2",
    title: "Tab 2",
    content: "This is a contnet for tab 2",
  },
  {
    id: "tab3",
    title: "Tab 3",
    content: "This is a contnet for tab 3",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  /**
   * 1) Initialise all the div
   * 2) Set the active tab
   * 3) Iterate over the tab configuration and render the tabs
   */
  let activeTab = tabsData[0].id;

  function renderTabs() {
    const tabContainer = document.querySelector("#tabContainer");
    const tabContentContainer = document.querySelector("#tabContentContainer");

    tabsData.forEach((tab) => {
      const tabButton = document.createElement("button");
      tabButton.className = "tabLinks";
      tabButton.textContent = tab.title;
      tabButton.id = tab.id;
      tabContainer.append(tabButton);

      const tabContent = document.createElement("div");
      tabContent.id = tab.id;
      tabContent.className = "tabContent";
      tabContent.innerHTML = `<h3>${tab.title}</h3><p>${tab.content}</p>`;
      tabContentContainer.append(tabContent);
    });

    tabContainer.addEventListener("click", function (event) {
      if (event.target.matches(".tabLinks")) {
        console.log(event.target.id);
        const tabId = event.target.id;
        if (tabId !== activeTab) {
          openTab(tabId);
          activeTab = tabId;
        }
      }
    });
  }
  renderTabs();
});
