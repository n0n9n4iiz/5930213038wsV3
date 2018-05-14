$(function () {

    var placeid = getUrlParameter('placeid');
 
    PlaceSearch.Detail(placeid).then(function(data){
        console.log($('#a').html(data.id));
        $('#gallery').empty();
        $('#placename').html(data.name);        
        $('#address').empty();
        $('#opennow').empty();
        $('#rating').empty();
        $('#star').empty();
        $('#phone').empty();
        
        if(data.open_now==true){
            var openE = '<center><h2><font color="green">Open</font></h2></center>';
        }else{
            var openE = '<center><h2><font color="red">Close</font></h2></center>';
        }
        $('#opennow').append(openE);

        if(data.address==undefined|''){
            data.address="No information.";
        }
        if(data.phone==undefined|''){
            data.phone="No information."
        }
        var phone = 'Tel : '+data.phone;
        $('#phone').append(phone);
        var address = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+data.address;
        $('#address').append(address);
        var rating = '<center>Rating : '+data.rating+'</center>';
        $('#rating').append(rating);
        if(data.rating==5){
            var picrat = '<center><img src="images/star5.png" width="500px" height="300px"></center>';
        }else if(data.rating>4.3){
            var picrat = '<center><img src="images/star45.png" width="500px" height="300px"></center>';
        }else if(data.rating>=4){
            var picrat = '<center><img src="images/star4.png" width="500px" height="300px"></center>';
        }else if(data.rating>3.3){
            var picrat = '<center><img src="images/star35.png" width="500px" height="300px"></center>';
        }else if(data.rating>=3){
            var picrat = '<center><img src="images/star3.png" width="500px" height="300px"></center>';
        }else if(data.rating>2.3){
            var picrat = '<center><img src="images/star25.png" width="500px" height="300px"></center>';
        }else if(data.rating>=2){
            var picrat = '<center><img src="images/star2.png" width="500px" height="300px"></center>';
        }else if(data.rating>1.3){
            var picrat = '<center><img src="images/star15.png" width="500px" height="300px"></center>';
        }else if(data.rating>=1){
            var picrat = '<center><img src="images/star1.png" width="500px" height="300px"></center>';
        }else{
            var picrat = '<center><img src="images/star0.png" width="500px" height="300px"></center>';
        }
        $('#star').append(picrat); 

        for(var i=0;i<data.photos.length;i++){
            if(i==0){
                var slidepic = 
                '<div class="carousel-item active">'+
                '<img  class=" picture " style="height:350px"  width = "300px" src=' + data.photos[i] + ' />' +
                 '</div>';
                 $('#gallery').append(slidepic); 
                }else{
                var slidepic = '<div class="carousel-item ">'+     
                 '<img  class=" picture " style=" height:350px" width = "300px" src=' + data.photos[i] + '  />' +
                  '</div>';
                  $('#gallery').append(slidepic) ;}
                }

                     $('#carousel-example-generic').on('slid.bs.carousel', function () {
                     $(".carousel-item.active:nth-child(" + ($(".carousel-inner .carousel-item").length -1) + ") + .carousel-item").insertBefore($(".carousel-item:first-child"));
                    
                 });  
            
                });   


    //Get URL parameter
    function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    }

});