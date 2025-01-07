import { Calendar, momentLocalizer } from 'react-big-calendar'

import moment from 'moment'
const CalendarPage = () => {
  const localizer = momentLocalizer(moment)
  const list = [
    {
      title: 'All Day Event very long title',
      allDay: true,
      start: new Date(2022, 3, 0),
      end: new Date(2022, 3, 1),
    },
    {
      title: 'Long Event',
      start: new Date(2022, 3, 7),
      end: new Date(2022, 3, 10),
    },
    {
      title: 'DTS STARTS',
      start: new Date(2022, 2, 13, 0, 0, 0),
      end: new Date(2022, 2, 20, 0, 0, 0),
    },
    {
      title: 'DTS ENDS',
      start: new Date(2022, 10, 6, 0, 0, 0),
      end: new Date(2022, 10, 13, 0, 0, 0),
    },
    {
      title: 'Some Event',
      start: new Date(2022, 3, 9, 0, 0, 0),
      end: new Date(2022, 3, 9, 0, 0, 0),
    },
    {
      title: 'Conference',
      start: new Date(2022, 3, 11),
      end: new Date(2022, 3, 13),
      desc: 'Big conference for important people',
    },
    {
      title: 'Meeting',
      start: new Date(2022, 3, 12, 10, 30, 0, 0),
      end: new Date(2022, 3, 12, 12, 30, 0, 0),
      desc: 'Pre-meeting meeting, to prepare for the meeting',
    },
    {
      title: 'Lunch',
      start: new Date(2022, 3, 12, 12, 0, 0, 0),
      end: new Date(2022, 3, 12, 13, 0, 0, 0),
      desc: 'Power lunch',
    },
   
  ]
  return (
    <div className='w-full h-full bg-slate-600'>
      <Calendar
      localizer={localizer}
      events={list}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />

    </div>
  )
}

export default CalendarPage