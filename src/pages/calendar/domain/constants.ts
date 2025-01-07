export const cultures = ["EN", "ES"]
export const lang = {
  es: {
    week: "Semana",
    work_week: "Semana de trabajo",
    day: "Día",
    month: "Mes",
    previous: "Anterior",
    next: "Próximo",
    today: "Hoy",
    agenda: "Agenda",
    noEventsInRange: "No hay eventos en este rango.",
    showMore: (total:number) => `+${total} más`
  },
  en: {
    week: "Week",
    work_week: "Work week",
    day: "Day",
    month: "Month",
    previous: "Back",
    next: "Next",
    today: `Today`,
    agenda: "Agenda",
    noEventsInRange: "There are no events in this range.",
    showMore: (total:number) => `+${total} more`
  }
}
