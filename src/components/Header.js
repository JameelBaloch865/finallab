import React, { useState } from 'react';
import sampleImage from './path-to-your-image.jpg'; // Import your image file

const InvestmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    investmentType: 'Looking to invest',
    agreeTerms: false,
    termsDetails: '', // Additional data for checkbox
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Use the value for non-checkbox inputs
    // For checkboxes, use the checked value and set termsDetails accordingly
    const inputValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: inputValue,
      termsDetails: checked ? 'Agreed to Terms and Conditions' : '',
    });
  };

  const handleRadioChange = (e) => {
    setFormData({
      ...formData,
      investmentType: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="card" style={{ backgroundColor: 'red', padding: '20px', borderRadius: '10px' }}>
      <div className="card-content">
        <img src={sampleImage} alt="Investment" style={{ width: '100%', maxWidth: '150px', marginRight: '20px' }} />
        <h2>Investment Inquiry</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Mobile Number:
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Investment Type:
            <div>
              <label>
                <input
                  type="radio"
                  name="investmentType"
                  value="Looking to invest"
                  checked={formData.investmentType === 'Looking to invest'}
                  onChange={handleRadioChange}
                />
                Looking to Invest
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="investmentType"
                  value="Interested but need more information"
                  checked={formData.investmentType === 'Interested but need more information'}
                  onChange={handleRadioChange}
                />
                Interested but need more information
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="investmentType"
                  value="Not interested"
                  checked={formData.investmentType === 'Not interested'}
                  onChange={handleRadioChange}
                />
                Not interested
              </label>
            </div>
          </label>
          <label>
            Agree to Terms and Conditions:
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              required
            />
            <p>{formData.termsDetails}</p>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default InvestmentForm;
