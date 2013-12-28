javascript:
if (window.location.href.indexOf("/comments/") > -1){
    

var userCheck = jQuery('#siteTable').find('.author').text();
window.countIT = 0;
$("#siteTable").append('<div id="result1"></div>');
$.getJSON(
        "http://www.reddit.com/user/"+userCheck+"/submitted.json?limit=1000",
        function foo(data)
        {
          $.each(
            data.data.children.slice(0, 100),
            function (i, post) {
            	
            if(post.data.subreddit === "gonewild") { 
            window.countIT++;

$("#siteTable").append(
'<table cellspacing="0" cellpadding="0" border="0" width="700" style="margin-left:10px;">
<tr>
<td width="70"><a href="'+post.data.url+'"><img onerror="this.src=\'http://i.imgur.com/29KC9mV.png\'" src="'+post.data.url+'" width="70"></a></td>
<td width="5"></td>
<td width="625"><a href="'+post.data.url+'" class="link title" style="font-size:17px; padding-left:0px; line-height:20px;">'+post.data.title+'</a><br/><a href="'+post.data.permalink+'" style="font-size:12px;">Thread Permalink</a></td>
</tr>
<table>
<hr>
<br/>')

            }

            }
          );
        }
      )
      .success(function() {
if(window.countIT > 0) { 
$("#result1").append('<div class="results" style="margin-left:10px;max-width: 700px; border-radius: 3px; border:1px solid;background-color:#DFF2BF;padding:15px;font-family:Arial, Helvetica, sans-serif; font-size:15px; color:#4F8A10;"><strong style="font-weight:bold;">SUCCESS!</strong> '+ userCheck + ' has ' + countIT + " GoneWild Posts</div><br /><br />" )

}
else{$("#result1").append('<div class="results" style="margin-left:10px;max-width: 700px; border-radius: 3px; border:1px solid;background-color:#FFBABA;padding:15px;font-family:Arial, Helvetica, sans-serif; font-size:15px; color:#D8000C;">'+ userCheck +' has no GoneWild posts. <strong style="font-weight:bold;">:(</strong></div><br /><br />' )}
      })
      .error(function() { alert("The GoneWild finder currently only works on the comment page, further support is being developed"); })
      .complete(function() {});

}



if (window.location.href.indexOf("/user/") > -1){

var userCheck = jQuery('#siteTable').find('.author:first').text();
window.countIT = 0;
$("#siteTable:first").prepend('<div id="result1"></div>');
$.getJSON(
        "http://www.reddit.com/user/"+userCheck+"/submitted.json?limit=1000",
        function foo(data)
        {
          $.each(
            data.data.children.slice(0, 100),
            function (i, post) {
            	
            if(post.data.subreddit === "gonewild") { 
            window.countIT++;

$("#result1").append(
'<table cellspacing="0" cellpadding="0" border="0" width="700" style="margin-left:10px;">
<tr>
<td width="70"><a href="'+post.data.url+'"><img onerror="this.src=\'http://i.imgur.com/29KC9mV.png\'" src="'+post.data.url+'" width="70"></a></td>
<td width="5"></td>
<td width="625"><a href="'+post.data.url+'" class="link title" style="font-size:17px; padding-left:0px; line-height:20px;">'+post.data.title+'</a><br/><a href="'+post.data.permalink+'" style="font-size:12px;">Thread Permalink</a></td>
</tr>
<table>
<hr>
<br/>')

            }

            }
          );
        }
      )
      .success(function() {
if(window.countIT > 0) { 
$("#result1").prepend('<div class="results" style="margin-left:10px;max-width: 700px; border-radius: 3px; border:1px solid;background-color:#DFF2BF;padding:15px;font-family:Arial, Helvetica, sans-serif; font-size:15px; color:#4F8A10;"><strong style="font-weight:bold;">SUCCESS!</strong> '+ userCheck + ' has ' + countIT + " GoneWild Posts</div><br /><br />" )

}
else{$("#result1").prepend('<div class="results" style="margin-left:10px;max-width: 700px; border-radius: 3px; border:1px solid;background-color:#FFBABA;padding:15px;font-family:Arial, Helvetica, sans-serif; font-size:15px; color:#D8000C;">'+ userCheck +' has no GoneWild posts. <strong style="font-weight:bold;">:(</strong></div><br /><br />' )}
      })
      .error(function() { alert("The GoneWild finder currently only works on the comment page, further support is being developed"); })
      .complete(function() {});


}