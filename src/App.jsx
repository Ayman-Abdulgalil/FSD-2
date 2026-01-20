import { useState } from 'react'
import './App.css'
import MaterialUIDemo from './components/MaterialUIDemo'
import BootstrapDemo from './components/BootstrapDemo'
import { Container, Tab, Tabs, Box } from '@mui/material'

function App() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="App">
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Component Library Showcase
        </h1>
        
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
          <Tabs value={activeTab} onChange={(e, v) => setActiveTab(v)} centered>
            <Tab label="Material-UI Components" />
            <Tab label="Bootstrap Components" />
          </Tabs>
        </Box>

        {activeTab === 0 && <MaterialUIDemo />}
        {activeTab === 1 && <BootstrapDemo />}
      </Container>
    </div>
  )
}

export default App