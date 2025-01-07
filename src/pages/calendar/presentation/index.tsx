import { Calendar, momentLocalizer } from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css"
import './styles.css'
import moment from 'moment'
import { lang } from '../domain/constants'
const CalendarPage = () => {
  const localizer = momentLocalizer(moment)
  const appoinments = [
    {
      title: 'All Day Event very long title',
      allDay: true,
      start: new Date(1736050000000),
      end: new Date(1736060000000),
    },    
   
  ]
  return (
    <div className='w-full h-full bg-slate-600'>
      <Calendar
      localizer={localizer}
      culture='es'
      messages={lang['es']}
      events={appoinments}
      startAccessor="start"
      endAccessor="end"
      style={{ height: `${window.innerHeight - 115}px`, width: "100%" }}
    />

    </div>
  )
}

export default CalendarPage