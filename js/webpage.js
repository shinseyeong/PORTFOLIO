/*웹페이지 */

$(function(){


	/*첫번째 웹페이지 */
	$(".webpage01").mouseenter(function(){

		$(".webpage01 img").stop().animate({marginTop:-1400},4000);

	}).mouseleave(function(){

		$(".webpage01 img").stop().animate({marginTop:0},3000);
	});


	/*두번째 웹페이지 */
	$(".webpage02").mouseenter(function(){

		$(".webpage02 img").stop().animate({marginTop:-700},3000);

	}).mouseleave(function(){

		$(".webpage02 img").stop().animate({marginTop:0},3000);
	});


	/*세번째 웹페이지 */
	$(".webpage03").mouseenter(function(){

		$(".webpage03 img").stop().animate({marginTop:-4400},5000);

	}).mouseleave(function(){

		$(".webpage03 img").stop().animate({marginTop:0},3000);
	});


	/*네번째 웹페이지 */
	$(".webpage04").mouseenter(function(){

		$(".webpage04 img").stop().animate({marginTop:-1100},4000);

	}).mouseleave(function(){

		$(".webpage04 img").stop().animate({marginTop:0},3000);
	});




});