/**äöüßÄÜÖ**/
/*
Theme Name: markieren.js
Theme URI: http://lugm.de
Description: Script Template for KiCad Folder
Author: Lutz Müller
Author URI: http://lugm.de
*/
function markieren (elem) {
  if (document.selection && document.selection.createRange) {
    var textRange = document.selection.createRange();
    textRange.moveToElementText(elem);
    textRange.select();
    textRange.selectText();    // Hightlight / select the text
    textRange.selectText(false); // Clear the selection
	textRange.copyText(); // Copy text to clipboard
  } else if (document.createRange && window.getSelection) {
	       // Non-Internet Explorer
    var range = document.createRange();
    	range.selectNode(elem);
        range.selectNodeContents(elem);
    var selection = window.getSelection();
        var sel = window.getSelection();
	selection.removeAllRanges();
        sel.removeAllRanges();
    selection.addRange(range); // Hightlight / select the text alert("b");
		sel.addRange(range);    // Copy text to clipboard
        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Copy command was ' + msg);
            elem.title = "Copy command was " + msg ;
            setTimeout(function() {a = false;}, 8000);
  				// Code, der erst nach 8 Sekunden ausgeführt wird
        }
        catch (err) {
            console.log('Oops, unable to copy');
            elem.title = "Oops, unable to copy";
        }
  }
}
 function select_all(obj) {
        var text_val=eval(obj);
        text_val.focus();
        text_val.select();
        if (!document.all) return; // IE only
        r = text_val.createTextRange();
        r.execCommand('copy'); }
