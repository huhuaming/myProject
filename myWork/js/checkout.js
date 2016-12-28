(function($, w){
	
	var form = {
		phone : {
			regex : /^1\d{10}$/,
			error : '请填写手机号'
		},
		password : {
			regex : /[\d\w]{6,16}/,
			error : '请填写密码'
		},
		repassword : {
			error : '请填写正确的密码'
		}	
	}
	
	//验证
	var checkout = {
		
		checkfrom : function(obj, val){
			
			var _this = obj,
				type = _this.attr('name');
												
			var $obj = $("input[name="+type+"]");
			
			switch (type) {
				case 'repassword' :	
					
					if ( !_this.val() ) {
						_this.next().show();
						return ;						
					} 
				
					if ( _this.val() == _this.parent().prev().find('#password1').val() ) {
						checkout.success(_this);
						return true;						
					}				
					break;
				default :
					if (form[type].regex.test(val)) {
						checkout.success(_this);
						return true;
					}
					break;
			}
			
			checkout.error(_this, type);
			return ;					
		
		},
		
		//失败
		error : function(obj,type){
			obj.next().hide();

		},
		
		//成功
		success : function(obj){
			obj.css({
				 border: '1px solid #009849'
			});
			obj.next().hide();
		}
	};

	//初始化
	//checkout.init();
	
	w.validate = checkout;

})(jQuery, window);