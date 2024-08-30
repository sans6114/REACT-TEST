import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle = 'no hay subtitulo', name = 'santiago' }) => {

  // console.log(props);
  
  return (
    <>
      <h1 className='text-4xl' data-testid="test-title">{ title }</h1>
      {/* <code>{ JSON.stringify( newMessage ) }</code> */}
      <p>{ subTitle }</p>
      <p>{ subTitle }</p>
      <p>{ name }</p>
    </>
  )
}


FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
}
