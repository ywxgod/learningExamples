(function(){

	function init(){
		var orderForm = document.forms.order;
		var saveBtn = document.getElementById('saveOrder');
		var saveBtnClicked = false;

		function saveForm(){
			if(!('formAction' in document.createElement('input'))){
				var formAction = saveBtn.getAttribute('formAction');
				orderForm.setAttribute('action', formAction);
			}
			saveBtnClicked = true;
		}

		saveBtn.addEventListener('click', saveForm, false);

		var qtyFields = orderForm.quantity;
		var totalFields = document.getElementsByClassName('item_total');
		var orderTotalFields = document.getElementById('order_total');

		function formatMoney(value){
			return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
		}

		function calculateTotals(){
			var i=0;
			var ln = qtyFields.length;
			var itemQty = 0,
				itemPrice = 0,
				itemTotal = 0,
				itemTotalMoney = '$0.00',
				orderTotal = 0.00,
				orderTotalMoney = '$0.00';
			for(;i<ln;i++){
				if(!!qtyFields[i].valueAsNumber){
					itemQty = qtyFields[i].valueAsNumber||0;
				}else{
					itemQty = parseFloat(qtyFields[i].value);
				}
				if(!!qtyFields.dataset){
					itemPrice = parseFloat(qtyFields[i].dataset.price);
				}else{
					itemPrice = parseFloat(qtyFields[i].getAttribute('data-price'))
				}
				itemTotal = itemQty*itemPrice;
				itemTotalMoney = '$'+formatMoney(itemTotal.toFixed(2));
				orderTotal += itemTotal;
				orderTotalMoney = '$'+formatMoney(orderTotal.toFixed(2));

				if(!!totalFields[i].value){
					totalFields[i].value = itemTotalMoney;
					orderTotalFields.value = orderTotalMoney;
				}else{
					totalFields[i].innerHTML = itemTotalMoney;
					orderTotalFields.innerHTML = orderTotalMoney;
				}
			}
		}

		calculateTotals();

		function qtyListeners(){
			var i=0,
				ln=qtyFields.length;
			for(;i<ln;i++){
				qtyFields[i].addEventListener('input', calculateTotals, false);
				qtyFields[i].addEventListener('keyup', calculateTotals, false);
			}
		}

		qtyListeners();

		function doCustomValidity(field, msg){
			if('setCustomValidity' in field){
				field.setCustomValidity(msg);
			}else{
				field.validationMessage = msg;
			}
		}

		function validateForm(){
			doCustomValidity(orderForm.name,'');
			doCustomValidity(orderForm.password, '');
			doCustomValidity(orderForm.confirm_password,'');
			doCustomValidity(orderForm.card_name, '');

			if(orderForm.name.value.length<4){
				doCustomValidity(orderForm.name, 'Full name must be at least 4 chars long');
			}
			if(orderForm.password.value.length<8){
				doCustomValidity(orderForm.password, 'Password must be at least 8 chars long');
			}
			if(orderForm.password.value!=orderForm.confirm_password.value){
				doCustomValidity(orderForm.confirm_password, 'Confirm password must match Password');
			}
			if(orderForm.card_name.value.length<4){
				doCustomValidity(orderForm.card_name, 'Name on Card must be at least 4 chars long');
			}
		}

		orderForm.addEventListener('input', validateForm, false);
		orderForm.addEventListener('keyup', validateForm, false);
	}



	window.addEventListener('load', init, false);
})();