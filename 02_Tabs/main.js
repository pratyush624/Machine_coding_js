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
   * 1) Initialize the Active Tab:
   * 2) Render Tabs and Content:
   * 3) Set Up Event Delegation for Tabs
   * 4) Open the Active Tab
   * 5) Initial Rendering and Opening of the Default Tab
   */
  let activeTab = tabsData[0].id;

  /** render all the tabs and contents */
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
      tabContent.id = `tab-${tab.id}`;
      tabContent.className = "tabContent";
      tabContent.innerHTML = `<h3>${tab.title}</h3><p>${tab.content}</p>`;
      tabContentContainer.append(tabContent);
    });
  }

  /** using event delegation */
  tabContainer.addEventListener("click", function (event) {
    if (event.target.matches(".tabLinks")) {
      const tabId = event.target.id;
      if (tabId !== activeTab) {
        openTab(tabId);
        activeTab = tabId;
      }
    }
  });

  /** Opening individual tab on click */
  function openTab(tabId) {
    const allTabsContent = document.querySelectorAll(".tabContent");
    const allTabButtons = document.querySelectorAll(".tabLinks");

    allTabsContent.forEach((tabContent) => {
      tabContent.style.display = "none";
    });

    /** remove active state from all button */
    allTabButtons.forEach((tabButton) => {
      tabButton.classList.remove("active");
    });

    document.getElementById(`tab-${tabId}`).style.display = "block";

    /** Give active state to active tab button */
    document.getElementById(tabId).classList.add("active");
  }
  renderTabs();
  openTab(activeTab);
});
