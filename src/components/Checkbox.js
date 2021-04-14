import React from 'react';

const Checkbox = () => {
  return (
    <div>
      <input type="checkbox" id="agreeTerms" name="agreeTerms" value="terms" />
      <label htmlFor="agreeTerms">I agree to the terms</label>
    </div>
  );
};
export default Checkbox;
