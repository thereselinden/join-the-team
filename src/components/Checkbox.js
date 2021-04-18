import React, { useState } from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const CustomCheckbox = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <FormControlLabel
      checked={checked}
      onChange={handleChange}
      control={<Checkbox color="primary" />}
      label="I agree to the terms"
      labelPlacement="end"
    />
  );
};
export default CustomCheckbox;
