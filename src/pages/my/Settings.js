import React, { useState } from 'react';

import ChangeDataUser from '../../components/views/user/ChangeDataUser';
import ChangePasswordUser from '../../components/views/user/ChangePasswordUser';

const Settings = () => {
  return (
    <section>
      <ChangeDataUser />
      <ChangePasswordUser />
    </section>
  );
};

export default Settings;