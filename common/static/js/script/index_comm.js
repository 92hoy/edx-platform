/**
 * Created by dev on 2016. 11. 29..
 */
$(document).ready(function(){
    var html ='';
    $.ajax({
        url : 'comm_list_json'
    }).done(function(data){
        console.log(data);
        for(var i=0; i<data.length; i++){
            html +="<div class='col col-12 sm-col-6 md-col-4  lg-col-3'>";
            html +="<div class='community-item'>";
            if(data[i][5] == 'F'){
                html +="<a href='/comm_faq'>";
            }else if(data[i][5] == 'K'){
                html +="<a href='/comm_k_news_view/"+data[i][0]+"/'>";
            }else if(data[i][5] == 'N'){
                html +="<a href='/comm_notice_view/"+data[i][0]+"/'>";
            }else if(data[i][5] == 'R'){
                html +="<a href='/comm_repo_view/"+data[i][0]+"/'>";
            }
            html +="<h3><strong class='category'>"+data[i][1]+"</strong>";
            html +="<p>"+data[i][2]+"</p></h3>";
            html +="<p class='summary'>"+data[i][3].substr(0,200)+"</p>";
            html +="<time>"+data[i][4]+"</time>";
            html +="</a>";
            html +="</div>";
            html +="</div>";
        }
        $('#total').html(html);
    })
});


//<div class="col col-12 sm-col-6 md-col-4  lg-col-3">
//    <div class="community-item">
//        <a href="">
//            <h3>
//                <strong class="category">[입찰공고]</strong>
//                <p>(제공고) 한국형 온라인 공개강좌 (K-MOOC)운영사업 체제에 관한 중장기 운영방향 연구 용역한국형 온라인 공개강좌 (K-MOOC)운영사업 체제에 관한 중장기 운영방향 연구 용역</p>
//            </h3>
//            <p class="summary">세부과입내역은 붙임 재공고서 및 제안요청서 참조 해당 요역건은 나라장터 G2B 및 기획재 정부 ALIO 시스템에서도 확인가능 </p>
//            <time>2016-10-19</time>
//        </a>
//    </div>
//</div>