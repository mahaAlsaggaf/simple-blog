import Navbar from "../components/Navbars/DesktopNavigation";
import Footer from "../components/Footers/Footer";
import HeaderHome from '../components/Headers/HeaderHome';
import PostBannerImage from '../components/Posts/PostBannerImage';
import PostSquaredImage from '../components/Posts/PostSquaredImage';
import PostSideImage from '../components/Posts/PostSideImage';
import PostUpperImage from '../components/Posts/PostUpperImage';
import PostText from '../components/Posts/PostText';


export default function Home({ allPostsData }) {
  return (
      <body id="page-transition" className="font-dinnextltarabic bg-verylightergray rtl">
        <Navbar/>
        <HeaderHome/>
        <div className="mt-14 md:mx-24">
          <PostSquaredImage/>
          <PostSideImage/>
          <hr className="fill-lightgray my-16"></hr>
          <PostBannerImage/>
          <PostUpperImage/>
          <PostText/>
        </div>
        <Footer/>
      </body>


  )
}

