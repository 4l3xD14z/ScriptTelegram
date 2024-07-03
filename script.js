async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
    main = document
	textarea = document.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[class="btn-icon rp btn-circle btn-send animated-button-icon send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`

SHREK

Written by

William Steig & Ted Elliott



SHREK
Había una vez

una princesa hermosa.

Pero fue víctima

de un hechizo espantoso...

que sólo se podía romper

con el primer beso de amor.

""Estaba encerrada en un castillo...

protegida por un dragón terrible,

que arrojaba fuego.

""Muchos caballeros valientes

habían tratado...

de sacarla de esta prisión...

pero ninguno había triunfado.

""Ella esperaba en el cuarto

más elevado de la torre más alta...

a su verdadero amory

al primer beso de amorverdadero.

Como si eso fuera a pasar.

¡Qué clase de--

CUI DADO - OGRO

SE BUSCAN OGROS

NO ENTRAR

Está ahí dentro.

¡Vamos por él!

Alto.

¿Saben lo que les puede hacer?

Sí. Va a triturarles

los huesos para hacer pan.

De hecho,

eso es lo que haría un gigante.

Verán, los ogros...

son mucho peores. Los ogros hacen

trajes de la piel que te arrancan.

Te rebanan el hígado...

te exprimen lajalea de los ojos.

La verdad,

sabe rica en pan tostado.

¡Atrás! ¡Atrás, bestia!

¡Atrás! Te lo advierto.

Cómo no.

Ésta es la parte

en la que salen corriendo.

¡Y no regresen!

""Se buscan.

Criaturas de Cuentos de Hadas.

Ésta está llena.

¡Llévatela!

Jiaioo

Prisioneros enanos somos

¡Dame eso!

¡No más vuelos!

20 piezas de plata por la bruja.

¡El siguiente!

Malditas 20 piezas.

-¡Siéntense ahí!

-¡Silencio!

¡Estajaula está muy chica!

No me entregues. No volveré

a ser terco. Voy a cambiar.

¡Cállate!

¡El siguiente!

- ¿Qué tienes?

- Esta marioneta de madera.

Yo no soy una marioneta.

Soy un niño de verdad.

5 chelines por el juguete poseído.

Llévenselo.

¡Papá, no me hagas esto!

El siguiente.

¿Qué traes?

Le traigo un burro que habla.

Bueno. Eso bien vale 1 0 chelines,

si lo puedes demostrar.

Habla, animalito.

¿Y bien?

Sólo está nervioso.

Normalmente habla sin parar.

¡Habla, tarado!

Ya oí suficiente.

¡Guardias!

¡No! Sí habla. ¡De veras!

Me encanta hablar. Soy la cosa

más habladora que haya vistojamás.

Llévensela de aquí.

¡Se lojuro!

¡Suéltenme!

¡Sabe hablar!

Oye, puedo volar.

- Puede volar.

- ¡Puede volar!

Y sabe hablar.

Sí. Soy el burro volador que habla.

Habrás visto un pájaro mosca.

Quizá un pájaro burro. ¡Pero a que

nunca has visto un burro volar!

¡Agárrenlo!

¡Tras él!

¡Se está escapando!

¡Atrápenlo!

¡Por aquí! ¡Corran!

¡Oye, tú! ¡Ogro!

¿Sí?

Por orden de Lord Farquaad...

tengo autorización

de arrestarlos a ambos...

y transportarlos a una nueva

instalación designada de vivienda.

No me digas.

¿Tú y qué ejército?

¿Puedo decirte algo?

Estuviste formidable allá atrás.

¡Increíble!

¿Me estás hablando...

a mí?

Sí, a ti. Estuviste genial.

Esos guardias se creían...

la gran maravilla.

Llegas y ¡zas! se tropiezan

como bebés en el bosque.

Me dio gusto ver eso.

Fantástico.

Qué gusto ser libre.

¿Por qué no vas a celebrar

tu libertad con tus propios amigos?

Pero, ah...

yo no tengo amigos. Y no voy

a andar en el bosqueyo solo.

¡Ya sé!

¡Me voy a quedar contigo!

Eres una máquina verde arrasadora.

¡Vamos a asustar a todos!

¡Cielos! ¡Eso sí fue aterrador!

Y si eso no funciona,

tu aliento hará que huyan.

Necesitas unas mentas,

¡tu aliento apesta!

Casi me quemas los pelos nasales.

Justo como la vez que...

comí moras podridas.

Me salieron gases fuertes

de la cola.

¿Por qué me estás siguiendo?

Te voy a decir por qué.

Porque estoysolo

Nohaynadiemásaquí

Aparte demí

Todosmisproblemas

han desaparecido

Nadiemásseburlará demí

Pero tienes que teneramigos

¡Deja de cantar!

Con razón no tienes amigos.

Sólo un gran amigo puede ser

tan cruelmente sincero.

Mírame, burrito.

Mírame. ¿Qué soy?

¿Muy alto?

¡No, soy un ogro! De los de ""agarra

tu antorcha y tu horquilla.

¿No te molesta?

No.

¿De veras?

De veras, de veras.

Me caes bien.

¿Cómo te llamas?

Shrek.

¿Shrek?

¿Sabes qué me gusta de ti, Shrek?

Tu estilo de decir ""No me importa

lo que piensen de mí.

Eso me gusta.

Te respeto, Shrek.

Mira eso. ¿A quién le puede

gustarvivir en un lugar así?

Ésa es mi casa.

¡Y es preciosa!

Simplemente hermosa.

Eres un gran decorador. Has hecho

mucho con un presupuesto bajo.

Me gusta esa roca.

Es una roca bonita.

ALÉ ESE

CUI DADO - OGRO

No recibes muchas visitas,

¿verdad?

Me gusta tenervida privada.

A mí también. Odio cuando tienes

a alguien encima...

y le lanzas una indirecta

y no se va...

y hay un silencio embarazoso...

- ¿Puedo quedarme contigo?

- ¿Qué?

¿Puedo quedarme contigo...

por favor?

Claro.

- ¿Lo dices en serio?

- No.

¡No puedo regresar! ¡No sabes

lo que es ser un fenómeno!

Bueno, quizá sí sepas.

¡Pero por eso tenemos que unirnos!

¡Déjame quedarme! ¡Por favor!

Está bien. Está bien.

Pero sólo una noche.

¡Gracias!

¡Va a ser divertido! Nos vamos

a contar nuestras aventuras...

y en la mañana, ¡haré waffles!

¿Dónde voy a dormir?

¡Afuera!

Bueno, está bien. Digo, yo no

te conozco, tú no me conoces...

así que afuera es lo mejor.

Ya me voy.

Buenas noches.

Me gusta el exterior.

Soy un burro. Nací afuera.

Estaré sentadoyo solo, afuera.

Yo solo, afuera.

Estoysolo

Nohaynadiemásaquí

Aparte demí

Te dije que te quedaras afuera.

Estoy afuera.

Dista mucho de ser la granja,

pero ¿qué otra opción tenemos?

No estoy en casa,

pero me voy a acomodar fácilmente.

- Qué hermosa cama.

- ¡Te agarré!

Encontré un poco de queso.

Del más oloroso.

- ¿Eres tú, Gorder?

- ¿Cómo supiste?

¡Ya basta!

¿Qué están haciendo en mi casa?

No, no, no.

¡Bajen a la muerta de la mesa!

¿Dónde la ponemos?

La cama está ocupada.

¿Qué?

¡Vivo en un pantano! ¡Pongo

letreros! ¡Soy un ogro aterrador!

¿Qué necesito hacer para tener

un poco de vida privada?

Ay, no.

Ay, no.

- ¡Basta!

- ¡No me empujes!

¿Qué están haciendo

en mi ciénaga?

Bueno, váyanse de aquí.

¡Todos...

muévanse! ¡Vámonos!

¡Hapaya!¡Hapaya!

No, no, ahí no. ¡Ahí no!

No me mires a mí,

yo no los invité.

Cielos, nadie nos invitó.

- ¿Qué?

- Nos forzaron a venir aquí.

- ¿Quién los forzó?

- Lord Farquaad.

Soplóy soplóy-- firmó

un apercibimiento de desalojo.

Está bien.

¿Quién sabe

dónde está el tal Farquaad?

¡Yo! ¡Yo sé dónde está!

¿Alguien más sabe

dónde lo puedo encontrar?

- ¿Nadie?

- ¡Yo! ¡Yo!

- ¿Nadie en absoluto?

- ¡Escógeme a mí!

¡Yo sé! ¡Yo sé! ¡Yo, yo!

Está bien, bueno.

¡Atención, todos!

¡Criaturas de cuentos de hadas!

¡No se pongan muy cómodos!

¡Ya abusaron oficialmente

de mi hospitalidad!

¡Voy a ir a ver al tal Farquaad

ahora mismoy a hacer...

que los saquen de aquí

y se los lleven a sus tierras!

Tú.

Tú vas a venir conmigo.

Eso es lo queyo quería oír.

¡Shreky Burro, dos amigos bravos,

se van de aventura a la ciudad!

¡Me encanta!

De viaje otra vez

Canta conmigo, Shrek

Memueroporirme

de viaje otra vez

¿Qué te dije de cantar?

- ¿Puedo silbar?

- No.

- ¿Puedo tararear?

- Está bien. Tararea.

¡Ya basta!

Está listo para hablar.

Corre, corre a toda velocidad.

¡Soy el Hombre deengibre,

no me puedes agarrar!

¡Eres un monstruo!

¡Yo no soy el monstruo,

sino tú!

¡Tú y todos los tipejos

de los cuentos de hadas...

que envenenan mi mundo!

¿Dónde están los demás?

¡Cómeme!

¡He tratado de serjusto con Uds.

peroya se me acabó la paciencia!

Si no me dices, te...

¡No, mis botones de ""gomitas, no!

Bueno.

¿Quién los está ocultando?

Bueno, te voy a decir.

¿Conoces al Hombre de Pan?

- ¿El Hombre de Pan?

- El Hombre de Pan.

Sí, conozco al Hombre de Pan.

¿El que vive en la Calle Drury?

Ella está casada

con el Hombre de Pan.

- ¿El Hombre de Pan?

- ¡El Hombre de Pan!

Ella está casada

con el Hombre de Pan.

Milord, lo encontramos.

¿Qué esperan? ¡Tráiganlo!

Espejo Mágico...

¡No le digas nada!

Buenas noches.

Espejo, espejo, en la pared...

¿no es éste el reino

más perfecto de todos?

Bueno, técnicamente,

usted no es un rey.

Ah, Thelonius.

¿Decías?

Quise decir que todavía

no es un rey.

Pero se puede convertir en rey

si se casa con una princesa.

Continúa.

Así que, nada más siéntese

y relájese, milord...

porque es hora de que conozca

a las solteras disponibles de hoy.

¡Y aquí las tiene!

La soltera No. 1

es una reclusa...

sujeta a abuso mental

en un reino lejano.

Le gustan el sushi y losjacuzzis.

Le gusta cocinary limpiar

los cuartos de sus hermanas malas.

Por favor dé la bienvenida a

¡Cenicienta!

La soltera No. 2 es una chica

de la tierra de la fantasía.

Aunque vive con 7 hombres,

es muy recatada.

Bese sus labios muertos, helados,

yverá lo electrizante que es.

Venga un aplauso para

¡Blanca Nieves!

Y la última en orden,

pero no en importancia...

la soltera No. 3

es una pelirroja...

¡protegida por un dragón

y un foso de lava!

Pero no deje que eso le afecte.

Le gustan las piñas coladas...

y que la pille la lluvia.

Rescátela y es suya,

¡la princesa Fiona!

¿Entonces qué escoge?

¿La soltera No. 1 ?

¿La soltera No. 2?

¿O la soltera No. 3?

Dos, tres, uno. Tres.

Escoja la No. 3, milord.

¡Está bien! ¡Está bien!

¡La número tres!

Lord Farquaad, usted ha escogido

a la princesa Fiona.

La princesa Fiona.

Es perfecta.

Nada más tengo que encontrar

a alguien...

- Hay algo que pasa de noche...

- Lo haré.

- Sí, pero después del ocaso...

- ¡Silencio!

Convertiré a la princesa Fiona

en mi reina...

¡y DuLoc tendrá,

finalmente, el rey perfecto!

Capitán,

reúna a sus mejores hombres.

¡Vamos a hacer un torneo!

ESTACIONAMI ENTO

SECCIÓN LANZAROTE

Ahí está. Eso es DuLoc.

Te dije que lo iba a encontrar.

Entonces...

ése debe ser

el castillo de Lord Farquaad.

Sí, ése es el lugar.

¿Crees que esté compensando

por alguna deficiencia?

¡Oye, espera!

¡Espérame, Shrek!

¡Corre, cariño!

¡Vamos a llegar tarde!

¡Oye! ¡Tú!

Espera un segundo.

Mira, no te voy a comer.

Yo sólo...

Yo sólo...

Qué silencio hay aquí.

Demasiado silencio.

LA ANTIGUA

TI ENDA DE RECUERDOS

¿Dónde están todos?

¡Mira esto!

Bienvenidoa DuLoc

Unpuebloperfecto

Tenemos ciertas reglas

Selas vamosa decir

Compórtese, haga cola

ynos llevaremosbien

DuLoces un lugarperfecto

Porfavor, cuideasuburro

Vistabien, límpiese--la cara

DuLoces

DuLoces

DuLoces un lugarperfecto

BI ENVENI DO A DULOC

¡Caramba!

- Veamos eso otra vez.

- No.

¡Caballeros valientes!

¡Uds, sonlosmejores

ymásbrillantes de esta tierra!

Hoy, uno de ustedes demostrará,,,

Te estás ganando una nalgada.

Perdón.

El campeón tendrá el honor--

no, no, el privilegio...

de iry rescatar...

a la hermosa princesa Fiona...

de la torre ardiente del dragón.

Si, por alguna razón,

el ganador no tiene éxito...

el segundo finalista

ocupará su lugar.

Y así, en adelante.

Quizá algunos de Uds. mueran...

pero es un sacrificio

que estoy dispuesto a hacer.

APLAUSO

¡Que empiece el torneo!

¿Qué es eso?

¡Qué espanto!

Usted no es muy amable.

Sólo es un burro.

Cierto. ¡Caballeros!

Cambio de plan.

Ay, oigan, por favor.

Esperen un segundo.

¿No podemos arreglar esto

mientras nos tomamos una cerveza?

¿No?

Bueno, muy bien.

¡Peleen!

¡La silla!

¡Dale la silla!

¡Gracias!

Muchas gracias. Estaré aquí hasta

el jueves. Prueben la ternera.

¿Doy la orden, señor?

No, se me ocurre algo mejor.

Gente de DuLoc...

¡les presento a nuestro campeón!

¿Qué?

Felicidades, ogro.

Te has ganado el honor de emprender

una gran y noble cruzada.

¿Cruzada?

Estoy a la mitad de una...

cruzada

para recuperar mi ciénaga.

¿ Tu ciénaga?

¡Sí! Mi ciénaga-- donde arrojó a

todas las criaturas de los cuentos.

Ya veo.

Bueno, vamos a hacer un trato.

Emprende esta cruzada a mi nombre

yyo te devuelvo tu ciénaga.

¿Justo como la tenía?

Igual hasta el más mínimo hongo

cubierto de cieno.

¿Y los intrusos?

Desaparecerán.

¿Qué clase de cruzada?

¿Vas a pelear contra un dragón...

por una princesa para que

Farquaad te dé tu ciénaga...

que no tienes porque

él te la llenó de cosas raras?

Quizá haya una buena razón

por la que los burros no hablan.

No entiendo, Shrek. ¿Por qué

no le haces una cosa de ogro?

Ahórcalo, ataca su fortaleza,

tritura sus huesos, algo de ogro.

Ya sé. ¿Por qué no decapito

un pueblo entero...

pongo sus cabezas en picas...

agarro un cuchillo,

les abro el bazo...

y me bebo sus fluidos corporales?

¿Te suena bien?

No, la verdad, no.

Los ogros son más complejos

de lo que la gente cree.

¿Por ejemplo?

Bueno...

los ogros son como las cebollas.

- ¿Apestan?

- Sí-- ¡no!

- Te hacen llorar.

- No.

Los dejas en el sol

y se vuelven marrones.

¡No! ¡Capas!

Las cebollas tienen capas.

Los ogros tienen capas.

Las cebollas tienen capas.

¿Entiendes?

Los dos tenemos capas.

Ah. Los dos tienen capas,

No a todos les gusta la cebolla.

¡Pasteles! A todos los gustan

y los pasteles tienen capas.

A mí me importa poco

lo que les guste a todos.

Los ogros no son como los pasteles.

¿Sabes qué más les gusta a todos?

Los milhojas.

¿A quién has oído decir

""No me gustan los milhojas?

Son deliciosos.

¡Que no, bestia de carga tarada,

irritantey miniatura!

¡Los ogros son como las cebollas!

¡Punto final! Adiosito.

Nos vemos.

Quizá los milhojas sean lo más

delicioso que hay en el planeta.

Creo que me gustaba

más que tararearas.

¿No tienes un pañuelo o algo?

Nada más decir milhojas hizo

que se me cayera la baba.

Shrek, ¿fuiste tú?

Tienes que avisar

antes de echarte uno.

Créeme, Burro, si hubiera sidoyo,

estarías muerto.

Es azufre.

Ya debemos de estar cerca.

Sí, seguro. Azufre.

Yo sé lo que olíy no fue azufre.

Aunque sí tiene que ver

con ""sufre.

Sí, es grande.

Pero mira la ubicación.

Shrek, ¿te acuerdas

de lo que dijiste...

que los ogros tienen capas?

Pues tengo que confesarte algo.

Los burros no tienen capas.

Traemos el miedo en la manga.

Los burros no usan mangas.

Sabes a lo que me refiero.

¿Le tienes miedo a las alturas?

¡No, sólo me siento incómodo

de andar en...

un puente frágil sobre lava!

Por favor, Burro.

Yo voy a estar aquí,junto a ti...

para darte apoyo emocional.

Encararemos estojuntos,

pasito a pasito.

- ¿De veras?

- De veras, de veras.

Me haces sentir mucho mejor.

Sólo sigue caminando

y no mires hacia abajo.

No mires hacia abajo.

Camina. No mires abajo.

No mires abajo.

Camina. No mires abajo.

¡Shrek!

¡Estoy mirando hacia abajo!

¡No puedo!

¡Me quiero bajar!

Ya estás a mitad del camino.

¡Pero esa mitad es segura!

Bueno, no tengo tiempo para esto.

Tú regresa.

¡Shrek! ¡Espera!

Vamos a bailar. Ven acá.

¡No hagas eso!

Perdón. ¿Que no haga qué?

¿Esto?

¡Sí, eso!

¿Sí? Sí. Hazlo. Bueno.

¡No, Shrek!

-¡Ya basta!

-¡Dijiste que lo hiciera!

¡Me voy a morir!

¡Me voy a morir! ¡Shrek!

Eso es, Burro. Eso es.

Genial.

¿Dónde está la maravilla

que escupe fuego?

Dentro, esperando

a que la rescatemos.

Me refería al dragón, Shrek.

- ¿Tienes miedo?

- No.

Pero, silencio.

Qué bien. Yo tampoco.

No tiene nada de malo tener miedo.

El miedo es una respuesta sensata

ante lo desconocido.

Y a lo peligroso.

Si un dragón escupe fuego

y come caballeros y escupe fuego...

el que tengas un poco de miedo

no significa que seas cobarde.

Yo sé que no soy un cobarde.

Burro, dos cosas, ¿está bien?

Cállate. La boca.

Ve a buscar unas escaleras.

¿No estamos buscando a la princesa?

Estará arriba de las escaleras,

en la torre más alta.

¿Cómo sabes?

Lo leí una vez en un libro.

Perfecto. Tú te encargas

del dragón, yo, de las escaleras.

Voy a encontrar esas escaleras.

Y las voy a vencer. Vas a ver.

Tomaré medidas drásticas.

No se metan conmigo,

soy el ""escalasno.

Amo de las escaleras.

Ojalá hubiera un escalón,

le daría una buena pisada.

Ahí está la princesa.

¿Pero dónde está el...?

¡Dragón!

¡Burro, cuidado!

¡Te agarré!

No. ¡Ay, ay, ay!

Qué dientes tan grandes tienes.

Dientes blancos, brillantes.

Tu comida te lo ha de decir

con frecuencia.

Les debes poner blanqueador, porque

tienes una sonrisa impactante.

¿Detecto un poco de sabor

a menta fresca? ¿Sabes qué más?

¿Sabes qué más?

Eres-- ¡eres una dragona!

Digo, claro que eres

una dragona, porque...

simplemente apestas

a belleza femenina.

¿Qué te pasa?

¿Se te metió algo en el ojo?

Me encantaría quedarme,

pero tengo asma...

y esto no va a funcionar

si sigues echando anillos de humo.

¡Shrek!

¡No! ¡Shrek! ¡Shrek! ¡Shrek!

- ¡Despierta!

- ¿Qué?

¿Eres la princesa Fiona?

Lo soy.

Esperando a que

un osado caballero me rescate.

Qué lindo. ¡Vámonos!

¡Pero esperad, Sir Caballero!

Este ""sed

nuestro primer encuentro.

¿No debería ser

un momento maravilloso, romántico?

Disculpe, señora.

No hay tiempo.

¿Qué estáis haciendo?

¡Deberíais sacarme volando...

por aquella ventana,

a vuestro valiente corcel!

Tuvo mucho tiempo

para planear esto, ¿verdad?

Tenemos que saborear este momento.

Podríais recitarme un poema épico.

¿Una balada? ¿Un soneto?

- ¿Un poema humorístico? ¡Algo!

- Yo creo que no.

¿Puedo, al menos,

conocer el nombre de mi campeón?

Ah-- Shrek.

Sir Shrek...

os suplico que aceptéis

este recuerdo...

como muestra de mi gratitud.

Gracias.

¿No mataste al dragón?

Está en mi lista de pendientes.

¡Vámonos!

Pero esto no está bien.

Deberías ir...

espada desenfundada y estandarte

ondeando, como esos caballeros.

Justo antes de que se incendiaran.

Eso no es lo importante.

¿A dónde vas?

La salida está allá.

Qué burro, lo tengo que salvar.

¿Qué clase de caballero eres?

Soy único.

Más despacio.

Es más sano conocerse poco a poco,

durante algún tiempo.

Seré chapado a la antigua,

pero no quiero precipitarmey...

empezar una relación física.

Un compromiso de esta...

magnitud,

era la palabra que estaba buscando.

¡Eso es contacto físico indeseado!

¿Qué estás haciendo?

Bueno, hay que dar marcha atrás

y avanzar paso por paso.

Necesitamos conocernos como amigos.

O como amigos por correspondencia.

Yo viajo mucho,

pero me encanta recibir tarjetas.

Me encantaría quedarme, pero...

Me la vas arrancar.

¿Qué vas a hacer con eso?

Ah, no, eso no.

¡No, no, no!

- Hola, princesa.

- ¡Habla!

Sí. Lo difícil es hacer

que se calle.

¡Ustedes dos,

váyanse a la salida!

Yo me encargo del dragón.

¡Corran!

¡Lo lograste!

¡Me rescataste! ¡Eres increíble!

¡Eres maravilloso! Eres...

un poco fuera de lo normal,

lo tengo que admitir, pero...

vuestra hazaña es grande

yvuestro corazón es puro.

Estoy eternamente agradecida.

¿Y dónde estaría tan valiente

caballero sin su noble corcel?

¿Oíste? Me llamó ""noble corcel.

Cree que soy un corcel.

Ganó la batalla. Se puede quitar

el casco, buen Sir Caballero.

Ah, no.

¿Por qué no?

Tengo pelo de casco.

Por favor, no sabéis cuánto

deseo vervuestra cara.

No, parecedme que no.

Pero ¿cómo me vas a besar?

Eso no era parte del trabajo.

Quizá es una prestación.

No, es el destino.

Debes de saber cómo acaba.

Una princesa encerrada en una torre

y acosada por un dragón...

es rescatada

por un valiente caballero...

y luego comparten el primer beso

del verdadero amor.

¿Con Shrek?

¿Usted cree--

Un segundo. ¿Cree que Shrek

es su verdadero amor?

¡Pues-- sí!

¡Cree que Shrek es

su verdadero amor!

¿Qué tiene de chistoso?

Digamos nada más que no soy

de su tipo, ¿está bien?

Claro que eres de mi tipo.

Tú me rescataste.

Vamos, quítate el casco.

No es buena idea.

- Quítate el casco.

- Me niego.

- Quítatelo.

- ¡No!

- ¡Ahora mismo!

- ¡Está bien! Calma.

A sus órdenes, Su Alteza.

Eres un-- un ogro.

Usted estaba esperando

al Príncipe Valiente.

Pues, la verdad, sí.

Ay, no.

Esto está todo mal.

Tú no deberías ser un ogro.

Princesa, Lord Farquaad me mandó

a rescatarla, ¿está claro?

Él se quiere casar con usted.

¿Por qué no me rescató él?

Buena pregunta.

Hágasela usted cuando lleguemos.

Pero a mí me tiene que rescatar

mi verdadero amor...

no un ogroy su mascota.

Hasta ahí llegó el ""noble corcel.

No me está facilitando mi trabajo.

Disculpa, pero tu trabajo

no es mi problema.

Dile a Lord Farquaad que si quiere

rescatarme como es debido...

lo estaré esperando aquí.

¡Oiga! Yo no soy recadero

de nadie, ¿entiende?

Soy un repartidor.

No te atrevas.

- ¿Vienes, Burro?

- Pisándote la cola.

¡Bájame o sufrirás

las consecuencias!

¡Esto no es digno! ¡Bájame!

Ahí le va otra pregunta.

Uno le gusta a una mujer,

pero no es recíproco.

¿Qué haces para no herirla

y que no te carbonice?

Nada más dile

que no es tu verdadero amor.

Todos saben lo que pasa

cuando encuentras...

Cuanto antes lleguemos, mejor.

Le encantará, princesa.

Es hermoso.

¿Y qué tal mi futuro novio,

Lord Farquaad? ¿Cómo es?

Déjeme ponerlo así.

Hombres de su estatura...

sobresalen sólo por sus méritos.

No sé, Shrek, algunos consideran

pequeña su leyenda.

Ya basta.

Basta, los dos.

Le tienen celos porquejamás podrán

llegarle a los talones.

Quizá tenga usted razón,

princesa.

Dejaré que usted nos mida

cuando lo vea mañana.

¿Mañana?

¿Tanto vamos a tardar?

¿No deberíamos acampar?

No. Así tardaríamos más.

- Podemos seguir avanzando.

- Pero hay ladrones en el bosque.

¡Tiempo fuera! La idea de acampar

me está empezando a gustar.

Por favor. Yo soy más temible que

cualquier cosa que podamos hallar.

¡Necesito un lugar

para acampar ahora mismo!

¡Oye, aquí!

Podemos encontrar algo mejor.

Esto no es apropiado

para una princesa.

Es perfecto. Sólo necesita

unos toques hogareños.

¿Toques hogareños?

¿Como cuáles?

¿Una puerta?

Caballeros, os deseo buenas noches.

¿Le leo un cuento

para que se duerma?

¡Dije que buenas noches!

¿Qué estás haciendo?

Nada más--ya sabes.

Por favor, estaba bromeando.

Y ése.

Ése es Throwback, él único ogro que

escupió sobre tres campos de trigo.

Seguro. Sí.

¿Puedes ver mi futuro

en las estrellas?

Las estrellas no dicen el futuro,

nos cuentan historias.

Mira, ahí está Bloodnut el Gaseoso.

¿Adivina por qué era famoso?

Estás inventando todo.

No, mira. Ahí está.

Y ahí están los cazadores

huyendo de su pestilencia.

Sólo son un montón de puntitos.

Burro, a veces las cosas

son más de lo que aparentan.

Olvídalo.

¿Qué vamos a hacer

cuando nos den nuestra ciénaga?

¿""Nuestra ciénaga?

Cuando acabemos de rescatar

a la princesa.

¿""Acabemos? Burro, nada de ""nos.

Nada de ""nuestra. Sólo soy...

yo con mi ciénaga.

Y lo primero que haré es construir

un muro alrededor de mi tierra.

Me heriste hondo, Shrek.

Me acabas de herir en lo profundo.

Creo que eso del muro es una forma

de no dejar entrar a alguien.

No. ¿Tú crees?

- ¿Ocultas algo?

- Olvídalo, Burro.

Ésta es otra de esas cosas

como lo de la cebolla.

No, ésta es otra de esas cosas

como de ""cambio de tema.

- ¿Por qué no lo quieres hablar?

- ¿Por qué tú sí quieres?

- ¿Por qué te bloqueas?

- Yo, no.

- Sí, estás bloqueado.

- Te lo advierto.

¿Quién no quieres que entre?

¡Todos! ¿Contento?

Ahora sí,

estamos empezando a avanzar.

¡Ay, por el amor de Dios!

¿Cuál es tu problema?

¿Qué tienes contra el mundo?

Yo no tengo problemas. El mundo es

el que tiene un problema conmigo.

La gente, apenas me ve, empieza:

""¡Ay! ¡Auxilio! ¡Corran!

""¡Un gigantesco ogro estúpido!

Mejuzgan sin siquiera conocerme.

Por eso prefiero estar solo.

Cuando te conocí, yo no pensé que

eras un gigantesco ogro estúpido.

Sí, ya lo sé.

Oye, ¿hay burros allá arriba?

Bueno, está Parlanchín...

el Pequeñoy Molesto.

Está bien, ya lo veo. El grande,

brillante de ahí, ¿cierto?

- Ésa es la luna.

- Ah, bueno.

Otra vez.

Enséñamela otra vez.

Espejo, espejo, muéstramela.

Muéstrame a la princesa.

Perfecto.

Sí, ya sabes que así me gusta.

Nena, ven y móntame.

Burro, despierta.

Despierta.

Buenos días.

¿Cómo les gustan los huevos?

¡Buenos días, princesa!

¿Qué está haciendo?

Ayer empezamos con el pie izquierdo

y quise reparar el daño.

Digo, después de todo,

sí me rescataste.

Gracias.

Coman. Tenemos un día importante

por delante.

- ¡Shrek!

- ¿Qué? Es un cumplido.

Mejor afuera que adentro, digoyo.

Así no se porta uno

enfrente de una princesa.

Gracias.

Ella es tan grosera como tú.

¿Sabe qué? No es usted

exactamente lo que me esperaba.

Quizá no deberíasjuzgar

a la gente antes de conocerla.

¡Laliberté!

¡Princesa!

-¿Qué hace?

-¡Calma, chérie, soy su salvador!

Y la voy a rescatar

de esa cosa verde...

de esa bestia.

¡Ésa es mi princesa!

¡Vey búscate la tuya!

¡Por favor, monstruo!

¿No ves que estoy ocupado?

Mira, amigo,

no sé quién te crees que eres...

¡Por supuesto! ¡Qué descortés!

Por favor permítame presentarme.

¡Hombres Alegres!

Leroboalrico

Le doyalnecesitado

-Agarra unporcentaje

- Peronosoyavaro

Rescatoa damiselas

conmiaptitud

Qué tipazo

Monsieur Hood

A bailar.

Megustanlaspeleas

ylas criadaspícaras

- Osea, legusta la--

- Buenapaga

Cuando un ogro ocultoagarra

a una dama en el-- quémal

Estámal

Verunabellayunabestia

mehace enojar

Lohace enojarde verdad

Agarromiespada

lo voyaatravesar

Nomepierdan de vista, chicos

porque voya empezar

Qué cosa tan molesta.

¡Pequeña...!

¿Nos vamos?

Un momento.

Momento, momento, espera.

¿De dónde salió eso?

Eso. Allá atrás.

¡Estuvo increíble!

¿Dónde aprendiste eso?

Cuando una vive sola...

tiene que aprender

esas cosas en caso de que...

¡Traes una flecha en el trasero!

Mira eso.

Todo ha sido por mi culpa.

Perdóname.

- ¿Qué pasa?

- Shrek está herido.

¿Shrek está herido?

¡No, Shrek se va a morir!

Burro, estoy bien.

No, soy muyjoven para que mueras.

Alza las piernas.

¡Voltea la cabeza y tose,

la Heimlich!

¡Burro! ¡Cálmate!

Si quieres ayudar a Shrek, tráeme

una flor azul con espinas rojas.

Flor azul, espinas rojas.

Me encargaré de eso.

¡No te mueras, Shrek! ¡Si ves un

túnel largo, no vayas hacia la luz!

- ¡Burro!

- Cierto. Flor azul, espinas rojas.

- ¿Para qué son las flores?

- Para deshacerme de Burro.

Quédate quieto

y te voy a sacar esto.

¡Cuidado con la sacada!

Perdón, pero tiene que salir.

Ahora...

No, me duele.

Está haciendo

lo opuesto de ayudarme.

Tiempo fuera.

Está bien.

¿Qué propones tú que hagamos?

Flor azul, espinas rojas.

Flor azul, espinas rojas.

¡Esto sería mucho más fácil

si no fuera yo daltónico!

¡Aguanta, Shrek!

¡Ya voy!

No va bien.

Bueno, ya casi veo la cabeza.

No pasó nada. Sólo estábamos--

Si querían estar solos,

nada más tenían que pedírmelo.

¡Por favor!

Eso es lo último que me interesa.

La princesa nada más estaba--

¡Ay!

Oiga, ¿qué es eso?

¿Es sangre?

Ahí está, princesa.

Su futuro la espera.

¿Eso es DuLoc?

Shrek piensa que Lord Farquaad

está compensando por algo.

Creo que significa

que tiene un...

Bueno, supongo que más vale

que sigamos adelante.

Seguro.

Pero-- ¿Shrek?

Estoy-- estoy preocupada por Burro.

Digo, míralo.

No se ve muy bien.

¿Qué? Estoy perfectamente.

Eso es lo que todos dicen

y luego acaban boca arriba.

Muertos.

Tiene razón. Te ves espantosamente

mal. ¿Quieres sentarte?

Voy a hacer té.

Bueno, tengo una punzada

en el cuello.

Cuando volteo así, ¡ay! ¿Ven?

- ¿Tienen hambre? Voy por la cena.

- Yo traeré leña.

Oigan, ¿a dónde van?

Dios mío,

¡no siento los dedos de los pies!

¡No tengo dedos en los pies!

¡Creo que necesito un abrazo!

Esto está rico.

Está muy rico.

- ¿Qué es?

- Rata de campo.

Rostizada.

¿De verdad?

Pues está deliciosa.

También son muy ricas guisadas.

No quiero presumir, pero hago

un excelente guiso de rata.

Creo que mañana en la noche

estaré cenando un poco diferente.

Quizá me pueda ir a visitar

a la ciénaga algún día.

Le cocinaré muchas cosas.

Sopa de sapo, ojo de pescado

a la tártara, ¡lo que Ud. diga!

Me gustaría.

¿Princesa?

¿Sí, Shrek?

Estaba pensando.

¿Va a--

¿Se va a comer eso?

Caray, qué romántico es esto.

Miren el ocaso.

¿El ocaso? ¡Ay, ay, ay!

Digo, ya es tarde.

Ya es muy tarde.

Un momento.

Ya veo lo que está pasando aquí.

¿Tiene miedo de la oscuridad?

¡Sí! Eso es. Me aterra.

Más vale que me meta.

No se sienta mal. A mí también

me daba miedo, hasta que--

Un momento. A mí todavía

me da miedo la oscuridad

Buenas noches.

Buenas noches.

Ya veo lo que está pasando.

¿De qué hablas?

Soy un animal y tengo instintos.

Sé que los dos se atraen. Perdón.

Estás loco. Sólo se la estoy

llevando a Farquaad.

Por favor. Despierta y huele

las feromonas. Dile lo que sientes.

No hay nada que decir.

Además, aunque se lo dijera...

bueno, no estoy diciendo

que la quiero. Porque no.

Ella es una princesa yyo soy--

¿Un ogro?

Sí, un ogro.

- ¿A dónde vas?

- A buscar más leña.

¿Princesa?

¿Princesa Fiona?

¿Princesa? ¿Dónde está?

¿Princesa?

Está feo acá dentro.

No estoyjugando.

¡No! ¡Auxilio! ¡Shrek!

¡No! No pasa nada.

¿Y la princesa?

¡Burro! Yo soy la princesa.

Soyyo, en este cuerpo.

¡Dios mío!

¡Te comiste a la princesa!

¿Me oye?

¡Siga respirando!

¡La voy a sacar de ahí!

¡Shrek! ¡Shrek!

Soyyo.

¿Princesa?

¿Qué le pasó? Está...

- diferente.

- Estoy fea, ¿ya?

¿Le cayó mal algo? Eso de comer

ratas-- Uno es lo que come.

¡No! He sido así

desde que me acuerdo.

Yojamás la había visto así.

Sólo pasa cuando se pone el sol.

""De noche de una manera

De día, de otra.

Ésa será la norma.

""Hasta encontrar el primer beso

de tu verdadero amor.

Entonces adoptarás,

del verdadero amor, la forma.

Qué hermoso.

No sabía que escribiera poesía.

¡Es un hechizo!

Cuando era niña,

una bruja me hechizó.

Todas las noches,

me convierto en esto.

¡En esta horrenda bestia!

Estaba en una torre, esperando a

que me rescatara mi verdadero amor.

Por eso debo casarme

con Lord Farquaad mañana...

de día, antes de que me vea...

así.

Bueno, cálmese. No es tan grave.

No es tan fea.

Bueno, no le voy a mentir,

sí es fea.

Pero sólo se pone así de noche.

Shrek siempre es feo.

Pero, Burro, yo soy una princesa...

¡y las princesas

no deben verse así!

¿Qué tal

si no se casa con Farquaad?

Tengo que casarme.

Sólo el beso de mi verdadero amor

romperá el hechizo.

Pero usted es una especie de ogra.

Y Shrek--

Bueno, tienen mucho en común.

¿Shrek?

Princesa, yo--

Antes que nada, ¿cómo le va? ¿Bien?

A mí también. Estoy bien.

Vi esta flory se la traje

porque es bonita y...

la verdad, no me gusta...

pero quizá a Ud. sí,

porque Ud. es bonita.

Pero Ud. me gusta

de todos modos, y--

Esto no va nada bien.

Bueno, allá vamos.

En serio. ¿Quién puede amar

a una bestia tan horrenda y fea?

Princesa y fealdad no vanjuntas.

Por eso no puedo estar con Shrek.

Solamente podré vivir

feliz para siempre...

hallando a mi verdadero amor.

¿No te das cuentas, Burro?

Así tiene que ser.

Tengo que romper el hechizo.

Al menos dígale a Shrek la verdad.

¡No! No le puedes decir.

Nadie se puede enterar.

¿De qué sirve saber hablar

si uno guarda secretos?

Prométeme que no se lo dirás.

Está bien, yo no se lo diré.

Pero usted, debería.

Antes de que esto acabe, voy a

necesitar terapia. Ya tengo un tic.

Le digo. No le digo.

Le digo. No le digo.

¡Le digo!

¡Shrek!

¿Shrek? Quiero decirte una--

¡Shrek!

- ¿Te sientes bien?

- Perfecto. Mejor que nunca.

Tengo que decirte algo.

No me tiene que decir nada.

Oí suficiente anoche.

- ¿Oíste lo que dije?

- Hasta la última palabra.

Pensé que ibas a entender.

Sí entiendo.

Como dijo, ¿quién puede querer

a una bestia fea, espantosa?

Pensé que no te iba a importar.

Pues sí importa.

Justo a tiempo.

Princesa, le traje una cosita.

¿Qué me perdí?

¿Quién dijo eso?

No fue un burro.

Princesa Fiona.

Como se lo prometí.

Ahora, démelo.

Muy bien, ogro.

El título de propiedad

de tu ciénaga, sin intrusos.

Tómaloyvete...

antes de que cambie de opinión.

Perdone, princesa, por asustarla,

pero usted me asustó a mí.

Jamás había visto

una belleza tan radiante.

Yo soy Lord Farquaad.

¿Lord Farquaad?

Ay, no, no.

Perdóneme a mí, milord,

estaba a la mitad de un pequeño...

adiós.

Qué linda. No desperdicie

sus buenos modales con un ogro.

No tiene sentimientos.

No, tiene razón.

No los tiene.

Princesa Fiona--

hermosa, bella, perfecta Fiona...

le pido que se case conmigo.

¿Quiere ser la novia perfecta

para el novio perfecto?

Lord Farquaad, acepto.

Nada me hará--

¡Excelente! Haré los planes.

¡Nos casamos mañana!

¡No!

Digo, ¿para qué esperar?

Casémonos hoy.

Antes del ocaso.

Ah, estamos ansiosos.

Pues, entre antes, mejor.

¡Hay tanto que hacer!

Está el banquete,

el pastel, la banda--

¡Capitán, reúna unos invitados!

Que os vaya bien, ogro.

¡Shrek, estás dejando

que se te vaya!

¿Y qué?

Hay algo acerca de ella que no

sabes. Estuvimos hablando anoche--

Sí, ya sé que hablaron anoche.

Son grandes amigos, ¿no?

Yya que lo son,

¿por qué no la sigues a su casa?

Pero quiero irme contigo.

¡Te dije que no te vas a ir

a casa conmigo!

¡Yo vivo solo! ¡Es mi ciénaga!

¡Ahí vivoyoy nadie más!

¿Entiendes? ¡Nadie!

¡Y menos burros parlanchines,

inútiles, patéticos y molestos!

Peroyo pensé--

Pues, ¿sabes qué?

¡Pensaste mal!

Shrek.

¿Burro?

¿Qué haces?

Tú mejor que nadie deberías saber

qué es. Es un muro.

Pues, sí.

Pero el muro debería rodear

mi ciénaga, no atravesarla.

Así es. ¿Ves? Rodea tu mitad.

Ésta es mi mitad.

Ah, tu mitad.

Rescatamos a la princesa entre los

dos, partimos la recompensa en dos.

Pásame esa roca,

la que parece tu cabeza.

- Vete de aquí.

- ¡No, tú vete de aquí!

- ¡Ésta es mi ciénaga!

- ¡Nuestra ciénaga!

- ¡Suelta!

- ¡Tú suelta!

- ¡Burro terco!

- ¡Ogro apestoso!

¡Perfecto!

¡Todavía no acabo contigo!

¡Yoya acabé contigo!

¡Tú sólo piensas en ""yo, yo, yo!

¿Sabes qué? ¡Ahora me toca a mí,

así que cállatey pon atención!

Tú eres malo conmigo, me insultas,

no aprecias nada de lo que hago.

¡O me tratas a patadas

o me echas a patadas!

Pues, si te traté tan mal,

¿por qué volviste?

¡Porque eso hacen los amigos!

¡Se perdonan!

Sí, tienes razón, Burro.

Te perdono...

¡por clavarme un cuchillo

en la espalda!

¡Tienes tantas capas, Cebollín,

que le temes a tus sentimientos!

¡Lárgate!

Me estás tratando como a Fiona.

Tú le gustabas. Quizá te amaba.

¿Amarme?

¡Dijo que era feo!

Una criatura espantosa.

¡Los oí hablando a los dos!

No estaba hablando de ti.

Estaba hablando de-- otra persona.

¿No estaba hablando de mí?

¿Entonces de quién estaba hablando?

Yo no te voy a decir nada.

No me quieres escuchar, ¿cierto?

- ¡Burro!

- ¡No!

Bueno, mira-- perdóname.

¿De acuerdo?

Perdóname.

Parece que sólo soy

un ogrote estúpidoy feo.

¿Me puedes perdonar?

Para eso son los amigos. ¿Cierto?

Cierto.

- ¿Amigos?

- Amigos.

Entonces...

¿qué dijo Fiona de mí?

¿Por qué me preguntas a mí?

Vey pregúntale a ella.

¡La boda!

¡No vamos a llegar a tiempo!

No temas. Querer es poder.

Yyo sé cómo vas a poder.

¡Burro!

Debe ser mi magnetismo animal.

- Ven acá, tú.

- No te pongas sentimental.

Súbetey...

sujétate bien. Todavía no instalo

cinturones de seguridad.

Gente de DuLoc...

SI LENCIO REVERENCIAL

estamos aquí reunidos...

el día de hoy

para presenciar la unión...

Disculpe.

¿Podemos pasar directo

a los ""¿Aceptas??

Continúe.

Vey diviértete. Si te necesitamos,

te llamo con un silbido.

¡Espera!

¿No quieres hacer esto bien?

¿De qué hablas?

El sacerdote va a decir una frase:

""Que hable ahora

o calle para siempre.

Y tú dices: ""¡Yo me opongo!

¡No tengo tiempo para eso!

Escúchame.

Tú amas a esa mujer, ¿no?

¿Quieres abrazarla?

¿Complacerla?

Entonces tienes que usar

unpoco de ternura

Las chicas son románticas.

¡Está bien!

¿Cuándo va a decir esa frase?

Veamos.

Y así,

por el poder que me otorga...

- ¿Cuándo?

- Vino todo el pueblo.

los declaro...

Están en el altar.

¡Caramba, ya lo dijo!

¡Ay, por el amor de Dios!

¡Yo me opongo!

¿Shrek?

Y ahora, ¿qué quiere?

Hola a todos.

¿Lo están pasado bien?

Me encanta DuLoc.

Muy limpio.

¿Qué haces aquí?

Ya bastante grosero es estarvivo

cuando nadie te quiere.

¡Pero venir sin invitación

a una boda!

Fiona, necesito hablar contigo.

¿Ahora quieres hablar?

Pues ya es demasiado tarde.

- ¡No puedes casarte con él!

- ¿Por qué no?

¡Él sólo se quiere casar contigo

para poder ser rey!

¡Qué ultraje!

No le hagas caso.

Él no es tu verdadero amor.

¿Qué sabes tú de eso?

Bueno, yo...

Ay, esto es maravilloso.

¡El ogro se ha enamorado

de la princesa! ¡Santo Dios!

RISA

¡Un ogroy una princesa!

Shrek, ¿es verdad?

¿Qué importa?

¡Es ridículo!

Mi amor, estamos a un beso

de nuestro ""felices para siempre.

¡Bésame!

""De noche, de una forma

De día, de otra.

Quería enseñarte antes.

¡Vaya!

Eso explica muchas cosas.

¡Qué asco!

¡Guardias! ¡Guardias!

¡Llévense eso de mi vista!

¡Ahora! ¡Llévenselos!

¡A los dos!

¡Todos estos ""hechizos

no cambian nada!

¡Este matrimonio es legal,

lo cual me hace rey! ¿Ves?

¡Suéltenme!

¡No se queden ahí parados!

¡Háganse a un lado! ¡Fiona!

¡Bestia insolente! ¡Vas a

arrepentirte de haberme conocido!

¡Voy a hacer que te descuarticen!

¡Vas a rogarme que te mate!

Y en cuanto a ti, esposa mía...

¡volverás a estar encerrada

por el resto de tus días!

¡Yo soy rey!

¡Tendré orden!

¡Tendré perfección! ¡Tendré--

¡Que nadie se mueva!

¡Tengo un dragón y lo puedo usar!

¡Soy un burro muy tenso!

Los matrimonios de gente famosa

nunca duran.

Continúa, Shrek.

¿Fiona?

Yo...

yo te amo.

¿De veras?

De veras, de veras.

Yo también te amo.

´Hasta encontrarelprimerbeso

de tu verdaderoamor,

Yadoptar, del verdaderoamor,

la forma, 

¿Fiona?

¿Te sientes bien?

Pues, sí.

Pero no entiendo.

Debería ser hermosa.

Eres hermosa.

Yo esperaba

que esto tuviera un final feliz.

¡Dios nos bendiga a todos

y cada uno de nosotros!

¡Canten, todos!

Y VIVIERON FEOS PARA SI EMPRE

¡Qué divertido!

No puedo respirar,

No puedo respirar!.

THE END
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
