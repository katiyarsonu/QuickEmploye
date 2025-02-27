function PersonalInfoForm({ data, onChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target
    onChange({
      ...data,
      [name]: value
    })
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Personal Information</h2>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          value={data.name || ''}
          onChange={handleChange}
          className="input-field"
          placeholder="John Doe"
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Professional Title
        </label>
        <input
          type="text"
          name="title"
          value={data.title || ''}
          onChange={handleChange}
          className="input-field"
          placeholder="Software Developer"
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={data.email || ''}
          onChange={handleChange}
          className="input-field"
          placeholder="john.doe@example.com"
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          value={data.phone || ''}
          onChange={handleChange}
          className="input-field"
          placeholder="(123) 456-7890"
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Address
        </label>
        <input
          type="text"
          name="address"
          value={data.address || ''}
          onChange={handleChange}
          className="input-field"
          placeholder="San Francisco, CA"
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Professional Summary
        </label>
        <textarea
          name="summary"
          value={data.summary || ''}
          onChange={handleChange}
          rows="4"
          className="input-field"
          placeholder="Brief overview of your professional background and key strengths"
        ></textarea>
      </div>
    </div>
  )
}

export default PersonalInfoForm