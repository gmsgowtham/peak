$(document).ready(function(){

  var div = $("<div class='peak-popup' id='peak'></div>").text('Popover dynamic');

  function initializeElement() {
    $('body').prepend(div);
  }

  initializeElement();

  $('body').mouseup(function(e) {
    toggleElement(e);
  });

  function toggleElement(e) {
    var selectionText = getSelectionText();
    if (selectionText.length >0 && selectionText.length <= 30) {
      $(div).css({
        top: e.pageY + 'px',
        left: e.pageX + 'px'
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
