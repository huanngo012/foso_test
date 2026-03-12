import { createRoot } from 'react-dom/client'
import '@fontsource/libre-franklin/400.css'
import '@fontsource/libre-franklin/500.css'
import '@fontsource/libre-franklin/600.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(<App />)
