import { useState } from 'react'
import { icons } from '~/assets'
import { booking_schedules } from '~/data'

const { ArrowRightLineIcon } = icons
const BookingStep = ({ onSubmit }: { onSubmit: () => void }) => {
  const [selectedDay, setSelectedDay] = useState(booking_schedules[0])
  const [selectedTime, setSelectedTime] = useState<number | null>(null)
  return (
    <>
      <div className='cart__header'>
        <h2>Xác nhận đặt lịch</h2>
      </div>
      <div className='cart__list booking'>
        <div className='booking__customer'>
          <div className='booking__field'>
            <span className='booking__label'>Tên khách hàng</span>
            <span className='booking__value'>Thuỳ Đỗ</span>
          </div>
          <div className='booking__field'>
            <span className='booking__label'>Số điện thoại</span>
            <span className='booking__value'>0969-886-969</span>
          </div>
        </div>

        <div className='booking__date'>
          <span className='booking__label'>Chọn ngày</span>

          <div className='booking__date-list'>
            {booking_schedules.map((day) => {
              const isDisabled = day.disabled
              return (
                <div
                  key={day.id}
                  onClick={() => {
                    !isDisabled && setSelectedDay(day)
                    setSelectedTime(null)
                  }}
                  className={`booking__date-item ${isDisabled ? 'disabled' : ''} ${selectedDay.id == day.id ? 'active' : ''}`}
                >
                  <span className='booking__date-day'>{day.label}</span>
                  <span className='booking__date-value'>{day.date}</span>
                </div>
              )
            })}
          </div>
        </div>

        <div className='booking__time'>
          <span className='booking__label'>Chọn khung giờ</span>

          <div className='booking__time-grid'>
            {selectedDay.times.map((time) => {
              const isDisabled = time.disabled
              return (
                <div
                  key={time.id}
                  onClick={() => !isDisabled && setSelectedTime(time.id)}
                  className={`booking__time-item ${isDisabled ? 'disabled' : ''} ${selectedTime == time.id ? 'active' : ''}`}
                >
                  <span className='booking__time-hour'>{time.time}</span>
                  <span className='booking__time-period'>{time.period}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className='cart__footer'>
        <button className='cart__button button button--primary' disabled={!selectedTime} onClick={onSubmit}>
          Đặt Lịch
          <span className='cart__button-icon svg-wrapper'>
            <ArrowRightLineIcon />
          </span>
        </button>
      </div>
    </>
  )
}

export default BookingStep
