// Components Imports
import type { Metadata } from 'next'

// Force Static Page
export const dynamic = 'force-static'

// Metadata for the page
export const metadata: Metadata = {
	title: 'Politica de privacida',
}

/**
 * Renders the PoliticaPage component, which displays the Privacy Policy of the website.
 * The component includes sections such as the Identidad del responsable, Principios aplicados en el tratamiento de datos,
 * Obtención de datos personales, Tus derechos, Finalidad del tratamiento de datos personales, Seguridad de los datos personales,
 * Contenido de otros sitios web, Política de Cookies, Legitimación para el tratamiento de datos, Categorías de datos personales,
 * Conservación de datos personales, Destinatarios de datos personales, Navegación Web, Exactitud y veracidad de los datos personales,
 * Aceptación y consentimiento, Revocabilidad, Cambios en la Política de Privacidad.
 *
 * @return {JSX.Element} The rendered PoliticaPage component.
 */
const PoliticaPage = (): JSX.Element => {
	return (
		<main className='max-w-screen-3xl mx-auto p-10 space-y-5'>
			<h1 className='text-3xl text-center uppercase'>
				Plantilla de Política de Privacidad
			</h1>
			<p className='text-gray-800 leading-7'>
				TITULAR te informa sobre su Política de Privacidad respecto del
				tratamiento y protección de los datos de carácter personal de los
				usuarios y clientes que puedan ser recabados por la navegación o
				contratación de servicios a través del sitio Web DIRECCIÓN - WEB.
			</p>
			<p className='text-gray-800 leading-7'>
				En este sentido, el Titular garantiza el cumplimiento de la normativa
				vigente en materia de protección de datos personales, reflejada en la
				Ley Orgánica 3 / 2018, de 5 de diciembre, de Protección de Datos
				Personales y de Garantía de Derechos Digitales(LOPD GDD).Cumple también
				con el Reglamento(UE) 2016 / 679 del Parlamento Europeo y del Consejo de
				27 de abril de 2016 relativo a la protección de las personas
				físicas(RGPD).
			</p>
			<p className='text-gray-800 leading-7'>
				El uso de sitio Web implica la aceptación de esta Política de Privacidad
				así como las condiciones incluidas en el Aviso Legal.
			</p>
			<h2 className='font-medium text-xl'>Identidad del responsable</h2>
			<ul className='text-gray-800 leading-7 list-disc pl-5'>
				<li>Titular: TITULAR</li>
				<li>DATOS - DEL - COLEGIO - PROFESIONAL</li>
				<li>NIF / CIF: NIF</li>
				<li>Domicilio: DIRECCIÓN - POSTAL</li>
				<li>Correo electrónico: CORREO - ELECTRÓNICO</li>
				<li>Sitio Web: DIRECCIÓN - WEB</li>
			</ul>
			<h2 className='font-medium text-xl'>
				Principios aplicados en el tratamiento de datos
			</h2>
			<p className='text-gray-800 leading-7'>
				En el tratamiento de tus datos personales, el Titular aplicará los
				siguientes principios que se ajustan a las exigencias del nuevo
				reglamento europeo de protección de datos:
			</p>
			<ul className='text-gray-800 leading-7 list-disc pl-5'>
				<li>
					Principio de licitud, lealtad y transparencia: El Titular siempre
					requerirá el consentimiento para el tratamiento de tus datos
					personales que puede ser para uno o varios fines específicos sobre los
					que te informará previamente con absoluta transparencia.
				</li>
				<li>
					Principio de minimización de datos: El Titular te solicitará solo los
					datos estrictamente necesarios para el fin o los fines que los
					solicita.
				</li>
				<li>
					Principio de limitación del plazo de conservación: Los datos se
					mantendrán durante el tiempo estrictamente necesario para el fin o los
					fines del tratamiento.
				</li>
				<li>
					El Titular te informará del plazo de conservación correspondiente
					según la finalidad.En el caso de suscripciones, el Titular revisará
					periódicamente las listas y eliminará aquellos registros inactivos
					durante un tiempo considerable.
				</li>
				<li>
					Principio de integridad y confidencialidad: Tus datos serán tratados
					de tal manera que su seguridad, confidencialidad e integridad esté
					garantizada.Debes saber que el Titular toma las precauciones
					necesarias para evitar el acceso no autorizado o uso indebido de los
					datos de sus usuarios por parte de terceros.
				</li>
			</ul>
			<h2 className='font-medium text-xl'>Obtención de datos personales</h2>
			<p className='text-gray-800 leading-7'>
				Para navegar por SITIO - WEB no es necesario que facilites ningún dato
				personal.Los casos en los que sí proporcionas tus datos personales son
				los siguientes:
			</p>
			{/* ELIMINA LOS QUE NO USES: */}
			<ul className='text-gray-800 leading-7 list-disc pl-5'>
				<li>
					Al contactar a través de los formularios de contacto o enviar un
					correo electrónico.
				</li>
				<li>Al realizar un comentario en un artículo o página.</li>
				<li>
					Al inscribirte en un formulario de suscripción o un boletín que el
					Titular gestiona con MailChimp.
				</li>
				<li>
					Al inscribirte en un formulario de suscripción o un boletín que el
					Titular gestiona con MailRelay.
				</li>
				Al inscribirte en un formulario de suscripción o un boletín que el
				Titular gestiona con SendinBlue.
			</ul>
			<h2 className='font-medium text-xl'>Tus derechos</h2>
			<p className='text-gray-800 leading-7'>
				El Titular te informa que sobre tus datos personales tienes derecho a:
			</p>
			<ul className='text-gray-800 leading-7 list-disc pl-5'>
				<li>El tratamiento de tus datos personales.</li>
				<li>El rectificación de tus datos personales.</li>
				<li>La portabilidad de tus datos personales.</li>
				<li>La cancelación de tus datos personales.</li>
				<li>El tratamiento de tus datos personales.</li>
				<li>La limitación de tu tratamiento de datos personales.</li>
				<li>La oposición de tu tratamiento de datos personales.</li>
			</ul>
			<p className='text-gray-800 leading-7'>
				El ejercicio de estos derechos es personal y por tanto debe ser ejercido
				directamente por el interesado, solicitándolo directamente al Titular,
				lo que significa que cualquier cliente, suscriptor o colaborador que
				haya facilitado sus datos en algún momento puede dirigirse al Titular y
				pedir información sobre los datos que tiene almacenados y cómo los ha
				obtenido, solicitar la rectificación de los mismos, solicitar la
				portabilidad de sus datos personales, oponerse al tratamiento, limitar
				su uso o solicitar la cancelación de esos datos en los ficheros del
				Titular.
			</p>
			<p className='text-gray-800 leading-7'>
				Para ejercitar tus derechos de acceso, rectificación, cancelación,
				portabilidad y oposición tienes que enviar un correo electrónico a
				CORREO ELECTRÓNICO junto con la prueba válida en derecho como una
				fotocopia del D.N.I.o equivalente.
			</p>
			<p className='text-gray-800 leading-7'>
				Tienes derecho a la tutela judicial efectiva y a presentar una
				reclamación ante la autoridad de control, en este caso, la Agencia
				Española de Protección de Datos, si consideras que el tratamiento de
				datos personales que te conciernen infringe el Reglamento.
			</p>
			<h2 className='font-medium text-xl'>
				Finalidad del tratamiento de datos personales
			</h2>
			<p className='text-gray-800 leading-7'>
				Cuando te conectas al sitio Web para mandar un correo al Titular, te
				suscribes a su boletín o realizas una contratación, estás facilitando
				información de carácter personal de la que el responsable es el
				Titular.Esta información puede incluir datos de carácter personal como
				pueden ser tu dirección IP, nombre y apellidos, dirección física,
				dirección de correo electrónico, número de teléfono, y otra
				información.Al facilitar esta información, das tu consentimiento para
				que tu información sea recopilada, utilizada, gestionada y almacenada
				por superadmin.es, sólo como se describe en el Aviso Legal y en la
				presente Política de Privacidad.
			</p>
			<p className='text-gray-800 leading-7'>
				Los datos personales y la finalidad del tratamiento por parte del
				Titular es diferente según el sistema de captura de información:
			</p>
			{/* ELIMINA LOS QUE NO USES: */}
			<ul className='text-gray-800 leading-7 list-disc pl-5'>
				<li>
					Formularios de contacto: El Titular solicita datos personales entre
					los que pueden estar: Nombre y apellidos, dirección de correo
					electrónico, número de teléfono y dirección de tu sitio Web con la
					finalidad de responder a tus consultas. Por ejemplo, el Titular
					utiliza esos datos para dar respuesta a tus mensajes, dudas, quejas,
					comentarios o inquietudes que puedas tener relativas a la información
					incluida en el sitio Web, los servicios que se prestan a través del
					sitio Web, el tratamiento de tus datos personales, cuestiones
					referentes a los textos legales incluidos en el sitio Web, así como
					cualquier otra consulta que puedas tener y que no esté sujeta a las
					condiciones del sitio Web o de la contratación.
				</li>
				<li>
					Formularios de suscripción a contenidos: El Titular solicita los
					siguientes datos personales: Nombre y apellidos, dirección de correo
					electrónico, número de teléfono y dirección de tu sitio web para
					gestionar la lista de suscripciones, enviar boletines, promociones y
					ofertas especiales. Los datos que facilites al Titular estarán
					ubicados en los servidores de The Rocket Science Group LLC d / b / a,
					con domicilio en EEUU. (Mailchimp).
				</li>
			</ul>
			<p className='text-gray-800 leading-7'>
				Existen otras finalidades por las que el Titular trata tus datos
				personales:
			</p>
			<ul className='text-gray-800 leading-7 list-disc pl-5'>
				<li>
					Para garantizar el cumplimiento de las condiciones recogidas en el
					Aviso Legal y en la ley aplicable.Esto puede incluir el desarrollo de
					herramientas y algoritmos que ayuden a este sitio Web a garantizar la
					confidencialidad de los datos personales que recoge.
				</li>
				<li>Para apoyar y mejorar los servicios que ofrece este sitio Web.</li>
				<li>
					Para analizar la navegación.El Titular recoge otros datos no
					identificativos que se obtienen mediante el uso de cookies que se
					descargan en tu ordenador cuando navegas por el sitio Web cuyas
					caracterísiticas y finalidad están detalladas en la Política de
					Cookies.
				</li>
				<li>
					Para gestionar las redes sociales.el Titular tiene presencia en redes
					sociales.Si te haces seguidor en las redes sociales del Titular el
					tratamiento de los datos personales se regirá por este apartado, así
					como por aquellas condiciones de uso, políticas de privacidad y
					normativas de acceso que pertenezcan a la red social que proceda en
					cada caso y que has aceptado previamente.
				</li>
			</ul>
			<p className='text-gray-800 leading-7'>
				Puedes consultar las políticas de privacidad de las principales redes
				sociales en estos enlaces:
			</p>
			{/* ELIMINA LOS QUE NO USES: */}
			<ul className='text-gray-800 leading-7 list-disc pl-5'>
				<li>Facebook</li>
				<li>Twitter</li>
				<li>LinkedinXXXXXX</li>
				<li>YouTube</li>
				<li>InstagramX</li>
			</ul>
			<p className='text-gray-800 leading-7'>
				El Titular tratará tus datos personales con la finalidad de administrar
				correctamente su presencia en la red social, informarte de sus
				actividades, productos o servicios, así como para cualquier otra
				finalidad que las normativas de las redes sociales permitan.
			</p>
			<p className='text-gray-800 leading-7'>
				En ningún caso el Titular utilizará los perfiles de seguidores en redes
				sociales para enviar publicidad de manera individual.
			</p>
			<h2 className='font-medium text-xl'>Seguridad de los datos personales</h2>
			<p className='text-gray-800 leading-7'>
				Para proteger tus datos personales, el Titular toma todas las
				precauciones razonables y sigue las mejores prácticas de la industria
				para evitar su pérdida, mal uso, acceso indebido, divulgación,
				alteración o destrucción de los mismos.
			</p>
			<p className='text-gray-800 leading-7'>
				El sitio Web está alojado en PROVEEDOR DE ALOJAMIENTO WEB.La seguridad
				de tus datos está garantizada, ya que toman todas las medidas de
				seguridad necesarias para ello.Puedes consultar su política de
				privacidad para tener más información.
			</p>
			<h2 className='font-medium text-xl'>Contenido de otros sitios web</h2>
			<p className='text-gray-800 leading-7'>
				Las páginas de este sitio Web pueden incluir contenido incrustado(por
				ejemplo, vídeos, imágenes, artículos, etc.).El contenido incrustado de
				otras web se comporta exactamente de la misma manera que si hubieras
				visitado la otra web.
			</p>
			<p className='text-gray-800 leading-7'>
				Estos sitios Web pueden recopilar datos sobre ti, utilizar cookies,
				incrustar un código de seguimiento adicional de terceros, y supervisar
				tu interacción usando este código.
			</p>
			<h2 className='font-medium text-xl'>Política de Cookies</h2>
			<p className='text-gray-800 leading-7'>
				Para que este sitio Web funcione correctamente necesita utilizar
				cookies, que es una información que se almacena en tu navegador web.
			</p>
			<p className='text-gray-800 leading-7'>
				En la página Política de Cookies puedes consultar toda la información
				relativa a la política de recogida, la finalidad y el tratamiento de las
				cookies.
			</p>
			<h2 className='font-medium text-xl'>
				Legitimación para el tratamiento de datos
			</h2>
			<p className='text-gray-800 leading-7'>
				La base legal para el tratamiento de tus datos es: el consentimiento.
			</p>
			<p className='text-gray-800 leading-7'>
				Para contactar con el Titular, suscribirte a un boletín o realizar
				comentarios en este sitio Web tienes que aceptar la presente Política de
				Privacidad.
			</p>
			<h2 className='font-medium text-xl'>Categorías de datos personales</h2>
			<h2 className='font-medium text-xl'>
				Las categorías de datos personales que trata el Titular son:
			</h2>
			{/* AGREGAR LOS QUE USAMOS */}
			<ul className='text-gray-800 leading-7 list-disc pl-5'>
				<li>Datos identificativos.</li>
			</ul>
			<h2 className='font-medium text-xl'>Conservación de datos personales</h2>
			<p className='text-gray-800 leading-7'>
				Los datos personales que proporciones al Titular se conservarán hasta
				que solicites su supresión.
			</p>
			<h2 className='font-medium text-xl'>Destinatarios de datos personales</h2>
			{/* AGREGAR LOS QUE USAMOS: */}
			<ul className='text-gray-800 leading-7 list-disc pl-5'>
				<li>Mailchimp</li>
			</ul>
			<h2 className='font-medium text-xl'>Navegación Web</h2>
			<p className='text-gray-800 leading-7'>
				Al navegar por SITIO WEB se pueden recoger datos no identificativos, que
				pueden incluir, la dirección IP, geolocalización, un registro de cómo se
				utilizan los servicios y sitios, hábitos de navegación y otros datos que
				no pueden ser utilizados para identificarte.
			</p>
			<p className='text-gray-800 leading-7'>
				El sitio Web utiliza los siguientes servicios de análisis de terceros:
			</p>
			{/* ELIMINA LOS QUE NO USES: */}
			<ul className='text-gray-800 leading-7 list-disc pl-5'>
				<li>Google Analytics</li>
				<li>Google DoubleClick</li>
				<li>Google AdSense</li>
			</ul>
			<p className='text-gray-800 leading-7'>
				El Titular utiliza la información obtenida para obtener datos
				estadísticos, analizar tendencias, administrar el sitio, estudiar
				patrones de navegación y para recopilar información demográfica.
			</p>
			<h2 className='font-medium text-xl'>
				Exactitud y veracidad de los datos personales
			</h2>
			<p className='text-gray-800 leading-7'>
				Te comprometes a que los datos facilitados al Titular sean correctos,
				completos, exactos y vigentes, así como a mantenerlos debidamente
				actualizados.
			</p>
			<p className='text-gray-800 leading-7'>
				Como Usuario del sitio Web eres el único responsable de la veracidad y
				corrección de los datos que remitas al sitio exonerando a el Titular de
				cualquier responsabilidad al respecto.
			</p>
			<h2 className='font-medium text-xl'>Aceptación y consentimiento</h2>
			<p className='text-gray-800 leading-7'>
				Como Usuario del sitio Web declaras haber sido informado de las
				condiciones sobre protección de datos de carácter personal, aceptas y
				consientes el tratamiento de los mismos por parte de el Titular en la
				forma y para las finalidades indicadas en esta Política de Privacidad.
			</p>
			<h2 className='font-medium text-xl'>Revocabilidad</h2>
			<p className='text-gray-800 leading-7'>
				Para ejercitar tus derechos de acceso, rectificación, cancelación,
				portabilidad y oposición tienes que enviar un correo electrónico a
				CORREO ELECTRÓNICO junto con la prueba válida en derecho como una
				fotocopia del D.N.I.o equivalente.
			</p>
			<p className='text-gray-800 leading-7'>
				El ejercicio de tus derechos no incluye ningún dato que el Titular esté
				obligado a conservar con fines administrativos, legales o de seguridad.
			</p>
			<h2 className='font-medium text-xl'>
				Cambios en la Política de Privacidad
			</h2>
			<p className='text-gray-800 leading-7'>
				El Titular se reserva el derecho a modificar la presente Política de
				Privacidad para adaptarla a novedades legislativas o jurisprudenciales,
				así como a prácticas de la industria.
			</p>
			<p className='text-gray-800 leading-7'>
				Estas políticas estarán vigentes hasta que sean modificadas por otras
				debidamente publicadas.
			</p>
		</main>
	)
}

export default PoliticaPage
