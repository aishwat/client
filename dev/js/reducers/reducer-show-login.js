export default function (state={},action) {


	switch(action.type){
		case "TOGGLE_LOGIN":
			return {
				show: !state.show
			}
			break;
	}
	return {
		...state
	}
}