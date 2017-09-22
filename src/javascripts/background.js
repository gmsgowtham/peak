(function(){

  let selectionText = '';
  let twitterURL = '';
  if (navigator.userAgent.indexOf("Chrome") != -1) {
    twitterURL = chrome.runtime.getURL("assets/icons/twitter.png");
  } else if (navigator.userAgent.indexOf("Firefox") != -1) {
    twitterURL = browser.runtime.getURL("assets/icons/twitter.png");
  }

  const div = $("<div class='peak-popup' id='peak'><img class='peak-social-img' src="+twitterURL+" alt='twitter'></img></div>");

  const initializeElement = () => {
    $('body').append(div);
  }

  initializeElement();

  const toggleElement = (e) => {
    selectionText = getSelectionText().trim();
    if (selectionText && selectionText.length >10 && window.getSelection()) {
      const selection = window.getSelection();
      const selectionBox = selection.getRangeAt(0).getBoundingClientRect();
      const elementWidth = $(div).css('width');
      $(div).css({
        top: selectionBox.top + window.pageYOffset - 50,
        left: selectionBox.left + (selectionBox.width/2) + window.pageXOffset - (parseInt(elementWidth)/2)
      });
      $(div).addClass('peak-popup-show');
    } else {
      $(div).removeClass('peak-popup-show');
    }
  }

  const getSelectionText = () => {
    if (typeof window.getSelection != "undefined") {
      return window.getSelection().toString();
    } else if (typeof document.selection != "undefined" && document.selection.type == "Text") {
      return document.selection.createRange().text;
    }
  }

  $('body').mouseup(function(e) {
    toggleElement(e);
  });

  $('.peak-social-img').click(function() {
    switch ($(this).attr('alt').toLowerCase()) {
      case 'twitter':
        createTab('https://twitter.com/intent/tweet?text='+selectionText)
        break;
      default:

    };
  })


  const createTab = (url) => {
    var win = window.open(url, '_blank', "toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=300,width=500,height=500");
      if (win) {
        win.focus();
      } else {
      }
  }

})()
