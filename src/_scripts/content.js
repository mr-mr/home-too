function loadJSON(path, success, error){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}


// compile the template on-the-fly
// var tmpl = Handlebars.compile(document.getElementById('main_content').innerHTML);
//
// document.getElementById('content').innerHTML = tmpl(json);

// var siteAPI = "https://spreadsheets.google.com/feeds/list/1I5-pEwbq9_3xUslsvbktLM1eAk1OlVCKUqY8TsLkpSE/od6/public/basic?alt=json";
//
// $.getJSON(siteAPI, function(json) {
// 	// console.log(json);
//
//   var mainContent = json.feed.entry;
//
//   // console.log(mainContent[0].content.$t.replace('body: ', ''));
//
// 	// var site__data = json;
//
// 	var source = $("#main_content").html();
// 	var template = Handlebars.compile(source);
// 	// var data = site__data;
//   mainContent[0].content.$t.replace('body: ', '');
// 	$("#content").append(template(json));
//
// });


// ------------------------
loadJSON("http://ip-api.com/json", function(location){
  console.log(location.city);
});

loadJSON("https://spreadsheets.google.com/feeds/cells/1I5-pEwbq9_3xUslsvbktLM1eAk1OlVCKUqY8TsLkpSE/od6/public/basic?alt=json", function(contents) {
    console.log(contents.feed.entry.length);

    console.log(contents.feed.entry[0].content.$t);
    console.log(contents.feed.entry[1].content.$t);

    contents.feed.entry.forEach( function(content){
      var div = document.createElement('div');
      // console.log(content.content.$t);
      //   // var title = data.feed.entry[i].content.$title.$t;
      //   // var body = data.feed.entry[i].content.$body.$t;
      //   // var url = data.feed.entry[i].content.$url.$t;

      // div.innerHTML = content.content.$t;
      // document.getElementById('content').appendChild(div);
    });
});
// ------------------------
// $.getJSON('https://spreadsheets.google.com/feeds/list/1I5-pEwbq9_3xUslsvbktLM1eAk1OlVCKUqY8TsLkpSE/od6/public/basic?alt=json', function(data) {
// for (var i = 0; i < data.feed.entry.length; i++) {
//   console.log(data.feed.entry[i].content);
//   // var id = data.feed.entry[i].content.$contentid.$t;
//   // var title = data.feed.entry[i].content.$title.$t;
//   // var body = data.feed.entry[i].content.$body.$t;
//   // var url = data.feed.entry[i].content.$url.$t;
//
//   // console.log(body);
//
//   // var string = '<div>' + title + '<p>' + body + '</p>'+ '</div>';
//   // $("#content").append(string);
//
//   }
//
// });

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
