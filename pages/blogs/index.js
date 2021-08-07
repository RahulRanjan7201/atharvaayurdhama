
import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { useGetUser } from '@/actions/user';
import Masthead from 'components/shared/Masthead';
import { Row, Col , Button} from 'reactstrap';
import BlogItem from 'components/BlogItem';
import BlogApi from 'lib/api/blogs';
import Link from 'next/link';
const Blogs = ({blogs}) => {
  console.log("Starting...")
  const { data, loading } = useGetUser();
  console.log("Starting...")
  return (
    <BaseLayout
      navClass="transparent" className="blog-listing-page"
      user={data} loading={loading}>
      <Masthead imagePath="/images/home-bg.jpg">
        <h1>Fresh Blogs - Simple life hacks for All</h1>
        <span className="subheading">Treatments , health Suggestion</span>
        <a href='https://telegram.me/joinchat/HK_R3PNfW345YWRl' target="_blank">
            <Button color="primary">Join Telegram</Button>
          </a>
      </Masthead>
      <BasePage
        title="Newest Blogs "
        className="blog-body">
        <Row>
          {
            blogs.map(blog =>
              <Col key={blog._id} md="10" lg="8" className="mx-auto">
                <BlogItem blog={blog}/>
                <hr></hr>
              </Col>
            )
          }
        </Row>
      </BasePage>
    </BaseLayout>
  )
}

export async function getStaticProps() {
  const { data } = await new BlogApi().getAll();
  const blogs = data.map(item => ({...item.blog, author: item.author}))
  return {
    props: { blogs },
    unstable_revalidate: 60
  }
}

export default Blogs;
