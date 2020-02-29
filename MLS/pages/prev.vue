<template>
  <div>
    <script type="text/javascript" src="/resource/script/web/common/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="//member.melon.com/resource/script/web/member/melonweb_member_external.js?tm=20200208"></script>
	
	
	<link rel="stylesheet" href="https://cdnimg.melon.co.kr/static/web/resource/style/w1/fb/e/gtafwvpe6k4oqe.css" type="text/css">
	<link rel="stylesheet" href="https://cdnimg.melon.co.kr/static/web/resource/style/w1/3z/q/4vtkksadfhpx.css" type="text/css">
	<link rel="stylesheet" href="https://cdnimg.melon.co.kr/static/web/resource/style/w1/m4/d/cv5sasioqojq0aza7.css" type="text/css">
	<script type="text/javascript">
	(function() {
		WEBPOCIMG = {
			defaultImg : function(obj, width){
				if(width == null || width == '') width = $(obj).width();
				if(width == 0) width = 500;
				var thumbType = "_500";
				//가장 큰사이즈로 리사이즈함
				var thumbType = "_500";
				var defaultImg = "//cdnimg.melon.co.kr/resource/image/web/default/noAlbum" + thumbType + "_160727.jpg/melon/resize/" + width;
				if(obj.src != defaultImg){
					obj.src = defaultImg;
				}
			},
			
			defaultAlbumImg : function(obj, width){
				if(width == null || width == '') width = $(obj).width();
				if(width == 0) width = 500;
				//가장 큰사이즈로 리사이즈함
				var thumbType = "_500";
				var defaultImg = "//cdnimg.melon.co.kr/resource/image/web/default/noAlbum" + thumbType + "_160727.jpg/melon/resize/" + width;
				if(obj.src != defaultImg){
					obj.src = defaultImg;
				}
			},
			
			defaultArtistImg : function(obj, width){
				if(width == null || width == '') width = $(obj).width();
				if(width == 0) width = 300;
				//가장 큰사이즈로 리사이즈함
				var thumbType = "_300";
				var defaultImg = "//cdnimg.melon.co.kr/resource/image/web/default/noArtist" + thumbType + "_160727.jpg/melon/resize/" + width;
				if(obj.src != defaultImg){
					obj.src = defaultImg;
				}
			},
			defaultDjImg : function(obj){
			},
			defaultMvImg : function(obj, width, height){
				if(width == null || width == '') width = $(obj).width();
				if(height == null || height == '') height = $(obj).height();

				var ratio43 = Math.floor((4/3)*10)/10;
				var ratio169 = Math.floor((16/9)*10)/10;
				var ratioObj = Math.floor((width/height)*10)/10;

				var ratio = "4x3";
				if(ratioObj == ratio43){
					ratio = "4x3"; //contentsType = "mv43";
				} else if(ratioObj == ratio169){
					ratio = "16x9"; //contentsType = "mv169";
				} else {
					if(ratioObj > 1.5) ratio = "16x9";
					else ratio = "4x3";
				}
				
				if(width == 0) width = 640;
				if(height == 0) ratio = "16x9";

				//가장 큰사이즈로 리사이즈함
				var thumbType = "_" + ratio + "_640";
				var defaultImg = "//cdnimg.melon.co.kr/resource/image/web/default/noMovie" + thumbType + "_160727.jpg/melon/resize/" + width;
				if(obj.src != defaultImg){
					obj.src = defaultImg;
				}
			},
			defaultPlaylistImg : function(obj, width){
				if(width == null || width == '') width = $(obj).width();
				if(width == 0) width = 500;
				//가장 큰사이즈로 리사이즈함
				var thumbType = "_500";
				var defaultImg = "//cdnimg.melon.co.kr/resource/image/web/default/noAlbum" + thumbType + "_160727.jpg/melon/resize/" + width;
				if(obj.src != defaultImg){
					obj.src = defaultImg;
				}
			},
			defaultMemberImg : function(obj, width){
				if(width == null || width == '') width = $(obj).width();
				if(width == 0) width = 300;
				//가장 큰사이즈로 리사이즈함
				var thumbType = "_300";
				var defaultImg = "//cdnimg.melon.co.kr/resource/image/web/default/noArtist" + thumbType + "_160727.jpg/melon/resize/" + width;
				if(obj.src != defaultImg){
					obj.src = defaultImg;
				}
			},
			defaultPhotoImg : function(obj, width){
				if(width == null || width == '') width = $(obj).width();
				if(width == 0) width = 500;
				//가장 큰사이즈로 리사이즈함
				var thumbType = "_500";
				var defaultImg = "//cdnimg.melon.co.kr/resource/image/web/default/noAlbum" + thumbType + "_160727.jpg/melon/resize/" + width;
				if(obj.src != defaultImg){
					obj.src = defaultImg;
				}
			},
			defaultShopImg : function(obj, width){
				if(width == null || width == '') width = $(obj).width();
				if(width == 0) width = 256;
				//가장 큰사이즈로 리사이즈함
				var thumbType = "_256";
				var defaultImg = "//cdnimg.melon.co.kr/resource/image/web/default/noProduct" + thumbType + "_160727.jpg/melon/resize/" + width;
				if(obj.src != defaultImg){
					obj.src = defaultImg;
				}
			},
			defaultShowwingImg : function(obj, width){
				if(width == null || width == '') width = $(obj).width();

				var thumbType = "_256";
				if(width > 0 && width <= 300){
					thumbType = "_256";
				} else {
					thumbType = "_313";//추후 조절값
				}
				altSrc = "//cdnimg.melon.co.kr/resource/image/web/default/noShowing" + thumbType + ".jpg";
				if(obj.src != altSrc){
					obj.src = altSrc;
				}
			},
			defaultTicketImg : function(obj, width){
				if(width == null || width == '') width = $(obj).width();

				var thumbType = "_256";
				if(width > 0 && width <= 300){
					thumbType = "_256";
				} else {
					thumbType = "_313";//추후 조절값
				}
				altSrc = "//cdnimg.melon.co.kr/resource/image/web/default/noTicket" + thumbType + ".png";
				if(obj.src != altSrc){
					obj.src = altSrc;
				}
			}
		}
		,WEBELLIPSIS = {
			ellipsis : function(ellipsisName,moreClassName,eWidth){
		        //아티스트 더보기
		        var arObj = $('.' + ellipsisName);
		        for(var i = 0; i < arObj.length; i++){
		            if (arObj.eq(i).width() > eWidth ){
		                arObj.eq(i).parent().parent().parent().find('.' + moreClassName).css("display","");
		            }
		        }
			}
		}

		if(isMelonLogin() && getCookie("CHECK_POP") == 'Y'){
			window.open('https://www.melon.com/error_page/popup_check.html','mainCheckPopup','scrollbars=no, resizable=no, location=no, width=50, height=50, left=10000, top=10000');
		}
	})();
	</script>
