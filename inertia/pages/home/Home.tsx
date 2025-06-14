import NavigationsController from '#controllers/navigations_controller'
import { InferPageProps } from '@adonisjs/inertia/types'

const Home: React.FC<InferPageProps<NavigationsController, 'home'>> = () => {
  return <h1 className="bg-red-400">homepage</h1>
}

export default Home
