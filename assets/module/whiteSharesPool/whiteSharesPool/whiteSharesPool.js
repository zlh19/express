
// require('/assets/widget/dialog/dialog.js');
// var dialog=new Dialog();
// dialog.show('111')
	// var data={
	//     "uid":17132,
	//     "token":"7f826821f38c4a7d928420b32fcdb81f"
	// };
	var data={
    		"uid":27,
    		"token":"71edbaf26fce40da93e27e2cbdf29069"
		}


	 $.ajax({
	    url:'/ApiTest',
	    type:'post',
	    data:JSON.stringify(data),
	    contentType: "application/json",
	    success:function(ret){
	        console.log(ret)
	    }
	 })


// $.ajax({
// 	url: '/factory/getProductsInfor',
// 	type: 'post',
// 	data: data,
// 	dataType: 'json',
// 	success: function(ret) {
// 		console.log(ret)
// 	}
// })
// var data={
//     username:10000000000,
//     password:111111
// }
// $.ajax({
// 	url: '/todos',
// 	type: 'post',
//     data:data,
// 	dataType: 'json',
// 	success: function(ret) {
// 		console.log(ret)
// 	}
// })



