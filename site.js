// ---- Set these. Leave empty until you have them. ----
const CONTACT = { email: "", phone: "" };
const SOCIAL = { linkedin: "", facebook: "", instagram: "" };

const ES = {
  nav1: "Qué hacemos", nav2: "Cómo funciona", nav3: "Nuestros principios", nav4: "Quiénes somos", navcta: "Agendar llamada",
  eyebrow: "Marketing para los oficios", foot: "Marketing para los oficios",
  h1: "Llamadas con las que <em>puede contar</em>, cada semana.",
  lede: "Cada semana manejamos su perfil de Google, sus reseñas y el seguimiento a sus clientes. Usted aprueba lo que sale. Su teléfono suena.",
  cta1: "Agendar una llamada de 20 minutos", cta2: "Ver qué hacemos",
  s1h: "Perfil de Google", s1p: "Una publicación nueva y fotos reales de trabajos cada semana, para que aparezca cuando la gente busca reparación de aire acondicionado cerca.",
  s2h: "Reseñas", s2p: "A cada cliente se le pide una reseña después del trabajo. Cada reseña recibe respuesta, y las malas las ve usted primero.",
  s3h: "Campañas de mantenimiento", s3p: "Sus clientes anteriores reciben noticias suyas antes de la temporada de aire y antes de la de calefacción.",
  h_h: "Cómo funciona",
  n1: "Paso 1", n2: "Paso 2", n3: "Paso 3", n4: "Paso 4",
  h1h: "Una llamada de 45 minutos", h1p: "Conocemos sus servicios, precios y zona de servicio. Solo se hace una vez.",
  h2h: "Nos agrega como administradores", h2p: "En su perfil de Google, sin darnos su contraseña. Las cuentas siguen a su nombre.",
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
  w_p: "Tres tareas, hechas cada semana. Cada una trabaja lo que usted ya tiene: su perfil de Google, sus clientes contentos y su lista de clientes anteriores.",
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
  w4b: "Anuncios pagados, cuando sus reseñas y su sitio estén listos para convertir clics en llamadas",

  hw_p: "Empezar toma una llamada. Después, el trabajo corre con el mismo horario cada semana, y solo lo buscamos cuando algo necesita su aprobación.",
  hw_s: "Para empezar",
  hw1: "Conocemos sus servicios, precios, zona de servicio y cómo les habla a sus clientes. Solo se hace una vez.",
  hw2: "En su perfil de Google, sin darnos su contraseña. Las cuentas siguen a su nombre y puede quitarnos cuando quiera.",
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
  r1h: "Sus cuentas siguen siendo suyas", p1: "Trabajamos como administradores en su perfil de Google y nunca tenemos su contraseña. Si se va, se queda con el perfil, las reseñas y todo lo que construimos.",
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
  a4h: "Nuevos, y lo decimos", a4p: "Somos una agencia nueva. Nuestros primeros negocios pagan una tarifa reducida durante los primeros 90 días mientras ganamos resultados que mostrarle al siguiente."
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
