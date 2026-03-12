import { icons } from '~/assets'

const { CloseIcon, SuccessIcon } = icons

const SuccessModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className='success-modal'>
      <div className='success-modal__overlay' onClick={onClose}></div>

      <div className='success-modal__content'>
        <button className='success-modal__close svg-wrapper' onClick={onClose}>
          <CloseIcon />
        </button>

        <span className='success-modal__icon svg-wrapper'>
          <SuccessIcon />
        </span>

        <h3 className='success-modal__title'>Gửi Yêu Cầu Thành Công!</h3>

        <p className='success-modal__description'>
          Cảm ơn bạn đã đặt dịch vụ tại The OM Lounge. Chúng tôi đã nhận được thông tin đặt lịch từ bạn và sẽ liên hệ
          lại trong thời gian sớm nhất.
        </p>
      </div>
    </div>
  )
}

export default SuccessModal
