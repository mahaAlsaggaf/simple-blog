
import DivSeparator from '../../components/DivSeparator';
import {MdOutlineWatchLater} from 'react-icons/md'; 

export default function CommentList() {
    return ( 
      <>
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-12 col-lg-12">
              <div className="card border-0 text-dark">
                <h4 className="mb-2">
                  <div className="vr"></div>
                  التعليقات (3) 
                </h4>
                <div className="text-right">                 
                  <div className="d-flex flex-fill flex-start">
                    <div>
                      <div className="d-flex justify-content-between my-3">
                        <h6 className="fw-bold mb-1">أبو جود</h6>
                        <p className="mb-0">
                          <MdOutlineWatchLater className="gray inline" size='14'/> منذ يوم 
                        </p>
                      </div>   
                      <p className="mb-0">
                        مع المنافسة القوية في السوق، يجب أن يستثمر متجرك الإلكتروني في التسويق لجذب عملاء جدد، من الممكن الاستفادة من التغليف الجمالي الاحترافي للعثور على عملاء جدد لمتجرك.
                      </p>
                      </div>
                  </div>
                </div>

                <DivSeparator/>

                <div className="text-right">                 
                  <div className="d-flex flex-start">
                    <div>
                      <div className="d-flex justify-content-between my-3">
                        <h6 className="fw-bold mb-1">أبو جود</h6>
                        <p className="mb-0">
                          <MdOutlineWatchLater className="gray inline" size='14'/> منذ يوم 
                        </p>
                      </div>   
                      <p className="mb-0">
                        مع المنافسة القوية في السوق، يجب أن يستثمر متجرك الإلكتروني في التسويق لجذب عملاء جدد، من الممكن الاستفادة من التغليف الجمالي الاحترافي للعثور على عملاء جدد لمتجرك.
                      </p>
                      </div>
                  </div>
                </div>

                <DivSeparator/>

                <div className="text-right mb-2">                 
                  <div className="d-flex flex-start">
                    <div>
                      <div className="d-flex justify-content-between my-3">
                        <h6 className="fw-bold mb-1">أبو جود</h6>
                        <p className="mb-0">
                          <MdOutlineWatchLater className="gray inline" size='14'/> منذ يوم 
                        </p>
                      </div>   
                      <p className="mb-0">
                        مع المنافسة القوية في السوق، يجب أن يستثمر متجرك الإلكتروني في التسويق لجذب عملاء جدد، من الممكن الاستفادة من التغليف الجمالي الاحترافي للعثور على عملاء جدد لمتجرك.
                      </p>
                      </div>
                  </div>
                </div>

                <h4 className="my-4">
                  <span className="vr"></span>
                  كن أول من يعلق

                </h4>
              </div>
            </div>
          </div>
        </div>

    </>
  );
}