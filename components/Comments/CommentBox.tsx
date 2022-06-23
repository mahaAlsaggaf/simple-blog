import {Input} from "reactstrap";

export default function CommentBox() {

    return ( 
      <>
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-12 col-lg-12">
            <form className="row g-3 needs-validation" noValidate>
              <div className="col-md-12 pb-4">
                <label className="form-label">اكتب تعليقك</label>
                <textarea placeholder="برجاء كتابة التعليق الخاص بك" className="h-100 form-control" id="" required></textarea>
              </div>
              <div className="col-md-6">
                <label className="form-label">الاسم</label>
                <Input placeholder="برجاء كتابة الاسم" type="text" className="form-control" id="" required/>
                <div className="valid-feedback">
                  صحيح
                </div>
              </div>
              <div className="col-md-6">
                <label className="form-label">البريد الإلكتروني</label>
                <Input placeholder="برجاء ادخال البريد الإلكتروني" type="email" className="form-control" id="" required/>
                <div className="valid-feedback">
                  صحيح
                </div>
              </div>
              
              <div className="col-12">
                <button className="text-white bg-teal border-0 px-5 py-2 small rounded" type="submit">أضف تعليقك </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      
    </>
  );
}