function ClassicTemplate({ data, themeOptions }) {
  const { personalInfo, skills, experience, education, customSections } = data
  
  const formatDate = (dateString) => {
    if (!dateString) return ''
    if (dateString === 'Present') return 'Present'
    
    try {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
    } catch (e) {
      return dateString
    }
  }

  return (
    <div className="p-8">
      {/* Header */}
      <header className="mb-6 border-b-2 pb-4" style={{ borderColor: themeOptions.primaryColor }}>
        <h1 className="text-3xl font-bold uppercase tracking-wider mb-1">
          {personalInfo.name}
        </h1>
        <p className="text-xl mb-2">{personalInfo.title}</p>
        <div className="flex flex-wrap gap-4 text-sm">
          {personalInfo.email && (
            <div className="flex items-center gap-1">
              <span>Email:</span>
              <span>{personalInfo.email}</span>
            </div>
          )}
          {personalInfo.phone && (
            <div className="flex items-center gap-1">
              <span>Phone:</span>
              <span>{personalInfo.phone}</span>
            </div>
          )}
          {personalInfo.address && (
            <div className="flex items-center gap-1">
              <span>Location:</span>
              <span>{personalInfo.address}</span>
            </div>
          )}
        </div>
      </header>

      {/* Two-column layout */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left column */}
        <div className="md:w-2/3">
          {/* Summary */}
          {personalInfo.summary && (
            <section className="mb-6">
              <h2 className="text-lg font-bold uppercase mb-2" style={{ color: themeOptions.primaryColor }}>
                Professional Summary
              </h2>
              <p>{personalInfo.summary}</p>
            </section>
          )}

          {/* Experience */}
          {experience.length > 0 && (
            <section className="mb-6">
              <h2 className="text-lg font-bold uppercase mb-3" style={{ color: themeOptions.primaryColor }}>
                Work Experience
              </h2>
              <div className="space-y-4">
                {experience.map(exp => (
                  <div key={exp.id}>
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-semibold">{exp.jobTitle}</h3>
                      <p className="text-sm italic">
                        {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                      </p>
                    </div>
                    <p className="text-sm font-medium">{exp.company}{exp.location && `, ${exp.location}`}</p>
                    <p className="mt-1 text-sm">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {education.length > 0 && (
            <section className="mb-6">
              <h2 className="text-lg font-bold uppercase mb-3" style={{ color: themeOptions.primaryColor }}>
                Education
              </h2>
              <div className="space-y-4">
                {education.map(edu => (
                  <div key={edu.id}>
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-semibold">{edu.degree}</h3>
                      <p className="text-sm italic">
                        {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                      </p>
                    </div>
                    <p className="text-sm font-medium">{edu.institution}{edu.location && `, ${edu.location}`}</p>
                    {edu.description && <p className="mt-1 text-sm">{edu.description}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right column */}
        <div className="md:w-1/3">
          {/* Skills */}
          {skills.length > 0 && (
            <section className="mb-6">
              <h2 className="text-lg font-bold uppercase mb-3" style={{ color: themeOptions.primaryColor }}>
                Skills
              </h2>
              <ul className="list-disc list-inside space-y-1">
                {skills.map(skill => (
                  <li key={skill.id}>{skill.name}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Custom Sections */}
          {customSections.map(section => (
            <section key={section.id} className="mb-6">
              <h2 className="text-lg font-bold uppercase mb-3" style={{ color: themeOptions.primaryColor }}>
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.items.map(item => (
                  <div key={item.id}>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ClassicTemplate