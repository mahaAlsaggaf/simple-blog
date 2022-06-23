// import CommentList from '../components/Comments/CommentList';
// import CommentBox from '../components/Comments/CommentBox';
// import SectionSeparator from '../components/SectionSeparator';
// import Container from '../components/Container';



export default function PostBody({ content }) {
  return (
    <section className="section">
      <div className="relative container mx-auto my-1">
        <div className="bg-white p-4"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* <Container>
          <SectionSeparator/>
          <SectionSeparator/>
          <CommentList/>
          <CommentBox/>
        </Container> */}
        
      </div>
    </section>
  )
}
