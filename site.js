// ---- Set these. Leave empty until you have them. ----
const CONTACT = { email: "", phone: "" };
const SOCIAL = { linkedin: "", facebook: "", instagram: "" };

const ES = {
  nav0: "Inicio", nav1: "Qué hacemos", nav2: "Cómo funciona", nav3: "Principios", nav4: "Quiénes somos", nav5: "Precios", navcta: "Agendar llamada",
  eyebrow: "Marketing para los oficios", foot: "Marketing para los oficios",
  h1: "Llamadas con las que <em>puede contar</em>, cada semana.",
  lede: "Manejamos su perfil de Google, sus reseñas, el seguimiento a sus clientes y sus anuncios. Usted aprueba lo que sale. Su teléfono suena.",
  cta1: "Agendar una llamada de 20 minutos", cta2: "Ver qué hacemos",
  s1h: "Perfil de Google", s1p: "Una publicación nueva y fotos reales de trabajos cada semana, para que aparezca cuando la gente busca reparación de aire acondicionado cerca.",
  s2h: "Reseñas", s2p: "A cada cliente se le pide una reseña después del trabajo. Cada reseña recibe respuesta, y las malas las ve usted primero.",
  s3h: "Campañas de mantenimiento", s3p: "Sus clientes anteriores reciben noticias suyas antes de la temporada de aire y antes de la de calefacción.",
  h_h: "Cómo funciona",
  n1: "Paso 1", n2: "Paso 2", n3: "Paso 3", n4: "Paso 4",
  h1h: "Una llamada de 45 minutos", h1p: "Conocemos sus servicios, precios y zona de servicio. Solo se hace una vez.",
  h2h: "Nos agrega como administradores", h2p: "En su perfil de Google y sus cuentas de anuncios, sin darnos su contraseña. Las cuentas siguen a su nombre.",
  h3h: "Hacemos el trabajo semanal", h3p: "Publicaciones, fotos, respuestas a reseñas, mensajes. Los precios y las quejas esperan su aprobación.",
  h4h: "Una página al mes", h4p: "Llamadas desde Google, reseñas nuevas, mantenimientos agendados. Luego una llamada de 15 minutos.",
  more_how: "Ver una semana típica", more_pr: "Leer nuestros principios",
  cta_h: "Díganos qué es lo que más quiere arreglar",
  cta_p: "Veinte minutos por teléfono. Primero revisamos su perfil de Google y le decimos qué cambiaríamos, nos contrate o no.",
  c_es: "We speak English too.",
  l1: "Su nombre", l2: "Nombre del negocio", l3: "Ciudad", l4: "Teléfono",
  l5: "¿Qué quiere arreglar en los próximos 60 días?",
  send: "Enviarnos esto por correo", copy: "Copiar mensaje",

  w_h: "Qué hacemos",
  w_p: "Tres tareas hechas cada semana, más anuncios pagados en Google y Facebook cuando usted esté listo. Todo corre en cuentas a su nombre.",
  w1h: "Perfil de Negocio en Google",
  w1p: "Es lo que la gente ve cuando busca una reparación cerca. La mayoría de los negocios lo configura una vez y no lo vuelve a tocar.",
  w1a: "Una publicación nueva cada semana sobre un trabajo real, un recordatorio de temporada o una promoción vigente",
  w1b: "Fotos reales de trabajos, conforme sus técnicos las mandan",
  w1c: "Horarios, servicios y zona de servicio siempre correctos",
  w1d: "Su número de licencia en todo lo que promueva un servicio",
  w2h: "Reseñas",
  w2p: "Las reseñas deciden a quién llaman. Hacemos que pedirlas sea automático y que ninguna quede sin respuesta.",
  w2a: "Un mensaje corto a cada cliente después del trabajo, pidiéndole una reseña en Google",
  w2b: "Un recordatorio unos días después, y ahí paramos",
  w2c: "Respuesta a cada reseña en un máximo de dos días hábiles",
  w2d: "Usted ve cualquier reseña de tres estrellas o menos antes de que la contestemos",
  w2e: "En Yelp completamos su página y respondemos reseñas. Nunca pedimos reseñas en Yelp, porque Yelp lo prohíbe",
  w3h: "Campañas de mantenimiento",
  w3p: "Sus clientes anteriores ya confían en usted. Dos veces al año les recordamos que ahí está.",
  w3a: "Un correo y un mensaje antes de la temporada de aire y otra vez antes de la de calefacción",
  w3b: "Enviados desde su propio número y sistema, para que las respuestas le lleguen a usted",
  w3c: "Solo a clientes que aceptaron recibirlos, con una forma fácil de darse de baja",
  w3d: "Contamos cuántos mantenimientos se agendan y se lo reportamos",
  w4h: "También disponible",
  w4a: "Arreglar o rehacer su sitio web, con botón para llamar y una página por cada ciudad que atiende",

  hw_p: "Empezar toma una llamada. Después, el trabajo corre con el mismo horario cada semana, y solo lo buscamos cuando algo necesita su aprobación.",
  hw_s: "Para empezar",
  hw1: "Conocemos sus servicios, precios, zona de servicio y cómo les habla a sus clientes. Solo se hace una vez.",
  hw2: "En su perfil de Google y sus cuentas de anuncios, sin darnos su contraseña. Las cuentas siguen a su nombre y puede quitarnos cuando quiera.",
  hw3: "Publicaciones, fotos, respuestas a reseñas y mensajes. Todo lo que toque precios, financiamiento o una queja espera su aprobación.",
  hw4: "Llamadas desde Google, reseñas nuevas, mantenimientos agendados. Luego una llamada de 15 minutos para planear el mes siguiente.",
  wk_h: "Una semana típica",
  wk1d: "Lunes", wk1: "Juntamos reseñas nuevas, fotos de trabajos y lo que usted nos avise; luego escribimos la publicación de la semana y las respuestas a reseñas.",
  wk2d: "Martes", wk2: "Usted aprueba por mensaje lo delicado. Nosotros publicamos.",
  wk3d: "Jueves", wk3: "Segunda revisión de reseñas nuevas, para que ninguna quede sin respuesta.",
  wk4d: "Viernes", wk4: "Le pedimos fotos de los trabajos de la semana.",
  wk5d: "Día 1 del mes", wk5: "Reporte de una página y una llamada de 15 minutos.",
  nd_h: "Qué necesitamos de usted",
  nd1: "La llamada de 45 minutos al principio",
  nd2: "Acceso de administrador a su perfil de Google",
  nd3: "Unas cuantas fotos de trabajos cada semana, por mensaje",
  nd4: "Un sí o un no rápido cuando le mandemos algo para aprobar",

  p_h: "Nuestros principios",
  p_p: "Seis compromisos que nos exigimos. Si una compañía de marketing ya lo dejó mal antes, probablemente rompió alguno.",
  r1h: "Sus cuentas siguen siendo suyas", p1: "Trabajamos como administradores en su perfil de Google y sus cuentas de anuncios, y nunca tenemos su contraseña. Lo que gasta en anuncios va con su tarjeta, directo a Google y Meta. Si se va, se queda con el perfil, las reseñas, las cuentas de anuncios y todo lo que construimos.",
  r2h: "Reportamos trabajos agendados", p2: "Los clics y las impresiones no pagan a sus técnicos. Cada reporte empieza con cuántos trabajos se agendaron por nuestro trabajo, aunque el mes haya sido malo.",
  r3h: "Una persona lee todo", p3: "Usamos inteligencia artificial para los primeros borradores. Nada se publica ni se envía hasta que uno de nosotros lo revisa contra sus precios, servicios y zona de servicio.",
  r4h: "Nada de reseñas falsas ni pagadas", p4: "Le pedimos reseña a cada cliente real, no solo a los contentos, y nunca ofrecemos nada a cambio. Solo pedimos en Google.",
  r5h: "Nada de mensajes sin permiso", p5: "Los mensajes van solo a clientes que aceptaron recibirlos. Cada uno dice de parte de quién viene y cómo darse de baja.",
  r6h: "Nada de promesas que usted no hizo", p6: "Precios, financiamiento, reembolsos y garantías aparecen solo como usted nos los dio. Si no estamos seguros, preguntamos antes de que salga.",

  a_h: "Quiénes somos",
  a_p: "Steady Leads somos dos personas en el sur de California. Empezamos porque dueños de negocios que conocemos nos pedían ayuda con su marketing.",
  a1h: "Encargado de clientes", a1p: "Su contacto principal. Conoce su negocio, consigue su aprobación en lo delicado y le explica el reporte cada mes.",
  a2h: "Encargado de operaciones", a2p: "Lleva el trabajo semanal: las publicaciones, las respuestas a reseñas, las campañas y el reporte mensual. Escribe en inglés y en español.",
  a3h: "Pequeños a propósito", a3p: "Aceptamos un número limitado de negocios para que cada uno reciba atención de verdad cada semana. Usted habla con quienes hacen el trabajo.",
  a4h: "Nuevos, y lo decimos", a4p: "Somos una agencia nueva. Nuestros primeros negocios pagan una tarifa reducida durante los primeros 90 días mientras ganamos resultados que mostrarle al siguiente.",
  see_pr: "Ver precios",
  w5h: "Anuncios de Servicios Locales de Google",
  w5p: "Los anuncios con \"Garantía de Google\" hasta arriba en la búsqueda. Paga por cliente potencial, no por clic, y normalmente es el cliente pagado más barato que consigue un negocio de aire acondicionado.",
  w5a: "Hacemos la configuración y el papeleo de verificación de antecedentes con usted",
  w5b: "Tipos de servicio y zonas ajustados a los trabajos que de verdad quiere",
  w5c: "Disputamos cada semana los clientes que no sirven, para que Google le regrese el crédito",
  w5d: "Un guion corto para el teléfono, para que más llamadas se vuelvan trabajos agendados",
  w6h: "Anuncios de Búsqueda de Google",
  w6p: "Para quien busca \"reparación de aire cerca de mí\" en este momento. Cada servicio tiene su propia campaña y su propia página, para que el clic llegue a donde debe.",
  w6a: "Una campaña por servicio: reparación, instalación, calefacción, mantenimiento",
  w6b: "Una lista de palabras bloqueadas desde el primer día, para no pagar por gente que busca hacerlo solo o busca trabajo",
  w6c: "Una página para cada servicio con su número hasta arriba",
  w7h: "Anuncios en Facebook e Instagram",
  w7p: "Lo mejor para trabajos que pueden esperar una semana: mantenimientos, reemplazos y ofertas de temporada, para dueños de casa en su zona y personas parecidas a sus clientes.",
  w7a: "Ofertas y videos cortos que sus técnicos pueden grabar con el teléfono",
  w7b: "Cada cliente nuevo recibe un mensaje suyo en menos de un minuto",
  w7c: "Medido por trabajos agendados, no por qué tan baratos se ven los clientes",

  pr_h: "Precios",
  pr_p: "Tres paquetes, mes a mes. Nuestros primeros negocios pagan la mitad los primeros 90 días. Lo que gasta en anuncios nunca es parte de nuestra tarifa: usted le paga directo a Google y Meta, con su propia tarjeta.",
  permo: "/mes",
  pk1h: "Base", pk1m: "$600", pk1f: "$300/mes los primeros 90 días · sin costo de inicio",
  pk1a: "Perfil de Google: publicaciones semanales, fotos, preguntas y respuestas",
  pk1b: "Solicitud de reseña después de cada trabajo, y respuesta a cada reseña",
  pk1c: "Mensajes y correos de mantenimiento a clientes anteriores cada temporada",
  pk1d: "Reporte de una página cada mes",
  pk2t: "Aquí empiezan la mayoría", pk2h: "Crecimiento", pk2m: "$1,200", pk2f: "$600/mes los primeros 90 días · $500 de inicio",
  pk2a: "Todo lo de Base",
  pk2b: "Anuncios de Servicios Locales de Google, configurados y manejados por nosotros",
  pk2c: "Disputamos cada semana los clientes que no sirven, para que le regresen crédito",
  pk2d: "Seguimiento de llamadas y un mensaje instantáneo a cada cliente nuevo",
  pk2e: "Costo por trabajo agendado en cada reporte",
  pk3h: "Motor Completo", pk3m: "$2,000", pk3f: "$1,000/mes los primeros 90 días · $1,000 de inicio",
  pk3a: "Todo lo de Crecimiento",
  pk3b: "Anuncios de Búsqueda de Google, una campaña por servicio",
  pk3c: "Una página para cada servicio que vende",
  pk3d: "Anuncios en Facebook e Instagram para mantenimientos y reemplazos",
  sp_h: "¿Y lo que se gasta en anuncios?",
  sp_p: "Los anuncios los paga usted, directo a Google y Meta, desde cuentas a su nombre. Nunca les ponemos sobreprecio ni manejamos su dinero. La mayoría de los negocios gasta de $1,000 a $4,000 al mes según su tamaño y la temporada. En la primera llamada le recomendamos un presupuesto inicial, tomamos los primeros 60 días como prueba y luego le mostramos cuánto costó de verdad cada trabajo agendado.",
  g_h: "Lo que prometemos",
  g1: "Una publicación nueva cada semana y respuesta a cada reseña en un máximo de dos días hábiles",
  g2: "Su reporte antes del día 5 de cada mes",
  g3: "Mes a mes después de los primeros 90 días. Cancele cuando quiera",
  g4: "Todo es suyo: su perfil, sus cuentas de anuncios, su lista de clientes",
  g5: "Reseñas: si manda nuestra solicitud después de cada trabajo, recibe en 90 días el número de reseñas nuevas en Google que acordemos, o seguimos trabajando gratis hasta lograrlo",
  g_no: "Lo que no prometemos: un número de clientes, el primer lugar en Google o una cifra de ventas. Nadie honesto puede, porque dependen de cosas como quién contesta su teléfono y qué tan caliente viene el verano.",
  fq_h: "Preguntas comunes",
  fq1q: "Ya tengo Google Ads", fq1a: "Qué bien. Usamos su cuenta y su historial en lugar de empezar de cero, y primero la revisamos para encontrar gasto desperdiciado y seguimiento roto.",
  fq2q: "¿De quién son las cuentas?", fq2a: "Suyas. Nos agrega como administradores o socios, y puede quitarnos cuando quiera.",
  fq3q: "¿Hay contrato?", fq3a: "Un inicio de 90 días con la tarifa de fundador, luego mes a mes.",
  fq4q: "¿Trabajan en español?", fq4a: "Sí. Las publicaciones, mensajes y anuncios pueden salir en inglés, en español o en los dos."
};
const UI = {
  en: { need: "Add your name, shop name and phone first.", copied: "Message copied. Paste it into an email or text to us.", nocopy: "Could not copy. Select this text and copy it:", opening: "Opening your email app. If nothing opens, use Copy message.", noemail: "Our email is not set up on this page yet. Use Copy message.", subject: "Call request from " },
  es: { need: "Primero ponga su nombre, el nombre del negocio y su teléfono.", copied: "Mensaje copiado. Péguelo en un correo o mensaje para nosotros.", nocopy: "No se pudo copiar. Seleccione este texto y cópielo:", opening: "Abriendo su aplicación de correo. Si no abre, use Copiar mensaje.", noemail: "Nuestro correo todavía no está configurado en esta página. Use Copiar mensaje.", subject: "Solicitud de llamada de " }
};

