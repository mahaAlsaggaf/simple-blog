import {Input} from "reactstrap";
import React, {useState} from "react";



export default function CommentBox() {

  const [focused, setFocused] = useState(false);
  const [values, setValues] = useState({
    message: "",
    username: "",
    email: ""
  });



  const inputs = [
    // TODO textarea validation 
    {
      id: 1,
      name: "message",
      type: "textarea",
      placeholder: "برجاء كتابة التعليق الخاص بك",
      errormessage: "يجب أن لا يزيد التعلبق عن 500 حرف",
      label: "اكتب تعليقك",
      maxLength:100, 
      className:"form-control h-100",
      parentclass:"col-md-12 pb-4",
    },
    {
      id: 2,
      name: "username",
      type: "text",
      placeholder: "برجاء كتابة الاسم",
      errormessage:"الاسم يجب أن لا يقل عن ٣-١٦ حرف ولا يحتوي على أي احرف خاصه",
      label: "الاسم",
      pattern: "^[A-Za-z0-9]{3,16}$",
      className:"form-control",      
      parentclass:"col-md-6",
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "برجاء ادخال البريد الإلكتروني",
      errormessage: "الرجاء كتابة بريد الكتروني صحيح",
      label: "البريد الإلكتروني",
      className:"form-control",
      parentclass:"col-md-6",
      required: true,
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

  };


  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  
  const handleFocus = (e) => {
    setFocused(true);
  };
  
  

    return ( 
    <>
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-12 col-lg-12">
            <form onSubmit={handleSubmit} className="row g-3" noValidate>
              {inputs.map((input) => (
                  <div className={input.parentclass}>
                    <label className="form-label">{input.label}</label>
                    <Input {...input}
                      key={input.id}
                      value={values[input.name]}
                      onChange={onChange}        
                      onBlur={handleFocus}
                      focused={focused.toString()}
                      onFocus={(e) =>
                        (input.name === "message" && e.target.value.length < 3)?
                        (input.className += " invalid"):(input.className += " valid")
                      }
                      >
                    </Input>
                    <span className="error">{input.errormessage}</span>
                  </div>
                )
              )}
              <div className="col-12">
                <button className="text-white bg-teal border-0 px-5 py-2 small rounded" type="submit" onClick={handleSubmit}>أضف تعليقك </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}