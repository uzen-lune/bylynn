
'use strict';

!window.G1UI && (function() {

	var 
		$window = $(window),
		html = document.documentElement,
		$html = $(html),
		body, $body,

		ishtmlpage = (/\.html/).test(location.href),
		regfilename = /([a-z0-9-_]+)\.html/i,

		initialized = false;


	// initialize
	$(function() {
		initialize();
	});


	function include() {

		/*
			<!-- @include 코멘트명 --> 형태로 html 내에 주석을 넣으면,
			layouturl의 html에서 <!-- 코멘트명 --> 에서 <!-- // 코멘트명 --> 까지의 html을 가져옴.
			추가로 <!-- @include 코멘트명 속성명1=속성값1 속성명2=속성값2 ... --> 식으로 지정하고,
			layouturl의 html에 원하는 곳에 {속성명1} 형태로 지정하면 html 내 해당 위치에 속성값1을 대입한 후 include 함.
		*/

		// var layouturl = '/g1_cloud_pc/html/00_guide/templete.html',
		var layouturl = location.href.match(/(?:\/bylynn)?\/won?\/pc/)+'/html/header.html',
			layouthtml = '';

		if ((/\<\!-- *\@include/).test(document.body.innerHTML)) {
			$.ajax({
				type: 'HEAD',
				url: layouturl,
				async: false,
				success: function() {
					$.ajax({
						url: layouturl,
						async: false,
						success: function(response) {
							layouthtml = response;
							include();
						}
					});
				},
				error: function() {
					// console.log('e');
				}
			});
		}

		function include() {

			var includes = getincludecomments(document.body, []),
				pattern1 = /\@include * ([^ ]+)/,
				pattern2 = /([^= ]+) *= *([^= ]+)/g,
				text, matches, name, extracted,
				i = 0, numincludes = includes.length;

			for (; i < numincludes; i++) {
				text = includes[i].nodeValue;
				matches = text.match(pattern1);
				// console.log(text, matches);
				if (matches) {
					name = matches[1];
					extracted = extract(name);
					if (extracted) {
						while (matches = pattern2.exec(text)) {
							extracted = extracted.replace(new RegExp('\{'+ matches[1] +'\}', 'g'), matches[2]);
						}
						extracted = extracted.replace(/\{[^\}]+\}/g, '');
						$(extracted).insertBefore(includes[i]);
						includes[i].parentNode.removeChild(includes[i]);
					}
				}
			}
		}

		function extract(flag) {
			var matches = layouthtml.match(new RegExp('<!-- *'+ flag +' *-->([\\s\\S]*)<!-- *// *'+ flag +' *-->'));
			return matches ? matches[1] : '';
		}

		function getincludecomments(parent, container) {
			var child = parent.firstChild;
			while(child) {
				if (child.nodeType == 8) {
					container.push(child);
				} else if (child.nodeType == 1) {
					getincludecomments(child, container);
				}
				child = child.nextSibling;
			}
			return container;
		}

	}

	function initialize() {

		body = document.body;
		$body = $(body);


		include();
		

		
		// 개별 모듈 초기화
		initialized = true;


	}


})();