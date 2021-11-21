import { v4 as uuid } from "uuid";

interface Tab {
  id: string;
  no?: number;
  stamp: number;
}

const tabs: Array<Tab> = [];

// eslint-disable-next-line no-unused-vars
function saveForm(formData: { address: string; port: number }) {
  return browser.storage.local.set({ formData });
}

browser.webRequest.onBeforeRequest.addListener(
  () => ({
    cancel: true
  }),
  { urls: ["https://www.baidu.com/img/flexible/logo/pc/*"], types: ["image"] },
  ["requestBody", "blocking"]
);

browser.runtime.onMessage.addListener(res => {
  const { name } = res;
  switch (name) {
    case "PARAM":
      return Promise.resolve(true);
    case "FORM":
      return true;
    default:
      return false;
  }
});

browser.tabs.onCreated.addListener(tab => {
  const stamp = Date.now();
  const target = tabs.find(t => t.no === tab.id);
  if (target) {
    // eslint-disable-next-line no-unused-expressions
    target;
  } else {
    tabs.push({
      id: uuid(),
      no: tab.id,
      stamp
    });
  }
  console.log("tab.url", tab.url);
});

browser.tabs.onUpdated.addListener(tabId => {
  console.log("tab.id", tabId);
});
