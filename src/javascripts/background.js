$(document).ready(function(){

  var selectionText = '';
  const twitterURL = chrome.runtime.getURL("assets/icons/twitter.png");
  const div = $("<div class='peak-popup' id='peak'><img class='peak-social-img' src="+twitterURL+" alt='twitter'></img></div>");

  function initializeElement() {
    $('body').prepend(div);
  }

  initializeElement();

  $('body').mouseup(function(e) {
    toggleElement(e);
  });

  $('.peak-social-img').click(function() {
  })

  function toggleElement(e) {
    selectionText = getSelectionText().trim();
    if (selectionText.length >10) {
      const selection = window.getSelection();
      const selectionBox = selection.getRangeAt(0).getBoundingClientRect();
      $(div).css({
        top: selectionBox.top + window.pageYOffset - 50,
        left: selectionBox.left + window.pageXOffset
      });
      $(div).addClass('peak-popup-show');
    } else {
      $(div).removeClass('peak-popup-show');
    }
  }

  function getSelectionText() {
    var text = "";
    if (typeof window.getSelection != "undefined") {
      text = window.getSelection().toString();
    } else if (typeof document.selection != "undefined" && document.selection.type == "Text") {
      text = document.selection.createRange().text;
    }
    return text;
  }

})
