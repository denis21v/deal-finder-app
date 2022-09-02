import { BsEmojiNeutral } from 'react-icons/bs'

function NotFound({ secondMessage }) {
  return (
    <div className='container alignCenter'>
      <p className={'notFoundFirstMessage'}>ERROR</p>

      <BsEmojiNeutral size={250} color='#e0e0e2' className={'iconScaling'} />

      <p className={'notFoundSecondMessage'}>{secondMessage}</p>
    </div>
  )
}

NotFound.defaultProps = {
  secondMessage: 'PAGE NOT FOUND',
}

export default NotFound
