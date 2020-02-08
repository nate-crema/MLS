const axios = require("axios");

axios.post("https://www.melon.com/mymusic/playlist/mymusicplaylistinsert_insertAction.json", {
    plylstTitle : encodeURIComponent("제목 (40자)"),
    playlistDesc : encodeURIComponent("소개글 (160자)"),
    openYn : "Y", // y or n (재생목록 공개 여부)
    songIds : ["32351139"], // songNum List
    repntImagePath : "",
    repntImagePathDefaultYn : "N" // y or n 
})
.then((res) => {
    console.log(res);
})

// $.ajax({
//     type : "POST",
//     url  : "https://www.melon.com/mymusic/playlist/mymusicplaylistinsert_insertAction.json",
//     async : false,
//     data : {
//         plylstTitle : encodeURIComponent("test"),
//         playlistDesc : encodeURIComponent(insdc),
//         openYn : input_radio,
//         songIds : songList,
//         repntImagePath : repntImagePath,
//         repntImagePathDefaultYn : repntImagePathDefaultYn
//     },
//     success : function(result){
//         if(result.result > 0){
//             //alert('플레이리스트를 성공적으로 발행되었습니다.');						
//             mymusic.mymusicLink.goPlaylistDetail('0', 'Y', 'N', result.result);
//         }
//         else if(result.result == -606){
//             alert('플레이리스트는 최대 500개까지 만드실 수 있습니다.');
//             return;
//         }
//         else if(result.result == -501){
//             alert("작성하신 글 중 "+result.message+"은 금칙어 입니다. 수정 후 등록해주세요.");
//             return;
//         }
//         else if(result.result == -502){
//             alert("작성하신 글 중 "+result.message+"은 금칙어 입니다. 수정 후 등록해주세요.");
//             return;
//         }
//         else if(result.result == -505 || result.result == -506 || result.result == -507  || result.result == -303 || result.result == -508 || result.result == -509){
//             alert(result.message);
//             return;
//         }
//         else{
//             alert('플레이리스트 만들기가 실패되었습니다.');
//             return;
//         }

//     }
// });




// var  repntImagePathDefaultYn = "N";

// $(function(){
// 	var result = '0';
// 	if(result == -309){
// 		alert('플레이리스트 등록 가능 갯수를 초과 하였습니다.');
// 		history.back();
// 		return;
// 	}else{
// 		var WEBSVC = MELON.WEBSVC,
// 			PBPGN = MELON.PBPGN;

// 		$('.music_tab').tabs({
// 			type:'normal',
// 			selectors: {
// 				tabs: 'ul>li>a',
// 				contents: '>div.cntt'
// 			}
// 		});

// 		// 드롭다운 박스가 스크롤영역 내에 위치하도록 d_scrolldiv 추가
// 		$('div.song_list').addClass('d_scrolldiv');

// 		// 이미지 등록
// 		$('div.thumb_wrap>button').on('click', function() {
// 			// 수정이력 : 131021 => 팝업사이즈 수정
// 			WEBSVC.openPopup('/mymusic/common/popup/mymusiccommon_insertImagePopup.htm', 578, 640, {'target':'imagepopup','scrollbars':'no'},'center');
// 			//window.open('/mymusic/common/popup/mymusiccommon_insertImagePopup.htm','imagepopup', 'app_,width=578,height=640,scrollbars=no');
// 		});

// 		// 제목 카운팅
// 		$('#title').textControl({
// 			counting: true,
// 			countType: 'char', // or byte
// 			limit: 40,
// 			limitTarget: '#d_title_count'
// 		});

// 		// 소개글 카운팅
// 		$('#insdc').textControl({
// 			counting: true,
// 			countType: 'char',	// or byte
// 			limit: 160,
// 			limitTarget: '#d_intro_count'
// 		});

// 		WEBSVC.MyMusic.Playlist.AddSong.init();

// 		//만들기 확인 버튼
// 		$("#insertConfirm").click(function(){

// 			var title = $("#title").val();
// 			var insdc = $("#insdc").val();

// 			var checkProhibit = false;
// 			if(insdc=="소개글을 입력해 주세요."){
// 				insdc = "";
// 			}
// 			else{
// 				$.ajax({
// 					type : "POST",
// 					url  : "/mymusic/common/mymusiccommon_checkRestrictWord.json",
// 					async : false,
// 					data : {inputStr : encodeURIComponent(insdc)},
// 					success : function(result){
// 						if(result.result == true){
// 							alert("작성하신 글 중 "+result.message+"은 금칙어 입니다. 수정 후 등록해주세요.");
// 							checkProhibit = true;
// 						}
// 					}
// 				});

