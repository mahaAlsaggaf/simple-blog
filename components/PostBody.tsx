import CommentList from '../components/Comments/CommentList';
import CommentBox from '../components/Comments/CommentBox';
import DivSeparator from '../components/DivSeparator';
import { RiLinkedinFill } from 'react-icons/ri'; 
import { FaTwitter, FaFacebookF } from 'react-icons/fa'; 






export default function PostBody({ content }) {
  return (
    <section className="section">
      <div className="relative container mx-auto my-1">
       <div className="bg-white p-4">
          <div className=""
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <DivSeparator/>
          <div className="row d-flex justify-content-lg-between align-items-center my-3">
           <div className="col-lg-6 col-md-12 col-sm-12 text-md-center text-sm-center text-lg-end py-2" >
                <a className='mx-1 btn btn-outline-light rounded-pill bg-light text-secondary'> #تسويق</a>
                <a className='mx-1 btn btn-outline-light rounded-pill bg-light text-secondary'>#استراتجيات</a>
                <a className='mx-1 btn btn-outline-light rounded-pill bg-light text-secondary'>#بيع منتجات</a>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 text-md-center text-sm-center text-lg-start py-2" >
                <a className='mx-1 circle btn btn-outline-light text-secondary'> <FaFacebookF className="" size='16' /></a>
                <a className='mx-1 circle btn btn-outline-light text-secondary'> <FaTwitter className="" size='16' /></a>
                <a className='mx-1 circle btn btn-outline-light text-secondary'> <RiLinkedinFill className="" size='16'/></a>
            </div>
          </div> 
          <DivSeparator/>  
          <CommentList/>
          <CommentBox/>
        </div>
        
      </div>
    </section>
  )
}