const nodes = Array.from(document.querySelectorAll("[data-i18n]"));
const EN = {};
nodes.forEach(n => { if (!(n.dataset.i18n in EN)) EN[n.dataset.i18n] = n.innerHTML; });
let lang = "en";
const statusEl = document.getElementById("status");

function setLang(next) {
  lang = next === "es" ? "es" : "en";
  const dict = lang === "es" ? ES : EN;
  nodes.forEach(n => { const v = dict[n.dataset.i18n]; if (v) n.innerHTML = v; });
  document.documentElement.lang = lang;
  document.getElementById("lang-en").setAttribute("aria-pressed", String(lang === "en"));
  document.getElementById("lang-es").setAttribute("aria-pressed", String(lang === "es"));
  if (statusEl) statusEl.textContent = "";
  try { localStorage.setItem("sl-lang", lang); } catch (e) {}
}
document.getElementById("lang-en").addEventListener("click", () => setLang("en"));
document.getElementById("lang-es").addEventListener("click", () => setLang("es"));

// Social links: filled from SOCIAL above; empty ones stay in place and go nowhere.
document.querySelectorAll("[data-social]").forEach(a => {
  const url = SOCIAL[a.dataset.social];
  if (url) { a.href = url; a.rel = "noopener"; }
  else a.addEventListener("click", e => e.preventDefault());
});

