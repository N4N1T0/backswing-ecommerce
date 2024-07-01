// Next.js Redirect
import { redirect } from 'next/navigation'

/**
 * A function that redirects to the '/ninos/camisetas' page.
 *
 * @return {never} No return value
 */
const NinosPage = (): never => {
	return redirect('/ninos/camisetas')
}

export default NinosPage
