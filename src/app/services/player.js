$(function() {
 
  var cdn = "//edge.flowplayer.org/";
 
  // videos are named night1 thru night7
  // cycle through trigger elements with id="clip basename" each
  $("ul.triggers:first > li").each(function (i, triggerEl) {
 
    // obtain clip base name from id attribute of trigger
    // and create a container element
    var clipName = $(triggerEl).attr("id"),
        container = $("<div/>");
 
    // append container to body
    $("body").append(container);
 
    // install flowplayer with overlay plugin into container
    flowplayer(container, {
      overlay: {
        vendor: "fancybox",
        trigger: "#" + clipName
      },
      hlsQualities: [-1, 1, 3, 6, 7],
      ratio: 9/16,
      clip: {
        sources: [
          { type: "application/x-mpegurl", src: cdn + clipName + ".m3u8" },
          { type: "video/mp4",             src: cdn + clipName + ".mp4" }
        ]
      }
    });
 
  });
 
});