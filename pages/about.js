

import { useEffect } from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { useGetUser } from '@/actions/user';
import { Row, Col } from 'reactstrap';

const About = () => {
  const { data, loading } = useGetUser();

  useEffect(() => {
    return () => {
      window.__isAboutLoaded = true;
    }
  })

  const createFadeInClass = () => {
    if (typeof window !== 'undefined') {
      return window.__isAboutLoaded ? '' : 'fadein';
    }

    return 'fadein';
  }


  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage
        title="About"
        className="about-page">
        <Row className="mt-5">
          <Col md="6">
            <div className="left-side">
              <h1 className={`title ${createFadeInClass()}`}>Hello, Welcome</h1>
              <h4 className={`subtitle ${createFadeInClass()}`}>To About Page</h4>
              <p className={`subsubTitle ${createFadeInClass()}`}>Feel free to read short description about ATHARVA AYURDHAMA.</p>
            </div>
          </Col>
          <Col md="6">
            <div className={`${createFadeInClass()}`}>
              <p> 
              ATHARVA AYURDHAMA is a dedicated attempt to recreate the wonders of Ayurveda in the modern world. Apart from rendering valuable service in alleviating the sufferings and providing optimal health solutions, the ATHARVA group has branched itself into various related fields. The conglomeration of many ventures under the shade of the Atharva group facilitates efficient functioning in specific areas.
ATHARVA AYURDHAMA was established in the year 2003 with an intention of providing effective and economical healthcare service to the mankind using the traditional heritage of Ayurveda with the main focus on PREVENTION, CURE and WELLNESS.

                 </p>
              <p>
              ATHARVA AYURDHAMA is a pioneer in promoting research and evidence-based Ayurveda. The knowledge acquired through tradition is rendered with a modern touch by constantly innovating and adopting the classical treatments to suit the present needs of the healthcare system.
              </p>
              <p>
              The team “ATHARVA” put constant efforts in giving highest customer satisfaction, conceives maximum happy customers till date and now trying to reach them in all over India. The global popularity of Ayurveda and raising recognition of ATHARVA gave window to our first national wellness center at Kangra, Himachal Pradesh.
              </p>
              <p>
              ATHARVA works with a highly motivated team of qualified doctors and well-trained therapists in providing services like expert consultation, nadipariksha, prakruthi analysis, panchakarma, specialized treatments for various diseases, yoga, naturopathy and diet counseling. We are specialized in wellness programs like Joint care, cancer-care, migraine, Gyno-care, Gastrointestinal Diseases, Detoxification & Rejuvenation, Stress management & Auto Immune Disorders, Infertility support, Beauty & Hair care therapies and Panchakarma Treatments.
              </p>
            </div>
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  )
}

export default About;
