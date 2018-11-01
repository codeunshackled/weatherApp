import React from 'react';

const Form = props => (

			<React.Fragment>
				<form onSubmit={props.getWeather}>
					<input type="text" name="city" placeholder="City..."/>
					<input type="text" name="country" placeholder="Country..."/>
					<button>Click Me!</button>
				</form>
			</React.Fragment>

)

export default Form;