<body>
<div id="wrap">  <!-- 이벤트일 경우 event_gnb 추가 -->
	<div id="skip_nav">skip navigation
		<ul>
			<li><a href="#gnb_menu">메뉴</a></li>
			<li><a href="#conts_section">본문</a></li>
			<li><a href="#footer">하단 정보</a></li>
		</ul>
	</div>
	<div id="header" class="main">
		<div id="header_wrap" class="pr_none">  <!-- 메인 컨텐츠 가운데 정렬을 위한 pr_none 클래스 추가 -->
			<div id="gnb" class="clfix">
				<!-- 상단 빠른 메뉴 -->
				<div id="util_menu">
					<p class="none">상단 빠른 메뉴</p>
					<div class="top_left">
						<ul class="clfix">
							
							<li class="first_child d_melon_ticket"><a href="https://ticket.melon.com/main/index.htm" title="멜론 티켓" class="menu01 mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=0&amp;MENU_ID_LV1=&amp;CLICK_AREA_PRT_CODE=V08&amp;ACTION_AF_CLICK=V1"><span>멜론 티켓</span></a></li>
							
							<li><a href="http://aztweb.melon.com/aztalk/guide/web/main.htm" title="멜론 아지톡" class="menu03 mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=0&amp;MENU_ID_LV1=&amp;CLICK_AREA_PRT_CODE=V05&amp;ACTION_AF_CLICK=V1"><span>멜론 아지톡</span></a></li><!-- 161206 -->
						</ul>
					</div>
					<!-- 140603_수정 -->
					<div class="top_right ">
						<ul class="clfix">
							
							<li class="first_child"><a href="/commerce/pamphlet/web/sale_listMainView.htm" title="이용권구매" class="menu01 mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=0&amp;MENU_ID_LV1=&amp;CLICK_AREA_PRT_CODE=B01&amp;ACTION_AF_CLICK=V1"><span>이용권구매</span></a></li>
							
							<li><a href="/event/vip/index.htm" title="VIP혜택관" class="menu02 mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=0&amp;MENU_ID_LV1=&amp;CLICK_AREA_PRT_CODE=V06&amp;ACTION_AF_CLICK=V1"><span>VIP혜택관</span></a></li>
							
							<li class="last_child"><a href="/event/index.htm" title="이벤트" class="menu03 mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=0&amp;MENU_ID_LV1=&amp;CLICK_AREA_PRT_CODE=B03&amp;ACTION_AF_CLICK=V1"><span>이벤트</span></a></li>
						</ul>
					</div>
					<!-- //140603_수정 -->
				</div>
				<!-- //상단 빠른 메뉴 -->

				<!-- 140603_수정 -->
				
				<h1><a href="/index.htm" title="MelOn 로고 - 홈으로 이동" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=0&amp;MENU_ID_LV1=&amp;CLICK_AREA_PRT_CODE=M01&amp;ACTION_AF_CLICK=V1"><img width="142" height="99" src="https://cdnimg.melon.co.kr/resource/image/web/common/logo_melon142x99.png" alt="MelOn 로고 이미지"></a></h1>
				
				<!-- //140603_수정 -->
				<!-- 통합검색 영역 -->
				<fieldset>
					<legend>통합검색영역</legend>
					<input type="text" title="검색 입력 편집창" placeholder="" name="" id="top_search" style="width:249px" onkeypress="if(event.keyCode == 13){goSearch();}"><input type="hidden" name="keywordLink" id="keywordLink" value="">
					<button type="button" style="display: none;" id="top_search_autocomplete_toggle" class="btn_icon btn_auto close" title="자동검색 펼침"><span class="odd_span">자동검색 펼침</span></button> <!-- open/close 클래스 사용 -->
					<button type="button" class="btn_icon search_m" title="검색"><span class="odd_span">검색</span></button>
					<div class="auto_complete" id="top_search_autocomplete"><div class="auto_complete_cont" style="display:block;"><!-- 자동완성 레이어 --></div></div>
					<div class="auto_complete" id="top_search_autocomplete_template" style="display: none;"> <!-- 자동완성 레이어 템플릿 -->
						<!-- 텍스트 결과 -->
						<ul class="text_result">
							<li><a href="#" class="autocomplete-label"></a></li>
						</ul>
						<!-- 섬네일 결과 -->
						<ul class="thumb_result">
							<li class="cate"></li>
							<li class="class02">
								<a href="#">
									<span class="thumb_40">
										<span class="thumb_frame"></span>
										<img class="autocomplete-img" width="40" height="40" alt="">
									</span>
									<div class="info">
										<span class="autocomplete-label"></span><br>
										<span><span class="f11 autocomplete-info"></span></span>
									</div>
								</a>
							</li>
						</ul>
						<!-- 검색어가 없을 때 -->
						<ul class="text_result">
							<li class="result_none">
								<span>해당글자로 시작하는 단어가 없습니다.</span>
							</li>
						</ul>
					</div>
				</fieldset>
				<form style="display: none" id="searchFrm" method="get" action="">
					<input type="hidden" name="q">
					<input type="hidden" name="section">
				</form>
				<!-- //통합검색 영역 -->

				<!-- 실시간 검색어 -->
				<div class="realtime_soar_keyword">
					<!-- 140519_수정 -->
					<a href="/search/trend/index.htm" class="title">급상승 키워드</a>
					<!-- //140519_수정 -->
					<div class="keyword_overlay">
						<ol style="overflow:hidden; height:20px;">
							<!-- 롤링 영역
							<li>
								<div style="top:;">
									<strong class="order bg2 on"><span class="none">1 위</span></strong>
									<a href="#" class="ellipsis" title="something">something</a>
									<span class="wrap_rank">
										<span class="icon_up">순위상승수</span><span>139</span>
										<!- <span class="icon_rank_new">새진입</span>
									</span>
								</div>
							</li>
							//롤링 영역 -->
						</ol>
						<!-- 140423_추가 -->
						<a href="/search/trend/index.htm" class="keyword_more" title="실시간 순위"><span>더보기 <span></span></span></a>
						<!-- //140423_추가 -->
					</div>
					<!-- 140423_삭제 -->
					<!-- <a href="#" class="d_btn_ctrl pause" title="이벤트 일시정지"><span><span class="none">일시정지</span></span></a> -->
					<!-- //140423_삭제 -->
				</div>
				<!-- //실시간 검색어 -->

				<!-- 배너 영역 -->
				<div class="cmn_banner"></div>
			</div>
            <!-- 140314_gnb마크업 수정 -->
			<div id="gnb_menu">
				<ul>
					<li class="nth1">
						
						<a href="/chart/index.htm" class="cur_menu mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=0&amp;MENU_ID_LV1=&amp;CLICK_AREA_PRT_CODE=R01&amp;ACTION_AF_CLICK=V1"><span class="cur_status none">현재 선택된 메뉴-</span><span class="menu_bg menu01">멜론차트</span></a>
					</li>
					<li class="nth2">
						
						<a href="/new/index.htm" class="cur_menu mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=0&amp;MENU_ID_LV1=&amp;CLICK_AREA_PRT_CODE=C01&amp;ACTION_AF_CLICK=V1"><span class="cur_status none">현재 선택된 메뉴-</span><span class="menu_bg menu02 ">최신</span></a>
					</li>
					<li class="nth3">
						
						<a href="/genre/song_list.htm" class="cur_menu mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=0&amp;MENU_ID_LV1=&amp;CLICK_AREA_PRT_CODE=C03&amp;ACTION_AF_CLICK=V1"><span class="cur_status none">현재 선택된 메뉴-</span><span class="menu_bg menu03">장르</span></a>
					</li>
					<li class="nth4">
						
						<a href="/dj/today/djtoday_list.htm" class="cur_menu mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=0&amp;MENU_ID_LV1=&amp;CLICK_AREA_PRT_CODE=S04&amp;ACTION_AF_CLICK=V1"><span class="cur_status none">현재 선택된 메뉴-</span><span class="menu_bg menu04">멜론DJ</span></a>
					</li>
					<li class="nth5">
						
						<a href="/tv/index.htm" class="cur_menu mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=0&amp;MENU_ID_LV1=&amp;CLICK_AREA_PRT_CODE=S05&amp;ACTION_AF_CLICK=V1"><span class="cur_status none">현재 선택된 메뉴-</span><span class="menu_bg menu05">멜론TV</span></a>
					</li>
					<li class="nth6">
						
						<a href="/artistplus/todayupdate/index.htm" class="cur_menu mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=0&amp;MENU_ID_LV1=&amp;CLICK_AREA_PRT_CODE=S07&amp;ACTION_AF_CLICK=V1"><span class="cur_status none">현재 선택된 메뉴-</span><span class="menu_bg menu06">스타포스트</span></a>
					</li>
					<!-- 160314 수정 -->
					<li class="nth7">
						
						<a href="/musicstory/today/index.htm" class="cur_menu mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=0&amp;MENU_ID_LV1=&amp;CLICK_AREA_PRT_CODE=S09&amp;ACTION_AF_CLICK=V1"><span class="cur_status none">현재 선택된 메뉴-</span><span class="menu_bg menu07">멜론매거진</span></a>
					</li>
					<!-- // 160314 수정 -->
					<li class="nth8">
						
						<a href="/mma/index.htm" class="cur_menu mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=0&amp;MENU_ID_LV1=&amp;CLICK_AREA_PRT_CODE=S11&amp;ACTION_AF_CLICK=V1"><span class="cur_status none">현재 선택된 메뉴-</span><span class="menu_bg menu08">뮤직어워드</span></a>
					</li>
					
					
					<li class="nth10">
						<a href="/flac/index.htm" class="cur_menu mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=0&amp;MENU_ID_LV1=&amp;CLICK_AREA_PRT_CODE=C05&amp;ACTION_AF_CLICK=V1"><span class="cur_status none">현재 선택된 메뉴-</span><span class="menu_bg menu12">멜론Hi-Fi</span></a>
					</li>
					
					<li class="nth9 last_child">
					<!-- //140523_수정 -->
						
						<a href="#" class="cur_menu mlog_without_page_change" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=0&amp;MENU_ID_LV1=&amp;CLICK_AREA_PRT_CODE=S99&amp;ACTION_AF_CLICK=V1"><span class="cur_status none">현재 선택된 메뉴-</span><span class="menu_bg menu09">더보기</span></a>
						<div class="more_wrap" style="display:none"><!-- more_lay일때 display:block -->
							<ul style="height:75px;">
								
								<li class=""><a href="/edu/index.htm" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=0&amp;MENU_ID_LV1=&amp;CLICK_AREA_PRT_CODE=C04&amp;ACTION_AF_CLICK=V1"><span class="menu_more m3">어학</span></a></li>
								
								<li class=""><a href="/customer/announce/index.htm" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=0&amp;MENU_ID_LV1=&amp;CLICK_AREA_PRT_CODE=V02&amp;ACTION_AF_CLICK=V1"><span class="menu_more m4">공지사항</span></a></li>
							</ul>
						</div>

					</li>
				</ul>
				<ul class="sub_gnb">
					<li class="">
						
						<a href="javascript:MELON.WEBSVC.POC.menu.goMyMusicMain();" class="cur_menu mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=0&amp;MENU_ID_LV1=&amp;CLICK_AREA_PRT_CODE=S01&amp;ACTION_AF_CLICK=V1"><span class="cur_status none">현재 선택된 메뉴-</span><span class="menu_bg menu10">마이뮤직</span></a>
					</li>
					<li>
						
						<a href="javascript:MELON.WEBSVC.POC.menu.goFeed();" class="cur_menu mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=0&amp;MENU_ID_LV1=&amp;CLICK_AREA_PRT_CODE=S02&amp;ACTION_AF_CLICK=V1"><span class="cur_status none">현재 선택된 메뉴-</span><span class="menu_bg menu11">피드</span><span class="msg_box" style="display: none;"><span class="num">99+</span><span class="none">개</span></span></a>
					</li>
				</ul>
			</div>
            <!-- //140314_gnb마크업 수정 -->
		</div>
	</div>

	<div id="cont_wrap" class="clfix">
		<div id="conts_section" class="pr_none"> <!-- 메인 컨텐츠 가운데 정렬을 위한 pr_none 클래스 추가 -->
			<!-- contents -->
			
				<div id="conts" class="clfix">
					<!-- 최신앨범 -->
					<div class="new_album">
						<h2><a href="/new/album/index.htm" title="최신 앨범" class="title_link mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=C01&amp;ACTION_AF_CLICK=V2">최신 앨범</a></h2>
						<div class="section_na">
							<ul class="new_album_cate">
								<li class="bg_none on nth1"><a href="javascript:;" class="mlog" title="전체 최신앨범 보기" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=S2">전체</a></li>
								<li class="nth2"><a href="javascript:;" class="mlog" title="가요 최신앨범 보기" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G02&amp;ACTION_AF_CLICK=S2">가요</a></li>
								<li class="nth3"><a href="javascript:;" class="mlog" title="POP 최신앨범 보기" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G03&amp;ACTION_AF_CLICK=S2">POP</a></li>
								<li class="nth4"><a href="javascript:;" class="mlog" title="OST 최신앨범 보기" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G04&amp;ACTION_AF_CLICK=S2">OST</a></li>
								<li class="nth5"><a href="javascript:;" class="mlog" title="J-POP 최신앨범 보기" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G05&amp;ACTION_AF_CLICK=S2">J-POP</a></li>
							</ul>
							<div>
								<div class="list_wrap">
								
									<ul class="sub_list">
										<li>
											<dl>
												<dt><span class="none">투유프로젝트 - 슈가맨3 EPISODE.9</span></dt>
												
												<dd class="img"><span class="none">앨범이미지:</span>
													<!-- 140423_수정 -->
													<span class="thum">
														<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="156" height="156" src="https://cdnimg.melon.co.kr/cm2/album/images/103/85/993/10385993_20200207163534_500.jpg?9383c6c02318bcbeaf7c58a2ee7c17a3/melon/resize/156/quality/80/optimize" alt="">
														<span class="bg_album_frame"></span>
														<!--140703 추가 lyr-->
														
														<!--//140703 추가 lyr-->
													</span>
													<!-- //140423_수정 -->
													<!-- [DP] 재생 레이어 -->
													<div class="overlay">
														
														<a href="javascript:;" onclick="javascript:melon.play.playAlbum('10010101','10385993');" class="btn_play_song mlog" title="투유프로젝트 - 슈가맨3 EPISODE.9 재생" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=P1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10385993"><span class="none">앨범전체듣기</span></a>
														
														<!--141007_modify-->
														<a href="javascript:melon.link.goAlbumDetail('10385993');" class="album mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10385993">
															<span class="album_cont" title="투유프로젝트 - 슈가맨3 EPISODE.9">
																<span class="title_wrap">
																	<span class="title title_ellipsis">투유프로젝트 - 슈가맨3 EPISODE.9</span><!--class title_ellipsis 추가시 말줄임 처리-->
																</span>
															</span>
														</a>
														<!--//141007_modify-->
														<div class="singer">
															<span class="none">가수명:</span>
															<!-- //140310_수정 kcu -->
															<div class="ellipsis">Various Artists</div>
															
															<!-- //140310_수정 kcu -->
														</div>
													</div>
													<!-- //[DP] 재생 레이어 -->
												</dd>
												<dd class="singer">
													<span class="none">가수명:</span>
													<div class="ellipsis">Various Artists<span class="checkEllipsis" style="display:none">Various Artists</span></div>
													
												</dd>
											</dl>
										</li>
									
								
									
										<li>
											<dl>
												<dt><span class="none">U GOT DADDY</span></dt>
												
												<dd class="img"><span class="none">앨범이미지:</span>
													<!-- 140423_수정 -->
													<span class="thum">
														<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="156" height="156" src="https://cdnimg.melon.co.kr/cm2/album/images/103/85/922/10385922_20200207151040_500.jpg?00aeabf29b98b04afb291910421ce947/melon/resize/156/quality/80/optimize" alt="">
														<span class="bg_album_frame"></span>
														<!--140703 추가 lyr-->
														
														<!--//140703 추가 lyr-->
													</span>
													<!-- //140423_수정 -->
													<!-- [DP] 재생 레이어 -->
													<div class="overlay">
														
														<a href="javascript:;" onclick="javascript:melon.play.playAlbum('10010101','10385922');" class="btn_play_song mlog" title="U GOT DADDY 재생" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=P1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10385922"><span class="none">앨범전체듣기</span></a>
														
														<!--141007_modify-->
														<a href="javascript:melon.link.goAlbumDetail('10385922');" class="album mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10385922">
															<span class="album_cont" title="U GOT DADDY">
																<span class="title_wrap">
																	<span class="title title_ellipsis">U GOT DADDY</span><!--class title_ellipsis 추가시 말줄임 처리-->
																</span>
															</span>
														</a>
														<!--//141007_modify-->
														<div class="singer">
															<span class="none">가수명:</span>
															<!-- //140310_수정 kcu -->
															<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('2853715');" title="강남군조 - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=2853715"><span>강남군조</span></a></div>
															
															<!-- //140310_수정 kcu -->
														</div>
													</div>
													<!-- //[DP] 재생 레이어 -->
												</dd>
												<dd class="singer">
													<span class="none">가수명:</span>
													<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('2853715');" title="강남군조 - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=2853715"><span>강남군조</span></a><span class="checkEllipsis" style="display:none"><a href="javascript:melon.link.goArtistDetail('2853715');" title="강남군조 - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=2853715"><span>강남군조</span></a></span></div>
													
												</dd>
											</dl>
										</li>
									
								
									
										<li>
											<dl>
												<dt><span class="none">Solitary Man</span></dt>
												
												<dd class="img"><span class="none">앨범이미지:</span>
													<!-- 140423_수정 -->
													<span class="thum">
														<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="156" height="156" src="https://cdnimg.melon.co.kr/cm2/album/images/103/85/929/10385929_20200207151303_500.jpg?85c8603174568cfc6a62b8c5a1b055a6/melon/resize/156/quality/80/optimize" alt="">
														<span class="bg_album_frame"></span>
														<!--140703 추가 lyr-->
														
														<!--//140703 추가 lyr-->
													</span>
													<!-- //140423_수정 -->
													<!-- [DP] 재생 레이어 -->
													<div class="overlay">
														
														<a href="javascript:;" onclick="javascript:melon.play.playAlbum('10010101','10385929');" class="btn_play_song mlog" title="Solitary Man 재생" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=P1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10385929"><span class="none">앨범전체듣기</span></a>
														
														<!--141007_modify-->
														<a href="javascript:melon.link.goAlbumDetail('10385929');" class="album mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10385929">
															<span class="album_cont" title="Solitary Man">
																<span class="title_wrap">
																	<span class="title title_ellipsis">Solitary Man</span><!--class title_ellipsis 추가시 말줄임 처리-->
																</span>
															</span>
														</a>
														<!--//141007_modify-->
														<div class="singer">
															<span class="none">가수명:</span>
															<!-- //140310_수정 kcu -->
															<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('267967');" title="박성준 - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=267967"><span>박성준</span></a>, <a href="javascript:melon.link.goArtistDetail('724944');" title="김영민 - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=724944"><span>김영민</span></a></div>
															
															<div class="wrap_atist new_album_overlay_artist" style="display:none">
																<button type="button" title="아티스트 더보기" class="btn btn_more" data-control="dropdown"><span class="odd_span">아티스트명 더보기</span></button>
																<!-- [DP] 아티스트 더보기 레이어  -->
																<div class="l_popup small" style="display:none; width:168px;" data-zindex-target="li">
																	<div class="l_cntt">
																		<ul class="list_bullet">
			 																
																			<li><a href="javascript:melon.link.goArtistDetail('267967');" title="박성준" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=267967">박성준</a></li>
																			
																			<li><a href="javascript:melon.link.goArtistDetail('724944');" title="김영민" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=724944">김영민</a></li>
																			
																		</ul>
																	</div>
																	<button type="button" class="btn_close"><span class="odd_span">닫기</span></button>
																	<span class="shadow"></span>
																	<span class="bullet_vertical"></span>
																</div>
																<!-- //[DP] 아티스트 더보기 레이어  -->
															</div>
															
															<!-- //140310_수정 kcu -->
														</div>
													</div>
													<!-- //[DP] 재생 레이어 -->
												</dd>
												<dd class="singer">
													<span class="none">가수명:</span>
													<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('267967');" title="박성준 - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=267967"><span>박성준</span></a>, <a href="javascript:melon.link.goArtistDetail('724944');" title="김영민 - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=724944"><span>김영민</span></a><span class="checkEllipsis" style="display:none"><a href="javascript:melon.link.goArtistDetail('267967');" title="박성준 - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=267967"><span>박성준</span></a>, <a href="javascript:melon.link.goArtistDetail('724944');" title="김영민 - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=724944"><span>김영민</span></a></span></div>
													
													<div class="wrap_atist new_album_artist" style="display:none">
														<button type="button" title="아티스트 더보기" class="btn btn_more" data-control="dropdown"><span class="odd_span">아티스트명 더보기</span></button>
														<!-- [DP] 아티스트 더보기 레이어  -->
														<div class="l_popup small" style="display:none; width:168px;" data-zindex-target="li">
															<div class="l_cntt">
																<ul class="list_bullet">
	 																
																	<li><a href="javascript:melon.link.goArtistDetail('267967');" title="박성준" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=267967">박성준</a></li>
																	
																	<li><a href="javascript:melon.link.goArtistDetail('724944');" title="김영민" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=724944">김영민</a></li>
																	
																</ul>
															</div>
															<button type="button" class="btn_close"><span class="odd_span">닫기</span></button>
															<span class="shadow"></span>
															<span class="bullet_vertical"></span>
														</div>
														<!-- //[DP] 아티스트 더보기 레이어  -->
													</div>
													
												</dd>
											</dl>
										</li>
									
								
									
										<li>
											<dl>
												<dt><span class="none">너의 목소리가 보여7 Part 3</span></dt>
												
												<dd class="img"><span class="none">앨범이미지:</span>
													<!-- 140423_수정 -->
													<span class="thum">
														<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="156" height="156" src="https://cdnimg.melon.co.kr/cm2/album/images/103/85/761/10385761_20200207114646_500.jpg?3f93eb2878928b083e22246be9c5eb83/melon/resize/156/quality/80/optimize" alt="">
														<span class="bg_album_frame"></span>
														<!--140703 추가 lyr-->
														
														<!--//140703 추가 lyr-->
													</span>
													<!-- //140423_수정 -->
													<!-- [DP] 재생 레이어 -->
													<div class="overlay">
														
														<a href="javascript:;" onclick="javascript:melon.play.playAlbum('10010101','10385761');" class="btn_play_song mlog" title="너의 목소리가 보여7 Part 3 재생" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=P1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10385761"><span class="none">앨범전체듣기</span></a>
														
														<!--141007_modify-->
														<a href="javascript:melon.link.goAlbumDetail('10385761');" class="album mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10385761">
															<span class="album_cont" title="너의 목소리가 보여7 Part 3">
																<span class="title_wrap">
																	<span class="title title_ellipsis">너의 목소리가 보여7 Part 3</span><!--class title_ellipsis 추가시 말줄임 처리-->
																</span>
															</span>
														</a>
														<!--//141007_modify-->
														<div class="singer">
															<span class="none">가수명:</span>
															<!-- //140310_수정 kcu -->
															<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('2853668');" title="백서율 - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=2853668"><span>백서율</span></a></div>
															
															<!-- //140310_수정 kcu -->
														</div>
													</div>
													<!-- //[DP] 재생 레이어 -->
												</dd>
												<dd class="singer">
													<span class="none">가수명:</span>
													<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('2853668');" title="백서율 - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=2853668"><span>백서율</span></a><span class="checkEllipsis" style="display:none"><a href="javascript:melon.link.goArtistDetail('2853668');" title="백서율 - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=2853668"><span>백서율</span></a></span></div>
													
												</dd>
											</dl>
										</li>
									
								
									
										<li>
											<dl>
												<dt><span class="none">너에게 했던 말</span></dt>
												
												<dd class="img"><span class="none">앨범이미지:</span>
													<!-- 140423_수정 -->
													<span class="thum">
														<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="156" height="156" src="https://cdnimg.melon.co.kr/cm2/album/images/103/85/862/10385862_20200207144704_500.jpg?a3721996964c59dd77dd3ecc353621f2/melon/resize/156/quality/80/optimize" alt="">
														<span class="bg_album_frame"></span>
														<!--140703 추가 lyr-->
														
														<!--//140703 추가 lyr-->
													</span>
													<!-- //140423_수정 -->
													<!-- [DP] 재생 레이어 -->
													<div class="overlay">
														
														<a href="javascript:;" onclick="javascript:melon.play.playAlbum('10010101','10385862');" class="btn_play_song mlog" title="너에게 했던 말 재생" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=P1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10385862"><span class="none">앨범전체듣기</span></a>
														
														<!--141007_modify-->
														<a href="javascript:melon.link.goAlbumDetail('10385862');" class="album mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10385862">
															<span class="album_cont" title="너에게 했던 말">
																<span class="title_wrap">
																	<span class="title title_ellipsis">너에게 했던 말</span><!--class title_ellipsis 추가시 말줄임 처리-->
																</span>
															</span>
														</a>
														<!--//141007_modify-->
														<div class="singer">
															<span class="none">가수명:</span>
															<!-- //140310_수정 kcu -->
															<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('782088');" title="문샤인 (Moonshine) - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=782088"><span>문샤인 (Moonshine)</span></a></div>
															
															<!-- //140310_수정 kcu -->
														</div>
													</div>
													<!-- //[DP] 재생 레이어 -->
												</dd>
												<dd class="singer">
													<span class="none">가수명:</span>
													<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('782088');" title="문샤인 (Moonshine) - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=782088"><span>문샤인 (Moonshine)</span></a><span class="checkEllipsis" style="display:none"><a href="javascript:melon.link.goArtistDetail('782088');" title="문샤인 (Moonshine) - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=782088"><span>문샤인 (Moonshine)</span></a></span></div>
													
												</dd>
											</dl>
										</li>
									
								
									
										<li>
											<dl>
												<dt><span class="none">20</span></dt>
												
												<dd class="img"><span class="none">앨범이미지:</span>
													<!-- 140423_수정 -->
													<span class="thum">
														<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="156" height="156" src="https://cdnimg.melon.co.kr/cm2/album/images/103/85/760/10385760_20200207114643_500.jpg?4318c8a4143ee61c630e2891bb4a200a/melon/resize/156/quality/80/optimize" alt="">
														<span class="bg_album_frame"></span>
														<!--140703 추가 lyr-->
														
														<!--//140703 추가 lyr-->
													</span>
													<!-- //140423_수정 -->
													<!-- [DP] 재생 레이어 -->
													<div class="overlay">
														
														<a href="javascript:;" onclick="javascript:melon.play.playAlbum('10010101','10385760');" class="btn_play_song mlog" title="20 재생" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=P1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10385760"><span class="none">앨범전체듣기</span></a>
														
														<!--141007_modify-->
														<a href="javascript:melon.link.goAlbumDetail('10385760');" class="album mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10385760">
															<span class="album_cont" title="20">
																<span class="title_wrap">
																	<span class="title title_ellipsis">20</span><!--class title_ellipsis 추가시 말줄임 처리-->
																</span>
															</span>
														</a>
														<!--//141007_modify-->
														<div class="singer">
															<span class="none">가수명:</span>
															<!-- //140310_수정 kcu -->
															<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('1910486');" title="조제 (Josee) - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=1910486"><span>조제 (Josee)</span></a></div>
															
															<!-- //140310_수정 kcu -->
														</div>
													</div>
													<!-- //[DP] 재생 레이어 -->
												</dd>
												<dd class="singer">
													<span class="none">가수명:</span>
													<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('1910486');" title="조제 (Josee) - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=1910486"><span>조제 (Josee)</span></a><span class="checkEllipsis" style="display:none"><a href="javascript:melon.link.goArtistDetail('1910486');" title="조제 (Josee) - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=1910486"><span>조제 (Josee)</span></a></span></div>
													
												</dd>
											</dl>
										</li>
									</ul>
								
									<ul class="sub_list" style="display:none;">
										<li>
											<dl>
												<dt><span class="none">Birthday</span></dt>
												
												<dd class="img"><span class="none">앨범이미지:</span>
													<!-- 140423_수정 -->
													<span class="thum">
														<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="156" height="156" src="https://cdnimg.melon.co.kr/cm2/album/images/103/85/597/10385597_20200207104940_500.jpg?e8ac7b9f0417a17cd5cd1bf990e9383c/melon/resize/156/quality/80/optimize" alt="">
														<span class="bg_album_frame"></span>
														<!--140703 추가 lyr-->
														
														<!--//140703 추가 lyr-->
													</span>
													<!-- //140423_수정 -->
													<!-- [DP] 재생 레이어 -->
													<div class="overlay">
														
														<a href="javascript:;" onclick="javascript:melon.play.playAlbum('10010101','10385597');" class="btn_play_song mlog" title="Birthday 재생" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=P1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10385597"><span class="none">앨범전체듣기</span></a>
														
														<!--141007_modify-->
														<a href="javascript:melon.link.goAlbumDetail('10385597');" class="album mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10385597">
															<span class="album_cont" title="Birthday">
																<span class="title_wrap">
																	<span class="title title_ellipsis">Birthday</span><!--class title_ellipsis 추가시 말줄임 처리-->
																</span>
															</span>
														</a>
														<!--//141007_modify-->
														<div class="singer">
															<span class="none">가수명:</span>
															<!-- //140310_수정 kcu -->
															<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('870307');" title="Anne-Marie - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=870307"><span>Anne-Marie</span></a></div>
															
															<!-- //140310_수정 kcu -->
														</div>
													</div>
													<!-- //[DP] 재생 레이어 -->
												</dd>
												<dd class="singer">
													<span class="none">가수명:</span>
													<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('870307');" title="Anne-Marie - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=870307"><span>Anne-Marie</span></a><span class="checkEllipsis" style="display:none"><a href="javascript:melon.link.goArtistDetail('870307');" title="Anne-Marie - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=870307"><span>Anne-Marie</span></a></span></div>
													
												</dd>
											</dl>
										</li>
									
								
									
										<li>
											<dl>
												<dt><span class="none">또 사랑에 속다</span></dt>
												
												<dd class="img"><span class="none">앨범이미지:</span>
													<!-- 140423_수정 -->
													<span class="thum">
														<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="156" height="156" src="https://cdnimg.melon.co.kr/cm2/album/images/103/85/811/10385811_20200207121743_500.jpg?13556216243ffb0954b98b742a46a5a7/melon/resize/156/quality/80/optimize" alt="">
														<span class="bg_album_frame"></span>
														<!--140703 추가 lyr-->
														
														<!--//140703 추가 lyr-->
													</span>
													<!-- //140423_수정 -->
													<!-- [DP] 재생 레이어 -->
													<div class="overlay">
														
														<a href="javascript:;" onclick="javascript:melon.play.playAlbum('10010101','10385811');" class="btn_play_song mlog" title="또 사랑에 속다 재생" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=P1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10385811"><span class="none">앨범전체듣기</span></a>
														
														<!--141007_modify-->
														<a href="javascript:melon.link.goAlbumDetail('10385811');" class="album mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10385811">
															<span class="album_cont" title="또 사랑에 속다">
																<span class="title_wrap">
																	<span class="title title_ellipsis">또 사랑에 속다</span><!--class title_ellipsis 추가시 말줄임 처리-->
																</span>
															</span>
														</a>
														<!--//141007_modify-->
														<div class="singer">
															<span class="none">가수명:</span>
															<!-- //140310_수정 kcu -->
															<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('228841');" title="에이트 - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=228841"><span>에이트</span></a></div>
															
															<!-- //140310_수정 kcu -->
														</div>
													</div>
													<!-- //[DP] 재생 레이어 -->
												</dd>
												<dd class="singer">
													<span class="none">가수명:</span>
													<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('228841');" title="에이트 - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=228841"><span>에이트</span></a><span class="checkEllipsis" style="display:none"><a href="javascript:melon.link.goArtistDetail('228841');" title="에이트 - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=228841"><span>에이트</span></a></span></div>
													
												</dd>
											</dl>
										</li>
									
								
									
										<li>
											<dl>
												<dt><span class="none">BLANK</span></dt>
												
												<dd class="img"><span class="none">앨범이미지:</span>
													<!-- 140423_수정 -->
													<span class="thum">
														<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="156" height="156" src="https://cdnimg.melon.co.kr/cm2/album/images/103/85/864/10385864_20200207140908_500.jpg?f74723d7cacb18ea3925576d6c660dae/melon/resize/156/quality/80/optimize" alt="">
														<span class="bg_album_frame"></span>
														<!--140703 추가 lyr-->
														
														<!--//140703 추가 lyr-->
													</span>
													<!-- //140423_수정 -->
													<!-- [DP] 재생 레이어 -->
													<div class="overlay">
														
														<a href="javascript:;" onclick="javascript:melon.play.playAlbum('10010101','10385864');" class="btn_play_song mlog" title="BLANK 재생" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=P1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10385864"><span class="none">앨범전체듣기</span></a>
														
														<!--141007_modify-->
														<a href="javascript:melon.link.goAlbumDetail('10385864');" class="album mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10385864">
															<span class="album_cont" title="BLANK">
																<span class="title_wrap">
																	<span class="title title_ellipsis">BLANK</span><!--class title_ellipsis 추가시 말줄임 처리-->
																</span>
															</span>
														</a>
														<!--//141007_modify-->
														<div class="singer">
															<span class="none">가수명:</span>
															<!-- //140310_수정 kcu -->
															<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('2113253');" title="Rovxe - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=2113253"><span>Rovxe</span></a>, <a href="javascript:melon.link.goArtistDetail('2560115');" title="Goldash - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=2560115"><span>Goldash</span></a></div>
															
															<div class="wrap_atist new_album_overlay_artist" style="display:none">
																<button type="button" title="아티스트 더보기" class="btn btn_more" data-control="dropdown"><span class="odd_span">아티스트명 더보기</span></button>
																<!-- [DP] 아티스트 더보기 레이어  -->
																<div class="l_popup small" style="display:none; width:168px;" data-zindex-target="li">
																	<div class="l_cntt">
																		<ul class="list_bullet">
			 																
																			<li><a href="javascript:melon.link.goArtistDetail('2113253');" title="Rovxe" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=2113253">Rovxe</a></li>
																			
																			<li><a href="javascript:melon.link.goArtistDetail('2560115');" title="Goldash" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=2560115">Goldash</a></li>
																			
																		</ul>
																	</div>
																	<button type="button" class="btn_close"><span class="odd_span">닫기</span></button>
																	<span class="shadow"></span>
																	<span class="bullet_vertical"></span>
																</div>
																<!-- //[DP] 아티스트 더보기 레이어  -->
															</div>
															
															<!-- //140310_수정 kcu -->
														</div>
													</div>
													<!-- //[DP] 재생 레이어 -->
												</dd>
												<dd class="singer">
													<span class="none">가수명:</span>
													<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('2113253');" title="Rovxe - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=2113253"><span>Rovxe</span></a>, <a href="javascript:melon.link.goArtistDetail('2560115');" title="Goldash - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=2560115"><span>Goldash</span></a><span class="checkEllipsis" style="display:none"><a href="javascript:melon.link.goArtistDetail('2113253');" title="Rovxe - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=2113253"><span>Rovxe</span></a>, <a href="javascript:melon.link.goArtistDetail('2560115');" title="Goldash - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=2560115"><span>Goldash</span></a></span></div>
													
													<div class="wrap_atist new_album_artist" style="display:none">
														<button type="button" title="아티스트 더보기" class="btn btn_more" data-control="dropdown"><span class="odd_span">아티스트명 더보기</span></button>
														<!-- [DP] 아티스트 더보기 레이어  -->
														<div class="l_popup small" style="display:none; width:168px;" data-zindex-target="li">
															<div class="l_cntt">
																<ul class="list_bullet">
	 																
																	<li><a href="javascript:melon.link.goArtistDetail('2113253');" title="Rovxe" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=2113253">Rovxe</a></li>
																	
																	<li><a href="javascript:melon.link.goArtistDetail('2560115');" title="Goldash" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=2560115">Goldash</a></li>
																	
																</ul>
															</div>
															<button type="button" class="btn_close"><span class="odd_span">닫기</span></button>
															<span class="shadow"></span>
															<span class="bullet_vertical"></span>
														</div>
														<!-- //[DP] 아티스트 더보기 레이어  -->
													</div>
													
												</dd>
											</dl>
										</li>
									
								
									
										<li>
											<dl>
												<dt><span class="none">우아한 모녀 OST Part.10</span></dt>
												
												<dd class="img"><span class="none">앨범이미지:</span>
													<!-- 140423_수정 -->
													<span class="thum">
														<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="156" height="156" src="https://cdnimg.melon.co.kr/cm2/album/images/103/86/036/10386036_20200207171559_500.jpg?e5a396e22e84e0bac445ae80a34af368/melon/resize/156/quality/80/optimize" alt="">
														<span class="bg_album_frame"></span>
														<!--140703 추가 lyr-->
														
														<!--//140703 추가 lyr-->
													</span>
													<!-- //140423_수정 -->
													<!-- [DP] 재생 레이어 -->
													<div class="overlay">
														
														<a href="javascript:;" onclick="javascript:melon.play.playAlbum('10010101','10386036');" class="btn_play_song mlog" title="우아한 모녀 OST Part.10 재생" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=P1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10386036"><span class="none">앨범전체듣기</span></a>
														
														<!--141007_modify-->
														<a href="javascript:melon.link.goAlbumDetail('10386036');" class="album mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10386036">
															<span class="album_cont" title="우아한 모녀 OST Part.10">
																<span class="title_wrap">
																	<span class="title title_ellipsis">우아한 모녀 OST Part.10</span><!--class title_ellipsis 추가시 말줄임 처리-->
																</span>
															</span>
														</a>
														<!--//141007_modify-->
														<div class="singer">
															<span class="none">가수명:</span>
															<!-- //140310_수정 kcu -->
															<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('868034');" title="캔도 (CANDO) - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=868034"><span>캔도 (CANDO)</span></a></div>
															
															<!-- //140310_수정 kcu -->
														</div>
													</div>
													<!-- //[DP] 재생 레이어 -->
												</dd>
												<dd class="singer">
													<span class="none">가수명:</span>
													<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('868034');" title="캔도 (CANDO) - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=868034"><span>캔도 (CANDO)</span></a><span class="checkEllipsis" style="display:none"><a href="javascript:melon.link.goArtistDetail('868034');" title="캔도 (CANDO) - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=868034"><span>캔도 (CANDO)</span></a></span></div>
													
												</dd>
											</dl>
										</li>
									
								
									
										<li>
											<dl>
												<dt><span class="none">어색해</span></dt>
												
												<dd class="img"><span class="none">앨범이미지:</span>
													<!-- 140423_수정 -->
													<span class="thum">
														<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="156" height="156" src="https://cdnimg.melon.co.kr/cm2/album/images/103/85/250/10385250_20200206135747_500.jpg?4952fbf96a118cda864c77c4e5c16d33/melon/resize/156/quality/80/optimize" alt="">
														<span class="bg_album_frame"></span>
														<!--140703 추가 lyr-->
														
														<!--//140703 추가 lyr-->
													</span>
													<!-- //140423_수정 -->
													<!-- [DP] 재생 레이어 -->
													<div class="overlay">
														
														<a href="javascript:;" onclick="javascript:melon.play.playAlbum('10010101','10385250');" class="btn_play_song mlog" title="어색해 재생" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=P1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10385250"><span class="none">앨범전체듣기</span></a>
														
														<!--141007_modify-->
														<a href="javascript:melon.link.goAlbumDetail('10385250');" class="album mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10385250">
															<span class="album_cont" title="어색해">
																<span class="title_wrap">
																	<span class="title title_ellipsis">어색해</span><!--class title_ellipsis 추가시 말줄임 처리-->
																</span>
															</span>
														</a>
														<!--//141007_modify-->
														<div class="singer">
															<span class="none">가수명:</span>
															<!-- //140310_수정 kcu -->
															<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('792797');" title="클래디 (ClaD) - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=792797"><span>클래디 (ClaD)</span></a></div>
															
															<!-- //140310_수정 kcu -->
														</div>
													</div>
													<!-- //[DP] 재생 레이어 -->
												</dd>
												<dd class="singer">
													<span class="none">가수명:</span>
													<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('792797');" title="클래디 (ClaD) - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=792797"><span>클래디 (ClaD)</span></a><span class="checkEllipsis" style="display:none"><a href="javascript:melon.link.goArtistDetail('792797');" title="클래디 (ClaD) - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=792797"><span>클래디 (ClaD)</span></a></span></div>
													
												</dd>
											</dl>
										</li>
									
								
									
										<li>
											<dl>
												<dt><span class="none">To HER</span></dt>
												
												<dd class="img"><span class="none">앨범이미지:</span>
													<!-- 140423_수정 -->
													<span class="thum">
														<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="156" height="156" src="https://cdnimg.melon.co.kr/cm2/album/images/103/85/826/10385826_20200207132836_500.jpg?945775827156cf3a6846bb5531530c78/melon/resize/156/quality/80/optimize" alt="">
														<span class="bg_album_frame"></span>
														<!--140703 추가 lyr-->
														
														<!--//140703 추가 lyr-->
													</span>
													<!-- //140423_수정 -->
													<!-- [DP] 재생 레이어 -->
													<div class="overlay">
														
														<a href="javascript:;" onclick="javascript:melon.play.playAlbum('10010101','10385826');" class="btn_play_song mlog" title="To HER 재생" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=P1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10385826"><span class="none">앨범전체듣기</span></a>
														
														<!--141007_modify-->
														<a href="javascript:melon.link.goAlbumDetail('10385826');" class="album mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10385826">
															<span class="album_cont" title="To HER">
																<span class="title_wrap">
																	<span class="title title_ellipsis">To HER</span><!--class title_ellipsis 추가시 말줄임 처리-->
																</span>
															</span>
														</a>
														<!--//141007_modify-->
														<div class="singer">
															<span class="none">가수명:</span>
															<!-- //140310_수정 kcu -->
															<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('16029');" title="BRWN - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=16029"><span>BRWN</span></a></div>
															
															<!-- //140310_수정 kcu -->
														</div>
													</div>
													<!-- //[DP] 재생 레이어 -->
												</dd>
												<dd class="singer">
													<span class="none">가수명:</span>
													<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('16029');" title="BRWN - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=16029"><span>BRWN</span></a><span class="checkEllipsis" style="display:none"><a href="javascript:melon.link.goArtistDetail('16029');" title="BRWN - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=16029"><span>BRWN</span></a></span></div>
													
												</dd>
											</dl>
										</li>
									</ul>
								
									<ul class="sub_list" style="display:none;">
										<li>
											<dl>
												<dt><span class="none">null</span></dt>
												
												<dd class="img"><span class="none">앨범이미지:</span>
													<!-- 140423_수정 -->
													<span class="thum">
														<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="156" height="156" src="https://cdnimg.melon.co.kr/cm2/album/images/103/85/717/10385717_20200207112607_500.jpg?5fa1ec40ae1402e0c1f09d08c5d5ddb8/melon/resize/156/quality/80/optimize" alt="">
														<span class="bg_album_frame"></span>
														<!--140703 추가 lyr-->
														
														<!--//140703 추가 lyr-->
													</span>
													<!-- //140423_수정 -->
													<!-- [DP] 재생 레이어 -->
													<div class="overlay">
														
														<a href="javascript:;" onclick="javascript:melon.play.playAlbum('10010101','10385717');" class="btn_play_song mlog" title="null 재생" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=P1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10385717"><span class="none">앨범전체듣기</span></a>
														
														<!--141007_modify-->
														<a href="javascript:melon.link.goAlbumDetail('10385717');" class="album mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10385717">
															<span class="album_cont" title="null">
																<span class="title_wrap">
																	<span class="title title_ellipsis">null</span><!--class title_ellipsis 추가시 말줄임 처리-->
																</span>
															</span>
														</a>
														<!--//141007_modify-->
														<div class="singer">
															<span class="none">가수명:</span>
															<!-- //140310_수정 kcu -->
															<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('2203064');" title="Oowl Hannal (우울 한날) - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=2203064"><span>Oowl Hannal (우울 한날)</span></a></div>
															
															<!-- //140310_수정 kcu -->
														</div>
													</div>
													<!-- //[DP] 재생 레이어 -->
												</dd>
												<dd class="singer">
													<span class="none">가수명:</span>
													<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('2203064');" title="Oowl Hannal (우울 한날) - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=2203064"><span>Oowl Hannal (우울 한날)</span></a><span class="checkEllipsis" style="display:none"><a href="javascript:melon.link.goArtistDetail('2203064');" title="Oowl Hannal (우울 한날) - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=2203064"><span>Oowl Hannal (우울 한날)</span></a></span></div>
													
												</dd>
											</dl>
										</li>
									
								
									
										<li>
											<dl>
												<dt><span class="none">20 Acapellas</span></dt>
												
												<dd class="img"><span class="none">앨범이미지:</span>
													<!-- 140423_수정 -->
													<span class="thum">
														<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="156" height="156" src="https://cdnimg.melon.co.kr/cm2/album/images/103/85/472/10385472_20200206170851_500.jpg?0a112610948dd0ff681957112a4bbf03/melon/resize/156/quality/80/optimize" alt="">
														<span class="bg_album_frame"></span>
														<!--140703 추가 lyr-->
														
														<!--//140703 추가 lyr-->
													</span>
													<!-- //140423_수정 -->
													<!-- [DP] 재생 레이어 -->
													<div class="overlay">
														
														<a href="javascript:;" onclick="javascript:melon.play.playAlbum('10010101','10385472');" class="btn_play_song mlog" title="20 Acapellas 재생" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=P1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10385472"><span class="none">앨범전체듣기</span></a>
														
														<!--141007_modify-->
														<a href="javascript:melon.link.goAlbumDetail('10385472');" class="album mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10385472">
															<span class="album_cont" title="20 Acapellas">
																<span class="title_wrap">
																	<span class="title title_ellipsis">20 Acapellas</span><!--class title_ellipsis 추가시 말줄임 처리-->
																</span>
															</span>
														</a>
														<!--//141007_modify-->
														<div class="singer">
															<span class="none">가수명:</span>
															<!-- //140310_수정 kcu -->
															<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('6985');" title="버벌진트 - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=6985"><span>버벌진트</span></a></div>
															
															<!-- //140310_수정 kcu -->
														</div>
													</div>
													<!-- //[DP] 재생 레이어 -->
												</dd>
												<dd class="singer">
													<span class="none">가수명:</span>
													<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('6985');" title="버벌진트 - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=6985"><span>버벌진트</span></a><span class="checkEllipsis" style="display:none"><a href="javascript:melon.link.goArtistDetail('6985');" title="버벌진트 - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=6985"><span>버벌진트</span></a></span></div>
													
												</dd>
											</dl>
										</li>
									
								
									
										<li>
											<dl>
												<dt><span class="none">이태원 클라쓰 OST Part.3</span></dt>
												
												<dd class="img"><span class="none">앨범이미지:</span>
													<!-- 140423_수정 -->
													<span class="thum">
														<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="156" height="156" src="https://cdnimg.melon.co.kr/cm2/album/images/103/85/262/10385262_20200206141416_500.jpg?de3cdcdb80845908583f8e228f4d63da/melon/resize/156/quality/80/optimize" alt="">
														<span class="bg_album_frame"></span>
														<!--140703 추가 lyr-->
														
														<!--//140703 추가 lyr-->
													</span>
													<!-- //140423_수정 -->
													<!-- [DP] 재생 레이어 -->
													<div class="overlay">
														
														<a href="javascript:;" onclick="javascript:melon.play.playAlbum('10010101','10385262');" class="btn_play_song mlog" title="이태원 클라쓰 OST Part.3 재생" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=P1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10385262"><span class="none">앨범전체듣기</span></a>
														
														<!--141007_modify-->
														<a href="javascript:melon.link.goAlbumDetail('10385262');" class="album mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10385262">
															<span class="album_cont" title="이태원 클라쓰 OST Part.3">
																<span class="title_wrap">
																	<span class="title title_ellipsis">이태원 클라쓰 OST Part.3</span><!--class title_ellipsis 추가시 말줄임 처리-->
																</span>
															</span>
														</a>
														<!--//141007_modify-->
														<div class="singer">
															<span class="none">가수명:</span>
															<!-- //140310_수정 kcu -->
															<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('612072');" title="하현우 (국카스텐) - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=612072"><span>하현우 (국카스텐)</span></a></div>
															
															<!-- //140310_수정 kcu -->
														</div>
													</div>
													<!-- //[DP] 재생 레이어 -->
												</dd>
												<dd class="singer">
													<span class="none">가수명:</span>
													<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('612072');" title="하현우 (국카스텐) - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=612072"><span>하현우 (국카스텐)</span></a><span class="checkEllipsis" style="display:none"><a href="javascript:melon.link.goArtistDetail('612072');" title="하현우 (국카스텐) - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=612072"><span>하현우 (국카스텐)</span></a></span></div>
													
												</dd>
											</dl>
										</li>
									
								
									
										<li>
											<dl>
												<dt><span class="none">그늘</span></dt>
												
												<dd class="img"><span class="none">앨범이미지:</span>
													<!-- 140423_수정 -->
													<span class="thum">
														<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="156" height="156" src="https://cdnimg.melon.co.kr/cm2/album/images/103/85/735/10385735_20200207113713_500.jpg?8b27dfd6a0b67f59354fec7d89ba8250/melon/resize/156/quality/80/optimize" alt="">
														<span class="bg_album_frame"></span>
														<!--140703 추가 lyr-->
														
														<!--//140703 추가 lyr-->
													</span>
													<!-- //140423_수정 -->
													<!-- [DP] 재생 레이어 -->
													<div class="overlay">
														
														<a href="javascript:;" onclick="javascript:melon.play.playAlbum('10010101','10385735');" class="btn_play_song mlog" title="그늘 재생" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=P1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10385735"><span class="none">앨범전체듣기</span></a>
														
														<!--141007_modify-->
														<a href="javascript:melon.link.goAlbumDetail('10385735');" class="album mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10385735">
															<span class="album_cont" title="그늘">
																<span class="title_wrap">
																	<span class="title title_ellipsis">그늘</span><!--class title_ellipsis 추가시 말줄임 처리-->
																</span>
															</span>
														</a>
														<!--//141007_modify-->
														<div class="singer">
															<span class="none">가수명:</span>
															<!-- //140310_수정 kcu -->
															<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('2634160');" title="KIMDA - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=2634160"><span>KIMDA</span></a></div>
															
															<!-- //140310_수정 kcu -->
														</div>
													</div>
													<!-- //[DP] 재생 레이어 -->
												</dd>
												<dd class="singer">
													<span class="none">가수명:</span>
													<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('2634160');" title="KIMDA - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=2634160"><span>KIMDA</span></a><span class="checkEllipsis" style="display:none"><a href="javascript:melon.link.goArtistDetail('2634160');" title="KIMDA - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=2634160"><span>KIMDA</span></a></span></div>
													
												</dd>
											</dl>
										</li>
									
								
									
										<li>
											<dl>
												<dt><span class="none">다른 곳에</span></dt>
												
												<dd class="img"><span class="none">앨범이미지:</span>
													<!-- 140423_수정 -->
													<span class="thum">
														<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="156" height="156" src="https://cdnimg.melon.co.kr/cm2/album/images/103/85/822/10385822_20200207121357_500.jpg?2fcd07080434ec47c8e4c3c26a8b2cf5/melon/resize/156/quality/80/optimize" alt="">
														<span class="bg_album_frame"></span>
														<!--140703 추가 lyr-->
														
														<!--//140703 추가 lyr-->
													</span>
													<!-- //140423_수정 -->
													<!-- [DP] 재생 레이어 -->
													<div class="overlay">
														
														<a href="javascript:;" onclick="javascript:melon.play.playAlbum('10010101','10385822');" class="btn_play_song mlog" title="다른 곳에 재생" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=P1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10385822"><span class="none">앨범전체듣기</span></a>
														
														<!--141007_modify-->
														<a href="javascript:melon.link.goAlbumDetail('10385822');" class="album mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10385822">
															<span class="album_cont" title="다른 곳에">
																<span class="title_wrap">
																	<span class="title title_ellipsis">다른 곳에</span><!--class title_ellipsis 추가시 말줄임 처리-->
																</span>
															</span>
														</a>
														<!--//141007_modify-->
														<div class="singer">
															<span class="none">가수명:</span>
															<!-- //140310_수정 kcu -->
															<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('2620293');" title="명이월 (Myeong E-Wol) - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=2620293"><span>명이월 (Myeong E-Wol)</span></a></div>
															
															<!-- //140310_수정 kcu -->
														</div>
													</div>
													<!-- //[DP] 재생 레이어 -->
												</dd>
												<dd class="singer">
													<span class="none">가수명:</span>
													<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('2620293');" title="명이월 (Myeong E-Wol) - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=2620293"><span>명이월 (Myeong E-Wol)</span></a><span class="checkEllipsis" style="display:none"><a href="javascript:melon.link.goArtistDetail('2620293');" title="명이월 (Myeong E-Wol) - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=2620293"><span>명이월 (Myeong E-Wol)</span></a></span></div>
													
												</dd>
											</dl>
										</li>
									
								
									
										<li>
											<dl>
												<dt><span class="none">이글루</span></dt>
												
												<dd class="img"><span class="none">앨범이미지:</span>
													<!-- 140423_수정 -->
													<span class="thum">
														<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="156" height="156" src="https://cdnimg.melon.co.kr/cm2/album/images/103/85/756/10385756_20200207132343_500.jpg?6a1bfc236c34093a00af44978e0da711/melon/resize/156/quality/80/optimize" alt="">
														<span class="bg_album_frame"></span>
														<!--140703 추가 lyr-->
														
														<!--//140703 추가 lyr-->
													</span>
													<!-- //140423_수정 -->
													<!-- [DP] 재생 레이어 -->
													<div class="overlay">
														
														<a href="javascript:;" onclick="javascript:melon.play.playAlbum('10010101','10385756');" class="btn_play_song mlog" title="이글루 재생" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=P1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10385756"><span class="none">앨범전체듣기</span></a>
														
														<!--141007_modify-->
														<a href="javascript:melon.link.goAlbumDetail('10385756');" class="album mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10385756">
															<span class="album_cont" title="이글루">
																<span class="title_wrap">
																	<span class="title title_ellipsis">이글루</span><!--class title_ellipsis 추가시 말줄임 처리-->
																</span>
															</span>
														</a>
														<!--//141007_modify-->
														<div class="singer">
															<span class="none">가수명:</span>
															<!-- //140310_수정 kcu -->
															<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('2635948');" title="illuminate (일루미네이트) - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=2635948"><span>illuminate (일루미네이트)</span></a></div>
															
															<!-- //140310_수정 kcu -->
														</div>
													</div>
													<!-- //[DP] 재생 레이어 -->
												</dd>
												<dd class="singer">
													<span class="none">가수명:</span>
													<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('2635948');" title="illuminate (일루미네이트) - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=2635948"><span>illuminate (일루미네이트)</span></a><span class="checkEllipsis" style="display:none"><a href="javascript:melon.link.goArtistDetail('2635948');" title="illuminate (일루미네이트) - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=2635948"><span>illuminate (일루미네이트)</span></a></span></div>
													
												</dd>
											</dl>
										</li>
									</ul>
								
									<ul class="sub_list" style="display:none;">
										<li>
											<dl>
												<dt><span class="none">내일은 미스터트롯 데스매치 PART2</span></dt>
												
												<dd class="img"><span class="none">앨범이미지:</span>
													<!-- 140423_수정 -->
													<span class="thum">
														<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="156" height="156" src="https://cdnimg.melon.co.kr/cm2/album/images/103/85/603/10385603_20200207102907_500.jpg?b7c0d4f1911b20b4de5d124a9e5ad770/melon/resize/156/quality/80/optimize" alt="">
														<span class="bg_album_frame"></span>
														<!--140703 추가 lyr-->
														
														<!--//140703 추가 lyr-->
													</span>
													<!-- //140423_수정 -->
													<!-- [DP] 재생 레이어 -->
													<div class="overlay">
														
														<a href="javascript:;" onclick="javascript:melon.play.playAlbum('10010101','10385603');" class="btn_play_song mlog" title="내일은 미스터트롯 데스매치 PART2 재생" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=P1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10385603"><span class="none">앨범전체듣기</span></a>
														
														<!--141007_modify-->
														<a href="javascript:melon.link.goAlbumDetail('10385603');" class="album mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10385603">
															<span class="album_cont" title="내일은 미스터트롯 데스매치 PART2">
																<span class="title_wrap">
																	<span class="title title_ellipsis">내일은 미스터트롯 데스매치 PART2</span><!--class title_ellipsis 추가시 말줄임 처리-->
																</span>
															</span>
														</a>
														<!--//141007_modify-->
														<div class="singer">
															<span class="none">가수명:</span>
															<!-- //140310_수정 kcu -->
															<div class="ellipsis">Various Artists</div>
															
															<!-- //140310_수정 kcu -->
														</div>
													</div>
													<!-- //[DP] 재생 레이어 -->
												</dd>
												<dd class="singer">
													<span class="none">가수명:</span>
													<div class="ellipsis">Various Artists<span class="checkEllipsis" style="display:none">Various Artists</span></div>
													
												</dd>
											</dl>
										</li>
									
								
									
										<li>
											<dl>
												<dt><span class="none">Cyber Holiday (Feat. 넉살)</span></dt>
												
												<dd class="img"><span class="none">앨범이미지:</span>
													<!-- 140423_수정 -->
													<span class="thum">
														<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="156" height="156" src="https://cdnimg.melon.co.kr/cm2/album/images/103/85/288/10385288_20200206144353_500.jpg?db24e3afc87ac17044fee8596f72fe39/melon/resize/156/quality/80/optimize" alt="">
														<span class="bg_album_frame"></span>
														<!--140703 추가 lyr-->
														
														<!--//140703 추가 lyr-->
													</span>
													<!-- //140423_수정 -->
													<!-- [DP] 재생 레이어 -->
													<div class="overlay">
														
														<a href="javascript:;" onclick="javascript:melon.play.playAlbum('10010101','10385288');" class="btn_play_song mlog" title="Cyber Holiday (Feat. 넉살) 재생" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=P1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10385288"><span class="none">앨범전체듣기</span></a>
														
														<!--141007_modify-->
														<a href="javascript:melon.link.goAlbumDetail('10385288');" class="album mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10385288">
															<span class="album_cont" title="Cyber Holiday (Feat. 넉살)">
																<span class="title_wrap">
																	<span class="title title_ellipsis">Cyber Holiday (Feat. 넉살)</span><!--class title_ellipsis 추가시 말줄임 처리-->
																</span>
															</span>
														</a>
														<!--//141007_modify-->
														<div class="singer">
															<span class="none">가수명:</span>
															<!-- //140310_수정 kcu -->
															<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('2140061');" title="까데호 - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=2140061"><span>까데호</span></a></div>
															
															<!-- //140310_수정 kcu -->
														</div>
													</div>
													<!-- //[DP] 재생 레이어 -->
												</dd>
												<dd class="singer">
													<span class="none">가수명:</span>
													<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('2140061');" title="까데호 - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=2140061"><span>까데호</span></a><span class="checkEllipsis" style="display:none"><a href="javascript:melon.link.goArtistDetail('2140061');" title="까데호 - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=2140061"><span>까데호</span></a></span></div>
													
												</dd>
											</dl>
										</li>
									
								
									
										<li>
											<dl>
												<dt><span class="none">No Judgement</span></dt>
												
												<dd class="img"><span class="none">앨범이미지:</span>
													<!-- 140423_수정 -->
													<span class="thum">
														<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="156" height="156" src="https://cdnimg.melon.co.kr/cm2/album/images/103/84/921/10384921_20200205180157_500.jpg?102fa022ebab83348f75eebc76ae9fd8/melon/resize/156/quality/80/optimize" alt="">
														<span class="bg_album_frame"></span>
														<!--140703 추가 lyr-->
														
														<!--//140703 추가 lyr-->
													</span>
													<!-- //140423_수정 -->
													<!-- [DP] 재생 레이어 -->
													<div class="overlay">
														
														<a href="javascript:;" onclick="javascript:melon.play.playAlbum('10010101','10384921');" class="btn_play_song mlog" title="No Judgement 재생" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=P1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10384921"><span class="none">앨범전체듣기</span></a>
														
														<!--141007_modify-->
														<a href="javascript:melon.link.goAlbumDetail('10384921');" class="album mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10384921">
															<span class="album_cont" title="No Judgement">
																<span class="title_wrap">
																	<span class="title title_ellipsis">No Judgement</span><!--class title_ellipsis 추가시 말줄임 처리-->
																</span>
															</span>
														</a>
														<!--//141007_modify-->
														<div class="singer">
															<span class="none">가수명:</span>
															<!-- //140310_수정 kcu -->
															<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('1201929');" title="Niall Horan - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=1201929"><span>Niall Horan</span></a></div>
															
															<!-- //140310_수정 kcu -->
														</div>
													</div>
													<!-- //[DP] 재생 레이어 -->
												</dd>
												<dd class="singer">
													<span class="none">가수명:</span>
													<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('1201929');" title="Niall Horan - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=1201929"><span>Niall Horan</span></a><span class="checkEllipsis" style="display:none"><a href="javascript:melon.link.goArtistDetail('1201929');" title="Niall Horan - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=1201929"><span>Niall Horan</span></a></span></div>
													
												</dd>
											</dl>
										</li>
									
								
									
										<li>
											<dl>
												<dt><span class="none">헤어지면 모두 잊나요 나는 그게 안돼요</span></dt>
												
												<dd class="img"><span class="none">앨범이미지:</span>
													<!-- 140423_수정 -->
													<span class="thum">
														<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="156" height="156" src="https://cdnimg.melon.co.kr/cm2/album/images/103/85/310/10385310_20200206150114_500.jpg?b75323ac4ce91fcc52499b05fe180b4e/melon/resize/156/quality/80/optimize" alt="">
														<span class="bg_album_frame"></span>
														<!--140703 추가 lyr-->
														
														<!--//140703 추가 lyr-->
													</span>
													<!-- //140423_수정 -->
													<!-- [DP] 재생 레이어 -->
													<div class="overlay">
														
														<a href="javascript:;" onclick="javascript:melon.play.playAlbum('10010101','10385310');" class="btn_play_song mlog" title="헤어지면 모두 잊나요 나는 그게 안돼요 재생" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=P1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10385310"><span class="none">앨범전체듣기</span></a>
														
														<!--141007_modify-->
														<a href="javascript:melon.link.goAlbumDetail('10385310');" class="album mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10385310">
															<span class="album_cont" title="헤어지면 모두 잊나요 나는 그게 안돼요">
																<span class="title_wrap">
																	<span class="title title_ellipsis">헤어지면 모두 잊나요 나는 그게 안돼요</span><!--class title_ellipsis 추가시 말줄임 처리-->
																</span>
															</span>
														</a>
														<!--//141007_modify-->
														<div class="singer">
															<span class="none">가수명:</span>
															<!-- //140310_수정 kcu -->
															<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('764300');" title="더 라임 - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=764300"><span>더 라임</span></a></div>
															
															<!-- //140310_수정 kcu -->
														</div>
													</div>
													<!-- //[DP] 재생 레이어 -->
												</dd>
												<dd class="singer">
													<span class="none">가수명:</span>
													<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('764300');" title="더 라임 - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=764300"><span>더 라임</span></a><span class="checkEllipsis" style="display:none"><a href="javascript:melon.link.goArtistDetail('764300');" title="더 라임 - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=764300"><span>더 라임</span></a></span></div>
													
												</dd>
											</dl>
										</li>
									
								
									
										<li>
											<dl>
												<dt><span class="none">검사내전 OST Part 2</span></dt>
												
												<dd class="img"><span class="none">앨범이미지:</span>
													<!-- 140423_수정 -->
													<span class="thum">
														<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="156" height="156" src="https://cdnimg.melon.co.kr/cm2/album/images/103/85/227/10385227_20200206133216_500.jpg?d99792dd136e53a82a792188dd4a94c3/melon/resize/156/quality/80/optimize" alt="">
														<span class="bg_album_frame"></span>
														<!--140703 추가 lyr-->
														
														<!--//140703 추가 lyr-->
													</span>
													<!-- //140423_수정 -->
													<!-- [DP] 재생 레이어 -->
													<div class="overlay">
														
														<a href="javascript:;" onclick="javascript:melon.play.playAlbum('10010101','10385227');" class="btn_play_song mlog" title="검사내전 OST Part 2 재생" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=P1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10385227"><span class="none">앨범전체듣기</span></a>
														
														<!--141007_modify-->
														<a href="javascript:melon.link.goAlbumDetail('10385227');" class="album mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10385227">
															<span class="album_cont" title="검사내전 OST Part 2">
																<span class="title_wrap">
																	<span class="title title_ellipsis">검사내전 OST Part 2</span><!--class title_ellipsis 추가시 말줄임 처리-->
																</span>
															</span>
														</a>
														<!--//141007_modify-->
														<div class="singer">
															<span class="none">가수명:</span>
															<!-- //140310_수정 kcu -->
															<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('746064');" title="남궁진영 - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=746064"><span>남궁진영</span></a></div>
															
															<!-- //140310_수정 kcu -->
														</div>
													</div>
													<!-- //[DP] 재생 레이어 -->
												</dd>
												<dd class="singer">
													<span class="none">가수명:</span>
													<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('746064');" title="남궁진영 - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=746064"><span>남궁진영</span></a><span class="checkEllipsis" style="display:none"><a href="javascript:melon.link.goArtistDetail('746064');" title="남궁진영 - 페이지 이동" class="play_artist mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=746064"><span>남궁진영</span></a></span></div>
													
												</dd>
											</dl>
										</li>
									
								
									
										<li>
											<dl>
												<dt><span class="none">드라마 '터치' OST Part.3</span></dt>
												
												<dd class="img"><span class="none">앨범이미지:</span>
													<!-- 140423_수정 -->
													<span class="thum">
														<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="156" height="156" src="https://cdnimg.melon.co.kr/cm2/album/images/103/85/868/10385868_20200207143309_500.jpg?b7788fc3f1fb062656dc9549a294ba86/melon/resize/156/quality/80/optimize" alt="">
														<span class="bg_album_frame"></span>
														<!--140703 추가 lyr-->
														
														<!--//140703 추가 lyr-->
													</span>
													<!-- //140423_수정 -->
													<!-- [DP] 재생 레이어 -->
													<div class="overlay">
														
														<a href="javascript:;" onclick="javascript:melon.play.playAlbum('10010101','10385868');" class="btn_play_song mlog" title="드라마 '터치' OST Part.3 재생" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=P1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10385868"><span class="none">앨범전체듣기</span></a>
														
														<!--141007_modify-->
														<a href="javascript:melon.link.goAlbumDetail('10385868');" class="album mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=G01&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10385868">
															<span class="album_cont" title="드라마 '터치' OST Part.3">
																<span class="title_wrap">
																	<span class="title title_ellipsis">드라마 '터치' OST Part.3</span><!--class title_ellipsis 추가시 말줄임 처리-->
																</span>
															</span>
														</a>
														<!--//141007_modify-->
														<div class="singer">
															<span class="none">가수명:</span>
															<!-- //140310_수정 kcu -->
															<div class="ellipsis">Various Artists</div>
															
															<!-- //140310_수정 kcu -->
														</div>
													</div>
													<!-- //[DP] 재생 레이어 -->
												</dd>
												<dd class="singer">
													<span class="none">가수명:</span>
													<div class="ellipsis">Various Artists<span class="checkEllipsis" style="display:none">Various Artists</span></div>
													
												</dd>
											</dl>
										</li>
									</ul>
								
								</div>
								<div class="wrap_page">
									<div class="page">
										<span class="page_num">
											<span class="none">현재 페이지</span><strong>1</strong>/<span class="none">전체 페이지</span><span>16</span>
										</span>
										<span class="wrap_btn">
											
											<a class="btn btn_pre mlog" title="이전" href="javascript:;" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=C01&amp;ACTION_AF_CLICK=S2"><span class="odd_span">이전</span></a>
											<a class="btn btn_next mlog" title="다음" href="javascript:;" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=C01&amp;ACTION_AF_CLICK=S2"><span class="odd_span">다음</span></a>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- //최신앨범 -->

					<!-- 이벤트 -->
					<div class="event">
						<!--140701 추가 lyr-->
						<div class="event_default">
							<a href="http://www.melon.com/album/detail.htm?albumId=10385864" class="image_type24" title="Rovxe,Goldash">
								<!-- 140423_수정 -->
								<img width="236" height="315" src="https://cdnimg.melon.co.kr/svc/images/main/imgUrl20200207054705.png/melon/quality/80" alt="">
								<!-- //140423_수정 -->
								<span class="bg_album_frame"></span>
							</a>
						</div>
						<!--//140701 추가 lyr-->
					</div>
					<!-- //이벤트 -->

					<!-- 로그인 -->
					<div class="id_wrap mt24">
						<script type="text/javascript">
						var html = '';
