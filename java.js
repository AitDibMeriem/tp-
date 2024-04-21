function prices(a) {
	if (a == 0) return 100;
	else if (a == 1) return 200;
	else if (a == 2) return 300;
	else if (a == 3) return 400;
	else if (a == 4) return 500;
	return 0;
}

function result() {
    const inputs = document.querySelectorAll("input");
    const selects = document.querySelectorAll("select");

    const price1 = prices(parseInt(selects[0].value)) ; 
    const price2 = prices(parseInt(selects[1].value)) ; 
    const price3 = prices(parseInt(selects[2].value)) ;
	  

    const amount1 = price1 * parseInt(inputs[0].value);
    const amount2 = price2 * parseInt(inputs[1].value);
    const amount3 = price3 * parseInt(inputs[2].value);
	
	

    const sum = amount1 + amount2 + amount3;

    let state = true;

    if (parseInt(inputs[0].value) < 0 || parseInt(inputs[1].value) < 0 || parseInt(inputs[2].value) < 0) {
        state = false;
    }

    let exoneration = 0;
    if (!inputs[3].checked) {
        exoneration = sum * 0.19;
    }

    let reduction = 0;
    if (inputs[5].checked) {
        reduction = 0.05;
    }
    if (inputs[6].checked) {
        reduction = 0.1;
    }