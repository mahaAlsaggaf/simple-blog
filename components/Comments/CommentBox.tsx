import {Input} from "reactstrap";

export default function CommentBox() {

    return ( 
      <>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <Input type="email" className="form-control form-control-lg" id="exampleFormControlInput1" placeholder="name@example.com"/>  
      </div>
      <div className="mb-3">
        <label className="form-label">Example textarea</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" ></textarea>
      </div>
    </>
  );
}