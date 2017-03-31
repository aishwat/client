import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import Checkbox from 'material-ui/Checkbox'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import asyncValidate from '../helpers/asyncValidate'
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardTitle, CardHeader} from 'material-ui/Card';

const style = {
  marginTop: 12,
};
const cardStyle = {
  marginRight:70,
  marginLeft:'auto',
  marginTop: 70,
  padding:40,
  width: '350px'
};


const validate = values => {
  const errors = {}
  const requiredFields = [ 'firstName', 'lastName', 'email','password' ]
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)

// const renderCheckbox = ({ input, label }) => (
//   <Checkbox label={label}
//     checked={input.value ? true : false}
//     onCheck={input.onChange}/>
// )

// const renderRadioGroup = ({ input, ...rest }) => (
//   <RadioButtonGroup {...input} {...rest}
//     valueSelected={input.value}
//     onChange={(event, value) => input.onChange(value)}/>
// )

// const renderSelectField = ({ input, label, meta: { touched, error }, children, ...custom }) => (
//   <SelectField
//     floatingLabelText={label}
//     errorText={touched && error}
//     {...input}
//     onChange={(event, index, value) => input.onChange(value)}
//     children={children}
//     {...custom}/>
// )

const SignupForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <Card style={cardStyle} >
    {<CardTitle title="Signup" /> }
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="firstName" component={renderTextField} label="First Name" fullWidth={true} />
      </div>
      <div>
        <Field name="lastName" component={renderTextField} label="Last Name" fullWidth={true} />
      </div>
      <div>
        <Field name="email" component={renderTextField} label="Email" fullWidth={true} />
      </div>
      <div>
        <Field name="password" component={renderTextField} label="Password" fullWidth={true} />
      </div>
      
       <div>
        <RaisedButton type="submit" primary={true} label="Signup" fullWidth={true} style={style}   />
        {/*<button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values 
        </button> */}
        </div>

    </form>
    </Card>
  )
}

export default reduxForm({
  form: 'SignupForm',  // a unique identifier for this form
  validate,
  asyncValidate
})(SignupForm)