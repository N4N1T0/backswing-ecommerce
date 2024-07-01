// Next.js Redirect
import { redirect } from 'next/navigation'

/**
 * Redirects to the '/hombre/camisetas' page.
 *
 * @return {never} The redirect element.
 */
const HombrePage = (): never => {
	return redirect('/hombre/camisetas')
}

export default HombrePage
