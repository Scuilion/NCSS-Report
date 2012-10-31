var addFiltering = function(){
 $.fn.dataTableExt.afnFiltering.push(
   function( oSettings, aData, iDataIndex ) {
		var iMin = document.getElementById('min').value * 1;
		var iMax = document.getElementById('max').value * 1;
		var iVersion = aData[1] == "-" ? 0 : aData[1]*1;
		if ( iMin == "" && iMax == "" )
		{
			return true;
		}
		else if ( iMin == "" && iVersion < iMax )
		{
			return true;
		}
		else if ( iMin < iVersion && "" == iMax )
		{
			return true;
		}
		else if ( iMin < iVersion && iVersion < iMax )
		{
			return true;
		}
		return false;
	}
   ) };

var addPopups = function(){
   $("th[class*='NCSS']").append(
       "<div class='popup' style='display:none; z-index:100' >"+
            "<input name='min' id='min' type='text'><br>"+
            "<input name='max' id='max' type='text'><br>"+
         "</div>"
   );
   $("#icon").live('click', function(){
      $(".popup").slideFadeToggle(function(){
         
      });
      
   }); 

};

$.fn.slideFadeToggle = function(easing, callback) {
    return this.animate({ opacity: 'toggle', height: 'toggle' }, "fast", easing, callback);
};

