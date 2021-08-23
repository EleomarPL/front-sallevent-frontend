import React, { useState } from 'react';

import ButtonUpdatedDataUser from '../../buttons/ButtonUpdatedDataUser';
import {configInputsSettings} from '../../../data/my/inputsSettings';

const ChangeDataUser = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeData = (evt) => {
    evt.preventDefault();
  };

  return (
    <div style={ {background: 'white'} }>
      <form id="form-updated-data-user" onSubmit={ handleChangeData }>
        <div className="d-flex align-items-center flex-wrap p-3 w-100 bd-highlight" >
          <div className="d-flex flex-column flex-grow-1 bd-highlight">
            { configInputsSettings &&
              configInputsSettings.map(data =>
                <div
                  key={ data.name }
                  className="input-group w-100"
                >
                  <label
                    htmlFor={ data.name }
                    className="py-2 w-100"
                  >
                    { data.name }
                  </label>
                  <input
                    id={ data.name }
                    type={ data.type }
                    className="form-control w-100"
                    style={ {background: '#eeeeee'} }
                    required
                  />
                </div>
              )
            }
          </div>
          <div className="flex-shrink-1 bd-highlight m-auto">
            <picture>
              <source
                srcSet={ require('../../../img/my/settings/settings.webp').default }
              />
              <img
                src={ require('../../../img/my/settings/settings.png').default }
                alt="settings"
              />
            </picture>
          </div>
        </div>
      </form>
      <div className="py-3 d-flex justify-content-center">
        <ButtonUpdatedDataUser
          isLoading={ isLoading }
        />
      </div>
    </div>
  );
};

export default ChangeDataUser;