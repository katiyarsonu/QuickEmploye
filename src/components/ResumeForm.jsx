import { useState } from 'react'
import PersonalInfoForm from './forms/PersonalInfoForm'
import SkillsForm from './forms/SkillsForm'
import ExperienceForm from './forms/ExperienceForm'
import EducationForm from './forms/EducationForm'
import CustomSectionForm from './forms/CustomSectionForm'
import { v4 as uuidv4 } from 'uuid'

function ResumeForm({ data, onChange }) {
  const [activeSection, setActiveSection] = useState('personalInfo')

  const handlePersonalInfoChange = (personalInfo) => {
    onChange({ ...data, personalInfo })
  }

  const handleSkillsChange = (skills) => {
    onChange({ ...data, skills })
  }

  const handleExperienceChange = (experience) => {
    onChange({ ...data, experience })
  }

  const handleEducationChange = (education) => {
    onChange({ ...data, education })
  }

  const handleCustomSectionsChange = (customSections) => {
    onChange({ ...data, customSections })
  }

  const addCustomSection = () => {
    const newSection = {
      id: uuidv4(),
      title: "New Section",
      items: []
    }
    
    onChange({
      ...data,
      customSections: [...data.customSections, newSection]
    })
    
    setActiveSection(`customSection-${newSection.id}`)
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="mb-6">
        <div className="flex flex-wrap gap-2 mb-4">
          <button 
            className={`btn ${activeSection === 'personalInfo' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveSection('personalInfo')}
          >
            Personal Info
          </button>
          <button 
            className={`btn ${activeSection === 'skills' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveSection('skills')}
          >
            Skills
          </button>
          <button 
            className={`btn ${activeSection === 'experience' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveSection('experience')}
          >
            Experience
          </button>
          <button 
            className={`btn ${activeSection === 'education' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveSection('education')}
          >
            Education
          </button>
          {data.customSections.map(section => (
            <button 
              key={section.id}
              className={`btn ${activeSection === `customSection-${section.id}` ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setActiveSection(`customSection-${section.id}`)}
            >
              {section.title}
            </button>
          ))}
          <button 
            className="btn bg-green-600 text-white hover:bg-green-700"
            onClick={addCustomSection}
          >
            + Add Section
          </button>
        </div>
      </div>

      <div className="form-container">
        {activeSection === 'personalInfo' && (
          <PersonalInfoForm 
            data={data.personalInfo} 
            onChange={handlePersonalInfoChange} 
          />
        )}
        
        {activeSection === 'skills' && (
          <SkillsForm 
            skills={data.skills} 
            onChange={handleSkillsChange} 
          />
        )}
        
        {activeSection === 'experience' && (
          <ExperienceForm 
            experience={data.experience} 
            onChange={handleExperienceChange} 
          />
        )}
        
        {activeSection === 'education' && (
          <EducationForm 
            education={data.education} 
            onChange={handleEducationChange} 
          />
        )}
        
        {activeSection.startsWith('customSection-') && (
          <CustomSectionForm 
            sections={data.customSections}
            currentSectionId={activeSection.replace('customSection-', '')}
            onChange={handleCustomSectionsChange}
          />
        )}
      </div>
    </div>
  )
}

export default ResumeForm