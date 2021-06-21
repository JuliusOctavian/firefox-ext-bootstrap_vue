import axios from "./util";

function postData(payload:{idol:string,data:Array<any>}) {
  axios.post("jav/add", payload).then(res => {
    console.log("postData:",res);
  }).catch(err => {
    console.log("postData:",err);
  })
}

function saveForm(formData: { address: string; port: number }) {
  browser.storage.local.set({formData}).then(() => {
    console.log("setData done");
  }).catch(err => {
    console.log("setData:", err);
  });
}

browser.webRequest.onBeforeRequest.addListener(function (req) {
    return {
      cancel: true
    }
  },
  {urls: ["https://www.baidu.com/img/flexible/logo/pc/*"], types: ["image"]},
  ["requestBody", "blocking"]);


browser.runtime.onMessage.addListener((res) => {
    const {name, data, dst} = res;
    switch (name) {
      case "PARAM":
        postData(data.payload);
        return Promise.resolve(true);
      case "FORM":
        saveForm(data.formData);
        return Promise.resolve(true);
    }
    return Promise.resolve(false);
  }
);