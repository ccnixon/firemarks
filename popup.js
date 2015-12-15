var myFirebaseRef = new Firebase("https://<YOUR-FIREBASE-APP>.firebaseio.com/");
function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {

    var tab = tabs[0];

    var data = {}
    data.url = tab.url;
    data.title = tab.title;

    callback(data);
  });
};

document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById("button");
  button.addEventListener("click", function(){
      getCurrentTabUrl(function(data) {
        myFirebaseRef.push({
          url: data.url,
          title: data.title
      });
    });
  });
});