// Contact block and form exist on the home page only.
const reach = document.getElementById("reach");
if (reach) {
  const rows = [];
  if (CONTACT.phone) rows.push([CONTACT.phone, "tel:" + CONTACT.phone.replace(/[^+\d]/g, "")]);
  if (CONTACT.email) rows.push([CONTACT.email, "mailto:" + CONTACT.email]);
  rows.forEach(r => {
    const li = document.createElement("li");
    const a = document.createElement("a"); a.href = r[1]; a.textContent = r[0];
    li.append(a); reach.append(li);
  });
  document.getElementById("setup").hidden = Boolean(CONTACT.email && CONTACT.phone);
}

const form = document.getElementById("lead");
if (form) {
  const val = id => document.getElementById(id).value.trim();
  const buildMessage = () => {
    if (!val("f-name") || !val("f-shop") || !val("f-phone")) return null;
    return [
      "Name: " + val("f-name"),
      "Shop: " + val("f-shop"),
      "City: " + (val("f-city") || "-"),
      "Phone: " + val("f-phone"),
      "Wants fixed in 60 days: " + (val("f-fix") || "-")
    ].join("\n");
  };
  form.addEventListener("submit", e => {
    e.preventDefault();
    const msg = buildMessage();
    if (!msg) { statusEl.textContent = UI[lang].need; return; }
    if (!CONTACT.email) { statusEl.textContent = UI[lang].noemail; return; }
    statusEl.textContent = UI[lang].opening;
    window.location.href = "mailto:" + CONTACT.email + "?subject=" + encodeURIComponent(UI[lang].subject + val("f-shop")) + "&body=" + encodeURIComponent(msg);
  });
  document.getElementById("copy").addEventListener("click", async () => {
    const msg = buildMessage();
    if (!msg) { statusEl.textContent = UI[lang].need; return; }
    try {
      await navigator.clipboard.writeText(msg);
      statusEl.textContent = UI[lang].copied;
    } catch (e) {
      statusEl.textContent = UI[lang].nocopy + " " + msg.replace(/\n/g, " | ");
    }
  });
}

let saved = null;
try { saved = localStorage.getItem("sl-lang"); } catch (e) {}
if (saved === "es") setLang("es");
