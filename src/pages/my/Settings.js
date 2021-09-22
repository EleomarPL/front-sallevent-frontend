import {Suspense, lazy} from 'react';

import ChangeDataUser from '../../components/views/user/ChangeDataUser';
import SpinnerLoading from '../../components/common/SpinnerLoading';

const ChangePasswordUser = lazy(() => import('../../components/views/user/ChangePasswordUser'));

const Settings = () => {
  return (
    <section>
      <ChangeDataUser />
      <Suspense fallback={ <SpinnerLoading /> }>
        <ChangePasswordUser />
      </Suspense>
    </section>
  );
};

export default Settings;