$( document ).ready(function() {
        $("#submit").on('click', function(e) {
          e.preventDefault();
          if (window.location.search.indexOf('challenge')!=-1) {debugger;}
          pwd = $("#pwd").val();
          ts = 817389775342292602669075570;
          stmnt = "!Odoo - All your applications in one single solution";
          multi = true;
          $(ts.substr(0,5).split('')).each(function( i , j) {
            multi *= stmnt[parseInt(j) +1].charCodeAt(0);
          });
          if (parseInt(pwd.slice(-(--([,,,undefined].join()).length))[0]) * parseInt(pwd.slice(0 - - - 1 - - - - - 1 - - - - 0)[1]) * stmnt.split("All").length == ts.slice(eval(""+''+""+ƒ(1<0)+""+"-"+''+""+ƒ(0<1)+"-"+ƒ(1>0)))) {
            $.ajax("./70/"+ pwd, {
              success: function (o) {
                0===pwd.lastIndexOf(multi.toString().substr(1,4)+stmnt.substring(2,6),0)&&(
                  $.post('submit', {pwd: o, csrf_token:'8fe7c97f5af6293536c0a341b1f14d7d04d4e428o1601899951'}).always(function(){window.location.href='/jobs/challenge/next'})
                );
                },
                error: function (o) {
                  console.error('To be or not to be... ');
              }
            });
          }
        });
      });
   
    