$(document).ready(function() {
(function ( $ ) {
    $.fn.replaceTagName = function( replaceTag ) {
         var tags = [], i  = this.length;
        while (i--)
        {
            var newElement = document.createElement(replaceTag),
                thisi      = this[i],
                thisia     = thisi.attributes;
           for (var a = thisia.length - 1; a >= 0; a--) {
                var attrib = thisia[a];
             	$(newElement).attr(attrib.name, attrib.value );
            };
            newElement.innerHTML = thisi.innerHTML;
            $(thisi).after(newElement).remove();
            tags[i - 1] = newElement;
        }
       // return $(tags);
    };
}( jQuery ));
$('b').replaceTagName('strong');
$('i').replaceTagName('em');
$('u').attr('class','underline' );
$('u').replaceTagName('span'); // replace all u´s with span´s
$('nobr').attr('class','nobr' );
$('nobr').replaceTagName('span');
 $('#HyphenatorToggleBox').css({
 	"cursor": "pointer"
 	,"right": "-144px"
  });
 $('.absolute').css({
 	"cursor": "pointer"
 	,"right": "-37px"
  });
$(".absolute").hover(function(){
    $(this).animate({ right: "5px" });
}, function() {
    $(this).animate({ right: "-37px" });
});
 });
 jQuery(document).ready(function(){
var j=0;
if ($("code.codebox").find("span.new")){
  $( "span.number" ).each(function( index ) {
	j++;
	//console.log( index + ": " + j );
    //console.log( index + ": " + $(this).text() );
    //if ($(index).hasClass('new')){
      if ($(index).data("line")){
			j =  $(index).data("line");
        alert('Neue Linie: '+j);
		//}
    }else{
        //alert(j);
    }
    $(index).css('color','red');
   		$(this).find("number").remove().end().prepend('<span class="line">' + j  + ". </span>");
        //alert( "Erfolgreich Eingefügt.");
  	});
	}
	else{
		alert('Keinen Code gefunden');
	}
});
 $(document).ready(function() {
 // Tooltip only Text
        $('img.folder').hover(function(){
                // Hover over code
                var hoverText = $(this).attr('alt').replace(/\\n/g, "<br>");
                $(this).data('tipText', hoverText).removeAttr('title');
                $('<p class="tooltip"></p>')
                .html(hoverText)
                .appendTo('body')
                .fadeIn('slow');
        }, function() {
                // Hover out code
                $(this).attr('title', $(this).data('tipText'));
                $('.tooltip').remove();
         }).mousemove(function(e) {
                var mousex = e.pageX + 14; //Get X coordinates
                var mousey = e.pageY + 16; //Get Y coordinates
                $('.tooltip')
                .css({ top: mousey, left: mousex })
        });
        $('span').hover(function(){
                // Hover over code
                var hoverText = $(this).attr('title').replace(/\\n/g, "<br>");
                $(this).data('tipText', hoverText).removeAttr('title');
                $('<p class="tooltip"></p>')
                .html(hoverText)
                .appendTo('body')
                .fadeIn('slow');
        }, function() {
                // Hover out code
                $(this).attr('title', $(this).data('tipText'));
                $('.tooltip').remove();
         }).mousemove(function(e) {
                var mousex = e.pageX + 14; //Get X coordinates
                var mousey = e.pageY + 16; //Get Y coordinates
                $('.tooltip')
                .css({ top: mousey, left: mousex })
        });
         $('abbr').hover(function(){
                // Hover over code
                var hoverText = $(this).attr('title').replace(/\\n/g, "<br>");
                $(this).data('tipText', hoverText).removeAttr('title');
                $('<p class="tooltip"></p>')
                .html(hoverText)
                .appendTo('body')
                .fadeIn('slow');
        }, function() {
                // Hover out code
                $(this).attr('title', $(this).data('tipText'));
                $('.tooltip').remove();
         }).mousemove(function(e) {
                var mousex = e.pageX + 14; //Get X coordinates
                var mousey = e.pageY + 16; //Get Y coordinates
                $('.tooltip')
                .css({ top: mousey, left: mousex })
        });
         $('dfn').hover(function(){
                // Hover over code
                var hoverText = $(this).attr('title').replace(/\\n/g, "<br>");
                $(this).data('tipText', hoverText).removeAttr('title');
                $('<p class="tooltip"></p>')
                .html(hoverText)
                .appendTo('body')
                .fadeIn('slow');
        }, function() {
                // Hover out code
                $(this).attr('title', $(this).data('tipText'));
                $('.tooltip').remove();
         }).mousemove(function(e) {
                var mousex = e.pageX + 14; //Get X coordinates
                var mousey = e.pageY + 16; //Get Y coordinates
                $('.tooltip')
                .css({ top: mousey, left: mousex })
        });
var count1 = 0;
	$("#content > article  > p").each(function() {
		count1++;
		$(this).attr("id", "Absatz" + count1);
	});
    // Check links under NLPosts Wrapper
    jQuery('haed').each(function(e){
        // Get the content
        var str = jQuery(this).html();
        // Look for .html/
        var regex = /(\/>)/ig
        // Replace trailing slash for .html links
        var replaced_text = str.replace(regex, ">");
        // Return link
        jQuery(this).html(replaced_text);
    });
  $('strong em').css({
		"color": "#008080"
  });
  $("var").mousemove( function() {
    $(this).css({"cursor": "pointer",
		"display": "inline-block",
		"background-color": "#F7F7F9",
		"color": "#808000",
		});
  });
   $("var").mouseout(function() {
    $(this).css({
		 "display": "inline-block"
		,"background-color": "#F7F7F9"
		,"color": "#0000FF"
		});
  });
    $(".redin").css({
		 "display": "inline-block"
		,"width": "130px"
		,"text-align": "right"
		});
  $('mark').css({
		 "display": "inline-block"
		,"cursor": "pointer"
  });
  $('code').css({
		"cursor": "pointer"
  });
  $('blockquote').css({
		"color": "#555"
  });
    $('code').click(
		function(){
		$('.line').remove();
		$('.lines').remove();
		$('.new-line').remove();
		$('.line-number').remove();
		markieren(this);
	    if (text = this.getAttribute('data-copy')) {
	       console.log(text);
			copyToClipboard(text);
	    }
    });
	let a = false;
	$('code').mousemove( function() {
		setTimeout(function() {
			if (a === false) {
				$('code').attr({ title:  "Copy text to clipboard" });
				a = true;
			}
		}, 8000); // Code, der erst nach 8 Sekunden ausgeführt wird
	});
	$('mark').mousemove( function() {
		setTimeout(function() {
	  		$('mark').attr({ title:   "Copy text to clipboard"  });
		}, 8000); // Code, der erst nach 8 Sekunden ausgeführt wird		
	});
});
function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    // to avoid breaking orgain page when copying more words
    // cant copy when adding below this code
    // dummy.style.display = 'none'
    document.body.appendChild(dummy);
    //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}
$(document).ready(function() {
// Tooltip only Text
$('.tooltipp').hover(function(){
        // Hover over code
        var title = $(this).attr('title');
        $(this).data('tipText', title).removeAttr('title');
        $('<p class="tooltip"></p>')
        .text(title)
        .appendTo('body')
        .fadeIn('slow');
}, function() {
        // Hover out code
        $(this).attr('title', $(this).data('tipText'));
        $('.tooltip').remove();
}).mousemove(function(e) {
        var mousex = e.pageX + 20; //Get X coordinates
        var mousey = e.pageY + 10; //Get Y coordinates
        $('.tooltip')
        .css({ top: mousey, left: mousex })
});
});
