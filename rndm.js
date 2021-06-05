 
  function robot(veri){
	    
	 $('#'+veri.submit_button_id).click(function(){
  if ($('#gonder').attr("id1")!="xyz"){
  alert("Block")
  } else {
    alert("Success")
	/*
$.ajax({ 
....
})	
*/
  }
  })
 
  var $input = '<p><center><h3>Robot Değilim</h3></center>' ;
  $input += '<div class="input-group">'; 
  $input += '<input id="bir" type="text" style="text-align: center;"   class="'+veri.u_class+'" value="'+veri.symbol+'" disabled    maxlength="1" size="1"/>';
  $input += '<input id="iki" type="text" style="text-align: center;"  class="'+veri.u_class+'" value="'+veri.symbol+'" disabled maxlength="1" size="1"style="margin-left:-1px" />';
  $input += '<input id="uc" type="text" style="text-align: center;"  class="'+veri.u_class+'" value="'+veri.symbol+'" disabled maxlength="1" size="1" style="margin-left:-2px" />';
  $input += '<input id="dort" type="text" style="text-align: center;"  class="'+veri.u_class+'" value="'+veri.symbol+'"  disabled maxlength="1" size="1" style="margin-left:-3px" />';
   $input += '</div>'; 
   $input += '<div class="input-group">'; 
   $input += '<input id="birbir" type="text"   style="text-align: center"  class="'+veri.u_class+'" value=""           maxlength="1" size="1"/>';
  $input += '<input  id="ikiiki" type="text"    style="text-align: center"  class="'+veri.u_class+'" value="" disabled  maxlength="1" size="1" style="margin-left:-1px" />';
  $input += '<input id="ucuc"     type="text"  style="text-align: center"  class="'+veri.u_class+'" value="" disabled  maxlength="1" size="1" style="margin-left:-2px" />';
  $input += '<input id="dortdort" type="text"  style="text-align: center"  class="'+veri.u_class+'" value="" disabled  maxlength="1" size="1" style="margin-left:-3px" />';
   $input += '<br><center><div id="gonder"></div></center>'; 
  $input += '</div>';  
  
  $("#ust").append($input);
 
 var input_liste=[] 
$('.form-control').map(function() {
    return {
      name: this.id 
    }
  }).get().forEach(function(e) {  
   input_liste.push(e.name);
    //console.log(input_liste.length)  
 });
 var sembol=veri.symbol;	 
 var bir=$("#"+input_liste[0])
 var iki=$("#"+input_liste[1])
 var uc=$("#"+input_liste[2])
 var dort=$("#"+input_liste[3])
   
 var birbir=$("#"+input_liste[4]) 
 var ikiiki=$("#"+input_liste[5]) 
 var ucuc=$("#"+input_liste[6]) 
 var dortdort=$("#"+input_liste[7])  
 var bugu ={"-webkit-filter": "blur(45px)",
                "filter": "blur(1px)"
           }
 $('button[type="submit"]').attr('disabled', 'disabled');
 if (bir.val()===sembol) {bir.val(anahtar())}
 
 birbir.focus() 
  bir.css( "color", renk() ) 
 
$(document).on('keyup', 'input', function(e) {  
  //this.value = this.value.replace(/[^0-9\.]/g,'');
   this.value = this.value.toUpperCase() 
   
 if( bir.val()=== birbir.val()){  
 bir.css(bugu);
 if (iki.val() ===sembol) {iki.val(anahtar())} 
 ikiiki.removeAttr("disabled").focus(); 
   iki.css( "color", renk() )
 }
 if ( iki.val() == ikiiki.val()){ 
 iki.css(bugu);
 birbir.attr('disabled', 'disabled');
  if(uc.val() ===sembol) {uc.val(anahtar())}
  $('#ucuc').removeAttr("disabled").focus();  
    uc.css( "color", renk() )
 }
  if (uc.val() == ucuc.val()){ 
  uc.css(bugu);
  ikiiki.attr('disabled', 'disabled');
  if(dort.val() ===sembol){dort.val(anahtar())}
    dortdort.removeAttr("disabled").focus(); 
	dort.css( "color", renk() )
 }
  if  (dort.val() == dortdort.val()){
dort.css(bugu); 
   ucuc.attr('disabled', 'disabled'); 
 } 
  if  (bir.val()==birbir.val() &&  iki.val()== ikiiki.val()&& uc.val() == ucuc.val() && dort.val()== dortdort.val()){
   dortdort.attr('disabled', 'disabled');   
   
    $('#gonder').html('<font color=green>&#10004;</font>')
  $('#'+veri.submit_button_id).removeAttr("disabled")
  $('#'+veri.submit_button_id).mouseover(function() {if ( $('#gonder').text()=='');$('#gonder').html('<font color=green>&#10004;</font>') ;$('#gonder').attr('id1','xyz') ; {  ;$('#'+veri.submit_button_id).attr("type","submit");}; })
	   
   }
	}) 
	
	 function anahtar(){
 var sonuc=Math.round((Math.pow(36, 1 + 1) - Math.random() * Math.pow(36, 1))).toString(36).slice(1).toUpperCase()
 return sonuc
 }  
 function renk(){
	var renk_sonuc=Math.floor(Math.random()*16777215).toString(16)
	 return '#'+renk_sonuc 
 }  
 
 
}

  
$(document).keypress(function(event){
	 
     // this.value = this.value.toUpperCase() 
    var key = (event.keyCode ? event.keyCode : event.which);
    var ch=String.fromCharCode(key).toUpperCase() 
       if ( $("#bir").val()!=ch && $("#iki").val()!=ch && $("#uc").val()!=ch &&  $("#dort").val()!=ch ){ 
	  return false
	   } 
}) 
      