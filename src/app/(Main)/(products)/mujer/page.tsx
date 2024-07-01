// Next.js Redirect
import { redirect } from 'next/navigation'

/**
 * A function that redirects the user to the '/mujer/camisetas' page.
 *
 * @return {never} This function does not return anything.
 */
const MujerPage = (): never => {
	return redirect('/mujer/camisetas')
}

export default MujerPage
