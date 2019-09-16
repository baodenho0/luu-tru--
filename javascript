========================================================================
upload img
----
function readURL(input) {
  if (input.files && input.files[0]) {
    $('img').show();
      var reader = new FileReader();
      reader.onload = function(e) {
          $($(input).attr("data-target")).attr('src', e.target.result);
          $($(input).attr("data-target")).hide();
          $($(input).attr("data-target")).fadeIn(650);
      }
      reader.readAsDataURL(input.files[0]);
  }    
}

$("input[type=file]").change(function() {
        readURL(this);
});
========================================================================
----------
-----------------------------------------------------------------
//ajax lay du lieu tat ca form
$('#logo_form').on('submit',function(event){
  event.preventDefault();
//var form = $(this).serialize();
  var form = $('#logo_form')[0];
  var form_data = new FormData(form);

  $.ajax({
    url:"{{route('logo.postdata')}}",
    method: "POST",
    data: form_data,
    cache:false,
    contentType: false,
    processData: false,
    dataType:"json",
    success:function(data){
      if(data.error.length > 0){
        var error_html ='';
        for(var count = 0; count < data.error.length;count++){
          error_html += '<div class="alert alert-danger">'+data.error[count]+'</div>';
        }
        $('#form_output').html(error_html);
      }else{
        $('#form_output').html(data.success);
      }
    }
  })

});
========================================================================
----------
//datatable
$(document).ready(function() {    
oTableOrder = $('#datatable').DataTable({
       dom: "lBfrtip",
       buttons: [
           {   
               extend: 'csv', 
               text: '<i class="glyphicon glyphicon-export"></i> Export',
               className: "btn-sm"
           }
       ],  
       processing: true,
       serverSide: true,
   ajax:{ url:"{{ route('product-management.load') }}",
   data: function (d) {

        } 
    },
   columns: [

            { data: 'id', name: 'id' },
            { data: 'code', name: 'code' },
            { data: 'name', name: 'name' },
            { data: 'description' , name:'description'},
            { data: 'image' , name:'image'},
            // { data: 'slug' , name:'slug'},
            { data: 'colors' , name:'colors'},
            { data: 'quantity' , name:'quantity'},
            { data: 'str_import_price' , name:'str_import_price'},
            { data: 'percent_discount' , name:'percent_discount'},
            { data: 'str_income' , name:'str_income'},
            { data: 'str_money' , name:'str_money'},
            { data: 'name_producttype' , name:'name_producttype'},
            { data: 'action' , name:'action' ,orderable: false, searcheble: false}


    ],       
 }); 
========================================================================
----------
// search column .status dataTables
    $(document).on('click','#search',function(){
      var val = $('#search-val').val();        
        table.columns('.status').search(val).draw();        
    });
--------------------------------------------------------------------------------------------------------------
//check validate . class="is-invalid"
{{ $errors->has('groupName') ? ' is-invalid' : '' }}
--------------------------------------------------------------------------------
// script 
function btnDaily(data){
return data+" - "+data;
}
function btnWeekly(data){        
    var date = data;
    var d = new Date(date);

    var firstday = new Date(d.setDate(d.getDate() - d.getDay()));
    var lastday = new Date(d.setDate(d.getDate() - d.getDay()+6));

    var Month = d.getMonth() + 1;
    var startDay = firstday.getDate();      
    var Year = d.getFullYear();
    var endDay = lastday.getDate();
    return Month+'/'+startDay+'/'+Year+" - "+Month+'/'+endDay+'/'+Year;
}
function btnMonthly(data){
    var date = data;
    var d = new Date(date);  

    var Month = d.getMonth() + 1;
    var startDay = 1;      
    var Year = d.getFullYear();
    //get max date In Month
    var dateInMonth = new Date(Year, Month, 0).getDate();     
    var endDay = dateInMonth;
    return Month+'/'+startDay+'/'+Year+" - "+Month+'/'+endDay+'/'+Year;
}
function btnQuaterly(data){
    var date = data;
    var d = new Date(date); 
    var startMonth = ''; 
    var endMonth = '';         

    var Month = d.getMonth() + 1;
    var Year = d.getFullYear();
    switch(Month){
        case 1: startMonth = 1; endMonth = 3; endDay = 31; break;
        case 2: startMonth = 1; endMonth = 3; endDay = 31; break;
        case 3: startMonth = 1; endMonth = 3; endDay = 31; break;
        case 4: startMonth = 4; endMonth = 6; endDay = 30; break;
        case 5: startMonth = 4; endMonth = 6; endDay = 30; break;
        case 6: startMonth = 4; endMonth = 6; endDay = 30; break;
        case 7: startMonth = 7; endMonth = 9; endDay = 30; break;
        case 8: startMonth = 7; endMonth = 9; endDay = 30; break;
        case 9: startMonth = 7; endMonth = 9; endDay = 30; break;
        case 10: startMonth = 10; endMonth = 12; endDay = 31; break;
        case 11: startMonth = 10; endMonth = 12; endDay = 31; break;
        case 12: startMonth = 10; endMonth = 12; endDay = 31; break;
    }
    return startMonth+'/01/'+Year+" - "+endMonth+'/'+endDay+'/'+Year;
}
function btnYearly(data){
    var date = data;
    var d = new Date(date);  
    var Year = d.getFullYear();
    return "01/01/"+Year+" - "+"12/31/"+Year;
}
==============================================================================================
--------------------------
