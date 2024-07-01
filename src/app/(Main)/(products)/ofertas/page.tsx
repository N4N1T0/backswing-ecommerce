// Next.js Redirect
import { redirect } from 'next/navigation'

/**
 * Redirects the user to the "/ofertas/camisetas" page.
 *
 * @return {never} This function does not return anything.
 */
const OfersPage = (): never => {
	return redirect('/ofertas/camisetas')
}

export default OfersPage
