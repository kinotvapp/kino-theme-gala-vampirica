// A theme's presentation, drawn with the screen kit in whichever theme is active.
const THEME = {"es": "Gala Vampírica", "en": "Vampire Gala", "hook": "Pasa, la noche es joven desde hace siglos.", "hookEn": "Come in, the night has been young for centuries.", "desc": "Burdeos de terciopelo y rosa sangre para noches eternas en el castillo."};
const t = (es, en) => ({ text: es, textEn: en });

export async function screen({ state }) {
  return {
    type: "Column", padding: { compact: 16, expanded: 32 }, gap: 16,
    children: [
      { type: "Text", ...t(THEME.es, THEME.en), style: "h1" },
      { type: "Text", ...t(THEME.hook, THEME.hookEn), style: "h3", color: "primary" },
      { type: "Text", text: THEME.desc },
      { type: "Card", children: [{ type: "Column", gap: 12, children: [
        { type: "Text", ...t("Qué cambia", "What changes"), style: "h3" },
        { type: "Text", ...t("Al activarlo, tarjetas, botones y barras toman su color y sus formas.", "Once it is on, cards, buttons and bars take its colour and shapes."), color: "muted" },
        { type: "LinearProgressIndicator", value: state.pressed ? 1 : 0.4 },
        { type: "ElevatedButton", labelText: "Probar", labelTextEn: "Try it", onPressed: "try" },
      ] }] },
      { type: "Card", variant: "outlined", children: [{ type: "Column", gap: 8, children: [
        { type: "Text", ...t("Cómo activarlo", "How to turn it on"), style: "h3" },
        { type: "Text", ...t("Ve a Ajustes ▸ App ▸ Apariencia, elige este tema y pulsa Usar este tema.", "Go to Settings ▸ App ▸ Appearance, pick this theme and press Use this theme.") },
      ] }] },
    ],
  };
}

export async function screenEvent({ name, lang }) {
  if (name !== "try") return null;
  return { state: { pressed: true }, toast: lang === "es" ? THEME.hook : THEME.hookEn };
}
