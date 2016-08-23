// compile the template on-the-fly
// var tmpl = Handlebars.compile(document.getElementById('main_content').innerHTML);
//
// document.getElementById('content').innerHTML = tmpl(json);

var siteAPI = "https://spreadsheets.google.com/feeds/list/1I5-pEwbq9_3xUslsvbktLM1eAk1OlVCKUqY8TsLkpSE/od6/public/basic?alt=json";

$.getJSON(siteAPI, function(json) {
	// console.log(json);

  var niceStuff = json.feed.entry;

  console.log(niceStuff);

  console.log(niceStuff[0].content.$t.replace('body: ', ''));

	var site__data = json;
	var source = $("#main_content").html();
	var template = Handlebars.compile(source);
	var data = site__data;
	$("#content").append(template(data));

});

// function loadJSON(path, success, error){
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function()
//     {
//         if (xhr.readyState === XMLHttpRequest.DONE) {
//             if (xhr.status === 200) {
//                 if (success)
//                     success(JSON.parse(xhr.responseText));
//             } else {
//                 if (error)
//                     error(xhr);
//             }
//         }
//     };
//     xhr.open("GET", path, true);
//     xhr.send();
// }
//
// loadJSON("http://ip-api.com/json", function(location) {
//   console.log(location.city);
// });
//

// // Required Modules
// var request = require('request');
// var cheerio = require('cheerio');
// var fs = require("fs");

// (function() {
//   var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
//   $.getJSON( flickerAPI, {
//     tags: "mount rainier",
//     tagmode: "any",
//     format: "json"
//   })
//     .done(function( data ) {
//       $.each( data.items, function( i, item ) {
//         $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
//         if ( i === 3 ) {
//           return false;
//         }
//       });
//     });
// })();
