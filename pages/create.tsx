import { NextPage } from 'next';

import { Layout } from '../components/Layout';
import { CreateEvent } from '../components/CreateEvent';

const Create: NextPage = () => (
  <Layout>
    <CreateEvent />
  </Layout>
);

export default Create;
