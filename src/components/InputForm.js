import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
const InputForm = ({data,setData}) => {
    return (
        <Formik
       
        initialValues={{ age: '', dues: '', gender: '' ,isUser:false}}
        validate={values => {
          const errors = {};
          if (!values.age) {
            errors.age = '*Required';
          } else if(values.age<0){
                errors.age="Negative number not accepted"
          }
          if(!values.dues){
            errors.dues="*Required due field"
          } else if(values.dues<0){
            errors.dues="Negative number not accepted"
          }


           else  if(!values.gender){
            errors.gender="Please select a gender "
          }
          return errors;
        }}


        onSubmit={(values) => {
            
       
          const getMaxValue=data.map(item=>item.key)
          const maxvalue=Math.max(...getMaxValue,0)
          const newData={...values,key:maxvalue+1}
          setData([...data,newData])
          localStorage.setItem('userdata',JSON.stringify([...data,newData]))
          
    

        }}
      >
        {({ isSubmitting,values }) => (
         
        
          <Form>
            
            <label className='text-md font-semibold block my-3' htmlFor="">Enter Your Age:</label>
            <Field className="border-black border w-full mx-auto py-3 pl-5 rounded" placeholder="enter you name " type="text" name="age" />
            <ErrorMessage className='text-red-600 font-bold font-xs' name="age" component="div" />
            <label className='text-md font-semibold block my-3' htmlFor="">Due:</label>
            <Field type="text" className="border-black pl-5 rounded py-3 border w-full block my-4" placeholder="Student Dues" name="dues" />
            <ErrorMessage className='text-red-600 font-bold font-xs' name="dues" component="div" />
            <label className='flex items-center gap-x-5' >
              <div>
              <label className='block text-md font-semibold ' htmlFor="location">Gender</label>
            <Field
              component="select"
      
              className="block border border-gray-500"
              name="gender"
              


            >
              

              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="third">Third Gender</option>
             


            </Field>
            <ErrorMessage className='text-red-600 font-bold font-xs' name="gender" component="div" />
              </div>
              <div>
             <label className='block text-md font-semibold ' htmlFor="">Is User</label>
            <Field type="checkbox" name="isUser" />
            {`${values.isUser?"Yes":"No"}`}
              </div>
          </label>

            <button className='btn btn-primary w-full bg-cyan-700 mt-4 text-white font-bold px-4 py-1 rounded block' type="submit" >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    );
};

export default InputForm;