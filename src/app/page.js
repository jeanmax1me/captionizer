import './globals.css'
import DemoSection from './components/DemoSection'
import PageHeaders from './components/PageHeaders'
import UploadForm from './components/UploadForm';


export default function Home() {

  return (
<>
    <PageHeaders h1Text={'Empowering Creators'}
    h2Text={'Make your content more catchy with automatic captions'} />
    <div className="text-center">
    <UploadForm />
    </div>
   <DemoSection />
   </>
  )
}
