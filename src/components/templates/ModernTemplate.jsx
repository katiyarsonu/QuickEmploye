function ModernTemplate({ data, themeOptions }) {
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
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2" style={{ color: themeOptions.primaryColor }}>
          {personalInfo.name}
        </h1>
        <p className="text-xl mb-3">{personalInfo.title}</p>
        <div className="flex flex-wrap justify-center gap-3 text-sm">
          {personalInfo.email && (
            <span>{personalInfo.email}</span>
          )}
          {personalInfo.phone && (
            <span>{personalInfo.phone}</span>
          )}
          {personalInfo.address && (
            <span>{personalInfo.address}</span>
          )}
        </div>
      </header>

      {/* Summary */}
      {personalInfo.summary && (
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-2 pb-1 border-b-2" style={{ borderColor: themeOptions.primaryColor }}>
            Professional Summary
          </h2>
          <p>{personalInfo.summary}</p>
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-2 pb-1 border-b-2" style={{ borderColor: themeOptions.primaryColor }}>
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map(skill => (
              <span 
                key={skill.id} 
                className="px-3 py-1 rounded-full text-sm"
                style={{ 
                  backgroundColor: `${themeOptions.primaryColor}20`,
                  color: themeOptions.textColor
                }}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-2 pb-1 border-b-2" style={{ borderColor: themeOptions.primaryColor }}>
            Work Experience
          </h2>
          <div className="space-y-4">
            {experience.map(exp => (
              <div key={exp.id}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{exp.jobTitle}</h3>
                    <p className="text-sm">
                      {exp.company}
                      {exp.location && ` • ${exp.location}`}
                    </p>
                  </div>
                  <p className="text-sm">
                    {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                  </p>
                </div>
                <p className="mt-1 text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-2 pb-1 border-b-2" style={{ borderColor: themeOptions.primaryColor }}>
            Education
          </h2>
          <div className="space-y-4">
            {education.map(edu => (
              <div key={edu.id}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{edu.degree}</h3>
                    <p className="text-sm">
                      {edu.institution}
                      {edu.location && ` • ${edu.location}`}
                    </p>
                  </div>
                  <p className="text-sm">
                    {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                  </p>
                </div>
                {edu.description && <p className="mt-1 text-sm">{edu.description}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Custom Sections */}
      {customSections.map(section => (
        <section key={section.id} className="mb-6">
          <h2 className="text-lg font-bold mb-2 pb-1 border-b-2" style={{ borderColor: themeOptions.primaryColor }}>
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
  )
}

export default ModernTemplate