import React, { useState, useEffect } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts'
import {
  User,
  BookOpen,
  Target,
  Trophy,
  Download,
  MessageSquare,
  TrendingUp,
  Calendar,
  Code,
  Palette,
  Database,
  Award,
  Plus,
  ChevronRight,
  Star,
  Zap,
  Brain,
  Rocket,
  ExternalLink,
  FileText,
  X,
  Send,
  Clock,
  Tag
} from 'lucide-react'

const Studease = () => {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [currentSemester, setCurrentSemester] = useState('Semester 6')
  const [selectedSemester, setSelectedSemester] = useState(null)
  const [showEventModal, setShowEventModal] = useState(false)
  const [animatedStats, setAnimatedStats] = useState({
    cgpa: 0,
    skills: 0,
    events: 0
  })
  const [chatHistory, setChatHistory] = useState([
    {
      type: 'ai',
      message:
        "Based on your 8.7 CGPA and strong React.js skills, I recommend focusing on System Design next. Your goal progress shows you're 65% complete - consider taking the 'Grokking System Design' course and practicing with real-world examples. This will significantly boost your placement prospects for senior developer roles."
    }
  ])
  const [newMessage, setNewMessage] = useState('')

  // Animated counter effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats({ cgpa: 8.7, skills: 85, events: 12 })
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  // Sample data
  const academicData = [
    { sem: 'S1', sgpa: 7.8, cgpa: 7.8 },
    { sem: 'S2', sgpa: 8.2, cgpa: 8.0 },
    { sem: 'S3', sgpa: 8.5, cgpa: 8.17 },
    { sem: 'S4', sgpa: 8.9, cgpa: 8.35 },
    { sem: 'S5', sgpa: 8.6, cgpa: 8.4 },
    { sem: 'S6', sgpa: 9.1, cgpa: 8.7 }
  ]

  const marksData = {
    S1: [
      { subject: 'Mathematics I', marks: 85, credits: 4 },
      { subject: 'Physics I', marks: 78, credits: 3 },
      { subject: 'Programming in C', marks: 88, credits: 4 },
      { subject: 'Basic Electrical', marks: 82, credits: 3 }
    ],
    S2: [
      { subject: 'Mathematics II', marks: 90, credits: 4 },
      { subject: 'Data Structures', marks: 84, credits: 4 },
      { subject: 'Digital Electronics', marks: 80, credits: 3 },
      { subject: 'OOP in Java', marks: 86, credits: 4 }
    ],
    S3: [
      { subject: 'Database Systems', marks: 88, credits: 4 },
      { subject: 'Computer Networks', marks: 82, credits: 3 },
      { subject: 'Operating Systems', marks: 85, credits: 4 },
      { subject: 'Software Engineering', marks: 89, credits: 3 }
    ],
    S4: [
      { subject: 'Web Development', marks: 92, credits: 4 },
      { subject: 'Machine Learning', marks: 87, credits: 4 },
      { subject: 'Computer Graphics', marks: 85, credits: 3 },
      { subject: 'Mobile App Dev', marks: 90, credits: 4 }
    ],
    S5: [
      { subject: 'System Design', marks: 86, credits: 4 },
      { subject: 'Cloud Computing', marks: 88, credits: 3 },
      { subject: 'AI & Deep Learning', marks: 84, credits: 4 },
      { subject: 'Blockchain Tech', marks: 85, credits: 3 }
    ],
    S6: [
      { subject: 'Advanced Algorithms', marks: 94, credits: 4 },
      { subject: 'Distributed Systems', marks: 89, credits: 4 },
      { subject: 'Cybersecurity', marks: 91, credits: 3 },
      { subject: 'Project Management', marks: 87, credits: 3 }
    ]
  }

  const skillsData = [
    {
      name: 'DSA',
      progress: 85,
      color: '#3b82f6',
      category: 'Programming',
      lastPracticed: '2025-08-10'
    },
    {
      name: 'React.js',
      progress: 90,
      color: '#10b981',
      category: 'Framework',
      lastPracticed: '2025-08-09'
    },
    {
      name: 'Node.js',
      progress: 75,
      color: '#f59e0b',
      category: 'Backend',
      lastPracticed: '2025-08-08'
    },
    {
      name: 'UI/UX',
      progress: 70,
      color: '#8b5cf6',
      category: 'Design',
      lastPracticed: '2025-08-05'
    },
    {
      name: 'Python',
      progress: 80,
      color: '#ef4444',
      category: 'Programming',
      lastPracticed: '2025-08-07'
    },
    {
      name: 'Communication',
      progress: 75,
      color: '#06b6d4',
      category: 'Soft Skill',
      lastPracticed: '2025-08-06'
    }
  ]

  const radarData = [
    { skill: 'Frontend', value: 90 },
    { skill: 'Backend', value: 75 },
    { skill: 'Database', value: 80 },
    { skill: 'DevOps', value: 65 },
    { skill: 'Design', value: 70 },
    { skill: 'Communication', value: 75 }
  ]

  const eventsData = [
    { type: 'Hackathons', count: 5, color: '#3b82f6' },
    { type: 'Workshops', count: 8, color: '#10b981' },
    { type: 'Certifications', count: 6, color: '#f59e0b' },
    { type: 'Projects', count: 12, color: '#8b5cf6' }
  ]

  const detailedEvents = [
    {
      id: 1,
      name: 'HackNITR 2025',
      type: 'Hackathon',
      position: 'Winner',
      date: '2025-03-15',
      link: '#',
      description: 'Built AI-powered student management system'
    },
    {
      id: 2,
      name: 'CodeStorm',
      type: 'Hackathon',
      position: '2nd Place',
      date: '2025-02-10',
      link: '#',
      description: 'Developed real-time collaboration tool'
    },
    {
      id: 3,
      name: 'UI/UX Bootcamp',
      type: 'Workshop',
      position: 'Participant',
      date: '2025-01-25',
      link: '#',
      description: 'Advanced design principles and prototyping'
    },
    {
      id: 4,
      name: 'AWS Solutions Architect',
      type: 'Certification',
      position: 'Certified',
      date: '2024-12-05',
      link: '#',
      description: 'Cloud architecture and deployment'
    },
    {
      id: 5,
      name: 'EduSpark Project',
      type: 'Project',
      position: 'Completed',
      date: '2024-11-15',
      link: '#',
      description: 'Educational platform for remote learning'
    },
    {
      id: 6,
      name: 'Smart India Hackathon',
      type: 'Hackathon',
      position: 'Finalist',
      date: '2024-10-20',
      link: '#',
      description: 'Healthcare monitoring IoT solution'
    },
    {
      id: 7,
      name: 'Google Cloud Certification',
      type: 'Certification',
      position: 'Certified',
      date: '2024-09-15',
      link: '#',
      description: 'Professional Cloud Developer'
    },
    {
      id: 8,
      name: 'React Advanced Workshop',
      type: 'Workshop',
      position: 'Participant',
      date: '2024-08-10',
      link: '#',
      description: 'Advanced React patterns and optimization'
    }
  ]

  const goals = [
    {
      id: 1,
      title: 'Master System Design',
      progress: 65,
      deadline: '2025-12-15',
      priority: 'High'
    },
    {
      id: 2,
      title: 'Complete 300 DSA Problems',
      progress: 78,
      deadline: '2025-11-30',
      priority: 'High'
    },
    {
      id: 3,
      title: 'Build Full-Stack Portfolio',
      progress: 45,
      deadline: '2025-12-20',
      priority: 'Medium'
    },
    {
      id: 4,
      title: 'Learn DevOps & Docker',
      progress: 30,
      deadline: '2025-12-30',
      priority: 'Low'
    },
    {
      id: 5,
      title: 'Get AWS Certification',
      progress: 60,
      deadline: '2025-11-15',
      priority: 'Medium'
    }
  ]

  const achievements = [
    { title: 'HackNITR Winner', date: '2025-03-15', category: 'Hackathon' },
    {
      title: 'Google Cloud Certified',
      date: '2025-02-20',
      category: 'Certification'
    },
    {
      title: 'Smart India Hackathon Finalist',
      date: '2025-01-10',
      category: 'Competition'
    },
    {
      title: 'AWS Solutions Architect',
      date: '2024-12-05',
      category: 'Certification'
    }
  ]

  const handleSendMessage = () => {
    if (!newMessage.trim()) return

    const userMessage = { type: 'user', message: newMessage }
    const aiResponse = {
      type: 'ai',
      message: generateAIResponse(newMessage)
    }

    setChatHistory([...chatHistory, userMessage, aiResponse])
    setNewMessage('')
  }

  const generateAIResponse = userMessage => {
    const responses = [
      'Based on your current skill set, I recommend focusing on backend technologies like Node.js and MongoDB to become a full-stack developer.',
      'Your academic performance is excellent! Consider participating in more coding competitions to enhance your problem-solving skills.',
      "I notice you're strong in React. Consider learning Next.js and TypeScript to advance your frontend expertise.",
      'Your goal completion rate is impressive. Adding some cloud technologies like AWS or GCP would make you more industry-ready.',
      'Consider working on open-source projects to build your GitHub profile and contribute to the developer community.'
    ]
    return responses[Math.floor(Math.random() * responses.length)]
  }

  const getPriorityColor = priority => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-800 border-red-200'
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'Low':
        return 'bg-green-100 text-green-800 border-green-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getPositionColor = position => {
    if (position.includes('Winner') || position.includes('1st'))
      return 'bg-yellow-100 text-yellow-800'
    if (position.includes('2nd') || position.includes('Runner'))
      return 'bg-gray-100 text-gray-800'
    if (position.includes('3rd') || position.includes('Finalist'))
      return 'bg-orange-100 text-orange-800'
    if (position.includes('Certified') || position.includes('Completed'))
      return 'bg-green-100 text-green-800'
    return 'bg-blue-100 text-blue-800'
  }

  const StatCard = ({
    icon: Icon,
    title,
    value,
    subtitle,
    color,
    animated = false
  }) => (
    <div className='bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:scale-105'>
      <div className='flex items-center justify-between'>
        <div>
          <p className='text-gray-600 text-sm font-medium'>{title}</p>
          <p className={`text-3xl font-bold ${color} mt-2`}>
            {animated ? animatedStats[animated] || 0 : value}
            {title.includes('CGPA') && <span className='text-lg'>/10</span>}
            {title.includes('Skills') && <span className='text-lg'>%</span>}
          </p>
          <p className='text-gray-500 text-xs mt-1'>{subtitle}</p>
        </div>
        <div
          className={`p-3 rounded-xl bg-gradient-to-br ${
            color === 'text-blue-600'
              ? 'from-blue-100 to-blue-200'
              : color === 'text-green-600'
              ? 'from-green-100 to-green-200'
              : 'from-purple-100 to-purple-200'
          }`}
        >
          <Icon className={`w-6 h-6 ${color}`} />
        </div>
      </div>
    </div>
  )

  const SkillBar = ({ skill }) => (
    <div className='mb-6'>
      <div className='flex justify-between items-center mb-2'>
        <div className='flex items-center space-x-2'>
          <span className='text-sm font-medium text-gray-700'>
            {skill.name}
          </span>
          <span
            className={`text-xs px-2 py-1 rounded-full ${
              skill.category === 'Programming'
                ? 'bg-blue-100 text-blue-800'
                : skill.category === 'Framework'
                ? 'bg-green-100 text-green-800'
                : skill.category === 'Backend'
                ? 'bg-orange-100 text-orange-800'
                : skill.category === 'Design'
                ? 'bg-purple-100 text-purple-800'
                : 'bg-cyan-100 text-cyan-800'
            }`}
          >
            {skill.category}
          </span>
        </div>
        <div className='text-right'>
          <span className='text-sm font-bold text-gray-900'>
            {skill.progress}%
          </span>
          <div className='flex items-center space-x-1 mt-1'>
            <Clock className='w-3 h-3 text-gray-400' />
            <span className='text-xs text-gray-500'>
              {new Date(skill.lastPracticed).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
      <div className='w-full bg-gray-200 rounded-full h-3 relative overflow-hidden'>
        <div
          className='h-3 rounded-full transition-all duration-1000 ease-out relative'
          style={{
            width: `${skill.progress}%`,
            backgroundColor: skill.color,
            boxShadow: `0 0 10px ${skill.color}40`
          }}
        >
          <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse'></div>
        </div>
      </div>
    </div>
  )

  const GoalCard = ({ goal }) => (
    <div className='bg-white rounded-xl p-4 shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow'>
      <div className='flex justify-between items-start mb-3'>
        <h4 className='font-semibold text-gray-800'>{goal.title}</h4>
        <div className='flex flex-col items-end space-y-1'>
          <span
            className={`text-xs px-2 py-1 rounded-full border ${getPriorityColor(
              goal.priority
            )}`}
          >
            {goal.priority}
          </span>
          <span className='text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full'>
            {new Date(goal.deadline).toLocaleDateString()}
          </span>
        </div>
      </div>
      <div className='w-full bg-gray-200 rounded-full h-2 mb-2'>
        <div
          className='bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000'
          style={{ width: `${goal.progress}%` }}
        ></div>
      </div>
      <p className='text-sm text-gray-600'>{goal.progress}% complete</p>
    </div>
  )

  const EventBadge = ({ event }) => (
    <div className='bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200 hover:shadow-md transition-all'>
      <div className='flex items-center justify-between'>
        <div>
          <h4 className='font-semibold text-gray-800'>{event.title}</h4>
          <p className='text-sm text-gray-600'>{event.category}</p>
          <p className='text-xs text-gray-500 mt-1'>
            {new Date(event.date).toLocaleDateString()}
          </p>
        </div>
        <Award className='w-8 h-8 text-yellow-500' />
      </div>
    </div>
  )

  const EventModal = () => (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-white rounded-2xl p-6 w-full max-w-md mx-4'>
        <div className='flex justify-between items-center mb-4'>
          <h3 className='text-lg font-semibold'>Add New Event</h3>
          <button onClick={() => setShowEventModal(false)}>
            <X className='w-5 h-5 text-gray-500' />
          </button>
        </div>
        <form className='space-y-4'>
          <input
            type='text'
            placeholder='Event Name'
            className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500'
          />
          <select className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500'>
            <option>Hackathon</option>
            <option>Workshop</option>
            <option>Certification</option>
            <option>Project</option>
          </select>
          <input
            type='text'
            placeholder='Position/Result'
            className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500'
          />
          <input
            type='date'
            className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500'
          />
          <div className='flex space-x-3'>
            <button
              type='button'
              onClick={() => setShowEventModal(false)}
              className='flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50'
            >
              Cancel
            </button>
            <button
              type='submit'
              className='flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'
            >
              Add Event
            </button>
          </div>
        </form>
      </div>
    </div>
  )

  return (
    <div className='min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50'>
      {/* Header */}
      <header className='bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white p-6 shadow-2xl'>
        <div className='max-w-7xl mx-auto flex items-center justify-between'>
          <div className='flex items-center space-x-3'>
            <div className='bg-white/20 p-2 rounded-xl'>
              <Rocket className='w-8 h-8' />
            </div>
            <div>
              <h1 className='text-3xl font-bold'>Studease</h1>
              <p className='text-blue-100'>
                Where Student Potential Meets Career Reality
              </p>
            </div>
          </div>
          <div className='flex items-center space-x-4'>
            <div className='text-right'>
              <p className='text-sm opacity-90'>Welcome back,</p>
              <p className='font-semibold'>Arjun Sharma</p>
            </div>
            <div className='w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center font-bold text-lg'>
              AS
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className='bg-white shadow-lg sticky top-0 z-10'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='flex space-x-8'>
            {[
              { id: 'dashboard', label: 'Dashboard', icon: TrendingUp },
              { id: 'academics', label: 'Academics', icon: BookOpen },
              { id: 'skills', label: 'Skills', icon: Code },
              { id: 'goals', label: 'Goals', icon: Target },
              { id: 'events', label: 'Events', icon: Trophy },
              { id: 'ai-mentor', label: 'AI Mentor', icon: Brain }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600 transform scale-105'
                    : 'border-transparent text-gray-600 hover:text-blue-600'
                }`}
              >
                <tab.icon className='w-5 h-5' />
                <span className='font-medium'>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className='max-w-7xl mx-auto px-6 py-8'>
        {/* Dashboard */}
        {activeTab === 'dashboard' && (
          <div className='space-y-8 animate-fade-in'>
            <div className='flex items-center justify-between'>
              <h2 className='text-2xl font-bold text-gray-800'>
                Student Dashboard
              </h2>
              <div className='flex items-center space-x-4'>
                <button className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all flex items-center space-x-2'>
                  <Download className='w-4 h-4' />
                  <span>Export Resume</span>
                </button>
                <select
                  value={currentSemester}
                  onChange={e => setCurrentSemester(e.target.value)}
                  className='px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                >
                  <option>Semester 6</option>
                  <option>Semester 5</option>
                  <option>Semester 4</option>
                </select>
              </div>
            </div>

            {/* Stats Cards */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <StatCard
                icon={Star}
                title='Current CGPA'
                value='8.7'
                subtitle='↑ 0.3 from last semester'
                color='text-blue-600'
                animated='cgpa'
              />
              <StatCard
                icon={Zap}
                title='Skills Progress'
                value='85'
                subtitle='6 skills tracked'
                color='text-green-600'
                animated='skills'
              />
              <StatCard
                icon={Trophy}
                title='Events Participated'
                value='12'
                subtitle='4 wins, 6 certificates'
                color='text-purple-600'
                animated='events'
              />
            </div>

            {/* Charts */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
              <div className='bg-white rounded-2xl p-6 shadow-lg'>
                <h3 className='text-lg font-semibold mb-4 text-gray-800'>
                  Academic Progress
                </h3>
                <ResponsiveContainer width='100%' height={250}>
                  <LineChart data={academicData}>
                    <CartesianGrid strokeDasharray='3 3' stroke='#f0f0f0' />
                    <XAxis dataKey='sem' stroke='#666' />
                    <YAxis domain={[7, 10]} stroke='#666' />
                    <Tooltip />
                    <Line
                      type='monotone'
                      dataKey='cgpa'
                      stroke='#3b82f6'
                      strokeWidth={3}
                      dot={{ fill: '#3b82f6', strokeWidth: 2, r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className='bg-white rounded-2xl p-6 shadow-lg'>
                <h3 className='text-lg font-semibold mb-4 text-gray-800'>
                  Skill Balance
                </h3>
                <ResponsiveContainer width='100%' height={250}>
                  <RadarChart data={radarData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey='skill' />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} />
                    <Radar
                      name='Skills'
                      dataKey='value'
                      stroke='#3b82f6'
                      fill='#3b82f6'
                      fillOpacity={0.3}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Recent Achievements */}
            <div className='bg-white rounded-2xl p-6 shadow-lg'>
              <h3 className='text-lg font-semibold mb-4 text-gray-800 flex items-center space-x-2'>
                <Award className='w-5 h-5 text-yellow-500' />
                <span>Recent Achievements</span>
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {achievements.slice(0, 4).map((achievement, index) => (
                  <EventBadge key={index} event={achievement} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Academics Tab */}
        {activeTab === 'academics' && (
          <div className='space-y-6 animate-fade-in'>
            <div className='flex items-center justify-between'>
              <h2 className='text-2xl font-bold text-gray-800'>
                Academic Performance
              </h2>
            </div>

            <div className='bg-white rounded-2xl p-6 shadow-lg'>
              <h3 className='text-lg font-semibold mb-4 text-gray-800'>
                CGPA/SGPA Progress
              </h3>
              <ResponsiveContainer width='100%' height={300}>
                <LineChart data={academicData}>
                  <CartesianGrid strokeDasharray='3 3' stroke='#f0f0f0' />
                  <XAxis dataKey='sem' stroke='#666' />
                  <YAxis domain={[7, 10]} stroke='#666' />
                  <Tooltip />
                  <Line
                    type='monotone'
                    dataKey='cgpa'
                    stroke='#3b82f6'
                    strokeWidth={3}
                    name='CGPA'
                  />
                  <Line
                    type='monotone'
                    dataKey='sgpa'
                    stroke='#10b981'
                    strokeWidth={3}
                    name='SGPA'
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
              {academicData.map((sem, index) => (
                <button
                  key={sem.sem}
                  onClick={() =>
                    setSelectedSemester(
                      selectedSemester === sem.sem ? null : sem.sem
                    )
                  }
                  className={`p-4 rounded-xl border-2 transition-all ${
                    selectedSemester === sem.sem
                      ? 'border-blue-500 bg-blue-50 shadow-lg scale-105'
                      : 'border-gray-200 bg-white hover:border-blue-300'
                  }`}
                >
                  <h4 className='font-semibold text-gray-800'>{sem.sem}</h4>
                  <p className='text-2xl font-bold text-blue-600'>{sem.sgpa}</p>
                  <p className='text-sm text-gray-600'>SGPA</p>
                </button>
              ))}
            </div>

            {selectedSemester && marksData[selectedSemester] && (
              <div className='bg-white rounded-2xl p-6 shadow-lg'>
                <h3 className='text-lg font-semibold mb-4 text-gray-800'>
                  {selectedSemester} Detailed Marks
                </h3>
                <div className='overflow-x-auto'>
                  <table className='w-full'>
                    <thead>
                      <tr className='border-b-2 border-gray-200'>
                        <th className='text-left py-3 px-4 font-semibold text-gray-700'>
                          Subject
                        </th>
                        <th className='text-center py-3 px-4 font-semibold text-gray-700'>
                          Marks
                        </th>
                        <th className='text-center py-3 px-4 font-semibold text-gray-700'>
                          Credits
                        </th>
                        <th className='text-center py-3 px-4 font-semibold text-gray-700'>
                          Grade
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {marksData[selectedSemester].map((subject, index) => {
                        const grade =
                          subject.marks >= 90
                            ? 'A+'
                            : subject.marks >= 80
                            ? 'A'
                            : subject.marks >= 70
                            ? 'B+'
                            : subject.marks >= 60
                            ? 'B'
                            : 'C'
                        return (
                          <tr
                            key={index}
                            className='border-b border-gray-100 hover:bg-gray-50'
                          >
                            <td className='py-3 px-4 text-gray-800'>
                              {subject.subject}
                            </td>
                            <td className='text-center py-3 px-4'>
                              <span
                                className={`font-semibold ${
                                  subject.marks >= 85
                                    ? 'text-green-600'
                                    : subject.marks >= 75
                                    ? 'text-blue-600'
                                    : 'text-yellow-600'
                                }`}
                              >
                                {subject.marks}
                              </span>
                            </td>
                            <td className='text-center py-3 px-4 text-gray-600'>
                              {subject.credits}
                            </td>
                            <td className='text-center py-3 px-4'>
                              <span
                                className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                  grade === 'A+'
                                    ? 'bg-green-100 text-green-800'
                                    : grade === 'A'
                                    ? 'bg-blue-100 text-blue-800'
                                    : grade === 'B+'
                                    ? 'bg-yellow-100 text-yellow-800'
                                    : 'bg-gray-100 text-gray-800'
                                }`}
                              >
                                {grade}
                              </span>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Skills Tab */}
        {activeTab === 'skills' && (
          <div className='space-y-6 animate-fade-in'>
            <div className='flex items-center justify-between'>
              <h2 className='text-2xl font-bold text-gray-800'>
                Skills Tracker
              </h2>
              <button className='bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all flex items-center space-x-2'>
                <Plus className='w-4 h-4' />
                <span>Add Skill</span>
              </button>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
              <div className='bg-white rounded-2xl p-6 shadow-lg'>
                <h3 className='text-lg font-semibold mb-6 text-gray-800'>
                  Current Skills
                </h3>
                {skillsData.map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
              </div>

              <div className='space-y-6'>
                <div className='bg-white rounded-2xl p-6 shadow-lg'>
                  <h3 className='text-lg font-semibold mb-4 text-gray-800'>
                    Skills Progress
                  </h3>
                  <ResponsiveContainer width='100%' height={250}>
                    <BarChart data={skillsData} layout='horizontal'>
                      <CartesianGrid strokeDasharray='3 3' />
                      <XAxis type='number' domain={[0, 100]} />
                      <YAxis dataKey='name' type='category' />
                      <Tooltip />
                      <Bar
                        dataKey='progress'
                        fill='#3b82f6'
                        radius={[0, 4, 4, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className='bg-white rounded-2xl p-6 shadow-lg'>
                  <h3 className='text-lg font-semibold mb-4 text-gray-800'>
                    Skill Balance
                  </h3>
                  <ResponsiveContainer width='100%' height={250}>
                    <RadarChart data={radarData}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey='skill' />
                      <PolarRadiusAxis angle={90} domain={[0, 100]} />
                      <Radar
                        name='Skills'
                        dataKey='value'
                        stroke='#3b82f6'
                        fill='#3b82f6'
                        fillOpacity={0.3}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Goals Tab */}
        {activeTab === 'goals' && (
          <div className='space-y-6 animate-fade-in'>
            <div className='flex items-center justify-between'>
              <h2 className='text-2xl font-bold text-gray-800'>Goal Board</h2>
              <button className='bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all flex items-center space-x-2'>
                <Plus className='w-4 h-4' />
                <span>Add Goal</span>
              </button>
            </div>

            <div className='bg-white rounded-2xl p-6 shadow-lg'>
              <h3 className='text-lg font-semibold mb-6 text-gray-800'>
                Current Semester Goals
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {goals.map(goal => (
                  <GoalCard key={goal.id} goal={goal} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Events Tab */}
        {activeTab === 'events' && (
          <div className='space-y-6 animate-fade-in'>
            <div className='flex items-center justify-between'>
              <h2 className='text-2xl font-bold text-gray-800'>
                Events & Achievements
              </h2>
              <button
                onClick={() => setShowEventModal(true)}
                className='bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all flex items-center space-x-2'
              >
                <Plus className='w-4 h-4' />
                <span>Add Event</span>
              </button>
            </div>

            <div className='bg-white rounded-2xl p-6 shadow-lg'>
              <h3 className='text-lg font-semibold mb-4 text-gray-800'>
                Event Distribution
              </h3>
              <ResponsiveContainer width='100%' height={250}>
                <PieChart>
                  <Pie
                    data={eventsData}
                    cx='50%'
                    cy='50%'
                    innerRadius={60}
                    outerRadius={100}
                    dataKey='count'
                    startAngle={90}
                    endAngle={450}
                  >
                    {eventsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className='flex flex-wrap justify-center gap-4 mt-4'>
                {eventsData.map((entry, index) => (
                  <div key={index} className='flex items-center space-x-2'>
                    <div
                      className='w-3 h-3 rounded-full'
                      style={{ backgroundColor: entry.color }}
                    ></div>
                    <span className='text-sm text-gray-600'>
                      {entry.type} ({entry.count})
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className='bg-white rounded-2xl p-6 shadow-lg'>
              <h3 className='text-lg font-semibold mb-6 text-gray-800'>
                Event History
              </h3>
              <div className='overflow-x-auto'>
                <table className='w-full'>
                  <thead>
                    <tr className='border-b-2 border-gray-200'>
                      <th className='text-left py-3 px-4 font-semibold text-gray-700'>
                        Event Name
                      </th>
                      <th className='text-center py-3 px-4 font-semibold text-gray-700'>
                        Type
                      </th>
                      <th className='text-center py-3 px-4 font-semibold text-gray-700'>
                        Position
                      </th>
                      <th className='text-center py-3 px-4 font-semibold text-gray-700'>
                        Date
                      </th>
                      <th className='text-center py-3 px-4 font-semibold text-gray-700'>
                        Certificate
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {detailedEvents.map((event, index) => (
                      <tr
                        key={event.id}
                        className='border-b border-gray-100 hover:bg-gray-50'
                      >
                        <td className='py-4 px-4'>
                          <div>
                            <p className='font-medium text-gray-800'>
                              {event.name}
                            </p>
                            <p className='text-sm text-gray-600'>
                              {event.description}
                            </p>
                          </div>
                        </td>
                        <td className='text-center py-4 px-4'>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              event.type === 'Hackathon'
                                ? 'bg-blue-100 text-blue-800'
                                : event.type === 'Workshop'
                                ? 'bg-green-100 text-green-800'
                                : event.type === 'Certification'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-purple-100 text-purple-800'
                            }`}
                          >
                            {event.type}
                          </span>
                        </td>
                        <td className='text-center py-4 px-4'>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${getPositionColor(
                              event.position
                            )}`}
                          >
                            {event.position}
                          </span>
                        </td>
                        <td className='text-center py-4 px-4 text-gray-600'>
                          {new Date(event.date).toLocaleDateString()}
                        </td>
                        <td className='text-center py-4 px-4'>
                          <button className='text-blue-600 hover:text-blue-800 transition-colors'>
                            <ExternalLink className='w-4 h-4' />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* AI Mentor Tab */}
        {activeTab === 'ai-mentor' && (
          <div className='space-y-6 animate-fade-in'>
            <div className='flex items-center justify-between'>
              <h2 className='text-2xl font-bold text-gray-800 flex items-center space-x-3'>
                <Brain className='w-8 h-8 text-purple-600' />
                <span>AI Career Mentor</span>
              </h2>
            </div>

            <div className='bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 shadow-lg border border-purple-200'>
              <div className='text-center mb-6'>
                <div className='w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <MessageSquare className='w-8 h-8 text-white' />
                </div>
                <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                  Your Personal AI Roadmap Generator
                </h3>
                <p className='text-gray-600'>
                  Get personalized career advice based on your current progress
                  and goals
                </p>
              </div>

              <div className='bg-white rounded-xl shadow-md mb-6 max-h-96 overflow-y-auto'>
                {chatHistory.map((chat, index) => (
                  <div
                    key={index}
                    className={`p-4 ${
                      index !== chatHistory.length - 1
                        ? 'border-b border-gray-100'
                        : ''
                    }`}
                  >
                    <div className='flex items-start space-x-4'>
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          chat.type === 'ai'
                            ? 'bg-gradient-to-br from-blue-500 to-purple-600'
                            : 'bg-gradient-to-br from-green-500 to-blue-500'
                        }`}
                      >
                        {chat.type === 'ai' ? (
                          <Brain className='w-5 h-5 text-white' />
                        ) : (
                          <User className='w-5 h-5 text-white' />
                        )}
                      </div>
                      <div className='flex-1'>
                        <p className='text-gray-800 font-medium mb-1'>
                          {chat.type === 'ai' ? 'AI Mentor' : 'You'}
                        </p>
                        <p className='text-gray-600 leading-relaxed'>
                          {chat.message}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className='flex space-x-4'>
                <input
                  type='text'
                  value={newMessage}
                  onChange={e => setNewMessage(e.target.value)}
                  placeholder='Ask your AI mentor anything about your career...'
                  className='flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                  onKeyPress={e => e.key === 'Enter' && handleSendMessage()}
                />
                <button
                  onClick={handleSendMessage}
                  className='bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all flex items-center space-x-2'
                >
                  <Send className='w-4 h-4' />
                  <span>Send</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Event Modal */}
      {showEventModal && <EventModal />}

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}

export default Studease
