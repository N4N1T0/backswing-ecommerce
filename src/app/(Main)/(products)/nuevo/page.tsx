// Next.js Redirect
import { redirect } from 'next/navigation'

/**
 * Redirects the user to the '/nuevo/camisetas' page.
 *
 * @return {never} No return value
 */
const NuevoPage = (): never => {
	return redirect('/nuevo/camisetas')
}

export default NuevoPage