/*
						var isLogin = false;
						try {
							isLogin = isMelonLogin();
						} catch (e) {
							alert("member script import error!!");
						}
 */

						if (isMelonLogin()) {
							var prodName;
							if (getProdName() != ""){
								var prodNames = getProdName().replace(/,/g, "</span>, <span>");
								prodName = '<a href="javascript:melon.menu.goMyPage();" title="이용권보유현황">'
								 		 + 		'<span class="box_name"><strong><span>'+ prodNames +'</span></strong> 사용중</span>'
										 + '</a>';

							} else {
								prodName = "보유중인 이용권이 없습니다.";
							}

							//var memId = getMemberId();
							var memId = getDisplayId();
							if(memId.indexOf("@") != -1 && getMemberType() != '1'){//카카오계정이 아닌경우에만 @도메인 영역 삭제처리
								memId = memId.split("@")[0];
							}

							var fromMPS = getCookie("MPS"); // 멜론 플레이어에서 왔는지 확인.
							var fromMPSYn = fromMPS == null || fromMPS.indexOf("MELONPLAYER") < 0;

							var gradeImg = "";
							var gradeName = "";
							var gradeImageUrl = "";

							//alert("gradeName : " + getGrade() + " & gradeImageUrl :" + getGradeImageUrl());

							try {
								gradeName = getGrade();
								gradeImageUrl = getGradeImageUrl();
								gradeImageUrl = gradeImageUrl.replace('http:','');

								if(gradeImageUrl != ''){
									gradeImg = "<span class=\"icon_grade\"><img src=\""+gradeImageUrl+"\" width=\"18\" height=\"18\" alt=\""+gradeName+"\" /></span>";
								}
								//카카오연동확인
								if(getMemberType() == '1'){
									gradeImg += '<span class="icon_grade"><img src="//cdnimg.melon.co.kr/resource/image/web/common/icon_kakao.png" width="18" height="18" alt="kakao"></span>';
								}
							} catch (e) {}

							html = ['<div class="logout_wrap">',
									<!-- 140603_수정 -->
									'<div class="mem_info">',
										'<strong><a href="https://member.melon.com/muid/web/help/myinfointro_inform.htm" class="id_area">' + gradeImg + memId + '</a>님</strong>',
										'<a href="https://member.melon.com/muid/web/help/myinfointro_inform.htm" title="내정보" class="bg_none" ><span>내정보</span></a>',
										'<div class="mem_btn" id="d_facebook_mem_btn">',
										'</div>',
										fromMPSYn ? '<a href="javascript:MELON.WEBSVC.POC.login.gnbLogout();" onclick="MELON.WEBSVC.POC.login.gnbLogout();" title="로그아웃" class="btn_logout"><span>로그아웃</span></a>' : '',
									'</div>',
									getProdName() == "" ? '<span class="btn_buy"><a href="javascript:melon.menu.cm.goPamphlet();" title="이용권구매" >이용권구매</a></span>' : '',
									'<div class="mem_used">',
										'<strong class="product_name">'+prodName+'</strong>',
										'<ul>',
											'<li class="nth1">',
												'<a href="javascript:melon.link.goMyCupon();">',
													'<span><span class="label">쿠폰</span><span class="nm">'+getCouponCnt()+'</span></span>',
												'</a>',
											'</li>',
											'<li class="nth2">',
												'<a href="javascript:melon.link.goMelonCash();">',
													'<span><span class="label">캐쉬</span><span class="nm">'+getMelonCash().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,")+'</span></span>',
												'</a>',
											'</li>',
											'<li class="nth3">',
												'<a href="javascript:melon.link.goPresentSong();">',
													'<span><span class="label">선물</span><span class="nm">'+getMemberGiftCnt()+'</span></span>',
												'</a>',
											'</li>',
										'</ul>',
									'</div>',
								'</div>'].join('');

							document.write(html);

							// 페이스북 계정연동 서비스 종료로 해당영역 DP안함
							/*
							var facebookConnectYn = getFacebookConnectYn();

							if(facebookConnectYn == "" || typeof facebookConnectYn == "undefined"){
								// Cookie에 페이스북 연동 관련 값이 있으면 아래 ajax는 호출하지 않는다.
								try {
									$.ajax({
										url: "https://www.melon.com/gnb/check_connectFacebook.json",
										type : 'GET',
									}).done(function(json) {
										facebookConnectYn = json.facebookConnectYn;

										var facebookConnection = "Y" != facebookConnectYn;
										printFacebookBtn(facebookConnection);
									}).fail(function() {
										printFacebookBtn(true);
									});
								} catch(e){
									printFacebookBtn(true);
								}
							} else {
								var facebookConnection = "Y" != facebookConnectYn;
								printFacebookBtn(facebookConnection);
							}
							*/
						} else {
							html = ['<div class="login_wrap" id="gnbLoginDiv">',
										'<div class="button_login">',
											'<div class="top_area">',
												'<p>멜론을 더 안전하게 이용하세요.</p>',
												'<a href="javascript:MELON.WEBSVC.POC.link.goJoin();" title="회원가입 - 페이지 이동">회원가입</a>',
											'</div>',
											'<button type="button" class="btn_login" onclick="MELON.WEBSVC.POC.login.menuLogin();"><span class="odd_span">로그인</span></button>',
										'</div>',
									'</div>'].join('');
							document.write(html);
						}

						function  printFacebookBtn(facebookConnection){
							var btnHtml = facebookConnection ? '<button type="button" class="btn_info sns_facebook" title="페이스북 연동하기" onclick="goConnectSns();"><span>페이스북 연동하기</span></button>' : '<button type="button" class="btn_info sns_facebook" title="페이스북 해제하기" onclick="goConnectSns();"><span class="cancel">페이스북 해제하기</span></button>';
							$('#d_facebook_mem_btn').html(btnHtml);
						}

						</script>
						<div class="promotion_wrap">
							<!--140701 추가 lyr-->
							<div class="promotion_default">
								<a href="http://tktapi.melon.com/gate/landing.json?type=bridge&amp;contId=100273" title="티켓(그리핀)">
									<img width="280" height="188" src="https://cdnimg.melon.co.kr/svc/images/main/imgUrl20200130043931.png/melon/quality/80" alt="">
									<span class="bg_album_frame"></span>
								</a>
							</div>
							<!--//140701 추가 lyr-->
						</div>
					</div>
					<!-- //로그인 -->

					<!-- 많이 봤어요 -->
					<div class="hot_issue">
						<!--140701 수정 lyr-->
						<h2><span class="title_link">인기 있어요</span><span class="txt_intro">지금 이슈가 되는 아티스트의 인기 컨텐츠입니다.</span></h2>
						<!--//140701 수정 lyr-->
						<!-- 리스트 1 -->
						
						<ul class="sub_list">
						
						
							
								
								<li class="issue_list04">
								<dl class="ml0">
									<dd>
										<a href="https://www.melon.com/musicstory/inform.htm?mstorySeq=10008" title="iKON '뛰어들게' MV 촬영 현장" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O06&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10007&amp;CLICK_CONTS_ID=&amp;PROMO_CONTS_TYPE_CODE=&amp;PROMO_CONTS_ID=&amp;PROMO_SEQ=158364&amp;PROMO_DTL_SEQ=1">
											<img width="223" height="148" src="https://cdnimg.melon.co.kr/svc/images/main/imgUrl20200206114436.jpg/melon/quality/80" alt="">
											
											<span class="bg_album_frame"></span>
										</a>
									</dd>
									<dt>
										<a href="https://www.melon.com/musicstory/inform.htm?mstorySeq=10008" title="iKON '뛰어들게' MV 촬영 현장" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O06&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10007&amp;CLICK_CONTS_ID=&amp;PROMO_CONTS_TYPE_CODE=&amp;PROMO_CONTS_ID=&amp;PROMO_SEQ=158364&amp;PROMO_DTL_SEQ=1">
											<span class="title">iKON '뛰어들게' MV 촬영 현장</span>
											<span class="ellipsis">iKON 음악 세계로 뛰어들게요</span>
										</a>
									</dt>
									<dd class="view_no">
										<!-- 140422_수정 -->
										<span><span class="bar">
											
												
												<a href="javascript:goMainMenuLinkPage('N10007','');" title="멜론매거진">멜론매거진</a>
											
										</span><span class="inquiry">조회 4,467</span></span>
										<!-- //140422_수정 -->
									</dd>
								</dl>
								
							
								
								
								<dl>
									<dd>
										<a href="https://www.melon.com/musicstory/inform.htm?mstorySeq=10003" title="이달의 소녀 [#] 자켓 촬영 현장" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O06&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10007&amp;CLICK_CONTS_ID=&amp;PROMO_CONTS_TYPE_CODE=&amp;PROMO_CONTS_ID=&amp;PROMO_SEQ=158364&amp;PROMO_DTL_SEQ=2">
											<img width="223" height="148" src="https://cdnimg.melon.co.kr/svc/images/main/imgUrl20200206114442.jpg/melon/quality/80" alt="">
											
											<span class="bg_album_frame"></span>
										</a>
									</dd>
									<dt>
										<a href="https://www.melon.com/musicstory/inform.htm?mstorySeq=10003" title="이달의 소녀 [#] 자켓 촬영 현장" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O06&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10007&amp;CLICK_CONTS_ID=&amp;PROMO_CONTS_TYPE_CODE=&amp;PROMO_CONTS_ID=&amp;PROMO_SEQ=158364&amp;PROMO_DTL_SEQ=2">
											<span class="title">이달의 소녀 [#] 자켓 촬영 현장</span>
											<span class="ellipsis">세상의 경계와 편견을 넘어서</span>
										</a>
									</dt>
									<dd class="view_no">
										<!-- 140422_수정 -->
										<span><span class="bar">
											
												
												<a href="javascript:goMainMenuLinkPage('N10007','');" title="멜론매거진">멜론매거진</a>
											
										</span><span class="inquiry">조회 7,271</span></span>
										<!-- //140422_수정 -->
									</dd>
								</dl>
								
							
								
								
								<dl>
									<dd>
										<a href="https://www.melon.com/mymusic/dj/mymusicdjplaylistview_inform.htm?plylstSeq=471638406" title="편안한 무드의 베드룸 팝" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O06&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10009&amp;CLICK_CONTS_ID=&amp;PROMO_CONTS_TYPE_CODE=&amp;PROMO_CONTS_ID=&amp;PROMO_SEQ=158364&amp;PROMO_DTL_SEQ=3">
											<img width="223" height="148" src="https://cdnimg.melon.co.kr/svc/images/main/imgUrl20200206114449.jpg/melon/quality/80" alt="">
											
											<span class="bg_album_frame"></span>
										</a>
									</dd>
									<dt>
										<a href="https://www.melon.com/mymusic/dj/mymusicdjplaylistview_inform.htm?plylstSeq=471638406" title="편안한 무드의 베드룸 팝" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O06&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10009&amp;CLICK_CONTS_ID=&amp;PROMO_CONTS_TYPE_CODE=&amp;PROMO_CONTS_ID=&amp;PROMO_SEQ=158364&amp;PROMO_DTL_SEQ=3">
											<span class="title">편안한 무드의 베드룸 팝</span>
											<span class="ellipsis">혼자만의 시간, 편하게 듣는 음악</span>
										</a>
									</dt>
									<dd class="view_no">
										<!-- 140422_수정 -->
										<span><span class="bar">
											
												
												<a href="javascript:goMainMenuLinkPage('N10009','');" title="멜론DJ">멜론DJ</a>
											
										</span><span class="inquiry">조회 45,404</span></span>
										<!-- //140422_수정 -->
									</dd>
								</dl>
								
							
								
								
								<dl class="ml0">
									<dd>
										<a href="https://www.melon.com/mymusic/dj/mymusicdjplaylistview_inform.htm?plylstSeq=471280098" title="덤덤한 듯, 무심하게" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O06&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10009&amp;CLICK_CONTS_ID=&amp;PROMO_CONTS_TYPE_CODE=&amp;PROMO_CONTS_ID=&amp;PROMO_SEQ=158364&amp;PROMO_DTL_SEQ=4">
											<img width="223" height="148" src="https://cdnimg.melon.co.kr/svc/images/main/imgUrl20200206114525.jpg/melon/quality/80" alt="">
											
											<span class="bg_album_frame"></span>
										</a>
									</dd>
									<dt>
										<a href="https://www.melon.com/mymusic/dj/mymusicdjplaylistview_inform.htm?plylstSeq=471280098" title="덤덤한 듯, 무심하게" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O06&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10009&amp;CLICK_CONTS_ID=&amp;PROMO_CONTS_TYPE_CODE=&amp;PROMO_CONTS_ID=&amp;PROMO_SEQ=158364&amp;PROMO_DTL_SEQ=4">
											<span class="title">덤덤한 듯, 무심하게</span>
											<span class="ellipsis">당신의 하루가 잔잔하길</span>
										</a>
									</dt>
									<dd class="view_no">
										<!-- 140422_수정 -->
										<span><span class="bar">
											
												
												<a href="javascript:goMainMenuLinkPage('N10009','');" title="멜론DJ">멜론DJ</a>
											
										</span><span class="inquiry">조회 27,216</span></span>
										<!-- //140422_수정 -->
									</dd>
								</dl>
								
							
								
								
								<dl>
									<dd class="mov_area">
										<a href="https://vod.melon.com/video/detail2.htm?mvId=50215540" title="JP Saxe 'If the World Was Ending'" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O06&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10003&amp;CLICK_CONTS_ID=&amp;PROMO_CONTS_TYPE_CODE=&amp;PROMO_CONTS_ID=&amp;PROMO_SEQ=158364&amp;PROMO_DTL_SEQ=5">
											<img width="223" height="148" src="https://cdnimg.melon.co.kr/svc/images/main/imgUrl20200206114531.jpg/melon/quality/80" alt="">
											
											<span class="playtime">
												<strong class="none">재생시간</strong>
												<span class="time">04:05</span>
											</span>
											
											<span class="bg_album_frame"></span>
										</a>
									</dd>
									<dt>
										<a href="https://vod.melon.com/video/detail2.htm?mvId=50215540" title="JP Saxe 'If the World Was Ending'" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O06&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10003&amp;CLICK_CONTS_ID=&amp;PROMO_CONTS_TYPE_CODE=&amp;PROMO_CONTS_ID=&amp;PROMO_SEQ=158364&amp;PROMO_DTL_SEQ=5">
											<span class="title">JP Saxe 'If the World Was Ending'</span>
											<span class="ellipsis">감성 폭발해버리는 LIVE</span>
										</a>
									</dt>
									<dd class="view_no">
										<!-- 140422_수정 -->
										<span><span class="bar">
											
												
												<a href="javascript:goMainMenuLinkPage('N10003','');" title="멜론TV">멜론TV</a>
											
										</span><span class="inquiry">조회 4,926</span></span>
										<!-- //140422_수정 -->
									</dd>
								</dl>
								
							
								
								
								<dl>
									<dd>
										<a href="https://www.melon.com/mymusic/dj/mymusicdjplaylistview_inform.htm?plylstSeq=471558713" title="따뜻한 느낌의 R&amp;B / Soul Songs" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O06&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10009&amp;CLICK_CONTS_ID=&amp;PROMO_CONTS_TYPE_CODE=&amp;PROMO_CONTS_ID=&amp;PROMO_SEQ=158364&amp;PROMO_DTL_SEQ=6">
											<img width="223" height="148" src="https://cdnimg.melon.co.kr/svc/images/main/imgUrl20200206114534.jpg/melon/quality/80" alt="">
											
											<span class="bg_album_frame"></span>
										</a>
									</dd>
									<dt>
										<a href="https://www.melon.com/mymusic/dj/mymusicdjplaylistview_inform.htm?plylstSeq=471558713" title="따뜻한 느낌의 R&amp;B / Soul Songs" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O06&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10009&amp;CLICK_CONTS_ID=&amp;PROMO_CONTS_TYPE_CODE=&amp;PROMO_CONTS_ID=&amp;PROMO_SEQ=158364&amp;PROMO_DTL_SEQ=6">
											<span class="title">따뜻한 느낌의 R&amp;B / Soul Songs</span>
											<span class="ellipsis">1980년대, 포근함을 주는 감성</span>
										</a>
									</dt>
									<dd class="view_no">
										<!-- 140422_수정 -->
										<span><span class="bar">
											
												
												<a href="javascript:goMainMenuLinkPage('N10009','');" title="멜론DJ">멜론DJ</a>
											
										</span><span class="inquiry">조회 27,878</span></span>
										<!-- //140422_수정 -->
									</dd>
								</dl>
								</li>
							
						
						</ul>

						
						<ul class="sub_list" style="display:none;">
						
						
							
								
								<li class="issue_list04">
								<dl class="ml0">
									<dd>
										<a href="https://www.melon.com/musicstory/inform.htm?mstorySeq=10000" title="임헌일 '오늘만큼은' MV 촬영 현장" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O06&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10007&amp;CLICK_CONTS_ID=&amp;PROMO_CONTS_TYPE_CODE=&amp;PROMO_CONTS_ID=&amp;PROMO_SEQ=114285&amp;PROMO_DTL_SEQ=1">
											<img width="223" height="148" src="https://cdnimg.melon.co.kr/svc/images/main/imgUrl20200206114228.jpg/melon/quality/80" alt="">
											
											<span class="bg_album_frame"></span>
										</a>
									</dd>
									<dt>
										<a href="https://www.melon.com/musicstory/inform.htm?mstorySeq=10000" title="임헌일 '오늘만큼은' MV 촬영 현장" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O06&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10007&amp;CLICK_CONTS_ID=&amp;PROMO_CONTS_TYPE_CODE=&amp;PROMO_CONTS_ID=&amp;PROMO_SEQ=114285&amp;PROMO_DTL_SEQ=1">
											<span class="title">임헌일 '오늘만큼은' MV 촬영 현장</span>
											<span class="ellipsis">찬란함이 지나간 사랑에 대하여</span>
										</a>
									</dt>
									<dd class="view_no">
										<!-- 140422_수정 -->
										<span><span class="bar">
											
												
												<a href="javascript:goMainMenuLinkPage('N10007','');" title="멜론매거진">멜론매거진</a>
											
										</span><span class="inquiry">조회 2,255</span></span>
										<!-- //140422_수정 -->
									</dd>
								</dl>
								
							
								
								
								<dl>
									<dd>
										<a href="https://www.melon.com/musicstory/inform.htm?mstorySeq=10010" title="늘 '새로이' 연기하는, 박서준" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O06&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10007&amp;CLICK_CONTS_ID=&amp;PROMO_CONTS_TYPE_CODE=&amp;PROMO_CONTS_ID=&amp;PROMO_SEQ=114285&amp;PROMO_DTL_SEQ=2">
											<img width="223" height="148" src="https://cdnimg.melon.co.kr/svc/images/main/imgUrl20200206114249.jpg/melon/quality/80" alt="">
											
											<span class="bg_album_frame"></span>
										</a>
									</dd>
									<dt>
										<a href="https://www.melon.com/musicstory/inform.htm?mstorySeq=10010" title="늘 '새로이' 연기하는, 박서준" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O06&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10007&amp;CLICK_CONTS_ID=&amp;PROMO_CONTS_TYPE_CODE=&amp;PROMO_CONTS_ID=&amp;PROMO_SEQ=114285&amp;PROMO_DTL_SEQ=2">
											<span class="title">늘 '새로이' 연기하는, 박서준</span>
											<span class="ellipsis">또 한 번 입증된 박서준 클라쓰</span>
										</a>
									</dt>
									<dd class="view_no">
										<!-- 140422_수정 -->
										<span><span class="bar">
											
												
												<a href="javascript:goMainMenuLinkPage('N10007','');" title="멜론매거진">멜론매거진</a>
											
										</span><span class="inquiry">조회 12,542</span></span>
										<!-- //140422_수정 -->
									</dd>
								</dl>
								
							
								
								
								<dl>
									<dd class="mov_area">
										<a href="https://vod.melon.com/video/detail2.htm?mvId=50215750" title="여자친구 '교차로' MV" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O06&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10003&amp;CLICK_CONTS_ID=&amp;PROMO_CONTS_TYPE_CODE=&amp;PROMO_CONTS_ID=&amp;PROMO_SEQ=114285&amp;PROMO_DTL_SEQ=3">
											<img width="223" height="148" src="https://cdnimg.melon.co.kr/svc/images/main/imgUrl20200206114255.jpg/melon/quality/80" alt="">
											
											<span class="playtime">
												<strong class="none">재생시간</strong>
												<span class="time">04:56</span>
											</span>
											
											<span class="bg_album_frame"></span>
										</a>
									</dd>
									<dt>
										<a href="https://vod.melon.com/video/detail2.htm?mvId=50215750" title="여자친구 '교차로' MV" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O06&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10003&amp;CLICK_CONTS_ID=&amp;PROMO_CONTS_TYPE_CODE=&amp;PROMO_CONTS_ID=&amp;PROMO_SEQ=114285&amp;PROMO_DTL_SEQ=3">
											<span class="title">여자친구 '교차로' MV</span>
											<span class="ellipsis">선택의 기로에 놓인 소녀들</span>
										</a>
									</dt>
									<dd class="view_no">
										<!-- 140422_수정 -->
										<span><span class="bar">
											
												
												<a href="javascript:goMainMenuLinkPage('N10003','');" title="멜론TV">멜론TV</a>
											
										</span><span class="inquiry">조회 51,589</span></span>
										<!-- //140422_수정 -->
									</dd>
								</dl>
								
							
								
								
								<dl class="ml0">
									<dd>
										<a href="https://www.melon.com/mymusic/dj/mymusicdjplaylistview_inform.htm?plylstSeq=471806326" title="2020 한국대중음악상 후보작 모음" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O06&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10009&amp;CLICK_CONTS_ID=&amp;PROMO_CONTS_TYPE_CODE=&amp;PROMO_CONTS_ID=&amp;PROMO_SEQ=114285&amp;PROMO_DTL_SEQ=4">
											<img width="223" height="148" src="https://cdnimg.melon.co.kr/svc/images/main/imgUrl20200206114300.jpg/melon/quality/80" alt="">
											
											<span class="bg_album_frame"></span>
										</a>
									</dd>
									<dt>
										<a href="https://www.melon.com/mymusic/dj/mymusicdjplaylistview_inform.htm?plylstSeq=471806326" title="2020 한국대중음악상 후보작 모음" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O06&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10009&amp;CLICK_CONTS_ID=&amp;PROMO_CONTS_TYPE_CODE=&amp;PROMO_CONTS_ID=&amp;PROMO_SEQ=114285&amp;PROMO_DTL_SEQ=4">
											<span class="title">2020 한국대중음악상 후보작 모음</span>
											<span class="ellipsis">올해, 영광의 수상자는 누구?</span>
										</a>
									</dt>
									<dd class="view_no">
										<!-- 140422_수정 -->
										<span><span class="bar">
											
												
												<a href="javascript:goMainMenuLinkPage('N10009','');" title="멜론DJ">멜론DJ</a>
											
										</span><span class="inquiry">조회 46,191</span></span>
										<!-- //140422_수정 -->
									</dd>
								</dl>
								
							
								
								
								<dl>
									<dd>
										<a href="https://www.melon.com/mymusic/dj/mymusicdjplaylistview_inform.htm?plylstSeq=471497594" title="알록달록 기분좋은 외힙" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O06&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10009&amp;CLICK_CONTS_ID=&amp;PROMO_CONTS_TYPE_CODE=&amp;PROMO_CONTS_ID=&amp;PROMO_SEQ=114285&amp;PROMO_DTL_SEQ=5">
											<img width="223" height="148" src="https://cdnimg.melon.co.kr/svc/images/main/imgUrl20200206061600.jpg/melon/quality/80" alt="">
											
											<span class="bg_album_frame"></span>
										</a>
									</dd>
									<dt>
										<a href="https://www.melon.com/mymusic/dj/mymusicdjplaylistview_inform.htm?plylstSeq=471497594" title="알록달록 기분좋은 외힙" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O06&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10009&amp;CLICK_CONTS_ID=&amp;PROMO_CONTS_TYPE_CODE=&amp;PROMO_CONTS_ID=&amp;PROMO_SEQ=114285&amp;PROMO_DTL_SEQ=5">
											<span class="title">알록달록 기분좋은 외힙</span>
											<span class="ellipsis">이 구역의 스웨거는 나야, 나!</span>
										</a>
									</dt>
									<dd class="view_no">
										<!-- 140422_수정 -->
										<span><span class="bar">
											
												
												<a href="javascript:goMainMenuLinkPage('N10009','');" title="멜론DJ">멜론DJ</a>
											
										</span><span class="inquiry">조회 42,376</span></span>
										<!-- //140422_수정 -->
									</dd>
								</dl>
								
							
								
								
								<dl>
									<dd class="mov_area">
										<a href="https://vod.melon.com/video/detail2.htm?mvId=50215739" title="다크비 '미안해 엄마' MV" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O06&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10003&amp;CLICK_CONTS_ID=&amp;PROMO_CONTS_TYPE_CODE=&amp;PROMO_CONTS_ID=&amp;PROMO_SEQ=114285&amp;PROMO_DTL_SEQ=6">
											<img width="223" height="148" src="https://cdnimg.melon.co.kr/svc/images/main/imgUrl20200206114310.jpg/melon/quality/80" alt="">
											
											<span class="playtime">
												<strong class="none">재생시간</strong>
												<span class="time">03:27</span>
											</span>
											
											<span class="bg_album_frame"></span>
										</a>
									</dd>
									<dt>
										<a href="https://vod.melon.com/video/detail2.htm?mvId=50215739" title="다크비 '미안해 엄마' MV" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O06&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10003&amp;CLICK_CONTS_ID=&amp;PROMO_CONTS_TYPE_CODE=&amp;PROMO_CONTS_ID=&amp;PROMO_SEQ=114285&amp;PROMO_DTL_SEQ=6">
											<span class="title">다크비 '미안해 엄마' MV</span>
											<span class="ellipsis">귀를 사로잡는 강렬한 데뷔!</span>
										</a>
									</dt>
									<dd class="view_no">
										<!-- 140422_수정 -->
										<span><span class="bar">
											
												
												<a href="javascript:goMainMenuLinkPage('N10003','');" title="멜론TV">멜론TV</a>
											
										</span><span class="inquiry">조회 4,714</span></span>
										<!-- //140422_수정 -->
									</dd>
								</dl>
								</li>
							
						
						</ul>

						
						<div class="wrap_page">
							<div class="page">
								<span class="page_num">
									<span class="none">현재 페이지</span><strong>1</strong>/<span class="none">전체 페이지</span><span>2</span>
								</span>
								<span class="wrap_btn">
									
									<a class="btn btn_pre mlog_without_page_change" title="이전" href="javascript:;" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O06&amp;ACTION_AF_CLICK=S2"><span class="odd_span">이전</span></a>
									<a class="btn btn_next mlog_without_page_change" title="다음" href="javascript:;" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O06&amp;ACTION_AF_CLICK=S2"><span class="odd_span">다음</span></a>
								</span>
							</div>
						</div>
					</div>
					<!-- //많이 봤어요 -->

					<!-- 멜론차트 -->
					<div class="chart">
						<h2><a href="/chart/index.htm" class="title_link mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R01&amp;ACTION_AF_CLICK=V2">멜론 차트</a></h2>
						<div class="wrap_chart_tab">
							<ul>
								<!-- 실시간 차트 -->
								<li class="on nth1">
									<a href="javascript:;" title="실시간 보기" class="d_link tab_link realtime"><span></span></a>
									<span class="none">실시간</span>
									<div class="list_wrap typeRealtime">
										<span class="txt_intro">2020.02.08 <strong>17:00</strong> 기준</span>
										<ul>
											
											<li class="rank_item active">
												<div class="rank_number nth1">
													<span class="rank">1</span><span class="none">위</span>
													
														
														
															<span class="ranking_num static"><span class="num">0</span><span class="icon">순위 동일</span></span>
														
														
														
													
												</div>
												<div class="rank_cntt">
													<div class="thumb">
														
														<a href="javascript:melon.link.goAlbumDetail('10375118');" title="아무노래" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R02&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10375118">
															<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="48" height="48" src="https://cdnimg.melon.co.kr/cm2/album/images/103/75/118/10375118_20200113150502_500.jpg/melon/quality/80/resize/48/optimize" alt="">
															<span class="bg_album_frame"></span>
														</a>
													</div>
													<div class="rank_info">
														<p class="song" data-song-no="32313543">
															
															
															<a href="javascript:melon.play.playSong('10010101',32313543);" class="ellipsis mlog" title="아무노래" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R02&amp;ACTION_AF_CLICK=P1&amp;CLICK_CONTS_TYPE_CODE=N10001&amp;CLICK_CONTS_ID=32313543">아무노래</a>
														</p>
														<div class="artist">
															<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('602056');" title="지코 (ZICO) - 페이지 이동" class="fc_mgray mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R02&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=602056">지코 (ZICO)</a><span class="checkEllipsisRealtimeChart" style="display:none"><a href="javascript:melon.link.goArtistDetail('602056');" title="지코 (ZICO) - 페이지 이동" class="fc_mgray mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R02&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=602056">지코 (ZICO)</a></span></div>
															
														</div>
													</div>
												</div>
											</li>
											
											<li class="rank_item odd">
												<div class="rank_number nth2">
													<span class="rank">2</span><span class="none">위</span>
													
														
														
															<span class="ranking_num static"><span class="num">0</span><span class="icon">순위 동일</span></span>
														
														
														
													
												</div>
												<div class="rank_cntt">
													<div class="thumb">
														
														<a href="javascript:melon.link.goAlbumDetail('10359162');" title="Boyhood" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R02&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10359162">
															<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="48" height="48" src="https://cdnimg.melon.co.kr/cm2/album/images/103/59/162/10359162_500.jpg/melon/quality/80/resize/48/optimize" alt="">
															<span class="bg_album_frame"></span>
														</a>
													</div>
													<div class="rank_info">
														<p class="song" data-song-no="32224272">
															
															
															<a href="javascript:melon.play.playSong('10010101',32224272);" class="ellipsis mlog" title="METEOR" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R02&amp;ACTION_AF_CLICK=P1&amp;CLICK_CONTS_TYPE_CODE=N10001&amp;CLICK_CONTS_ID=32224272">METEOR</a>
														</p>
														<div class="artist">
															<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('774900');" title="창모 (CHANGMO) - 페이지 이동" class="fc_mgray mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R02&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=774900">창모 (CHANGMO)</a><span class="checkEllipsisRealtimeChart" style="display:none"><a href="javascript:melon.link.goArtistDetail('774900');" title="창모 (CHANGMO) - 페이지 이동" class="fc_mgray mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R02&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=774900">창모 (CHANGMO)</a></span></div>
															
														</div>
													</div>
												</div>
											</li>
											
											<li class="rank_item">
												<div class="rank_number nth3">
													<span class="rank">3</span><span class="none">위</span>
													
														
														
															<span class="ranking_num static"><span class="num">0</span><span class="icon">순위 동일</span></span>
														
														
														
													
												</div>
												<div class="rank_cntt">
													<div class="thumb">
														
														<a href="javascript:melon.link.goAlbumDetail('10368053');" title="‘The ReVe Festival’ Finale" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R02&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10368053">
															<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="48" height="48" src="https://cdnimg.melon.co.kr/cm2/album/images/103/68/053/10368053_20191223155246_500.jpg/melon/quality/80/resize/48/optimize" alt="">
															<span class="bg_album_frame"></span>
														</a>
													</div>
													<div class="rank_info">
														<p class="song" data-song-no="32273582">
															
															
															<a href="javascript:melon.play.playSong('10010101',32273582);" class="ellipsis mlog" title="Psycho" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R02&amp;ACTION_AF_CLICK=P1&amp;CLICK_CONTS_TYPE_CODE=N10001&amp;CLICK_CONTS_ID=32273582">Psycho</a>
														</p>
														<div class="artist">
															<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('780066');" title="Red Velvet (레드벨벳) - 페이지 이동" class="fc_mgray mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R02&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=780066">Red Velvet (레드벨벳)</a><span class="checkEllipsisRealtimeChart" style="display:none"><a href="javascript:melon.link.goArtistDetail('780066');" title="Red Velvet (레드벨벳) - 페이지 이동" class="fc_mgray mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R02&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=780066">Red Velvet (레드벨벳)</a></span></div>
															
														</div>
													</div>
												</div>
											</li>
											
											<li class="rank_item odd">
												<div class="rank_number nth4">
													<span class="rank">4</span><span class="none">위</span>
													
														
														
															<span class="ranking_num static"><span class="num">0</span><span class="icon">순위 동일</span></span>
														
														
														
													
												</div>
												<div class="rank_cntt">
													<div class="thumb">
														
														<a href="javascript:melon.link.goAlbumDetail('10374783');" title="사랑의 불시착 OST Part 4" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R02&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10374783">
															<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="48" height="48" src="https://cdnimg.melon.co.kr/cm2/album/images/103/74/783/10374783_20200110170629_500.jpg/melon/quality/80/resize/48/optimize" alt="">
															<span class="bg_album_frame"></span>
														</a>
													</div>
													<div class="rank_info">
														<p class="song" data-song-no="32311870">
															
															
															<a href="javascript:melon.play.playSong('10010101',32311870);" class="ellipsis mlog" title="다시 난, 여기" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R02&amp;ACTION_AF_CLICK=P1&amp;CLICK_CONTS_TYPE_CODE=N10001&amp;CLICK_CONTS_ID=32311870">다시 난, 여기</a>
														</p>
														<div class="artist">
															<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('698776');" title="백예린 - 페이지 이동" class="fc_mgray mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R02&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=698776">백예린</a><span class="checkEllipsisRealtimeChart" style="display:none"><a href="javascript:melon.link.goArtistDetail('698776');" title="백예린 - 페이지 이동" class="fc_mgray mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R02&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=698776">백예린</a></span></div>
															
														</div>
													</div>
												</div>
											</li>
											
											<li class="rank_item">
												<div class="rank_number nth5">
													<span class="rank">5</span><span class="none">위</span>
													
														
														
															<span class="ranking_num static"><span class="num">0</span><span class="icon">순위 동일</span></span>
														
														
														
													
												</div>
												<div class="rank_cntt">
													<div class="thumb">
														
														<a href="javascript:melon.link.goAlbumDetail('10346650');" title="Love poem" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R02&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10346650">
															<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="48" height="48" src="https://cdnimg.melon.co.kr/cm2/album/images/103/46/650/10346650_500.jpg/melon/quality/80/resize/48/optimize" alt="">
															<span class="bg_album_frame"></span>
														</a>
													</div>
													<div class="rank_info">
														<p class="song" data-song-no="32183386">
															
															
															<a href="javascript:melon.play.playSong('10010101',32183386);" class="ellipsis mlog" title="Blueming" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R02&amp;ACTION_AF_CLICK=P1&amp;CLICK_CONTS_TYPE_CODE=N10001&amp;CLICK_CONTS_ID=32183386">Blueming</a>
														</p>
														<div class="artist">
															<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('261143');" title="아이유 - 페이지 이동" class="fc_mgray mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R02&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=261143">아이유</a><span class="checkEllipsisRealtimeChart" style="display:none"><a href="javascript:melon.link.goArtistDetail('261143');" title="아이유 - 페이지 이동" class="fc_mgray mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R02&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=261143">아이유</a></span></div>
															
														</div>
													</div>
												</div>
											</li>
											
											<li class="rank_item odd">
												<div class="rank_number nth6">
													<span class="rank">6</span><span class="none">위</span>
													
														
														
															<span class="ranking_num static"><span class="num">0</span><span class="icon">순위 동일</span></span>
														
														
														
													
												</div>
												<div class="rank_cntt">
													<div class="thumb">
														
														<a href="javascript:melon.link.goAlbumDetail('10348811');" title="늦은 밤 너의 집 앞 골목길에서" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R02&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10348811">
															<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="48" height="48" src="https://cdnimg.melon.co.kr/cm2/album/images/103/48/811/10348811_500.jpg/melon/quality/80/resize/48/optimize" alt="">
															<span class="bg_album_frame"></span>
														</a>
													</div>
													<div class="rank_info">
														<p class="song" data-song-no="32156286">
															
															
															<a href="javascript:melon.play.playSong('10010101',32156286);" class="ellipsis mlog" title="늦은 밤 너의 집 앞 골목길에서" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R02&amp;ACTION_AF_CLICK=P1&amp;CLICK_CONTS_TYPE_CODE=N10001&amp;CLICK_CONTS_ID=32156286">늦은 밤 너의 집 앞 골목길에서</a>
														</p>
														<div class="artist">
															<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('105623');" title="노을 - 페이지 이동" class="fc_mgray mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R02&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=105623">노을</a><span class="checkEllipsisRealtimeChart" style="display:none"><a href="javascript:melon.link.goArtistDetail('105623');" title="노을 - 페이지 이동" class="fc_mgray mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R02&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=105623">노을</a></span></div>
															
														</div>
													</div>
												</div>
											</li>
											
											<li class="rank_item">
												<div class="rank_number nth7">
													<span class="rank">7</span><span class="none">위</span>
													
														
														
															<span class="ranking_num static"><span class="num">0</span><span class="icon">순위 동일</span></span>
														
														
														
													
												</div>
												<div class="rank_cntt">
													<div class="thumb">
														
														<a href="javascript:melon.link.goAlbumDetail('10377346');" title="MAP OF THE SOUL : 7" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R02&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10377346">
															<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="48" height="48" src="https://cdnimg.melon.co.kr/cm2/album/images/103/77/346/10377346_20200117151034_500.jpg/melon/quality/80/resize/48/optimize" alt="">
															<span class="bg_album_frame"></span>
														</a>
													</div>
													<div class="rank_info">
														<p class="song" data-song-no="32323969">
															
															
															<a href="javascript:melon.play.playSong('10010101',32323969);" class="ellipsis mlog" title="Black Swan" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R02&amp;ACTION_AF_CLICK=P1&amp;CLICK_CONTS_TYPE_CODE=N10001&amp;CLICK_CONTS_ID=32323969">Black Swan</a>
														</p>
														<div class="artist">
															<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('672375');" title="방탄소년단 - 페이지 이동" class="fc_mgray mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R02&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=672375">방탄소년단</a><span class="checkEllipsisRealtimeChart" style="display:none"><a href="javascript:melon.link.goArtistDetail('672375');" title="방탄소년단 - 페이지 이동" class="fc_mgray mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R02&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=672375">방탄소년단</a></span></div>
															
														</div>
													</div>
												</div>
											</li>
											
											<li class="rank_item odd">
												<div class="rank_number nth8">
													<span class="rank">8</span><span class="none">위</span>
													
														
														
															<span class="ranking_num static"><span class="num">0</span><span class="icon">순위 동일</span></span>
														
														
														
													
												</div>
												<div class="rank_cntt">
													<div class="thumb">
														
														<a href="javascript:melon.link.goAlbumDetail('10273641');" title="MAP OF THE SOUL : PERSONA" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R02&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10273641">
															<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="48" height="48" src="https://cdnimg.melon.co.kr/cm/album/images/102/73/641/10273641_500.jpg/melon/quality/80/resize/48/optimize" alt="">
															<span class="bg_album_frame"></span>
														</a>
													</div>
													<div class="rank_info">
														<p class="song" data-song-no="31737197">
															
															
															<a href="javascript:melon.play.playSong('10010101',31737197);" class="ellipsis mlog" title="작은 것들을 위한 시 (Boy With Luv) (Feat. Halsey)" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R02&amp;ACTION_AF_CLICK=P1&amp;CLICK_CONTS_TYPE_CODE=N10001&amp;CLICK_CONTS_ID=31737197">작은 것들을 위한 시 (Boy With Luv) (Feat. Halsey)</a>
														</p>
														<div class="artist">
															<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('672375');" title="방탄소년단 - 페이지 이동" class="fc_mgray mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R02&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=672375">방탄소년단</a><span class="checkEllipsisRealtimeChart" style="display:none"><a href="javascript:melon.link.goArtistDetail('672375');" title="방탄소년단 - 페이지 이동" class="fc_mgray mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R02&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=672375">방탄소년단</a></span></div>
															
														</div>
													</div>
												</div>
											</li>
											
											<li class="rank_item">
												<div class="rank_number nth9">
													<span class="rank">9</span><span class="none">위</span>
													
														
														
															<span class="ranking_num static"><span class="num">0</span><span class="icon">순위 동일</span></span>
														
														
														
													
												</div>
												<div class="rank_cntt">
													<div class="thumb">
														
														<a href="javascript:melon.link.goAlbumDetail('10351886');" title="reality in BLACK" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R02&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10351886">
															<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="48" height="48" src="https://cdnimg.melon.co.kr/cm2/album/images/103/51/886/10351886_500.jpg/melon/quality/80/resize/48/optimize" alt="">
															<span class="bg_album_frame"></span>
														</a>
													</div>
													<div class="rank_info">
														<p class="song" data-song-no="32175937">
															
															
															<a href="javascript:melon.play.playSong('10010101',32175937);" class="ellipsis mlog" title="HIP" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R02&amp;ACTION_AF_CLICK=P1&amp;CLICK_CONTS_TYPE_CODE=N10001&amp;CLICK_CONTS_ID=32175937">HIP</a>
														</p>
														<div class="artist">
															<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('750053');" title="마마무(Mamamoo) - 페이지 이동" class="fc_mgray mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R02&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=750053">마마무(Mamamoo)</a><span class="checkEllipsisRealtimeChart" style="display:none"><a href="javascript:melon.link.goArtistDetail('750053');" title="마마무(Mamamoo) - 페이지 이동" class="fc_mgray mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R02&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=750053">마마무(Mamamoo)</a></span></div>
															
														</div>
													</div>
												</div>
											</li>
											
											<li class="rank_item odd">
												<div class="rank_number nth10">
													<span class="rank">10</span><span class="none">위</span>
													
														
														
															<span class="ranking_num static"><span class="num">0</span><span class="icon">순위 동일</span></span>
														
														
														
													
												</div>
												<div class="rank_cntt">
													<div class="thumb">
														
														<a href="javascript:melon.link.goAlbumDetail('10320500');" title="멜로가 체질 OST Part 3" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R02&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10320500">
															<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="48" height="48" src="https://cdnimg.melon.co.kr/cm2/album/images/103/20/500/10320500_500.jpg/melon/quality/80/resize/48/optimize" alt="">
															<span class="bg_album_frame"></span>
														</a>
													</div>
													<div class="rank_info">
														<p class="song" data-song-no="32003395">
															
															
															<a href="javascript:melon.play.playSong('10010101',32003395);" class="ellipsis mlog" title="흔들리는 꽃들 속에서 네 샴푸향이 느껴진거야" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R02&amp;ACTION_AF_CLICK=P1&amp;CLICK_CONTS_TYPE_CODE=N10001&amp;CLICK_CONTS_ID=32003395">흔들리는 꽃들 속에서 네 샴푸향이 느껴진거야</a>
														</p>
														<div class="artist">
															<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('648551');" title="장범준 - 페이지 이동" class="fc_mgray mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R02&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=648551">장범준</a><span class="checkEllipsisRealtimeChart" style="display:none"><a href="javascript:melon.link.goArtistDetail('648551');" title="장범준 - 페이지 이동" class="fc_mgray mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R02&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=648551">장범준</a></span></div>
															
														</div>
													</div>
												</div>
											</li>
											

											</ul>
										<div class="chart_btn_area">

											
											<button type="button" title="TOP 10 재생" onclick="playTop10('typeRealtime');" class="btn_base play d_listen mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R02&amp;ACTION_AF_CLICK=P3"><span class="odd_span"><span class="even_span">TOP10 듣기</span></span></button>
											<div class="all_view">
												<a href="/chart/index.htm" title="멜론차트 더보기" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R02&amp;ACTION_AF_CLICK=V2"><span>더보기<span></span></span></a>
											</div>
										</div>
									</div>
								</li>
								<!-- //실시간 차트 -->
								<!-- POP 차트 -->
								<li class="nth2">
									<a href="javascript:;" title="POP 보기" class="d_link tab_link pop"><span class=""></span></a>
									<span class="none">POP</span>
									<div class="list_wrap typePop">
										<span class="txt_intro">2020.02.07 기준</span>
										<ul>
											
											<li class="rank_item active">
												<div class="rank_number nth1">
													<span class="rank">1</span><span class="none">위</span>
													
														
														
															<span class="ranking_num static"><span class="num">0</span><span class="icon">순위 동일</span></span>
														
														
														
													
												</div>
												<div class="rank_cntt">
													<div class="thumb">
														
														<a href="javascript:melon.link.goAlbumDetail('10137250');" title="Speak Your Mind (Deluxe)" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10137250">
															<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="48" height="48" src="https://cdnimg.melon.co.kr/cm/album/images/101/37/250/10137250_500.jpg/melon/quality/80/resize/48/optimize" alt="">
															<span class="bg_album_frame"></span>
														</a>
													</div>
													<div class="rank_info">
														<p class="song" data-song-no="31029291">
															
															
															<a href="javascript:melon.play.playSong('10010101',31029291);" class="ellipsis mlog" title="2002" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=P1&amp;CLICK_CONTS_TYPE_CODE=N10001&amp;CLICK_CONTS_ID=31029291">2002</a>
														</p>
														<div class="artist">
															<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('870307');" title="Anne-Marie - 페이지 이동" class="fc_mgray mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=870307">Anne-Marie</a><span class="checkEllipsisPopChart" style="display:none"><a href="javascript:melon.link.goArtistDetail('870307');" title="Anne-Marie - 페이지 이동" class="fc_mgray mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=870307">Anne-Marie</a></span></div>
															
														</div>
													</div>
												</div>
											</li>
											
											<li class="rank_item odd">
												<div class="rank_number nth2">
													<span class="rank">2</span><span class="none">위</span>
													
														
														
															<span class="ranking_num static"><span class="num">0</span><span class="icon">순위 동일</span></span>
														
														
														
													
												</div>
												<div class="rank_cntt">
													<div class="thumb">
														
														<a href="javascript:melon.link.goAlbumDetail('10267565');" title="WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10267565">
															<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="48" height="48" src="https://cdnimg.melon.co.kr/cm/album/images/102/67/565/10267565_500.jpg/melon/quality/80/resize/48/optimize" alt="">
															<span class="bg_album_frame"></span>
														</a>
													</div>
													<div class="rank_info">
														<p class="song" data-song-no="31701428">
															
															
															<a href="javascript:melon.play.playSong('10010101',31701428);" class="ellipsis mlog" title="bad guy" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=P1&amp;CLICK_CONTS_TYPE_CODE=N10001&amp;CLICK_CONTS_ID=31701428">bad guy</a>
														</p>
														<div class="artist">
															<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('1239008');" title="Billie Eilish - 페이지 이동" class="fc_mgray mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=1239008">Billie Eilish</a><span class="checkEllipsisPopChart" style="display:none"><a href="javascript:melon.link.goArtistDetail('1239008');" title="Billie Eilish - 페이지 이동" class="fc_mgray mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=1239008">Billie Eilish</a></span></div>
															
														</div>
													</div>
												</div>
											</li>
											
											<li class="rank_item">
												<div class="rank_number nth3">
													<span class="rank">3</span><span class="none">위</span>
													
														
														
															<span class="ranking_num static"><span class="num">0</span><span class="icon">순위 동일</span></span>
														
														
														
													
												</div>
												<div class="rank_cntt">
													<div class="thumb">
														
														<a href="javascript:melon.link.goAlbumDetail('10352535');" title="Frozen 2 (Original Motion Picture Soundtrack/Deluxe Edition)" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10352535">
															<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="48" height="48" src="https://cdnimg.melon.co.kr/cm2/album/images/103/52/535/10352535_500.jpg/melon/quality/80/resize/48/optimize" alt="">
															<span class="bg_album_frame"></span>
														</a>
													</div>
													<div class="rank_info">
														<p class="song" data-song-no="32180585">
															
															
															<a href="javascript:melon.play.playSong('10010101',32180585);" class="ellipsis mlog" title="Into the Unknown (From &quot;Frozen 2&quot;/Soundtrack Version)" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=P1&amp;CLICK_CONTS_TYPE_CODE=N10001&amp;CLICK_CONTS_ID=32180585">Into the Unknown (From "Frozen 2"/Soundtrack Version)</a>
														</p>
														<div class="artist">
															<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('232538');" title="Idina Menzel - 페이지 이동" class="fc_mgray mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=232538">Idina Menzel</a>, <a href="javascript:melon.link.goArtistDetail('838137');" title="Aurora - 페이지 이동" class="fc_mgray mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=838137">Aurora</a><span class="checkEllipsisPopChart" style="display:none"><a href="javascript:melon.link.goArtistDetail('232538');" title="Idina Menzel - 페이지 이동" class="fc_mgray mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=232538">Idina Menzel</a>, <a href="javascript:melon.link.goArtistDetail('838137');" title="Aurora - 페이지 이동" class="fc_mgray mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=838137">Aurora</a></span></div>
															
															<div class="wrap_atist pop_chart_artist" style="display:none">
																<button type="button" title="아티스트 더보기" class="btn btn_more" data-control="dropdown"><span class="odd_span">아티스트명 더보기</span></button>
																<!-- [DP] 아티스트 더보기 레이어  -->
																<div class="l_popup small" style="display:none; width:168px;">
																	<div class="l_cntt">
																		<ul class="list_bullet">
																			
																			
																			<li><a href="javascript:melon.link.goArtistDetail('232538');" title="Idina Menzel" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=232538">Idina Menzel</a></li>
																			
																			
																			<li><a href="javascript:melon.link.goArtistDetail('838137');" title="Aurora" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=838137">Aurora</a></li>
																			
																		</ul>
																	</div>
																	<button type="button" class="btn_close"><span class="odd_span">닫기</span></button>
																	<span class="shadow"></span>
																	<span class="bullet_vertical"></span>
																</div>
																<!-- //[DP] 아티스트 더보기 레이어  -->
															</div>
															
														</div>
													</div>
												</div>
											</li>
											
											<li class="rank_item odd">
												<div class="rank_number nth4">
													<span class="rank">4</span><span class="none">위</span>
													
														
															<span class="ranking_num new"><span class="icon">새진입</span></span>
														
														
														
														
													
												</div>
												<div class="rank_cntt">
													<div class="thumb">
														
														<a href="javascript:melon.link.goAlbumDetail('10385597');" title="Birthday" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10385597">
															<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="48" height="48" src="https://cdnimg.melon.co.kr/cm2/album/images/103/85/597/10385597_20200207104940_500.jpg/melon/quality/80/resize/48/optimize" alt="">
															<span class="bg_album_frame"></span>
														</a>
													</div>
													<div class="rank_info">
														<p class="song" data-song-no="32362644">
															
															
															<a href="javascript:melon.play.playSong('10010101',32362644);" class="ellipsis mlog" title="Birthday" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=P1&amp;CLICK_CONTS_TYPE_CODE=N10001&amp;CLICK_CONTS_ID=32362644">Birthday</a>
														</p>
														<div class="artist">
															<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('870307');" title="Anne-Marie - 페이지 이동" class="fc_mgray mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=870307">Anne-Marie</a><span class="checkEllipsisPopChart" style="display:none"><a href="javascript:melon.link.goArtistDetail('870307');" title="Anne-Marie - 페이지 이동" class="fc_mgray mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=870307">Anne-Marie</a></span></div>
															
														</div>
													</div>
												</div>
											</li>
											
											<li class="rank_item">
												<div class="rank_number nth5">
													<span class="rank">5</span><span class="none">위</span>
													
														
														
														
															<span class="ranking_num down"><span class="num">1</span><span class="icon">단계 하락</span></span>
														
														
													
												</div>
												<div class="rank_cntt">
													<div class="thumb">
														
														<a href="javascript:melon.link.goAlbumDetail('10298832');" title="Señorita" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10298832">
															<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="48" height="48" src="https://cdnimg.melon.co.kr/cm/album/images/102/98/832/10298832_500.jpg/melon/quality/80/resize/48/optimize" alt="">
															<span class="bg_album_frame"></span>
														</a>
													</div>
													<div class="rank_info">
														<p class="song" data-song-no="31877297">
															
															
															<a href="javascript:melon.play.playSong('10010101',31877297);" class="ellipsis mlog" title="Señorita" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=P1&amp;CLICK_CONTS_TYPE_CODE=N10001&amp;CLICK_CONTS_ID=31877297">Señorita</a>
														</p>
														<div class="artist">
															<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('776533');" title="Shawn Mendes - 페이지 이동" class="fc_mgray mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=776533">Shawn Mendes</a>, <a href="javascript:melon.link.goArtistDetail('928017');" title="Camila Cabello - 페이지 이동" class="fc_mgray mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=928017">Camila Cabello</a><span class="checkEllipsisPopChart" style="display:none"><a href="javascript:melon.link.goArtistDetail('776533');" title="Shawn Mendes - 페이지 이동" class="fc_mgray mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=776533">Shawn Mendes</a>, <a href="javascript:melon.link.goArtistDetail('928017');" title="Camila Cabello - 페이지 이동" class="fc_mgray mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=928017">Camila Cabello</a></span></div>
															
															<div class="wrap_atist pop_chart_artist" style="display:none">
																<button type="button" title="아티스트 더보기" class="btn btn_more" data-control="dropdown"><span class="odd_span">아티스트명 더보기</span></button>
																<!-- [DP] 아티스트 더보기 레이어  -->
																<div class="l_popup small" style="display:none; width:168px;">
																	<div class="l_cntt">
																		<ul class="list_bullet">
																			
																			
																			<li><a href="javascript:melon.link.goArtistDetail('776533');" title="Shawn Mendes" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=776533">Shawn Mendes</a></li>
																			
																			
																			<li><a href="javascript:melon.link.goArtistDetail('928017');" title="Camila Cabello" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=928017">Camila Cabello</a></li>
																			
																		</ul>
																	</div>
																	<button type="button" class="btn_close"><span class="odd_span">닫기</span></button>
																	<span class="shadow"></span>
																	<span class="bullet_vertical"></span>
																</div>
																<!-- //[DP] 아티스트 더보기 레이어  -->
															</div>
															
														</div>
													</div>
												</div>
											</li>
											
											<li class="rank_item odd">
												<div class="rank_number nth6">
													<span class="rank">6</span><span class="none">위</span>
													
														
														
														
															<span class="ranking_num down"><span class="num">1</span><span class="icon">단계 하락</span></span>
														
														
													
												</div>
												<div class="rank_cntt">
													<div class="thumb">
														
														<a href="javascript:melon.link.goAlbumDetail('10209752');" title="I met you when I was 18. (the playlist)" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10209752">
															<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="48" height="48" src="https://cdnimg.melon.co.kr/cm/album/images/102/09/752/10209752_500.jpg/melon/quality/80/resize/48/optimize" alt="">
															<span class="bg_album_frame"></span>
														</a>
													</div>
													<div class="rank_info">
														<p class="song" data-song-no="31341518">
															
															
															<a href="javascript:melon.play.playSong('10010101',31341518);" class="ellipsis mlog" title="Paris In The Rain" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=P1&amp;CLICK_CONTS_TYPE_CODE=N10001&amp;CLICK_CONTS_ID=31341518">Paris In The Rain</a>
														</p>
														<div class="artist">
															<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('1956543');" title="Lauv - 페이지 이동" class="fc_mgray mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=1956543">Lauv</a><span class="checkEllipsisPopChart" style="display:none"><a href="javascript:melon.link.goArtistDetail('1956543');" title="Lauv - 페이지 이동" class="fc_mgray mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=1956543">Lauv</a></span></div>
															
														</div>
													</div>
												</div>
											</li>
											
											<li class="rank_item">
												<div class="rank_number nth7">
													<span class="rank">7</span><span class="none">위</span>
													
														
														
														
															<span class="ranking_num down"><span class="num">1</span><span class="icon">단계 하락</span></span>
														
														
													
												</div>
												<div class="rank_cntt">
													<div class="thumb">
														
														<a href="javascript:melon.link.goAlbumDetail('10252905');" title="summer," class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10252905">
															<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="48" height="48" src="https://cdnimg.melon.co.kr/cm/album/images/102/52/905/10252905_500.jpg/melon/quality/80/resize/48/optimize" alt="">
															<span class="bg_album_frame"></span>
														</a>
													</div>
													<div class="rank_info">
														<p class="song" data-song-no="31621518">
															
															
															<a href="javascript:melon.play.playSong('10010101',31621518);" class="ellipsis mlog" title="comethru" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=P1&amp;CLICK_CONTS_TYPE_CODE=N10001&amp;CLICK_CONTS_ID=31621518">comethru</a>
														</p>
														<div class="artist">
															<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('1758307');" title="Jeremy Zucker - 페이지 이동" class="fc_mgray mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=1758307">Jeremy Zucker</a><span class="checkEllipsisPopChart" style="display:none"><a href="javascript:melon.link.goArtistDetail('1758307');" title="Jeremy Zucker - 페이지 이동" class="fc_mgray mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=1758307">Jeremy Zucker</a></span></div>
															
														</div>
													</div>
												</div>
											</li>
											
											<li class="rank_item odd">
												<div class="rank_number nth8">
													<span class="rank">8</span><span class="none">위</span>
													
														
														
														
															<span class="ranking_num down"><span class="num">1</span><span class="icon">단계 하락</span></span>
														
														
													
												</div>
												<div class="rank_cntt">
													<div class="thumb">
														
														<a href="javascript:melon.link.goAlbumDetail('10335107');" title="Know Me Too Well" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10335107">
															<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="48" height="48" src="https://cdnimg.melon.co.kr/cm2/album/images/103/35/107/10335107_500.jpg/melon/quality/80/resize/48/optimize" alt="">
															<span class="bg_album_frame"></span>
														</a>
													</div>
													<div class="rank_info">
														<p class="song" data-song-no="32077651">
															
															
															<a href="javascript:melon.play.playSong('10010101',32077651);" class="ellipsis mlog" title="Know Me Too Well" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=P1&amp;CLICK_CONTS_TYPE_CODE=N10001&amp;CLICK_CONTS_ID=32077651">Know Me Too Well</a>
														</p>
														<div class="artist">
															<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('1705084');" title="New Hope Club - 페이지 이동" class="fc_mgray mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=1705084">New Hope Club</a>, <a href="javascript:melon.link.goArtistDetail('202306');" title="Danna Paola - 페이지 이동" class="fc_mgray mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=202306">Danna Paola</a><span class="checkEllipsisPopChart" style="display:none"><a href="javascript:melon.link.goArtistDetail('1705084');" title="New Hope Club - 페이지 이동" class="fc_mgray mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=1705084">New Hope Club</a>, <a href="javascript:melon.link.goArtistDetail('202306');" title="Danna Paola - 페이지 이동" class="fc_mgray mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=202306">Danna Paola</a></span></div>
															
															<div class="wrap_atist pop_chart_artist" style="display:none">
																<button type="button" title="아티스트 더보기" class="btn btn_more" data-control="dropdown"><span class="odd_span">아티스트명 더보기</span></button>
																<!-- [DP] 아티스트 더보기 레이어  -->
																<div class="l_popup small" style="display:none; width:168px;">
																	<div class="l_cntt">
																		<ul class="list_bullet">
																			
																			
																			<li><a href="javascript:melon.link.goArtistDetail('1705084');" title="New Hope Club" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=1705084">New Hope Club</a></li>
																			
																			
																			<li><a href="javascript:melon.link.goArtistDetail('202306');" title="Danna Paola" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=202306">Danna Paola</a></li>
																			
																		</ul>
																	</div>
																	<button type="button" class="btn_close"><span class="odd_span">닫기</span></button>
																	<span class="shadow"></span>
																	<span class="bullet_vertical"></span>
																</div>
																<!-- //[DP] 아티스트 더보기 레이어  -->
															</div>
															
														</div>
													</div>
												</div>
											</li>
											
											<li class="rank_item">
												<div class="rank_number nth9">
													<span class="rank">9</span><span class="none">위</span>
													
														
														
														
															<span class="ranking_num down"><span class="num">1</span><span class="icon">단계 하락</span></span>
														
														
													
												</div>
												<div class="rank_cntt">
													<div class="thumb">
														
														<a href="javascript:melon.link.goAlbumDetail('10352538');" title="ROXANNE" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10352538">
															<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="48" height="48" src="https://cdnimg.melon.co.kr/cm2/album/images/103/52/538/10352538_500.jpg/melon/quality/80/resize/48/optimize" alt="">
															<span class="bg_album_frame"></span>
														</a>
													</div>
													<div class="rank_info">
														<p class="song" data-song-no="32180635">
															
															
															<a href="javascript:melon.play.playSong('10010101',32180635);" class="ellipsis mlog" title="ROXANNE" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=P1&amp;CLICK_CONTS_TYPE_CODE=N10001&amp;CLICK_CONTS_ID=32180635">ROXANNE</a>
														</p>
														<div class="artist">
															<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('2754967');" title="Arizona Zervas - 페이지 이동" class="fc_mgray mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=2754967">Arizona Zervas</a><span class="checkEllipsisPopChart" style="display:none"><a href="javascript:melon.link.goArtistDetail('2754967');" title="Arizona Zervas - 페이지 이동" class="fc_mgray mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=2754967">Arizona Zervas</a></span></div>
															
														</div>
													</div>
												</div>
											</li>
											
											<li class="rank_item odd">
												<div class="rank_number nth10">
													<span class="rank">10</span><span class="none">위</span>
													
														
														
														
															<span class="ranking_num down"><span class="num">1</span><span class="icon">단계 하락</span></span>
														
														
													
												</div>
												<div class="rank_cntt">
													<div class="thumb">
														
														<a href="javascript:melon.link.goAlbumDetail('10352535');" title="Frozen 2 (Original Motion Picture Soundtrack/Deluxe Edition)" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10002&amp;CLICK_CONTS_ID=10352535">
															<img onerror="WEBPOCIMG.defaultAlbumImg(this);" width="48" height="48" src="https://cdnimg.melon.co.kr/cm2/album/images/103/52/535/10352535_500.jpg/melon/quality/80/resize/48/optimize" alt="">
															<span class="bg_album_frame"></span>
														</a>
													</div>
													<div class="rank_info">
														<p class="song" data-song-no="32180594">
															
															
															<a href="javascript:melon.play.playSong('10010101',32180594);" class="ellipsis mlog" title="Show Yourself (From &quot;Frozen 2&quot;/Soundtrack Version)" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=P1&amp;CLICK_CONTS_TYPE_CODE=N10001&amp;CLICK_CONTS_ID=32180594">Show Yourself (From "Frozen 2"/Soundtrack Version)</a>
														</p>
														<div class="artist">
															<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('232538');" title="Idina Menzel - 페이지 이동" class="fc_mgray mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=232538">Idina Menzel</a>, <a href="javascript:melon.link.goArtistDetail('230593');" title="Evan Rachel Wood - 페이지 이동" class="fc_mgray mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=230593">Evan Rachel Wood</a><span class="checkEllipsisPopChart" style="display:none"><a href="javascript:melon.link.goArtistDetail('232538');" title="Idina Menzel - 페이지 이동" class="fc_mgray mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=232538">Idina Menzel</a>, <a href="javascript:melon.link.goArtistDetail('230593');" title="Evan Rachel Wood - 페이지 이동" class="fc_mgray mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=230593">Evan Rachel Wood</a></span></div>
															
															<div class="wrap_atist pop_chart_artist" style="display:none">
																<button type="button" title="아티스트 더보기" class="btn btn_more" data-control="dropdown"><span class="odd_span">아티스트명 더보기</span></button>
																<!-- [DP] 아티스트 더보기 레이어  -->
																<div class="l_popup small" style="display:none; width:168px;">
																	<div class="l_cntt">
																		<ul class="list_bullet">
																			
																			
																			<li><a href="javascript:melon.link.goArtistDetail('232538');" title="Idina Menzel" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=232538">Idina Menzel</a></li>
																			
																			
																			<li><a href="javascript:melon.link.goArtistDetail('230593');" title="Evan Rachel Wood" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=230593">Evan Rachel Wood</a></li>
																			
																		</ul>
																	</div>
																	<button type="button" class="btn_close"><span class="odd_span">닫기</span></button>
																	<span class="shadow"></span>
																	<span class="bullet_vertical"></span>
																</div>
																<!-- //[DP] 아티스트 더보기 레이어  -->
															</div>
															
														</div>
													</div>
												</div>
											</li>
											

										</ul>
										<div class="chart_btn_area">

											
											<button type="button" title="TOP 10 재생" onclick="playTop10('typePop');" class="btn_base play d_listen mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=P3"><span class="odd_span"><span class="even_span">TOP10 듣기</span></span></button>
											<div class="all_view">
												<a href="/chart/day/index.htm?classCd=AB0000" title="멜론차트 더보기" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R04&amp;ACTION_AF_CLICK=V2"><span>더보기<span></span></span></a>
											</div>
										</div>
									</div>
								</li>
								<!-- //POP 차트 -->
								<!-- 아티스트 차트 -->
								<li class="nth3">
									<a href="javascript:;" title="아티스트 보기" class="d_link tab_link artist"><span class=""></span></a>
									<span class="none">아티스트</span>
									<div class="list_wrap typeArtist">
										<span class="txt_intro">2020.02.07 기준</span>
										<ul class="d_artist_list">
											
											
											<li class="rank_item active">
												<div class="rank_number nth1">
													<span class="rank">1</span><span class="none">위</span>
													
														
														
															<span class="ranking_num static"><span class="num">0</span><span class="icon">순위 동일</span></span>
														
														
														
													
												</div>
												<div class="rank_cntt">
													
													<div class="thumb">
														<a href="javascript:melon.link.goArtistDetail('672375');" title="방탄소년단" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R03&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=672375">
															<img onerror="WEBPOCIMG.defaultArtistImg(this);" width="48" height="48" src="https://cdnimg.melon.co.kr/cm/artistcrop/images/006/72/375/672375_500.jpg/melon/quality/80/resize/48/optimize" alt="">
															<span class="bg_album_frame"></span>
														</a>
													</div>
													<div class="rank_info" data-arist-no="672375">
														<div class="artist">
															<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('672375');" title="방탄소년단" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R03&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=672375">방탄소년단</a></div>
														</div>
													</div>
												</div>
											</li>
											
											
											<li class="rank_item odd">
												<div class="rank_number nth2">
													<span class="rank">2</span><span class="none">위</span>
													
														
														
															<span class="ranking_num static"><span class="num">0</span><span class="icon">순위 동일</span></span>
														
														
														
													
												</div>
												<div class="rank_cntt">
													
													<div class="thumb">
														<a href="javascript:melon.link.goArtistDetail('261143');" title="아이유" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R03&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=261143">
															<img onerror="WEBPOCIMG.defaultArtistImg(this);" width="48" height="48" src="https://cdnimg.melon.co.kr/cm2/artistcrop/images/002/61/143/261143_500.jpg/melon/quality/80/resize/48/optimize" alt="">
															<span class="bg_album_frame"></span>
														</a>
													</div>
													<div class="rank_info" data-arist-no="261143">
														<div class="artist">
															<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('261143');" title="아이유" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R03&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=261143">아이유</a></div>
														</div>
													</div>
												</div>
											</li>
											
											
											<li class="rank_item">
												<div class="rank_number nth3">
													<span class="rank">3</span><span class="none">위</span>
													
														
														
															<span class="ranking_num static"><span class="num">0</span><span class="icon">순위 동일</span></span>
														
														
														
													
												</div>
												<div class="rank_cntt">
													
													<div class="thumb">
														<a href="javascript:melon.link.goArtistDetail('895741');" title="iKON" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R03&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=895741">
															<img onerror="WEBPOCIMG.defaultArtistImg(this);" width="48" height="48" src="https://cdnimg.melon.co.kr/cm2/artistcrop/images/008/95/741/895741_20200206175843_500.jpg/melon/quality/80/resize/48/optimize" alt="">
															<span class="bg_album_frame"></span>
														</a>
													</div>
													<div class="rank_info" data-arist-no="895741">
														<div class="artist">
															<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('895741');" title="iKON" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R03&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=895741">iKON</a></div>
														</div>
													</div>
												</div>
											</li>
											
											
											<li class="rank_item odd">
												<div class="rank_number nth4">
													<span class="rank">4</span><span class="none">위</span>
													
														
														
														
														
															<span class="ranking_num up"><span class="num">1</span><span class="icon">단계 상승</span></span>
														
													
												</div>
												<div class="rank_cntt">
													
													<div class="thumb">
														<a href="javascript:melon.link.goArtistDetail('602056');" title="지코 (ZICO)" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R03&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=602056">
															<img onerror="WEBPOCIMG.defaultArtistImg(this);" width="48" height="48" src="https://cdnimg.melon.co.kr/cm2/artistcrop/images/006/02/056/602056_20200113151413_500.jpg/melon/quality/80/resize/48/optimize" alt="">
															<span class="bg_album_frame"></span>
														</a>
													</div>
													<div class="rank_info" data-arist-no="602056">
														<div class="artist">
															<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('602056');" title="지코 (ZICO)" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R03&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=602056">지코 (ZICO)</a></div>
														</div>
													</div>
												</div>
											</li>
											
											
											<li class="rank_item">
												<div class="rank_number nth5">
													<span class="rank">5</span><span class="none">위</span>
													
														
														
														
															<span class="ranking_num down"><span class="num">1</span><span class="icon">단계 하락</span></span>
														
														
													
												</div>
												<div class="rank_cntt">
													
													<div class="thumb">
														<a href="javascript:melon.link.goArtistDetail('828478');" title="여자친구 (GFRIEND)" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R03&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=828478">
															<img onerror="WEBPOCIMG.defaultArtistImg(this);" width="48" height="48" src="https://cdnimg.melon.co.kr/cm2/artistcrop/images/008/28/478/828478_20200203155015_500.jpg/melon/quality/80/resize/48/optimize" alt="">
															<span class="bg_album_frame"></span>
														</a>
													</div>
													<div class="rank_info" data-arist-no="828478">
														<div class="artist">
															<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('828478');" title="여자친구 (GFRIEND)" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R03&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=828478">여자친구 (GFRIEND)</a></div>
														</div>
													</div>
												</div>
											</li>
											
											
											<li class="rank_item odd">
												<div class="rank_number nth6">
													<span class="rank">6</span><span class="none">위</span>
													
														
														
															<span class="ranking_num static"><span class="num">0</span><span class="icon">순위 동일</span></span>
														
														
														
													
												</div>
												<div class="rank_cntt">
													
													<div class="thumb">
														<a href="javascript:melon.link.goArtistDetail('774900');" title="창모 (CHANGMO)" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R03&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=774900">
															<img onerror="WEBPOCIMG.defaultArtistImg(this);" width="48" height="48" src="https://cdnimg.melon.co.kr/cm/artistcrop/images/007/74/900/774900_500.jpg/melon/quality/80/resize/48/optimize" alt="">
															<span class="bg_album_frame"></span>
														</a>
													</div>
													<div class="rank_info" data-arist-no="774900">
														<div class="artist">
															<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('774900');" title="창모 (CHANGMO)" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R03&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=774900">창모 (CHANGMO)</a></div>
														</div>
													</div>
												</div>
											</li>
											
											
											<li class="rank_item">
												<div class="rank_number nth7">
													<span class="rank">7</span><span class="none">위</span>
													
														
														
														
														
															<span class="ranking_num up"><span class="num">2</span><span class="icon">단계 상승</span></span>
														
													
												</div>
												<div class="rank_cntt">
													
													<div class="thumb">
														<a href="javascript:melon.link.goArtistDetail('780066');" title="Red Velvet (레드벨벳)" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R03&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=780066">
															<img onerror="WEBPOCIMG.defaultArtistImg(this);" width="48" height="48" src="https://cdnimg.melon.co.kr/cm2/artistcrop/images/007/80/066/780066_20191223110222_500.jpg/melon/quality/80/resize/48/optimize" alt="">
															<span class="bg_album_frame"></span>
														</a>
													</div>
													<div class="rank_info" data-arist-no="780066">
														<div class="artist">
															<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('780066');" title="Red Velvet (레드벨벳)" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R03&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=780066">Red Velvet (레드벨벳)</a></div>
														</div>
													</div>
												</div>
											</li>
											
											
											<li class="rank_item odd">
												<div class="rank_number nth8">
													<span class="rank">8</span><span class="none">위</span>
													
														
														
															<span class="ranking_num static"><span class="num">0</span><span class="icon">순위 동일</span></span>
														
														
														
													
												</div>
												<div class="rank_cntt">
													
													<div class="thumb">
														<a href="javascript:melon.link.goArtistDetail('1701869');" title="송가인" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R03&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=1701869">
															<img onerror="WEBPOCIMG.defaultArtistImg(this);" width="48" height="48" src="https://cdnimg.melon.co.kr/cm2/artistcrop/images/017/01/869/1701869_500.jpg/melon/quality/80/resize/48/optimize" alt="">
															<span class="bg_album_frame"></span>
														</a>
													</div>
													<div class="rank_info" data-arist-no="1701869">
														<div class="artist">
															<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('1701869');" title="송가인" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R03&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=1701869">송가인</a></div>
														</div>
													</div>
												</div>
											</li>
											
											
											<li class="rank_item">
												<div class="rank_number nth9">
													<span class="rank">9</span><span class="none">위</span>
													
														
														
														
														
															<span class="ranking_num up"><span class="num">1</span><span class="icon">단계 상승</span></span>
														
													
												</div>
												<div class="rank_cntt">
													
													<div class="thumb">
														<a href="javascript:melon.link.goArtistDetail('698776');" title="백예린" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R03&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=698776">
															<img onerror="WEBPOCIMG.defaultArtistImg(this);" width="48" height="48" src="https://cdnimg.melon.co.kr/cm2/artistcrop/images/006/98/776/698776_20191210134953_500.jpg/melon/quality/80/resize/48/optimize" alt="">
															<span class="bg_album_frame"></span>
														</a>
													</div>
													<div class="rank_info" data-arist-no="698776">
														<div class="artist">
															<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('698776');" title="백예린" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R03&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=698776">백예린</a></div>
														</div>
													</div>
												</div>
											</li>
											
											
											<li class="rank_item odd">
												<div class="rank_number nth10">
													<span class="rank">10</span><span class="none">위</span>
													
														
														
														
														
															<span class="ranking_num up"><span class="num">1</span><span class="icon">단계 상승</span></span>
														
													
												</div>
												<div class="rank_cntt">
													
													<div class="thumb">
														<a href="javascript:melon.link.goArtistDetail('236797');" title="태연 (TAEYEON)" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R03&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=236797">
															<img onerror="WEBPOCIMG.defaultArtistImg(this);" width="48" height="48" src="https://cdnimg.melon.co.kr/cm2/artistcrop/images/002/36/797/236797_20200114114453_500.jpg/melon/quality/80/resize/48/optimize" alt="">
															<span class="bg_album_frame"></span>
														</a>
													</div>
													<div class="rank_info" data-arist-no="236797">
														<div class="artist">
															<div class="ellipsis"><a href="javascript:melon.link.goArtistDetail('236797');" title="태연 (TAEYEON)" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R03&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=236797">태연 (TAEYEON)</a></div>
														</div>
													</div>
												</div>
											</li>
											
										</ul>
										<div class="chart_btn_area">
											<div class="all_view">
												
												<a href="/artistplus/artistchart/index.htm" title="멜론차트 더보기" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=R03&amp;ACTION_AF_CLICK=V2"><span>더보기<span></span></span></a>
											</div>
										</div>
									</div>
								</li>
								<!-- //아티스트 차트 -->
							</ul>
						</div>
					</div>
					<!-- //멜론차트 -->

					<!-- 새로 나왔어요 -->
					<div class="new_conts">
						
						<h2><a href="/artistplus/todayupdate/index.htm" title="새로 나왔어요" class="title_link mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O05&amp;ACTION_AF_CLICK=V2">새로 나왔어요</a><span class="txt_intro"><strong>68</strong>개의 아티스트 컨텐츠가 업로드 되었습니다.</span></h2>
						<div class="section_na">
							<ul class="refresh">
								<li class="bg_none nth1 on"><a href="/main/new_update_list_summcnt.htm" title="인기순으로 보기" class="mlog_without_page_change" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O05&amp;ACTION_AF_CLICK=V4">인기순</a></li>
								<li class="nth2"><a href="/main/new_update_list_regdate.htm" title="최신순으로 보기" class="mlog_without_page_change" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O05&amp;ACTION_AF_CLICK=V3">최신순</a></li>
							</ul>
						</div>
						<div class="list_wrap crop_type">
							<ul>
								
								
								<li class="list_wrap ml0">
									<div class="thumb_wrap">
										
										<a href="javascript:goMainContentsDetail(10010101,'N10003', '50215945', '261143', 'MV0099');" title="[IU TV] 이게 공연이지C" class="thumb mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O05&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10003&amp;CLICK_CONTS_ID=50215945">
											
												
												
												
												
												
												
													<img onerror="WEBPOCIMG.defaultMvImg(this, 144, 108);" src="https://cdnimg.melon.co.kr/cm2/mv/images/43/502/15/945/50215945_1_20200207175216_640.jpg/melon/quality/80/resize/144/optimize" alt="">
													
														
														
														<span class="playtime">
															<strong class="none">재생시간</strong>
															<span class="time">07:21</span>
														</span>
														
													
												
											
											<span class="thumb_frame"></span>
											<span class="wrap_vertical"></span>
										</a>
									</div>
									<div class="explanation">
										
											
											
											
											
											
											
												
													
													<p class="icon_mov">영상</p>
												
											
										
										<div>
											<a href="javascript:goMainContentsDetail(10010101,'N10003', '50215945', '261143', 'MV0099');" title="[IU TV] 이게 공연이지C" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O05&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10003&amp;CLICK_CONTS_ID=50215945">
												<span class="ellipsis">[IU TV] 이게 공연이지C</span>
											</a>
											<span class="time">02월 07일</span>
										</div>
									</div>
									<div class="artist_wrap">
										
										
											
											
												<a href="javascript:melon.link.goArtistDetail('261143');" title="아이유" class="thum mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O05&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=261143">
													
													
													<img onerror="WEBPOCIMG.defaultArtistImg(this);" width="32" height="32" src="https://cdnimg.melon.co.kr/cm2/artistcrop/images/002/61/143/261143_500.jpg/melon/quality/80/resize/32/optimize" alt="">
													<span class="bg_album_frame"></span>
												</a>
											
										
										<span class="artiname">
											
												
													
													<span class="ellipsis" title="아이유"><a href="javascript:melon.link.goArtistDetail('261143');" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O05&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=261143">아이유</a></span>
												
											
											
										</span>
									</div>
								</li>
								
								
								<li class="list_wrap">
									<div class="thumb_wrap">
										
										<a href="javascript:goMainContentsDetail(10010101,'N10003', '50215955', '2763741', 'MV0099');" title="[감성음악] 새벽감성에 Chill한 음악한곡! Midnight~" class="thumb mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O05&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10003&amp;CLICK_CONTS_ID=50215955">
											
												
												
												
												
												
												
													<img onerror="WEBPOCIMG.defaultMvImg(this, 144, 108);" src="https://cdnimg.melon.co.kr/cm2/mv/images/43/502/15/955/50215955_1_20200208162030_640.jpg/melon/quality/80/resize/144/optimize" alt="">
													
														
														
														<span class="playtime">
															<strong class="none">재생시간</strong>
															<span class="time">02:22</span>
														</span>
														
													
												
											
											<span class="thumb_frame"></span>
											<span class="wrap_vertical"></span>
										</a>
									</div>
									<div class="explanation">
										
											
											
											
											
											
											
												
													
													<p class="icon_mov">영상</p>
												
											
										
										<div>
											<a href="javascript:goMainContentsDetail(10010101,'N10003', '50215955', '2763741', 'MV0099');" title="[감성음악] 새벽감성에 Chill한 음악한곡! Midnight~" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O05&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10003&amp;CLICK_CONTS_ID=50215955">
												<span class="ellipsis">[감성음악] 새벽감성에 Chill한 음악한곡! Midnight~</span>
											</a>
											<span class="time">1시간 전</span>
										</div>
									</div>
									<div class="artist_wrap">
										
										
											
											
												<a href="javascript:melon.link.goArtistDetail('2763741');" title="음악팀" class="thum mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O05&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=2763741">
													
													
													<img onerror="WEBPOCIMG.defaultArtistImg(this);" width="32" height="32" src="https://cdnimg.melon.co.kr/cm2/artistcrop/images/027/63/741/2763741_20200116150803_500.jpg/melon/quality/80/resize/32/optimize" alt="">
													<span class="bg_album_frame"></span>
												</a>
											
										
										<span class="artiname">
											
												
													
													<span class="ellipsis" title="음악팀"><a href="javascript:melon.link.goArtistDetail('2763741');" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O05&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=2763741">음악팀</a></span>
												
											
											
										</span>
									</div>
								</li>
								
								
								<li class="list_wrap ml0">
									<div class="thumb_wrap">
										
										<a href="javascript:goMainContentsDetail(10010101,'N10003', '50215936', '870307', 'MV0099');" title="신곡 'BIRTHDAY'로 돌아온 앤-마리가 한국팬들에게 보내는 메시지!" class="thumb mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O05&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10003&amp;CLICK_CONTS_ID=50215936">
											
												
												
												
												
												
												
													<img onerror="WEBPOCIMG.defaultMvImg(this, 144, 108);" src="https://cdnimg.melon.co.kr/cm2/mv/images/43/502/15/936/50215936_2_20200207163643_640.jpg/melon/quality/80/resize/144/optimize" alt="">
													
														
														
														<span class="playtime">
															<strong class="none">재생시간</strong>
															<span class="time">00:42</span>
														</span>
														
													
												
											
											<span class="thumb_frame"></span>
											<span class="wrap_vertical"></span>
										</a>
									</div>
									<div class="explanation">
										
											
											
											
											
											
											
												
													
													<p class="icon_mov">영상</p>
												
											
										
										<div>
											<a href="javascript:goMainContentsDetail(10010101,'N10003', '50215936', '870307', 'MV0099');" title="신곡 'BIRTHDAY'로 돌아온 앤-마리가 한국팬들에게 보내는 메시지!" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O05&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10003&amp;CLICK_CONTS_ID=50215936">
												<span class="ellipsis">신곡 'BIRTHDAY'로 돌아온 앤-마리가 한국팬들에게 보내는 메시지..</span>
											</a>
											<span class="time">02월 07일</span>
										</div>
									</div>
									<div class="artist_wrap">
										
										
											
											
												<a href="javascript:melon.link.goArtistDetail('870307');" title="Anne-Marie" class="thum mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O05&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=870307">
													
													
													<img onerror="WEBPOCIMG.defaultArtistImg(this);" width="32" height="32" src="https://cdnimg.melon.co.kr/cm2/artistcrop/images/008/70/307/870307_20200206121025_500.jpg/melon/quality/80/resize/32/optimize" alt="">
													<span class="bg_album_frame"></span>
												</a>
											
										
										<span class="artiname">
											
												
													
													<span class="ellipsis" title="Anne-Marie"><a href="javascript:melon.link.goArtistDetail('870307');" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O05&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=870307">Anne-Marie</a></span>
												
											
											
										</span>
									</div>
								</li>
								
								
								<li class="list_wrap">
									<div class="thumb_wrap">
										
										<a href="javascript:goMainContentsDetail(10010101,'N10004', '80090827', '623032', '');" title="SWEETCH - Love me do" class="thumb mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O05&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10004&amp;CLICK_CONTS_ID=80090827">
											
												
													<img onerror="WEBPOCIMG.defaultPhotoImg(this, 96);" src="https://cdnimg.melon.co.kr/cm2/photo/images/000/800/90/827/80090827_20200208163104_700.jpg/melon/quality/80/resize/96/optimize" alt="">
												
												
												
												
												
												
											
											<span class="thumb_frame"></span>
											<span class="wrap_vertical"></span>
										</a>
									</div>
									<div class="explanation">
										
											<p class="icon_photo">포토</p>
											
											
											
											
											
										
										<div>
											<a href="javascript:goMainContentsDetail(10010101,'N10004', '80090827', '623032', '');" title="SWEETCH - Love me do" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O05&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10004&amp;CLICK_CONTS_ID=80090827">
												<span class="ellipsis">SWEETCH - Love me do</span>
											</a>
											<span class="time">55분 전</span>
										</div>
									</div>
									<div class="artist_wrap">
										
										
											
											
												<a href="javascript:melon.link.goArtistDetail('623032');" title="SWEETCH" class="thum mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O05&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=623032">
													
													
													<img onerror="WEBPOCIMG.defaultArtistImg(this);" width="32" height="32" src="https://cdnimg.melon.co.kr/cm2/artistcrop/images/006/23/032/623032_20200207143015_500.jpg/melon/quality/80/resize/32/optimize" alt="">
													<span class="bg_album_frame"></span>
												</a>
											
										
										<span class="artiname">
											
												
													
													<span class="ellipsis" title="SWEETCH"><a href="javascript:melon.link.goArtistDetail('623032');" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O05&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=623032">SWEETCH</a></span>
												
											
											
										</span>
									</div>
								</li>
								
								
								<li class="list_wrap ml0">
									<div class="thumb_wrap">
										
										<a href="javascript:goMainContentsDetail(10010101,'N10003', '50215953', '789981', 'MV0099');" title="케이시(Kassy)-가을밤 떠난 너 cover by 류현정 of 도리토리" class="thumb mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O05&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10003&amp;CLICK_CONTS_ID=50215953">
											
												
												
												
												
												
												
													<img onerror="WEBPOCIMG.defaultMvImg(this, 144, 108);" src="https://cdnimg.melon.co.kr/cm2/mv/images/43/502/15/953/50215953_1_20200208031350_640.jpg/melon/quality/80/resize/144/optimize" alt="">
													
														
														
														<span class="playtime">
															<strong class="none">재생시간</strong>
															<span class="time">04:21</span>
														</span>
														
													
												
											
											<span class="thumb_frame"></span>
											<span class="wrap_vertical"></span>
										</a>
									</div>
									<div class="explanation">
										
											
											
											
											
											
											
												
													
													<p class="icon_mov">영상</p>
												
											
										
										<div>
											<a href="javascript:goMainContentsDetail(10010101,'N10003', '50215953', '789981', 'MV0099');" title="케이시(Kassy)-가을밤 떠난 너 cover by 류현정 of 도리토리" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O05&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10003&amp;CLICK_CONTS_ID=50215953">
												<span class="ellipsis">케이시(Kassy)-가을밤 떠난 너 cover by 류현정 of 도리토리</span>
											</a>
											<span class="time">3시간 전</span>
										</div>
									</div>
									<div class="artist_wrap">
										
										
											
											
												<a href="javascript:melon.link.goArtistDetail('789981');" title="도리토리" class="thum mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O05&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=789981">
													
													
													<img onerror="WEBPOCIMG.defaultArtistImg(this);" width="32" height="32" src="https://cdnimg.melon.co.kr/cm2/artistcrop/images/007/89/981/789981_20191230165219_500.jpg/melon/quality/80/resize/32/optimize" alt="">
													<span class="bg_album_frame"></span>
												</a>
											
										
										<span class="artiname">
											
												
													
													<span class="ellipsis" title="도리토리"><a href="javascript:melon.link.goArtistDetail('789981');" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O05&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=789981">도리토리</a></span>
												
											
											
										</span>
									</div>
								</li>
								
								
								<li class="list_wrap">
									<div class="thumb_wrap">
										
										<a href="javascript:goMainContentsDetail(10010101,'N10003', '50215943', '1271812', 'MV0099');" title="KARD 4th Mini Album 'RED MOON' _ KEYPOINT DANCE" class="thumb mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O05&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10003&amp;CLICK_CONTS_ID=50215943">
											
												
												
												
												
												
												
													<img onerror="WEBPOCIMG.defaultMvImg(this, 144, 108);" src="https://cdnimg.melon.co.kr/cm2/mv/images/43/502/15/943/50215943_1_20200207172203_640.jpg/melon/quality/80/resize/144/optimize" alt="">
													
														
														
														<span class="playtime">
															<strong class="none">재생시간</strong>
															<span class="time">00:25</span>
														</span>
														
													
												
											
											<span class="thumb_frame"></span>
											<span class="wrap_vertical"></span>
										</a>
									</div>
									<div class="explanation">
										
											
											
											
											
											
											
												
													
													<p class="icon_mov">영상</p>
												
											
										
										<div>
											<a href="javascript:goMainContentsDetail(10010101,'N10003', '50215943', '1271812', 'MV0099');" title="KARD 4th Mini Album 'RED MOON' _ KEYPOINT DANCE" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O05&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10003&amp;CLICK_CONTS_ID=50215943">
												<span class="ellipsis">KARD 4th Mini Album 'RED MOON' _ KEYPOINT DANCE</span>
											</a>
											<span class="time">02월 08일</span>
										</div>
									</div>
									<div class="artist_wrap">
										
										
											
											
												<a href="javascript:melon.link.goArtistDetail('1271812');" title="카드 (KARD)" class="thum mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O05&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=1271812">
													
													
													<img onerror="WEBPOCIMG.defaultArtistImg(this);" width="32" height="32" src="https://cdnimg.melon.co.kr/cm2/artistcrop/images/012/71/812/1271812_500.jpg/melon/quality/80/resize/32/optimize" alt="">
													<span class="bg_album_frame"></span>
												</a>
											
										
										<span class="artiname">
											
												
													
													<span class="ellipsis" title="카드 (KARD)"><a href="javascript:melon.link.goArtistDetail('1271812');" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O05&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=1271812">카드 (KARD)</a></span>
												
											
											
										</span>
									</div>
								</li>
								
								
								<li class="list_wrap ml0">
									<div class="thumb_wrap">
										
										<a href="javascript:goMainContentsDetail(10010101,'N10003', '50215926', '716984', 'MV0099');" title="D-1, 한요한 싱글 [반복]" class="thumb mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O05&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10003&amp;CLICK_CONTS_ID=50215926">
											
												
												
												
												
												
												
													<img onerror="WEBPOCIMG.defaultMvImg(this, 144, 108);" src="https://cdnimg.melon.co.kr/cm2/mv/images/43/502/15/926/50215926_4_20200207151238_640.jpg/melon/quality/80/resize/144/optimize" alt="">
													
														
														
														<span class="playtime">
															<strong class="none">재생시간</strong>
															<span class="time">00:45</span>
														</span>
														
													
												
											
											<span class="thumb_frame"></span>
											<span class="wrap_vertical"></span>
										</a>
									</div>
									<div class="explanation">
										
											
											
											
											
											
											
												
													
													<p class="icon_mov">영상</p>
												
											
										
										<div>
											<a href="javascript:goMainContentsDetail(10010101,'N10003', '50215926', '716984', 'MV0099');" title="D-1, 한요한 싱글 [반복]" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O05&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10003&amp;CLICK_CONTS_ID=50215926">
												<span class="ellipsis">D-1, 한요한 싱글 [반복]</span>
											</a>
											<span class="time">02월 07일</span>
										</div>
									</div>
									<div class="artist_wrap">
										
										
											
											
												<a href="javascript:melon.link.goArtistDetail('716984');" title="한요한" class="thum mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O05&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=716984">
													
													
													<img onerror="WEBPOCIMG.defaultArtistImg(this);" width="32" height="32" src="https://cdnimg.melon.co.kr/cm/artistcrop/images/007/16/984/716984_500.jpg/melon/quality/80/resize/32/optimize" alt="">
													<span class="bg_album_frame"></span>
												</a>
											
										
										<span class="artiname">
											
												
													
													<span class="ellipsis" title="한요한"><a href="javascript:melon.link.goArtistDetail('716984');" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O05&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=716984">한요한</a></span>
												
											
											
										</span>
									</div>
								</li>
								
								
								<li class="list_wrap">
									<div class="thumb_wrap">
										
										<a href="javascript:goMainContentsDetail(10010101,'N10003', '50215954', '578991', 'MV0099');" title="프리다 frida kahlo (Acoustic live in studio)" class="thumb mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O05&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10003&amp;CLICK_CONTS_ID=50215954">
											
												
												
												
												
												
												
													<img onerror="WEBPOCIMG.defaultMvImg(this, 144, 108);" src="https://cdnimg.melon.co.kr/cm2/mv/images/43/502/15/954/50215954_1_20200208151812_640.jpg/melon/quality/80/resize/144/optimize" alt="">
													
														
														
														<span class="playtime">
															<strong class="none">재생시간</strong>
															<span class="time">03:29</span>
														</span>
														
													
												
											
											<span class="thumb_frame"></span>
											<span class="wrap_vertical"></span>
										</a>
									</div>
									<div class="explanation">
										
											
											
											
											
											
											
												
													
													<p class="icon_mov">영상</p>
												
											
										
										<div>
											<a href="javascript:goMainContentsDetail(10010101,'N10003', '50215954', '578991', 'MV0099');" title="프리다 frida kahlo (Acoustic live in studio)" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O05&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10003&amp;CLICK_CONTS_ID=50215954">
												<span class="ellipsis">프리다 frida kahlo (Acoustic live in studio)</span>
											</a>
											<span class="time">2시간 전</span>
										</div>
									</div>
									<div class="artist_wrap">
										
										
											
											
												<a href="javascript:melon.link.goArtistDetail('578991');" title="미스터로드" class="thum mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O05&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=578991">
													
													
													<img onerror="WEBPOCIMG.defaultArtistImg(this);" width="32" height="32" src="https://cdnimg.melon.co.kr/cm/artistcrop/images/005/78/991/578991_500.jpg/melon/quality/80/resize/32/optimize" alt="">
													<span class="bg_album_frame"></span>
												</a>
											
										
										<span class="artiname">
											
												
													
													<span class="ellipsis" title="미스터로드"><a href="javascript:melon.link.goArtistDetail('578991');" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O05&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=N10006&amp;CLICK_CONTS_ID=578991">미스터로드</a></span>
												
											
											
										</span>
									</div>
								</li>
								
							</ul>
						</div>
					</div>
					<!-- //새로 나왔어요 -->

					<!-- 이건 어때요 -->
					<div class="recm_conts">
						<h2><span class="title_link">이건 어때요</span></h2>
						
						
						<ul class="sub_list thema_list">
							<li class="recm_wrap">
								
								
								
								
								<div class="recm_thum3">
									<ul>
										<li>
											<span>
												<p>들을 때 마다 소오름!</p>
												<span class="fc_gray2">내용과 분위기를 대변하는<br>인생 드라마 속 BGM</span>
											</span>
										</li>
										<li class="thum">
											
											<a href="https://www.melon.com/mymusic/dj/mymusicdjplaylistview_inform.htm?plylstSeq=453850046" title="K-Drama OST" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O07&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=&amp;CLICK_CONTS_ID=&amp;PROMO_CONTS_TYPE_CODE=&amp;PROMO_CONTS_ID=&amp;PROMO_SEQ=120279&amp;PROMO_DTL_SEQ=1">
												<img width="248" height="148" src="https://cdnimg.melon.co.kr/svc/images/main/imgUrl20200116072638.jpg/melon/quality/80" alt="">
												<span class="bg_album_frame"></span>
												<span class="txt_thum">
													<span>K-Drama OST</span>
												</span>
											</a>
										</li>
									</ul>
								</div>
								
							</li>
							<li class="recm_list">
								<ul>
									
									
									<li>
										<dl>
											<dd>
												<a href="https://vod.melon.com/video/detail2.htm?mvId=50194991" title="SKY 캐슬" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O07&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=&amp;CLICK_CONTS_ID=&amp;PROMO_CONTS_TYPE_CODE=&amp;PROMO_CONTS_ID=&amp;PROMO_SEQ=120279&amp;PROMO_DTL_SEQ=2">
													<img width="90" height="58" src="https://cdnimg.melon.co.kr/svc/images/main/imgUrl20190117095317.jpg/melon/quality/80" alt="">
													<span class="bg_album_frame"></span>
												</a>
											</dd>
											<dt>
												<a href="https://vod.melon.com/video/detail2.htm?mvId=50194991" title="SKY 캐슬" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O07&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=&amp;CLICK_CONTS_ID=&amp;PROMO_CONTS_TYPE_CODE=&amp;PROMO_CONTS_ID=&amp;PROMO_SEQ=120279&amp;PROMO_DTL_SEQ=2">
													<span class="f11">SKY 캐슬</span>
													<span class="title">위 올 라이~ 흐르면<br>소름 주체 못한다며…</span>
												</a>
											</dt>
										</dl>
									</li>
									
									
									<li>
										<dl>
											<dd>
												<a href="https://www.melon.com/album/detail.htm?albumId=718854" title="지붕뚫고 하이킥" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O07&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=&amp;CLICK_CONTS_ID=&amp;PROMO_CONTS_TYPE_CODE=&amp;PROMO_CONTS_ID=&amp;PROMO_SEQ=120279&amp;PROMO_DTL_SEQ=3">
													<img width="90" height="58" src="https://cdnimg.melon.co.kr/svc/images/main/imgUrl20190117095319.jpg/melon/quality/80" alt="">
													<span class="bg_album_frame"></span>
												</a>
											</dd>
											<dt>
												<a href="https://www.melon.com/album/detail.htm?albumId=718854" title="지붕뚫고 하이킥" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O07&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=&amp;CLICK_CONTS_ID=&amp;PROMO_CONTS_TYPE_CODE=&amp;PROMO_CONTS_ID=&amp;PROMO_SEQ=120279&amp;PROMO_DTL_SEQ=3">
													<span class="f11">지붕뚫고 하이킥</span>
													<span class="title">엔딩곡의 새역사를 쓴<br>Cuzz you are my girl~</span>
												</a>
											</dt>
										</dl>
									</li>
									
									
									<li>
										<dl>
											<dd>
												<a href="https://vod.melon.com/video/detail2.htm?mvId=50015746" title="아내의 유혹" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O07&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=&amp;CLICK_CONTS_ID=&amp;PROMO_CONTS_TYPE_CODE=&amp;PROMO_CONTS_ID=&amp;PROMO_SEQ=120279&amp;PROMO_DTL_SEQ=4">
													<img width="90" height="58" src="https://cdnimg.melon.co.kr/svc/images/main/imgUrl20190117095322.jpg/melon/quality/80" alt="">
													<span class="bg_album_frame"></span>
												</a>
											</dd>
											<dt>
												<a href="https://vod.melon.com/video/detail2.htm?mvId=50015746" title="아내의 유혹" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O07&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=&amp;CLICK_CONTS_ID=&amp;PROMO_CONTS_TYPE_CODE=&amp;PROMO_CONTS_ID=&amp;PROMO_SEQ=120279&amp;PROMO_DTL_SEQ=4">
													<span class="f11">아내의 유혹</span>
													<span class="title">왠지 점 하나 찍고<br>눈 부릅떠야 할 것 같아</span>
												</a>
											</dt>
										</dl>
									</li>
									
								</ul>
							</li>
						</ul>
						
						
						<ul class="sub_list thema_list" style="display:none;">
							<li class="recm_wrap">
								
								
								
								
								<div class="recm_thum3">
									<ul>
										<li>
											<span>
												<p>겨울에 듣는 노래들</p>
												<span class="fc_gray2">차가워지는 공기, <br>이 맘 때 늘 생각나는 음악</span>
											</span>
										</li>
										<li class="thum">
											
											<a href="https://www.melon.com/mymusic/dj/mymusicdjplaylistview_inform.htm?plylstSeq=101600423" title="거리에 울리는 겨울 시즌송" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O07&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=&amp;CLICK_CONTS_ID=&amp;PROMO_CONTS_TYPE_CODE=&amp;PROMO_CONTS_ID=&amp;PROMO_SEQ=119648&amp;PROMO_DTL_SEQ=1">
												<img width="248" height="148" src="https://cdnimg.melon.co.kr/svc/images/main/imgUrl20191120103950.jpg/melon/quality/80" alt="">
												<span class="bg_album_frame"></span>
												<span class="txt_thum">
													<span>거리에 울리는 겨울 시즌송</span>
												</span>
											</a>
										</li>
									</ul>
								</div>
								
							</li>
							<li class="recm_list">
								<ul>
									
									
									<li>
										<dl>
											<dd>
												<a href="https://www.melon.com/album/detail.htm?albumId=43841" title="미안하다 사랑한다" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O07&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=&amp;CLICK_CONTS_ID=&amp;PROMO_CONTS_TYPE_CODE=&amp;PROMO_CONTS_ID=&amp;PROMO_SEQ=119648&amp;PROMO_DTL_SEQ=2">
													<img width="90" height="58" src="https://cdnimg.melon.co.kr/svc/images/main/imgUrl20190104023106.jpg/melon/quality/80" alt="">
													<span class="bg_album_frame"></span>
												</a>
											</dd>
											<dt>
												<a href="https://www.melon.com/album/detail.htm?albumId=43841" title="미안하다 사랑한다" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O07&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=&amp;CLICK_CONTS_ID=&amp;PROMO_CONTS_TYPE_CODE=&amp;PROMO_CONTS_ID=&amp;PROMO_SEQ=119648&amp;PROMO_DTL_SEQ=2">
													<span class="f11">미안하다 사랑한다</span>
													<span class="title">마음을 시리게 만든<br>그 겨울의 드라마</span>
												</a>
											</dt>
										</dl>
									</li>
									
									
									<li>
										<dl>
											<dd>
												<a href="https://vod.melon.com/video/detail2.htm?mvId=50119795" title="All I Want For…" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O07&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=&amp;CLICK_CONTS_ID=&amp;PROMO_CONTS_TYPE_CODE=&amp;PROMO_CONTS_ID=&amp;PROMO_SEQ=119648&amp;PROMO_DTL_SEQ=3">
													<img width="90" height="58" src="https://cdnimg.melon.co.kr/svc/images/main/imgUrl20191120103956.jpg/melon/quality/80" alt="">
													<span class="bg_album_frame"></span>
												</a>
											</dd>
											<dt>
												<a href="https://vod.melon.com/video/detail2.htm?mvId=50119795" title="All I Want For…" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O07&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=&amp;CLICK_CONTS_ID=&amp;PROMO_CONTS_TYPE_CODE=&amp;PROMO_CONTS_ID=&amp;PROMO_SEQ=119648&amp;PROMO_DTL_SEQ=3">
													<span class="f11">All I Want For…</span>
													<span class="title">이 맘때면 늘 차트에<br>다시 등장하는 그 노래!</span>
												</a>
											</dt>
										</dl>
									</li>
									
									
									<li>
										<dl>
											<dd>
												<a href="https://vod.melon.com/video/detail2.htm?mvId=50119511" title="엑소 '12월의 기적' " class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O07&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=&amp;CLICK_CONTS_ID=&amp;PROMO_CONTS_TYPE_CODE=&amp;PROMO_CONTS_ID=&amp;PROMO_SEQ=119648&amp;PROMO_DTL_SEQ=4">
													<img width="90" height="58" src="https://cdnimg.melon.co.kr/svc/images/main/imgUrl20190104023112.jpg/melon/quality/80" alt="">
													<span class="bg_album_frame"></span>
												</a>
											</dd>
											<dt>
												<a href="https://vod.melon.com/video/detail2.htm?mvId=50119511" title="엑소 '12월의 기적' " class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O07&amp;ACTION_AF_CLICK=V1&amp;CLICK_CONTS_TYPE_CODE=&amp;CLICK_CONTS_ID=&amp;PROMO_CONTS_TYPE_CODE=&amp;PROMO_CONTS_ID=&amp;PROMO_SEQ=119648&amp;PROMO_DTL_SEQ=4">
													<span class="f11">엑소 '12월의 기적' </span>
													<span class="title">명반이라 칭송받는<br>겨울 스페셜 앨범 title</span>
												</a>
											</dt>
										</dl>
									</li>
									
								</ul>
							</li>
						</ul>
						
						<div class="wrap_page">
							<div class="page">
								<span class="page_num">
									<span class="none">현재 페이지</span><strong>1</strong>/<span class="none">전체 페이지</span><span>3</span>
								</span>
								<span class="wrap_btn">
									
									<a class="btn btn_pre mlog_without_page_change" title="이전" href="javascript:;" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O07&amp;ACTION_AF_CLICK=S2"><span class="odd_span">이전</span></a>
									<a class="btn btn_next mlog_without_page_change" title="다음" href="javascript:;" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=O07&amp;ACTION_AF_CLICK=S2"><span class="odd_span">다음</span></a>
								</span>
							</div>
						</div>
					</div>
					<!-- //이건 어때요 -->
					<!-- 공지사항 -->
					<div class="notice">
						<dl>
							<dt class="label"><a href="//www.melon.com/customer/announce/index.htm" title="공지사항">공지사항</a></dt>
							
							
							<dd><a href="javascript:goAnnounDetail('869');" title="LG U+ 휴대폰 본인확인 서비스 일시 중단 안내" class="mlog" data="LOG_PRT_CODE=1&amp;MENU_PRT_CODE=2&amp;MENU_ID_LV1=10010101&amp;CLICK_AREA_PRT_CODE=P01&amp;ACTION_AF_CLICK=V1">LG U+ 휴대폰 본인확인 서비스 일시 중단 안내</a></dd>
							<dd class="date">2020.02.04</dd>
							
						</dl>
					</div>
					<!-- //공지사항 -->
				</div>
			<!-- //contents -->
		</div>
	</div>

	<!-- footer -->
	<div id="footer" class="pr_none">
		
		<!-- MELONUIT-738 -->
		<div id="popNotice" class="wrap_pop_notice MELONUIT-738">
			<div class="pop_notice_inner">
				<div class="bd">
					<h1>공정거래위원회로부터 시정명령을 받은 사실의 공표</h1>
					<div class="box">
						<div class="wrap_notice">
							<div class="info_cont">
								<div class="txt01">
									<p>저희 주식회사 카카오는 인터넷 사이트 (www.melon.com) 및 스마트 기기 전용 사이버몰인 ‘멜론(Melon)’ 앱을 운영하면서 아래와 같은 행위를 함으로써‘전자상거래 등에서의 소비자보호에 관한 법률’을 위반하였다는 이유로 공정거래위원회로부터 시정명령을 받았습니다.</p>
									<p class="pgh center line">-&nbsp;&nbsp;&nbsp;아&nbsp;&nbsp;래&nbsp;&nbsp;&nbsp;-</p>
									<p class="pgh" style="margin-top: 0;">1. 정기결제 상품 이용자들을 대상으로 2016. 9. 22. 부터 2016. 12. 31. 까지 4차례에 걸쳐‘가격인상 동의’프로모션을 진행하면서 가격인상에 미리 동의해야 할인 혜택 연장 등의 혜택을 받을 수 있고 가격인상에 동의하지 않을 경우에는 할인 혜택 연장을 받을 수 없는 것처럼 광고하고 실제로는 가격인상에 동의하지 않는 이용자들에게도 할인혜택을 지속적으로 제공함</p>
									<p class="pgh">2. 2016. 9. 30. 부터 2017. 8. 31. 까지‘일시정지 해제’프로모션을 진행하면서 정기결제 상품이용자 중 이용량이 많다는 이유로 이용자의 이용권을 일시정지 시켰음에도 불구하고, 음원 이용이 일시정지 된 구체적인 사유를 이용자에게 알리지 않았고, 인상된 가격을 기준으로 할인혜택이 적용된다는 사실과 할인혜택이 종료된 이후에는 인상된 가격이 적용된다는 사실을 제대로 알리지 않음</p>
									<p class="pgh center" style="margin-top: 10px;" id="d_layerPopDateText"></p>
									<p class="pgh center company"><strong>주식회사 카카오<br>대표이사 여민수, 조수용</strong></p>
								</div>
							</div>
						</div>
						<div class="bg_top"></div>
						<div class="bg_bottom"></div>
					</div>
					<div class="wrap_input_box">
						
							
							
						
						<button type="button" class="d_close"><span>닫기</span></button>
					</div>
				</div>
			</div>
			<span class="shadow"></span>
		</div>
		<!-- //MELONUIT-738 -->

		<div class="footer_cont">
			<div class="footer_menu">
<!-- 				<ul class="fl_left"> -->
<!-- 					<li class="menu01 d_melon_ticket"><a href="http://ticket.melon.com/main/index.htm"><span>MelOn Ticket</span></a></li> -->

<!-- 					<li class="menu04"><a href="http://aztweb.melon.com/aztalk/guide/web/main.htm"><span>aztalk</span></a></li> -->
<!-- 				</ul> -->
				<ul class="fl_right">
					<!-- MELONUIT-930 -->
					<li class="menu05"><a href="//www.melon.com/event/fiveintro/index.htm"><span>멜론5.0 둘러보기</span></a></li>
					<!-- //MELONUIT-930 -->
					<li class="menu06"><a href="//www.melon.com/customer/serviceintro/index.htm"><span>Windows 플레이어</span></a></li><!-- 160824 수정 -->
					<li class="menu07"><a href="//www.melon.com/customer/serviceintro/multi_pc_web.htm"><span>Mac 플레이어</span></a></li>
					<li class="menu09"><a href="//www.melon.com/customer/serviceintro/ipad.htm"><span>iPad</span></a></li>
					<li class="menu08"><a href="//faqs2.melon.com/customer/index.htm"><span>고객센터</span></a></li>
				</ul>
			</div>
			<ul class="footer_policy clfix">
				<li class="first_child"><a href="//www.kakaocorp.com/" title="회사소개 " target="_blank">회사소개</a></li>
				<li><a href="//info.melon.com/terms/web/terms1_4.html" title="이용약관 " target="_blank">이용약관</a></li>
				<li><a href="//info.melon.com/terms/web/terms1_3.html" title="위치기반서비스 이용약관 " target="_blank">위치기반서비스 이용약관</a></li>
				<li><a href="//info.melon.com/terms/web/terms6.html" title="개인정보처리방침 " target="_blank"><strong>개인정보처리방침</strong></a></li>
				<li><a href="//info.melon.com/terms/web/terms5_1.html" title="청소년보호정책" target="_blank">청소년보호정책</a></li>
				<li><a href="//faqs2.melon.com/customer/faq/informFaq.htm?no=1&amp;faqId=QUES20140616000001&amp;SEARCH_KEY=&amp;SEARCH_PAR_CATEGORY=CATE20130909000006&amp;SEARCH_CATEGORY=CATE20130909000021" title="제휴/프로모션문의">제휴/프로모션문의</a></li>
				<li><a href="javascript:openEmailCollectionReject();" title="이메일주소무단수집거부 ">이메일주소무단수집거부</a></li>
				<li class="last_child"><a href="//partner.melon.com/partrct/login/web/login_loginProcess.htm?t=s" title="파트너센터" target="_blank">파트너센터</a></li>
			</ul>
			<!--160531 수정 lyr-->
			<p>
				<!-- UX-1504 -->
				<span class="first"><strong>(주)카카오</strong>&nbsp;&nbsp;제주특별자치도 제주시 첨단로 242 (영평동)</span>
				<span>공동대표이사 : 여민수, 조수용</span>
				<span>사업자등록번호 : 120-81-47521</span>
				<span>통신판매업신고번호 : 제 2015-제주아라-0032호 <a href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=1208147521&amp;apv_perm_no=2012651005630200009" title="사업자정보확인" class="btn_arrow" target="_blank">사업자정보확인</a></span>
				<br>
				<span class="first">문의전화 : 1566-7727 (평일 09:00-18:00, 유료)</span>
				<span>이메일 : <a href="mailto:melon_info@kakaocorp.com" class="btn_footer_mail">melon_info@kakaocorp.com</a></span>
				<span>호스팅서비스사업자 : (주)카카오</span>
				<span><a href="//www.kakaocorp.com/" class="btn_footer_mail" target="_blank">© Kakao Corp.</a></span>
				<!-- //UX-1504 -->
			</p>
			<!--//160531 수정 lyr-->
			
			<!--161209 수정 lyr-->
			<div class="ban">
				<!-- 180228 수정 cindy -->
				<a href="//www.melon.com/footer/awrad.htm?pageType=06"><img width="52" height="26" src="https://cdnimg.melon.co.kr/resource/image/web/common/ban_footer_design_2018.png" alt="Design Award 2018"></a>
				<a href="//www.melon.com/footer/awrad.htm?pageType=06"><img width="101" height="25" src="https://cdnimg.melon.co.kr/resource/image/web/common/ban_footer_reddot_2017.png" alt="reddot award 2017"></a>
				<!-- //180228 수정 cindy -->
				<!-- 180129 수정 sally -->
				<a href="//www.melon.com/footer/awrad.htm?pageType=02"><img width="102" height="25" src="https://cdnimg.melon.co.kr/resource/image/web/common/ban_footer01_20190214.png" alt="2019 대한민국 퍼스트브랜드 대상"></a>
				<a href="//www.melon.com/footer/awrad.htm?pageType=04"><img width="128" height="25" src="https://cdnimg.melon.co.kr/resource/image/web/common/ban_footer04_20190214.png" alt="2019 소비자가 뽑은 가장 신뢰하는 브랜드 대상"></a>
				<!-- //180129 수정 sally -->
				<!-- UX-1274 --> 
				<a href="//www.melon.com/footer/awrad.htm?pageType=03"><img width="114" height="25" src="https://cdnimg.melon.co.kr/resource/image/web/common/ban_footer02_20180406.png" alt="한국능률협회컨설팅 2018 브랜드 파워 1위"></a>
				<!-- //UX-1274 -->
				<a href="//www.kdce.or.kr/user/ctf/clmsCtfTransList.do?NmberBusiRegNo=1388105876&amp;websiteName=www.melon.com&amp;SUB=FB" target="_blank"><img width="82" height="25" src="https://cdnimg.melon.co.kr/resource/image/web/common/ban_footer06_161209.png" alt="음악저작권 이용허락 인증"></a>
				<a href="//www.copyrightok.kr" target="_blank"><img width="67" height="25" src="https://cdnimg.melon.co.kr/resource/image/web/common/ban_footer07_20180618.png" alt="저작권OK"></a>
				<a class="last_child popISMS" href="javascript:;"><img width="131" height="25" src="https://cdnimg.melon.co.kr/resource/image/web/common/ban_footer09_20200121.png" alt="정보보호 및 개인정보보호 관리쳬게 인증"></a>
			</div>
			<!--//161209 수정 lyr-->

			<!--모바일 웹 버전, 태블릿에서만 적용됨. display none, block 으로 적용-->
			<!--140602 추가 lyr-->
			<div class="mobile_btn_wrap" style="display:none;">
				<p>접속하신 단말/브라우저에서는 멜론 서비스의 사용이 일부 제한될 수 있습니다. 양해부탁드립니다.</p>
				<a href="#" class="btn" title="모바일 웹 버전">
					<span class="odd_span">
						<span class="even_span">모바일 웹 버전</span>
					</span>
				</a>
			</div>
			<!--//140602 추가 lyr-->
		</div>

		<a href="#" class="btn_top" title="맨 위로 가기" style="display: none;">맨 위로 가기</a>

<!-- MELONUIT-1148 20200121 ISMS 인증서 팝업 -->
<div id="pop_isms" class="wrap_pop_notice wrap_pop_isms">
	<div class="pop_isms_inner">
		<h1 class="title">정보보호 및 개인정보보호 관리체계 인증</h1>
		<div class="cntt">
			<p class="txt01">정보보호 및 개인정보보호를 위한 일련의 조치와 활동이<br>인증기준에 적합함을 인터넷진흥원 또는 인증기간이 증명하는 제도</p>
			<ul class="list_isms">
				<li>[인증범위]  인터넷 서비스 운영 (카카오, 다음, 멜론)</li>
				<li>[유효기간]  2019.12.26 ~ 2022.12.25</li>
			</ul>
		</div>
	</div>
	<button type="button" title="닫기" class="btn_close d_close"><span>닫기</span></button>
	<span class="shadow"></span>
</div>
<!-- //MELONUIT-1148 20200121 ISMS 인증서 팝업 -->

		<script type="text/javascript">

			$(function() {
				//favicon 분기 처리
				var pocId = MELON.WEBSVC.POC.getPocId();
				if('AS20' == pocId || 'HT10' == pocId){
					$('link#favicon').attr('href','//cdnimg.melon.co.kr/resource/mobile40/cds/common/image/favicon.ico');
					$('title').text('Melon');
				}else if('IS20' == pocId || 'IT10' == pocId){
					$('link#favicon').attr('type','');
					$('link#favicon').attr('rel','apple-touch-icon-precomposed');
					$('link#favicon').attr('href','//cdnimg.melon.co.kr/resource/mobile40/cds/common/image/mobile_apple_120x120.png');
					$('link#favicon').after('<link rel="apple-touch-icon-precomposed" sizes="180x180" href="//cdnimg.melon.co.kr/resource/mobile40/cds/common/image/mobile_apple_180x180.png" />');
					$('title').text('Melon');
				}
				

				// 엣지 브라우저이고 해당 팝업이 뜬 적이 없는 경우 체크하여 팝업을 띄운다.
				var isEdge = (navigator.userAgent.indexOf("Edge") > 0);
				var edgeCheckYN = getCookie("EDGE_CHECK") != 'Y';
				

				// 타블렛이고 해당 팝업이 뜬 적이 없는 경우 체크하여 팝업을 띄운다.
				var tabletCheckYN = getCookie("TABLET_CHECK") != 'Y';

				if(melon.isTablet() && tabletCheckYN){
					window.open('//www.melon.com/error_page/error_tabletTypeA.html','tabletPopTypeA','scrollbars=no, resizable=no, location=no, width=560, height=483');
				}
				
				// 해당 쿠키가 존재하면 쿠키 삭제
				if(getCookie("CHECK_POP") != ''){
					// 체크 후 해당 쿠키는 제거
					var expireDate = new Date();
					expireDate.setDate(expireDate.getDate()-1);
					document.cookie = "CHECK_POP=;path=/;expires="+expireDate.toGMTString()+";domain=.melon.com";
				}

				if(isMelonLogin()){
					var djYn = getMemberDjYn();
					if(djYn == "" || typeof djYn == "undefined"){
						try {
							$.ajax({
								url: "//www.melon.com/gnb/check_melondj.json",
								type : 'GET',
								dataType: 'jsonp',
								jsonp: 'jscallback',
							}).done(function(json) {}).fail(function() {});
						} catch(e){}
					}
				}
				
				// 홈탭의 경우 쇼핑/티켓을 새창띄우기로 변경한다.
				var fromMPS = getCookie("MPS"); // 멜론 플레이어에서 왔는지 확인.
				var fromHomeTab = !(fromMPS == null || fromMPS.indexOf("MELONPLAYER") < 0);
				
				if(fromHomeTab){
					$("li.d_melon_shopping a").removeClass("mlog");
					$("li.d_melon_shopping a").addClass("mlog_without_page_change");
					$("li.d_melon_shopping a").attr("target", "_blank");
					
					$("li.d_melon_ticket a").removeClass("mlog");
					$("li.d_melon_ticket a").addClass("mlog_without_page_change");
					$("li.d_melon_ticket a").attr("target", "_blank");
				}
				
				$(document).on('limitpopup', function( e, cookieId ) {
					$('#'+cookieId).modal();
				});


				//레이어 공지 제어
				//메인만 적용
				//pcp 홈탭 미적용
				if('10010101' == '10010101' && !fromHomeTab){
					$.ajax({
						type : 'GET'
						,url : '/main/getTicketPositionProperty.json'
					}).done(function(response) {

						var layerPopNotiYn = response.layerPopNotiYn;
						var layerPopDateText = response.layerPopDateText;
						if(layerPopNotiYn == 'Y'){
							$('#d_layerPopDateText').text(layerPopDateText);
							setTimeout(function() {
								$("#popNotice").timeLimitSet({ cookieId:'popNotice',selectors:{closebtn:'#todayChk', checkbox:''} });
							},1);
							MELON.PBPGN.TimeLimitPopup.init({ cookieId:"popNotice", serverTime: new Date(), limitType:"day" });
							$("#popNotice .d_close").click(function() {  $("#popNotice").modal('hide'); });
						}
					});
				}
			});
			
			function goMelonTPage(){
				//t.com 종료 삭제처리
			}
			
			function openEmailCollectionReject(){
				window.open('//www.melon.com/emailCollectionReject.html','emailCollect', 'scrollbars=no, resizable=no, location=no, width=384, height=331');
			}
			
			//다음 검색 랜딩 추가
			if(location.href.indexOf('ref=W10600') > -1){
				$.ajax({
					url: '/gnb/daumsearch_list.htm',
				}).done(function(html){
					$('#footer').before(html);
				});
			}

			//MELONUIT-1148 20200121 ISMS 인증서 팝업 //
			var popISMS = {
				open : function() {
					$('#pop_isms').modal('show');
				}
			};

			$(document).on('click', '.popISMS',function(){
				popISMS.open();
			});
			//MELONUIT-1148 20200121 ISMS 인증서 팝업 //
		</script>
		<!--//140602 추가 lyr-->
	</div>
	<!-- //footer -->
</div>

<script type="text/javascript">
	var httpWww = "http://www.melon.com";
	var httpsWww = "https://www.melon.com";
	var POC_ID = "XXXX";
</script>


	<script type="text/javascript" src="/resource/script/web/common/melonweb_openlib.js"></script>

	<script type="text/javascript" src="https://cdnimg.melon.co.kr/static/web/resource/script/w1/jl/7/mt2yrkjrg8wadm0bh.js"></script>
	<script type="text/javascript" src="https://cdnimg.melon.co.kr/static/web/resource/script/w1/k7/j/6umg8citepaer2hnf.js"></script>
	<script type="text/javascript" src="/resource/script/web/common/MPAPI.js?tm=20171129"></script> 
	<script type="text/javascript" src="https://cdnimg.melon.co.kr/static/web/resource/script/w1/5f/r/mblsw6nfp.js"></script> 
	

<script type="text/javascript" src="https://cdnimg.melon.co.kr/static/web/resource/script/w1/0i/p/1ec0iixwb57.js"></script>

	<script type="text/javascript" src="/resource/script/web/chart/json2.js"></script>
	<script type="text/javascript" src="/resource/script/web/common/melonweb_zam.js?tm=2016042816"></script>
	<script type="text/javascript" src="https://cdnimg.melon.co.kr/static/web/resource/script/w1/8k/8/1ed5h822hvv.js"></script>
	<script type="text/javascript" src="https://cdnimg.melon.co.kr/statistics/js/mlog.js"></script>
<script type="text/javascript" src="https://cdnimg.melon.co.kr/static/web/resource/script/w1/ne/r/1o73q9fll6x.js"></script>

<script type="text/javascript">
	document.domain="melon.com";
</script>

<script type="text/javascript" src="/resource/script/web/common/socket.io.js"></script>
<script type="text/javascript">
	var melon = MELON.WEBSVC.POC;

	function goMainMenuLinkPage(contsType, artistId){
		var openUrl = "";

		switch(contsType){
			case "N10003"		: openUrl = '/tv/index.htm'; break; // 멜론TV
			case "N10004"		: openUrl = '/artist/photo.htm?artistId=' + artistId; break; // 아티스트 포토
			case "N10007"		: openUrl = '/musicstory/today/index.htm'; break; // 뮤직스토리
			case "N10009"		: openUrl = '/dj/today/djtoday_list.htm'; break; // 멜론DJ
			case "N10011"		: openUrl = '/artist/concert.htm?artistId=' + artistId; break; //공연
			case "N10015"		: openUrl = '/musicstory/entnews/index.htm'; break; //연예뉴스
			case "N10016"		: openUrl = '/artist/playlist.htm?artistId=' + artistId; break; // 아티스트 플레이리스트
			default 			: openUrl = '/index.htm'; break;
		}

		//window.open(openUrl);
		location.href = openUrl;
	}

	function goMainContentsDetail(menuId, contsType, contsId, artistId, typeCode){
		var openUrl = "";
		if(typeof typeCode == "undefined") typeCode = "";

		//Date:2014.10.16
		if(contsType == "N10003") {
			var $form = $('<form></form>');
			var $menId = $('<input type="hidden" name="menuId" value="'+menuId+'"/>')

			if(typeCode == "MV0007") {
				openUrl = MELON.WEBSVC.POC.httpMelonLive;
			} else {
				openUrl = MELON.WEBSVC.POC.httpMelonVod;
			}
		}

		switch(contsType){
			case "N10003"		: openUrl += '/video/detail.htm?mvId=' + contsId; break;
			case "N10004"		: openUrl = '/artist/photo_detail.htm?artistId=' + artistId + "&photoId=" + contsId; break;
			case "N10011"		: openUrl = "/artist/concertDetail.htm?artistId="+artistId+"&perfId=" + contsId; break;
			case "N10016"		: openUrl = '/artist/playlistDetail.htm?plylstSeq=' + contsId; break;
			case "N10027"		: openUrl = '/theme/detail.htm?themeSeq=' + contsId; break;
			case "N10029"		: openUrl = '/nowplaying/detail.htm?nowPlaySeq=' + contsId; break;
			case "N10031"		: openUrl = '/story/detail.htm?storySeq=' + contsId; break;
			default 			: openUrl = '/index.htm'; break;
		}

		//window.open(openUrl);
		location.href = openUrl;
	}

	/* 멜론 차트 Top10 듣기 */
	function playTop10(chartType) {
		var songList = $('div.chart div.'+ chartType +' li.rank_item p.song').map(function() { return $(this).attr('data-song-no'); }).get();
		melon.play.playSong('10010101', songList);
	}

	/* 멜론 차트 전체 듣기 */
	function playAll(chartType) {
		var songList = $('div.chart div.'+ chartType +' p.song').map(function() { return $(this).attr('data-song-no');}).get();
		melon.play.playSong('10010101', songList);
	}

	//공지사항 상세보기 페이지로 이동
	function goAnnounDetail(seq) {
		location.href = '/customer/announce/infomAnnounce.htm?seq=' + seq;
	}

	// SNS 계정 연결
	function goConnectSns(){
		location.href = '/muid/sns/web/sns_inform.htm';
	}

	try {
		melon.setPocId();
	} catch (e){}
</script>
</body>
  </div>
</template>

<script>
export default {
  mounted() {
    document.cookie = '"PCID=15808164212678805910919; PC_PCID=15808164212678805910919; melonlogging=1000000800; POC=MP10; MAC=yxGp3ngirn2TD8sA0wMN73oo+NLJ038ZYDiQOFrISKOBULvpKEQ8OGp7RjNPmdhQ; DECOPMAC=C8M4FqPk8FwvC+5oWaiWQtqhAgMIBZNKymGdtBlYh5wv3LWOTYVHmRGRD1ocFRfI; MUG=NDIxNTYyMzMlM0IlM0IlRUMlOUQlQkMlRUIlQjAlOTglM0IwMjA4MTcyMDM4JTNC; MHC="JTIza2FrYW9faGs5NzY0JTNCMCUzQjAlM0IwJTNCJTNCJTNCJTNCJTNCMCUzQjAyMDgxNzIwMzglM0I="; MUAC="NDIxNTYyMzMlM0IxOCUzQlklM0IlRUElQjklODAlRUQlOTklOTQlRUElQjclQTAlM0JNJTNCTiUzQjIlM0IwMjA4MTcyMDM4JTNCMjAyMDAyMDgxNzIwMzglM0JOJTNCMjAyMDAyMDgxNzIwMzglM0I="; MUNIK="JUVBJUI5JTgwJUVEJTk5JTk0JUVBJUI3JUEwJTNCMDIwODE3MjAzOCUzQg=="; KAUTH=bmRMRW10OWo4Nmc1ZTZCOFFlekQyNXpxYlRmQzAyYzR5THdMdHdvOWRHZ0FBQUZ3SS1MblFBJTNCemJxVkhYNk5pcE9xUzNxak51LXZKR0QwTW9xQWxqcUl4MUdaRFFvOWRHZ0FBQUZ3SS1MblBnJTNCJTNCJTNCJTNCJTNC; MUS="NDIxNTYyMzM7I2tha2FvX2hrOTc2NDstMjEzOTIyMjQ0OTs="; keyCookie=42156233; MLCP="NDIxNTYyMzMlM0IlMjNrYWthb19oazk3NjQlM0JOJTNCMCUzQmc5WjElMkJUOFYwODREZ2U5SDJyRUlRWDRYM1U5NXRVdFl5QktoRk5neWtFY3Zva3dpTWFXTFcyZVQxR1dRQUZnaSUzQiUzQjAyMDgxNzIwMzklM0IlRUElQjklODAlRUQlOTklOTQlRUElQjclQTAlM0IxJTNCaGs5NzY0JTQwbmF2ZXIuY29tJTNCMiUzQg==""';
  }
}
</script>

<style>

</style>