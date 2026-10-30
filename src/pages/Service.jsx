import { Container, PageHeader } from "../components/ui.jsx";
import ServiceGrid from "../components/ServiceGrid.jsx";
import Cta from "../components/Cta.jsx";

export default function Service() {
  return (
    <>
      <PageHeader
        title='Service'
        description='Services and price estimates. The final price will be adjusted based on the scope of work.'
      />
      <Container className='pb-24'>
        <ServiceGrid />
      </Container>
      <Cta />
    </>
  );
}
