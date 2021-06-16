import { PLACE_ORDER } from '../actions/placeOrderAction';
import { vars } from './commonData';


const orderReducer = (state = null, action) => {
	switch (action.type) {
        case PLACE_ORDER + vars.f:
			alert("The order was placed successfully.");
            return "success";
		case PLACE_ORDER + vars.r:
			alert("Some error occured.The order could not be placed.");
			return "failure";
		default:
			return state;
	}
}

export default orderReducer;