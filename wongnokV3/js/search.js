$(function () {

    $('#search').click(function(){
        $('#searchresultENG').empty();
        $('#searchresultTH').empty();
        var keyword = $('#keyword').val();
        var type = $('#type').val();
        var radius = $('#radius').val(); 
        if(keyword == ''||type==''||radius==''){
            $('#mainform').addClass('was-validated');
        }else{
            
        PlaceSearch.Search(keyword, type, radius).then(function(data){
        
            var reSth = '<h2>ผลลัพธ์ ทั้งหมด : '+data.length+'&nbsp;รายการ</h2>';
            var reSeng = '<h2>Result all : '+data.length+'&nbsp;list</h2>';
            $('#searchresultTH').append(reSth);
            $('#searchresultENG').append(reSeng);
            
            for(var i=0;i<data.length;i++){
              /* if(data[i].rating==5){
                    $('#st1').addClass('checked');
                    $('#st2').addClass('checked');
                    $('#st3').addClass('checked');
                    $('#st4').addClass('checked');
                    $('#st5').addClass('checked');
                }else if(data[i].rating<2){
                    $('#st1').addClass('checked');
                  
                }else if(data[i].rating<3){
                    $('#st1').addClass('checked');
                    $('#st2').addClass('checked');
                  
                }else if(data[i].rating<4){
                    $('#st1').addClass('checked');
                    $('#st2').addClass('checked');
                    $('#st3').addClass('checked');
                }else if(data[i].rating<5){
                    $('#st1').addClass('checked');
                    $('#st2').addClass('checked');
                    $('#st3').addClass('checked');
                    $('#st4').addClass('checked');
                }else{

                }*/

                if(data[i].rating==undefined){
                    data[i].rating=0;
                }
            
                var resultTH =   
                '<div class="col jumbotron">' + 
                '<a href="detail.html?placeid=' + data[i].id + '">' + 
                '<div class="row">' + 
                '<div class=" col-md-4 col-12"><img src=' + data[i].photo + ' class="picsearch" /></div>' +
                '<div class="col-md-4 col-12">' +'<br><center><b>\"'+data[i].name + '\"</b></center></div>' +       
                '<div class=" col-md-4 col-12">' +'<br><b>คะแนน</b><br>'+ data[i].rating + '<br>'+
                '<center><span class="rating-static rating-'+ data[i].rating*10+'"></span></center>'+
                '</div>' +
                '</div>' +
                '<div class="row"><div class="col-12" align="right">'+(i+1)+'</div></div>' +
                '</a>' +
                '</div>' ;
                
                var resultENG = 
                '<div class="col jumbotron">' + 
                '<a href="detaileng.html?placeid=' + data[i].id + '">' + 
                '<div class="row">' + 
                '<div class=" col-md-4 col-12"><img src=' + data[i].photo + ' class="picsearch" /></div>' +
                '<div class="col-md-4 col-12">' +'<br><center><b>\"'+data[i].name + '\"</b></center></div>' +
            
                '<div class=" col-md-4 col-12">' +'<br><b>Rating</b><br>'+ data[i].rating + '<br>'+
                '<center><span class="rating-static rating-'+ data[i].rating*10+'"></span></center>'+
                '</div>' +
                '</div>' +
                '<div class="row"><div class="col-12" align="right">'+(i+1)+'</div></div>' +
                '</a>' +
                '</div>' ;
                
                $('#searchresultTH').append(resultTH);
                $('#searchresultENG').append(resultENG);
                
                
            }
            
        });
      }
    })   
    


});