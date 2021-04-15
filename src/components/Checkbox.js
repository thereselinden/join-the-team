import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

const CustomCheckbox = () => {
  const [checked, setChecked] = useState(false);
  console.log('checkbox', checked);

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <div>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        color="primary"
        id="agreeTerms"
      />
      {/* <input type="checkbox" id="agreeTerms" name="agreeTerms" value="terms" /> */}
      <Typography variant="body1">
        <label htmlFor="agreeTerms">I agree to the terms</label>
      </Typography>
    </div>
  );
};
export default CustomCheckbox;