// 				if(checkProhibit){
// 					return;
// 				}
// 			}
// 			var input_radio = $(".input_radio:checked").val();
// 			var songList = new Array();
// 			//$addedTable.find('tr.d_added').find('input:checkbox').size();  곡 선택 여부 체크 해야 함
// 			$('#d_added_table tbody').find('tr.d_added').find('input:checkbox').each(function(){
// 				songList.push($(this).val());
// 			});

// 			var repntImagePath = $("#repntImagePath").val();

// 			if($.trim(title)=="" || $.trim(title)=="제목을 입력해 주세요."){
// 				alert('플레이리스트 제목을 입력해 주세요');
// 				return;
// 			}
// 			else{
// 				$.ajax({
// 					type : "POST",
// 					url  : "/mymusic/common/mymusiccommon_checkRestrictWord.json",
// 					async : false,
// 					data : {inputStr : encodeURIComponent(title)},
// 					success : function(result){
// 						if(result.result == true){
// 							alert("작성하신 글 중 "+result.message+"은 금칙어 입니다. 수정 후 등록해주세요.");
// 							checkProhibit = true;
// 						}
// 					}
// 				});

// 				if(checkProhibit){
// 					return;
// 				}
// 			}

// 			if(songList.length < 1){
// 				alert('곡을 선택해 주세요.');
// 				return;
// 			}

// 			if(!confirm('플레이리스트를 만드시겠습니까?')){
// 				return;
// 			}

// 			$.ajax({
// 				type : "POST",
// 				url  : "/mymusic/playlist/mymusicplaylistinsert_insertAction.json",
// 				async : false,
// 				data : {plylstTitle : encodeURIComponent(title), playlistDesc : encodeURIComponent(insdc), openYn : input_radio, songIds : songList, repntImagePath : repntImagePath, repntImagePathDefaultYn : repntImagePathDefaultYn},
// 				success : function(result){
// 					if(result.result > 0){
// 						//alert('플레이리스트를 성공적으로 발행되었습니다.');						
// 						mymusic.mymusicLink.goPlaylistDetail('0', 'Y', 'N', result.result);
// 					}
// 					else if(result.result == -606){
// 						alert('플레이리스트는 최대 500개까지 만드실 수 있습니다.');
// 						return;
// 					}
// 					else if(result.result == -501){
// 						alert("작성하신 글 중 "+result.message+"은 금칙어 입니다. 수정 후 등록해주세요.");
// 						return;
// 					}
// 					else if(result.result == -502){
// 						alert("작성하신 글 중 "+result.message+"은 금칙어 입니다. 수정 후 등록해주세요.");
// 						return;
// 					}
// 					else if(result.result == -505 || result.result == -506 || result.result == -507  || result.result == -303 || result.result == -508 || result.result == -509){
// 						alert(result.message);
// 						return;
// 					}
// 					else{
// 						alert('플레이리스트 만들기가 실패되었습니다.');
// 						return;
// 					}

// 				}
// 			});
// 		});
// 	}
// });


// // 이미지 올리기 팝업에서 호출될 핸들러 등록
// MELON.WEBSVC.PubSub.on('playlistaddimage', function(e, imgNo, imgSrc) {
// 	$('div.thumb_wrap img').attr('src', imgSrc);
// 	$('div.thumb_wrap input[type=hidden]').val(imgNo);
// });

// //이미지 수정 : 이미지 선택 후 확인버튼 클릭 시 해당 이미지를 마이앨범 만들기의 이미지로 변경
// function mymusicImagChange(userImagePath,type){
// 	var wwwImageHome = 'https://cdnimg.melon.co.kr';
// 	var html = "";

// 	//TODO 이미지 경로 변경해야 함--상위에서 이미지 전체경로를 받아옴.
// 	html += "<img src='" + wwwImageHome+userImagePath + "' width='104' height='104' />";

// 	$('#divRepntImage').empty();
// 	$('#divRepntImage').html(html);

// 	$('#repntImagePath').val(userImagePath);

// 	if(type == 'default'){
// 		repntImagePathDefaultYn = "Y";
// 	}else{
// 		repntImagePathDefaultYn = "N";
// 	}
// }
