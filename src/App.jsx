import { useState, useEffect } from 'react'
import ResumeForm from './components/ResumeForm'
import ResumePreview from './components/ResumePreview'
import TemplateSelector from './components/TemplateSelector'
import Sidebar from './components/Sidebar'
import { defaultResumeData } from './data/defaultData'
import './App.css'

function App() {
  // Load data from localStorage or use default data
  const [resumeData, setResumeData] = useState(() => {
    const savedData = localStorage.getItem('resumeData')
    return savedData ? JSON.parse(savedData) : defaultResumeData
  })
  
  const [selectedTemplate, setSelectedTemplate] = useState(() => {
    const savedTemplate = localStorage.getItem('selectedTemplate')
    return savedTemplate || 'modern'
  })
  
  const [themeOptions, setThemeOptions] = useState(() => {
    const savedTheme = localStorage.getItem('themeOptions')
    return savedTheme ? JSON.parse(savedTheme) : {
      fontFamily: 'sans',
      primaryColor: '#3b82f6',
      backgroundColor: '#ffffff',
      textColor: '#333333'
    }
  })

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('resumeData', JSON.stringify(resumeData))
    localStorage.setItem('selectedTemplate', selectedTemplate)
    localStorage.setItem('themeOptions', JSON.stringify(themeOptions))
  }, [resumeData, selectedTemplate, themeOptions])

  // Handle form data changes
  const handleDataChange = (newData) => {
    setResumeData(newData)
  }

  // Handle template change
  const handleTemplateChange = (template) => {
    setSelectedTemplate(template)
  }

  // Handle theme options change
  const handleThemeChange = (newThemeOptions) => {
    setThemeOptions({...themeOptions, ...newThemeOptions})
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />
      
      <div className="md:ml-64 transition-all duration-300">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Resume Builder</h1>
            <TemplateSelector 
              selectedTemplate={selectedTemplate} 
              onTemplateChange={handleTemplateChange}
              themeOptions={themeOptions}
              onThemeChange={handleThemeChange}
            />
          </div>
        </header>
        
        <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-1/2">
              <ResumeForm 
                data={resumeData} 
                onChange={handleDataChange} 
              />
            </div>
            <div className="lg:w-1/2">
              <ResumePreview 
                data={resumeData} 
                template={selectedTemplate}
                themeOptions={themeOptions}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App